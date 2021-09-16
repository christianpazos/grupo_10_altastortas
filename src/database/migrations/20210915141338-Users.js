'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    try {
      await queryInterface.createTable('users', { 
        id: {
          type:Sequelize.INTEGER,
          primaryKey:true,
          autoIncrement:true
        },
        nombre:{
          type: Sequelize.STRING,
          allowNull:false
        },
        email:{
          type: Sequelize.STRING,
          allowNull:false
        },
        esAdmin:{
          type:Sequelize.BOOLEAN,
          allowNull:false,
          default:false
        },
        contraseña:{
          type: Sequelize.STRING,
          allowNull:false
        },
        avatar:{
          type: Sequelize.STRING,
          allowNull:false
        }
      });
      
    } catch (error) {
      console.log(error);
    }
    
  },

  down: async (queryInterface, Sequelize) => {
    try {
      
      await queryInterface.dropTable('users');
      
    } catch (error) {
      console.log(error);
    }
    
  }
};
