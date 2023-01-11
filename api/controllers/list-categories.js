module.exports = {


  friendlyName: 'View homepage or redirect',


  description: 'Display or redirect to the appropriate homepage, depending on login status.',


  exits: {

    success: {
      statusCode: 200,
      description: 'Requesting user is a guest, so show the public landing page.',
      viewTemplatePath: 'pages/category/show'
    },

  },


  fn: async function () {
    sails.log.debug("List all categories")
    let categories = await Category.find();
    return {categories};

  }


};
