'use strict';

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

   await queryInterface.bulkInsert('Levels', [
    {name: 'BAC'},
    {name: 'BAC+1'},
    {name: 'BAC+2'},
    {name: 'BAC+3'},
    {name: 'BAC+4'},
    {name: 'BAC+5'},
    {name: 'BAC+6 et plus'},
    {name: 'NIV BAC'},
  ], {});

  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Levels', null, {});
  }
};
