const Pool = require('./Pool');
const Word = require('./Word');


Pool.hasMany(Word, {
    foreignKey: 'word_id',
});

Word.belongsTo(Pool, {
    foreignKey: 'pool_id',
});

module.exports = { Pool, Word };
