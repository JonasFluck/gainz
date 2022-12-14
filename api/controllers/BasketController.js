/**
 * BasketController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

    show: function (req, res) {
        sails.log.debug(`Opening shopping basket`)
        res.view('pages/order/basket');
    },

    put: async function (req, res) {
        
        let product = await Product.findOne({ id: req.params.id });
        if (!req.session.basket) {
            req.session.basket = [];
            req.session.basket.push(product);
        } else {
            req.session.basket.push(product);
        }
        res.redirect(`/product/productInfo/${req.params.id}`);
    },

    remove: async function (req, res) {
        sails.log.debug(`Wir sind drin`)
        req.session.basket.splice(req.params.index, 1);
        res.redirect('/order/basket');
    },
};

