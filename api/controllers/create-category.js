module.exports = {


  friendlyName: 'Create category',


  description: 'Creating new Categopry',


  inputs: {

  },


  exits: {
  },


  fn: async function () {
    sails.log.debug("Create category")
    var values = this.req.allParams();
    await Category.create(values).then(()=>{
      this.res.redirect('/category/show');
  }).catch(
        (err) => {
           return this.res.badRequest(err);
        }
    )
  }
};
