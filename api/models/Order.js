/**
 * Order.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    name: {
      type: 'string',  
      columnType: 'VARCHAR(120)',  
      required: true,
  },
  vorname: {
    type: 'string',  
    columnType: 'VARCHAR(120)',  
    required: true,
},
  strasse: {
      type: 'string',  
      columnType: 'VARCHAR(120)',  
      required: true,
  },
  stadt: {
    type: 'string',  
    columnType: 'VARCHAR(120)',  
    required: true,
},
  plz: { 
    type: 'number',  
    columnType: 'INTEGER(10)',  
},
  price: { 
      type: 'number',  
      columnType: 'DECIMAL (6,2)',  
  },
  products: {
      collection: 'product',
      via: 'orders'
  }

  }

};

