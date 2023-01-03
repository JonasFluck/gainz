module.exports = {


  friendlyName: 'Ausdauer product',


  description: '',


  inputs: {

  },


  exits: {

    success: {
      statusCode: 200,
      description: 'Requesting user is a guest, so show the public landing page.',
      viewTemplatePath: 'pages/fitnessziele/ausdauer'
    },
    redirect: {
        responseType: 'redirect',
        description: 'Requesting user is logged in, so redirect to the internal welcome page.',
        viewTemplatePath: 'pages/fitnessziele/ausdauer'
      },

  },


  fn: async function (inputs) {
    let products = await Product.find({limit: 4} );
    console.log("Hallo");
    return {products};

  }


};
