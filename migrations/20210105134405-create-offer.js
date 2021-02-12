'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Offers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      categorieId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {         // User belongsTo Categorie 1:1
          model: 'Categories',
          key: 'id'
        }
      },
      typeId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {         // User belongsTo Type 1:1
          model: 'Types',
          key: 'id'
        }
      },
      levelId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {         // User belongsTo Level 1:1
          model: 'Levels',
          key: 'id'
        }
      },
      experienceId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {         // User belongsTo Experience 1:1
          model: 'Experiences',
          key: 'id'
        }
      },
      title: {
        type: Sequelize.STRING
      },
      slug: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.TEXT
      },
      isActive: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Offers');
  }
};