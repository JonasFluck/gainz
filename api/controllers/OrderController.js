/**
 * OrderControllerController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */


module.exports = {
    showFirstPage: function (req, res) {
        sails.log.debug(`Starting order process`)
        let basket = req.session.basket 
        let priceSum = 0;
       for(var i=0, size = basket.length; i<size; i++){
        let item = basket[i];
        priceSum += item.price;
       }
        res.view('pages/order/step1',{priceSum:priceSum});
    },
    order: async function (req, res) {

        let basket = req.session.basket 
        let priceSum = 0;
       for(var i=0, size = basket.length; i<size; i++){
        let item = basket[i];
        priceSum += item.price;
       }

        sails.log.debug(priceSum);

        sails.log.debug(req.allParams());
        let param = {
            vorname:req.param('vorname'),
            name:req.param('vorname'), 
            strasse:req.param('strasse'), 
            stadt:req.param('stadt'),
            plz:req.param('plz'),
            product:req.session.basket,
            price: priceSum
        };

        sails.log.debug(param);

        await Order.create(param).then(()=>{
            res.redirect('/order/step2');
        }).catch(
            (err) => {
                sails.log.debug("Error" + err.message)
                res.view('/order/basket',{"message": err.message,"name":
            req.body.name,"Name": req.body.name})
            }
        );

    },
    showSecondPage: function (req, res) {
        sails.log.debug(`Last step of order process`)
        res.view('pages/order/step2');
    },

};

