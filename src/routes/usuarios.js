const express = require ('express');
const router = express.Router();
const path = require ('path');
const multer = require ('multer');
const usuario = require ('../controllers/usuario')
const validRegister = require("../middlewares/validRegister");
const storage = require("../middlewares/multerMiddleware");//esta con folder para que sea dinamico
const upload = multer({storage: storage("avatar")}) 


router.get("/login", usuario.login)
router.get("/register", usuario.register)


//Formulario de Login
router.get("/login", usuario.login)
//Procesar el Registro
router.post ("/register",[uploadFile.single ('avatar'),validRegister], usuario.save)
//Formulario de Registro


module.exports = router