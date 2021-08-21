const { body } = require("express-validator");
const bcrypt = require("bcrypt");
const userModel = require("../models/usuario");
module.exports = [
  body("email").isEmail().custom(value => {
    let existUser = userModel.findByEmail(value);//el finbyemail viene del models/user para buscar
        if (existUser){
            return true
        }else{
            return Promise.reject("No se encontró un usuario");
        }

    }),
  body('password').isLength({ min:6 }).custom((value,{ req })=>{
    let existUser = userModel.findByEmail(req.body.email);
    let validPassword = existUser? bcrypt.compareSync(value, existUser.password) : false; 
    //comparesync compara texto plano, toma el usuario que existe y el value
    
    if (validPassword){
        return true
    }else {
        return Promise.reject("Password Incorrecto");
    }
})
]