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
    let category = await Category.findOne({name: 'Supplements'});
    if (!category) {
        console.log("Category not found");
        return null;
    };
    let categoryid = category.id;
    let products = await Product.find({ where: { isActive: true, category: categoryid }, limit: 4 });
    return {products}; 
  }

};
