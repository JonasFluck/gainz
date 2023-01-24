module.exports = {
    attributes: {
        name: { type: 'string', columnType: 'varchar(80)', required: true },
        description: { type: 'string', columnType: 'varchar(80)' },
        isActive: {type: 'boolean', columnType: 'boolean', defaultsTo: true},
        product:{
            collection: 'product',
            via: 'category'
        }
    },
};