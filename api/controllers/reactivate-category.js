module.exports = {


  friendlyName: 'Reactivate category',


  description: '',


  inputs: {

  },


  exits: {

  },


  fn: async function (inputs) {
    await Category.updateOne({ id: this.req.params.id }).set({isActive:true});
    this.res.redirect('/category/show');
  }


};
