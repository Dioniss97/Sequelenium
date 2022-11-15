'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {

  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('sales', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      worker_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'workers',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
      },
      client_id: {
        allowNull: true,
        type: Sequelize.INTEGER,
        references: {
          model: 'clients',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
      },
      table_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'tables',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
      },
      payment_method_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'payment_methods',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
      },
      ticket_number: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      total_base_price: {
        allowNull: false,
        type: Sequelize.DECIMAL(10, 2)
      },
      total_tax_price: {
        allowNull: false,
        type: Sequelize.DECIMAL(10, 2)
      },
      total_price: {
        allowNull: false,
        type: Sequelize.DECIMAL(10, 2)
      },
      date_emitted: {
        allowNull: false,
        type: Sequelize.DATE
      },
      hour_emitted: {
        allowNull: false,
        type: Sequelize.TIME
      },
      service_duration: {
        allowNull: false,
        type: Sequelize.INTEGER
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
    await queryInterface.dropTable('sales');
  }
};