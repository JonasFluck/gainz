module.exports = {


  friendlyName: 'Reactivate product',


  description: '',


  inputs: {

  },


  exits: {

  },


  fn: async function (inputs) {
    await Product.updateOne({ id: this.req.params.id }).set({isActive:true});
    this.res.redirect('/product/product');
  }


};
