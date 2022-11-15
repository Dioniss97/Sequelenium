const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
    return sequelize.define('Recipe', {
        id: {
            autoIncrement: true,
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        product_id: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: 'products_distributors',
                key: 'id'
            }
        },
        product_distributor_id: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: 'distributors',
                key: 'id'
            }
        },
        quantity: {
            type: DataTypes.DECIMAL(10,2),
            allowNull: true
        }
    }, {
        sequelize,
        tableName: 'recipes',
        timestamps: true,
        paranoid: true,
        indexes: [
            {
                name: "PRIMARY",
                unique: true,
                using: "BTREE",
                fields: [
                    { name: "id" },
                ]
            },
            {
                name: "product_id",
                using: "BTREE",
                fields: [
                    { name: "product_id" },
                ]
            },
            {
                name: "product_distributor_id",
                using: "BTREE",
                fields: [
                    { name: "product_distributor_id" },
                ]
            },
        ]
    });
};
