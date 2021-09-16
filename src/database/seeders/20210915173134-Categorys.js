'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    try {
      await queryInterface.bulkInsert('Category', [{
      nombre:"Fresca"
      },{
      nombre:"Liviana"
      },{
      nombre:"Pesada"
      }]);
        
    } catch (error) {
      console.log(error);
    }
    
  },

  down: async (queryInterface, Sequelize) => {
    try {
      await queryInterface.bulkDelete('Category', null, {});
      
    } catch (error) {
      console.log(error);
    }
    
    /**
     * Add commands to revert seed here.
     *
     * Example:
     */
  }
};
