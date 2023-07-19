const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

Word.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        pool_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'pool',
                key: 'id',
            },
        },
        word: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        definition: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        partOfSpeech: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        etymology: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    },
    {
        sequelize,
        timestamps: true,
        freezeTableName: true,
        underscored: true,
        modelName: 'dream',
    }

);

module.exports = Word;
