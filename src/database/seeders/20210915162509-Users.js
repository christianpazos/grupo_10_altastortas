'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    try {
      await queryInterface.bulkInsert('Users', [{
        nombre:'carlos',
        email:'carlitos.benitez@yahoo.com',
        esAdmin:false,
        contraseña:'$2b$10$ca/7V/CFl6OfZApIwxMTZOA4RfKLruPDlCGwlYD/aF8/htEJmNecq',
        avatar:'avatar1628808899648.jpg'
    },
    {
        nombre:'carlos',
        email:'carlitos.benitez@yahoo.com',
        esAdmin:false,
        contraseña:'$2b$10$ca/7V/CFl6OfZApIwxMTZOA4RfKLruPDlCGwlYD/aF8/htEJmNecq',
        avatar:'avatar1628808899648.jpg'
    },
    {
        nombre:'prueba',
        email:'asdasda@yahoo.com',
        esAdmin:false,
        contraseña:'$2b$10$wT85gobExObnA.JOdq0zDOb1N5ttNR2HXkNP.qgeSEXSS1bceNjE.',
        avatar:'avatavatar:ar1628808960745.jpg'
    },
    {
        nombre:'juan',
        email:'jauperez@asdas.com',
        esAdmin:false,
        contraseña:'$2b$10$b9fDhHKxdjvTS3xh7KZdvedBP1IsStKDUIYHQ.OTx/7HsZz9HMgky',
        avatar:'avatar1628966055321.jpg'
    }
    ,{
        nombre:'asdasd',
        email:'asdad@aasdas.com',
        esAdmin:false,
        contraseña:'$2b$10$HQqYechdDATDGnhle4OIOuTgih1OVZQbq8eNIgpC4D5zmm5Z06JSS',
        avatar:'avatar1628967643466.webp'
    },
    {
        nombre:'jaun',
        email:'juan@carlos.com',
        esAdmin:false,
        contraseña:'$2b$10$37jXTJeM2VfS9Z4H2Fe0E.D5bvwCRlbwULhwBNxd5hXLIE9ORouBu',
        avatar:'avatar1629165483872.jpg'
    }
    ,{
        nombre:'asdasdas',
        email:'prueba@prueba.com',
        esAdmin:false,
        contraseña:'$2b$10$z3zNbbNUwURDV3xJ06j.aOXCRwZ6jt/zpra1N9TnP1JsvPa7QSn0i',
        avatar:'avatar1629235978819.jpg'
    }
    ,{
        nombre:'prueba',
        email:'prueba@altastortas.com',
        esAdmin:true,
        contraseña:'$2b$10$QGic0h6Um9zvP1iQyQJ9q.qvCC2mYtJoQRXi2WCddS79MZF1kHT76',
        avatar:'avatar1629324710383.png'
    }
    ,{
        nombre:'juan perez',
        email:'prueba@prueba2.com',
        esAdmin:false,
        contraseña:'$2b$10$zhBGjplWCic9RmxphbqgP.l8.TgFNWuNpG82zTfNNmHsJxNLSIW9W',
        avatar:'avatar1629563215149.png'
    }
    
  ]); 
  }catch(error){
    console.log(error);
  }
},
  down: async (queryInterface, Sequelize) => {
    try {
      await queryInterface.bulkDelete('Users', null, {});
      
    } catch (error) {
      console.log(error);      
    }
  }
};
