const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Pool extends Model {

    // could put functions in here

}

Pool.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        poolName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: "pool",
    }
);

module.exports = Pool;
