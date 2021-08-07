const express = require ('express');
const router = express.Router();
const usuario = require ('../controllers/usuario')

router.get("/login", usuario.login)
router.get("/register", usuario.register)

//Formulario de Login
router.get("/login", usuario.login)
//Procesar el Registro
router.post ("/register",uploadFile.single ('avatar'),validaciones, usuario.processRegister)
//Formulario de Registro
router.get("/register", usuario.register)


module.exports = router