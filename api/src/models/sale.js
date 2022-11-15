const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
    return sequelize.define('Sale', {
        id: {
            autoIncrement: true,
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        worker_id: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: 'workers',
                key: 'id'
            }
        },
        client_id: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: 'clients',
                key: 'id'
            }
        },
        table_id: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: 'tables',
                key: 'id'
            }
        },
        payment_method_id: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: 'payment_methods',
                key: 'id'
            }
        },
        ticket_number: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        total_base_price: {
            type: DataTypes.DECIMAL(10,2),
            allowNull: false
        },
        total_tax_price: {
            type: DataTypes.DECIMAL(10,2),
            allowNull: false
        },
        total_price: {
            type: DataTypes.DECIMAL(10,2),
            allowNull: false
        },
        date_emitted: {
            type: DataTypes.DATE,
            allowNull: false
        },
        hour_emitted: {
            type: DataTypes.TIME,
            allowNull: false
        },
        service_duration: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    }, {
        sequelize,
        tableName: 'sales',
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
                name: "worker_id",
                using: "BTREE",
                fields: [
                    { name: "worker_id" },
                ]
            },
            {
                name: "client_id",
                using: "BTREE",
                fields: [
                    { name: "client_id" },
                ]
            },
            {
                name: "table_id",
                using: "BTREE",
                fields: [
                    { name: "table_id" },
                ]
            },
            {
                name: "payment_method_id",
                using: "BTREE",
                fields: [
                    { name: "payment_method_id" },
                ]
            },
        ]
    });
};
