const Pool = require('./Pool');
const Word = require('./Word');

Word.belongsTo(Pool);

Pool.hasMany(Word);

module.exports = { Pool, Word };
