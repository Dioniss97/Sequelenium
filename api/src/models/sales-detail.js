const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
    return sequelize.define('SalesDetail', {
        id: {
            autoIncrement: true,
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        sale_id: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: 'sales',
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
        tableName: 'sales_details',
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
                name: "sale_id",
                using: "BTREE",
                fields: [
                    { name: "sale_id" },
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
