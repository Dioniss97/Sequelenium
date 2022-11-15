'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {

  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('products_distributors', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      distributor_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'distributors',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
      },
      date: {
        allowNull: false,
        type: Sequelize.DATE
      },
      category: {
        allowNull: false,
        type: Sequelize.STRING
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING
      },
      weight: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      weight_unit: {
        allowNull: false,
        type: Sequelize.STRING
      },
      price: {
        allowNull: false,
        type: Sequelize.DECIMAL(10,2)
      },
      offer: {
        type: Sequelize.BOOLEAN
      },
      offer_type: {
        type: Sequelize.STRING
      },
      offer_afiliate: {
        type: Sequelize.BOOLEAN
      },
      weight_standard: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      price_standard: {
        allowNull: false,
        type: Sequelize.DECIMAL(10,2)
      },
      price_standard_calculate: {
        allowNull: false,
        type: Sequelize.DECIMAL(10,2)
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      deletedAt: {
        type: Sequelize.DATE
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('products_distributors');
  }
};