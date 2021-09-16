'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    try {
      await queryInterface.bulkInsert('Products', [{
        nombre:'Banana Split',
        category_id:2,
        imagen:'uploads/products/BANANASPLIT.jpg',
        precio:5,
        descripcion:'Torta muy sabrosa con base de banana y dulce de leche. Ideal para acompañar el té. Incluye frutos secos y base de galleta.'
      },{
        nombre:"Bomba",
        category_id:3,
        imagen:"uploads/products/BOMBA.jpg",
        precio:2300,
        descripcion:"Torta orientada para dulceros con base brownie, dulce de leche y merengue. Ideal para quedar pipón. Incluye decoración de chips de chocolate."
      },{
        nombre:"Bonobón",
        category_id:3,
        imagen:"uploads/products/BONOBON.jpg",
        precio:2500,
        descripcion:"Torta con gusto clásico no con base bonobón. Ideal para descontracturarse. Incluye base crujiente y bonobones gusto original."
      },{
        nombre:"Coco",
        category_id:1,
        imagen:"uploads/products/COCO.jpg",        
        precio:2000,
        descripcion:"Torta muy coqueta a base de coco y dulce de leche. Ideal para un desayuno con amigos. Incluye coco rallado y procesado."

      }]);
    } catch (error) {
      console.log(error);
    }
  },

  down: async (queryInterface, Sequelize) => {
    try {
      await queryInterface.bulkDelete('People', null, {});
      
    } catch (error) {
      console.log(error);      
    }
    
  }
};
