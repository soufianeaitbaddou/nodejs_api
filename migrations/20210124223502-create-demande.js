'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Demandes', {
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
      nom: {
        type: Sequelize.STRING
      },
      prenom: {
        type: Sequelize.STRING
      },
      date_naissance: {
        type: Sequelize.DATE
      },
      email: {
        type: Sequelize.STRING
      },
      adresse: {
        type: Sequelize.STRING
      },
      ville: {
        type: Sequelize.STRING
      },
      code_postal: {
        type: Sequelize.INTEGER
      },
      civilite: {
        type: Sequelize.STRING
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
    await queryInterface.dropTable('Demandes');
  }
};