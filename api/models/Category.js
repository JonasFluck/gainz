module.exports = {
    schema: true,
    attributes: {
        name: { type: 'string', columnType: 'varchar(80)', required: true },
        description: { type: 'string', columnType: 'varchar(80)' },
        ordernumber: {
            type: 'number',
            columnType: 'integer',
            required: true,
            min: 0,
            max: 100,
            unique: true
        },
    },
};