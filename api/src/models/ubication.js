const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
    return sequelize.define('Ubication', {
        id: {
            autoIncrement: true,
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        branch_id: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: 'branches',
                key: 'id'
            }
        }
    }, {
        sequelize,
        tableName: 'ubications',
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
                name: "branch_id",
                using: "BTREE",
                fields: [
                    { name: "branch_id" },
                ]
            },
        ]
    });
};
