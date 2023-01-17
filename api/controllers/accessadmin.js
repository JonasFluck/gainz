module.exports = {


  friendlyName: 'Accessadmin',


  description: 'Accessadmin something.',


  inputs: {

  },


  exits: {
    success: {
      statusCode: 200,
      description: 'Requesting user is a guest, so show the public landing page.',
      viewTemplatePath: 'pages/admin/admin'
    }
  },


  fn: async function (inputs) {

    // All done.
    return;

  }


};
