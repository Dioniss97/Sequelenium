const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
    return sequelize.define('OrdersDetail', {
        id: {
            autoIncrement: true,
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        order_id: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: 'orders',
                key: 'id'
            }
        },
        price_id: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: 'prices',
                key: 'id'
            }
        }
    }, {
        sequelize,
        tableName: 'orders_details',
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
                name: "order_id",
                using: "BTREE",
                fields: [
                    { name: "order_id" },
                ]
            },
            {
                name: "price_id",
                using: "BTREE",
                fields: [
                    { name: "price_id" },
                ]
            },
        ]
    });
};
