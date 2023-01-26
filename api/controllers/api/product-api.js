module.exports = {


  friendlyName: 'Productapi',


  description: 'Productapi something.',


  inputs: {

  },


  exits: {

  },


  fn: async function (inputs) {
    let params = this.req.allParams();
    let products = await Product.find({where: params});
    return products;
  }


};
