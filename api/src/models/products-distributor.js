const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
    return sequelize.define('ProductsDistributor', {
        id: {
            autoIncrement: true,
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        distributor_id: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: 'distributors',
                key: 'id'
            }
        },
        date: {
            type: DataTypes.DATE,
            allowNull: false
        },
        category: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        name: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        weight: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        weight_unit: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        price: {
            type: DataTypes.DECIMAL(10,2),
            allowNull: false
        },
        offer: {
            type: DataTypes.BOOLEAN,
            allowNull: true
        },
        offer_type: {
            type: DataTypes.STRING(255),
            allowNull: true
        },
        offer_afiliate: {
            type: DataTypes.BOOLEAN,
            allowNull: true
        },
        weight_standard: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        price_standard: {
            type: DataTypes.DECIMAL(10,2),
            allowNull: false
        },
        price_standard_calculate: {
            type: DataTypes.DECIMAL(10,2),
            allowNull: false
        }
    }, {
        sequelize,
        tableName: 'products_distributors',
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
                name: "distributor_id",
                using: "BTREE",
                fields: [
                    { name: "distributor_id" },
                ]
            },
        ]
    });
};
