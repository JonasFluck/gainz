module.exports = {


  friendlyName: 'Edit category',


  description: '',


  inputs: {

  },


  exits: {
    success:{
      statusCode: 200,
      description: 'Requesting user is a guest, so show the public landing page.',
      viewTemplatePath: 'pages/category/edit'
    }

  },


  fn: async function () {
    sails.log.debug("Edit single category....")
    let category = await Category.findOne({id: this.req.params.id });
    return {category};
  }


};
