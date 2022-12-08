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
        await Product.create(params);
        res.redirect('/product/product');
    },

    find: async function (req, res) {
        sails.log.debug("List all products")
        let products = await Product.find()
        res.view('pages/product/product', { products: products, layout: 'admin-layout' });
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
        res.view('pages/product/productUpdate', {product:product});
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
        let searchedProducts = await Product.find({
            or: [
                { name: { contains: req.query.search } },
            ]
        });
        if (searchedProducts.length === 0) { searchedProducts = await Product.find(); }

        return res.view('pages/product/product', { products: searchedProducts });

    }
};

