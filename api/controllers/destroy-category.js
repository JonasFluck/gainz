module.exports = {


  friendlyName: 'Destroy category',


  description: '',


  inputs: {

  },


  exits: {

  },


  fn: async function () {
    sails.log.debug("Destroy single product....")
    await Category.destroyOne({ id: this.req.params.id });
    this.res.redirect('/category/show');
  }


};
