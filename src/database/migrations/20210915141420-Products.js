'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    try {
      await queryInterface.createTable('products', { 
        id:{ 
          type:Sequelize.INTEGER,
          primaryKey:true,
          autoIncrement:true
        },
        nombre:{
          type: Sequelize.STRING,
          allowNull:false
        },
        category_id:{
          type:Sequelize.INTEGER,
          allowNull:false, 
          reference:{
            model:"Category",
            id:"id"
          }
        },
        imagen:{
          type: Sequelize.STRING,
          allowNull:false
        },
        precio:{
          type:Sequelize.DECIMAL(10,2),
          allowNull:false,
        },
        descripcion:{
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
      await queryInterface.dropTable('products');
      
    } catch (error) {
      console.log(error);
    }

  }
};
