const Pool = require('./Pool');
const Word = require('./Word');

Pool.hasMany(Word, {
    foreignKey: 'poolId',
    onDelete: 'CASCADE',
});

Word.belongsTo(Pool, {
    foreignKey: 'poolId',
});


module.exports = { Pool, Word };
