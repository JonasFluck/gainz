module.exports = {


  friendlyName: 'Update category',


  description: '',


  inputs: {

  },


  exits: {

  },


  fn: async function () {

    sails.log.debug("Update single category....")
    await Category.updateOne({ id: this.req.params.id }).set(this.req.body);
    this.res.redirect("/category/show")
  }


};
