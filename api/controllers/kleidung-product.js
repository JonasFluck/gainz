module.exports = {


  friendlyName: 'Kleidung product',


  description: '',


  inputs: {

  },


  exits: {

    success: {
      statusCode: 200,
      description: 'Loads the kleidung page with corresponding products',
      viewTemplatePath: 'pages/kleidung/kleidung'
    },
  },


  fn: async function (inputs) {
    let category = await Category.findOne({ name: 'Kleidung' });
    if (!category) {
      console.log("Category not found");
      return null;
    };
    let categoryid = category.id;
    let products = await Product.find({ where: { isActive: true, category: categoryid }, limit: 4 });
    return { products };
  }

};
