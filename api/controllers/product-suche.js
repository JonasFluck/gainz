
module.exports = {


  friendlyName: 'View productList',

  description: '',


  exits: {

    success: {
      statusCode: 200,
      description: 'Loads the searched products',
      viewTemplatePath: 'pages/product/productList'
    },
  },


  fn: async function () {
    //Fetch muss so imortiert werden da es sich bei actions um CommonJS handelt und sails andere importe von node modulen hier nicht toleriert
    const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
    console.log(fetch)
    let param = this.req.param('search');
    let result = [];
      await fetch(`${this.req.baseUrl}/api/v1/products?isActive=true`)
      .then(response => response.json())
      .then(data=> {
        data.forEach(element =>{
          if(element.name.includes(param)){
            result.push(element)
          }
        });
      })
      return {result};
      }


};
