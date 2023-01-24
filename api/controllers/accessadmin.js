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
    sails.log.debug("Starting up admin-page")

    let products = await Product.find({isActive:true});
    amountOfProducts = products.length

    let users = await User.find();
    amountOfUsers = users.length


    let orders = await Order.find();
    amountOfOrders = orders.length

    let categories = await Category.find();
    amountOfCategories = categories.length

    return {amountOfProducts, amountOfUsers, amountOfOrders, amountOfCategories};
  }


};
