'use strict';
var slugify = require('slugify');
module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('Categories', [
      {name: 'Achats',slug : slugify('Achats'.toLowerCase()) },
      {name: 'Commercial / Support commercial',slug : slugify('Commercial / Support commercial'.toLowerCase())  },
      {name: 'Communication',slug : slugify('Communication'.toLowerCase())  },
      {name: 'Contrôle et risque',slug : slugify('Contrôle et risque'.toLowerCase())  },
      {name: 'Finance',slug : slugify('Finance'.toLowerCase())  },
      {name: 'Gestion de projets / Etudes',slug : slugify('Gestion de projets / Etudes'.toLowerCase())  },
      {name: 'Juridique',slug : slugify('Juridique'.toLowerCase())  },
      {name: 'Marketing',slug : slugify('Marketing'.toLowerCase())  },
      {name: 'Méthode / Organisation / Process',slug : slugify('Méthode / Organisation / Process'.toLowerCase())  },
      {name: 'Moyens Généraux / Logistique',slug : slugify('Moyens Généraux / Logistique'.toLowerCase())  },
      {name: 'Qualité',slug : slugify('Qualité'.toLowerCase())  },
      {name: 'Réseau Agence bancaires',slug : slugify('Réseau Agence bancaires'.toLowerCase())  },
      {name: 'Ressources Humaines',slug : slugify('Ressources Humaines'.toLowerCase())  },
      {name: 'Santé / Social',slug : slugify('Santé / Social'.toLowerCase())  },
      {name: 'Système d\'Information / AMOA',slug : slugify('Système d\'Information / AMOA'.toLowerCase())  },
      {name: 'Autres',slug : slugify('Autres'.toLowerCase())  },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Categories', null, {});
  }
};
