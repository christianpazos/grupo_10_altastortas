const {User}= require("../database/models")
const { body } = require("express-validator");
const bcrypt = require("bcrypt");
//const userModel = require("../models/usuario");
module.exports = [
  body("email").isEmail().custom( async (value) => {
      try {
          let existUser = await User.findOne({where: {email: value }});//el finbyemail viene del models/user para buscar
          return existUser? true:Promise.reject("No se encontró este usuario");
    } catch (error) {
        return Promise.reject("No se encontró este usuario");
    }
}).withMessage("No se encontró este usuario"),
  body("contraseña").isLength({ min:6 }).custom(async(value,{ req })=>{
      try {
            let existUser = await User.findOne({where: {email: req.body.email }});
            if (bcrypt.compareSync(value, existUser.contraseña) !== true) {
                return Promise.reject('Contraseña Incorrecta');
        }
    } catch (error) {
        console.log(error)
        }
})
]