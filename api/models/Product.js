module.exports = {
    schema: true,
    attributes:{
    name:{type: 'string', columnType: 'varchar(80)', required: true},
    description: {type: 'string', columnType: 'varchar(40)'},
    descriptionLong: {type: 'string', columnType: 'varchar(300)'},
    price:{type: 'number', columnType: 'DECIMAL(6,2)', required: true},
    image: { type: 'string', columnType: 'varchar(128)' },
    isActive: {type: 'boolean', columnType: 'boolean', defaultsTo: true},
    orders: {
        collection: 'order',
        via: 'products'
    },
    category:{
    model: 'category'
    }
    },
    
};