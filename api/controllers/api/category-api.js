module.exports = {


  friendlyName: 'Categoryapi',


  description: 'Categoryapi something.',


  inputs: {

  },


  exits: {

  },


  fn: async function (inputs) {
    let params = this.req.allParams();
    let categories = await Category.find({where:params});
    return categories;
  }


};
