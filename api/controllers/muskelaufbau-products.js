
module.exports = {


  friendlyName: 'Muskelaufbau product',


  description: '',


  inputs: {

  },


  exits: {

    success: {
      statusCode: 200,
      description: 'Loads the muskelaufbau page with corresponding products',
      viewTemplatePath: 'pages/fitnessziele/muskelaufbau'
    },
  },


  fn: async function (inputs) {
    let category = await Category.findOne({ name: 'Supplements' });
    if (!category) {
      console.log("Category not found");
      return null;
    };
    let categoryid = category.id;
    let products = await Product.find({ where: { isActive: true, category: categoryid }, limit: 4 });
    return { products };
  }



};
