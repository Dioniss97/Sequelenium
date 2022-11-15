'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  //Crea la cabla distributors con los siguientes campos: id, name, address, phone, createdAt, updatedAt y deletedAt
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('distributors', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING
      },
      address: {
        type: Sequelize.STRING
      },
      phone: {
        type: Sequelize.STRING
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
    await queryInterface.dropTable('distributors');
  }
};