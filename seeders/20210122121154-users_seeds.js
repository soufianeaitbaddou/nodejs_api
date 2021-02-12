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
   await queryInterface.bulkInsert('users', [
    {email: 'admin@admin.com', password: '$2a$10$T1W8ybvUt4CSqdqoIA/CkOttiDusVHDoxRirVca11DjGa3ZX.PKX2' },
    {email: 'user@user.com', password: '$2a$10$6JMo4paEWMLED5SGhuE75eEyv.j5wxktBpZIBKel/btGpMwCrXkVe' }
  ], {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('users', null, {});
  }
};
