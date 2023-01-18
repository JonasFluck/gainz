/**
 * ProductController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

    'new': function (req, res) {
        res.view();
    },

    create: async function (req, res) {
        sails.log.debug("Create product")
        let params = req.allParams();
        await Product.create(req.allParams()).then(()=>{
            res.redirect('/product/product');
        }).catch(
            (err) => {
                sails.log.debug("Error" + err.message)
                res.view('/product/product',{"message": err.message,"name":
            req.body.name,"Name": req.body.name})
            }
        );
    },

    find: async function (req, res) {
        sails.log.debug("List all products")
        let products = await Product.find()
        let categories = await Category.find();
        res.view('pages/product/product', { products: products,categories: categories, layout: 'admin-layout' }); 
    },

    findTop: async function (req, res){
        sails.log.debug("List top 4 products")
        let products = await Product.find({limit: 4} );
        res.view('/', {products: products});
    },

    destroy: async function (req, res) {
        sails.log.debug("Destroy single product....")
        await Product.destroyOne({ id: req.params.id });
        res.redirect('/product/product');
    },

    edit: async function (req, res) {
        sails.log.debug("Edit single product....")
        let product = await Product.findOne({id: req.params.id });
        let categories = await Category.find();
        res.view('pages/product/productUpdate', {product:product,categories: categories});
    },
        
    showInfo: async function (req, res) {
        sails.log.debug("Show single product....")
        let product = await Product.findOne({id: req.params.id });
        res.view('pages/product/productInfo', {product:product});
    },

    update: async function (req, res) {
        sails.log.debug("Update single product....")
        await Product.updateOne({ id: req.params.id }).set(req.body);
        res.redirect('/product/product');
    },
        
    search: async function (req, res) {
        sails.log.debug(`Suche nach ${req.query.search}`);
        let categories = await Category.find();
        let searchedProducts = await Product.find({
          
            or: [
                { name: { contains: req.query.search } },
            ]
        });
        if (searchedProducts.length === 0) { searchedProducts = await Product.find(); }

        return res.view('pages/product/product', { products: searchedProducts,categories: categories, layout:'admin-layout' });

    },

    createWithImageStep0: async function (req,res) {
   
         res.view('pages/product/product');
       },
     
       /**
        * Store values of form in the session
        */
       createWithImageStep1: async function (req, res) {
         sails.log.debug("Create Product....")
         req.session.name = req.body.name;
         req.session.price = req.body.price;
         req.session.description = req.body.description;
         req.session.descriptionLong = req.body.descriptionLong;
         req.session.category = req.body.category;
         res.view('pages/product/newImage', { productname: req.param("name") })
       },
     
       /**
        * Uploads an image for a meal.
        * The image is stored in the /assets/images/meals directory and the path to the image 
        * in the database table of meals. 
        */
       createWithImageStep2: async function (req, res) {
         sails.log("Upload image for product...")
         // Define the parameters of the upload as an object
         // In this example only the path, wehre to upload the image, is set
         let params = {
           dirname: require('path').resolve(sails.config.appPath, 'assets/images/products/')
         };
     
         let callback = async function (err, uploadedFiles) {
           if (err) {
             return res.serverError(err);
           } else {
             sails.log("Uploaded!")
           }
           let fname = require('path').basename(uploadedFiles[0].fd);
           sails.log.debug(fname);
           await Product.create({
             "image": fname,
             "name": req.session.name,
             "category": req.session.category,
             "description": req.session.description,
             "price": req.session.price
           })
         };
     
           // This funvtion is called, once all files are uploaded
           // err indicates if the upload process triggered an error and has been aborted 
           // uploaded files contains an array of the files which have been uploaded, in our case only one.
           await req.file('image').upload(params, callback);
           return res.redirect('/product/product');
         },
     
};

