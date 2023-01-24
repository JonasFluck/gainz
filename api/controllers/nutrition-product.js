module.exports = {
  friendlyName: 'Nutrition product',
  description: 'Hier werden die Produkte übergeben, damit sie auf der Nutrition Seite angezeigt werden ',
  inputs: {},
  exits: {
    success: {
      statusCode: 200,
      description: 'Product retrieved and rendered successfully.',
      viewTemplatePath: 'pages/nutrition/nutrition'
    },
    notFound: {
      description: 'No products found.',
      responseType: 'notFound'
    }
  },
  fn: async function (inputs, exits) {
    let products = await Product.find({ where: { isActive: true }, limit: 4 });
    if (!products) {
      return exits.notFound();
    }
    return exits.success({ products });
  }
};
