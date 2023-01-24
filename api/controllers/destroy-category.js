

module.exports = {


  friendlyName: 'Destroy category',


  description: '',


  inputs: {

  },


  exits: {

  },


  fn: async function () {
    sails.log.debug("Destroy single product....")
    await Category.updateOne({ id: this.req.params.id }).set({isActive:false});
    await Product.update({ category: this.req.params.id}).set({isActive:false});
    this.res.redirect('/category/show');
  }

};
