module.exports = {


  friendlyName: 'Kleidung product',


  description: '',


  inputs: {

  },


  exits: {

    success: {
      statusCode: 200,
      description: 'Requesting user is a guest, so show the public landing page.',
      viewTemplatePath: 'pages/kleidung/kleidung'
    },
    redirect: {
        responseType: 'redirect',
        description: 'Requesting user is logged in, so redirect to the internal welcome page.',
        viewTemplatePath: 'pages/kleidung/kleidung'
      },

  },


  fn: async function (inputs) {
    let products = await Product.find({ where: { isActive: true }, limit: 4 });
    return {products};

  }


};
