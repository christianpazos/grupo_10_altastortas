const { body } = require("express-validator");
const bcrypt = require("bcrypt");
const userModel = require("../models/usuario");
module.exports = [
  body("email").isEmail().custom(value => {
    let registered = userModel.findByEmail(value);
    if (!registered) {
      return Promise.reject('E-mail no found');
    }
    return true
  }),
  body("password").isLength({ min: 5 }).custom((value, { req }) => {

    let registered = userModel.findByEmail(req.body.email);
    
    if (!registered) {
      return Promise.reject('E-mail no found');
    }
    
    if (bcrypt.compareSync(value, registered.password) != true) {
      return Promise.reject('Password no match');
    }

    return true;
  })
]