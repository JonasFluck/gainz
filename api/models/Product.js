module.exports = {
    schema: true,
    attributes:{
    name:{type: 'string', columnType: 'varchar(80)', required: true},
    description: {type: 'string', columnType: 'varchar(80)'},
    price:{type: 'number', columnType: 'DECIMAL(6,2)', required: true},
    category:{type:'number', columnType:'INTEGER',required: true}
    },
};