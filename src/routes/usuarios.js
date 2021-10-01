const express = require ('express');
const router = express.Router();
const path = require ('path');
const multer = require ('multer');
const usuario = require ('../controllers/usuario');
const isLogged = require("../middlewares/logged");
const isAdmin = require ("../middlewares/isAdmin");
const isGuest = require ("../middlewares/isGuest");
const validRegister = require("../middlewares/validationRegister");
const validLogin=require ('../middlewares/validationLogin');
const storage = require("../middlewares/multerMiddleware");//esta con folder para que sea dinamico
const uploadFile = multer({storage: storage("avatar")}); 
const test = require('../controllers/usuario');

router.get("/login",[isGuest], usuario.login)
router.get("/register",[isGuest], usuario.register)


router.get("/profile",[isLogged],usuario.profile)
router.get("/logout",[isLogged],usuario.logout)

//router.delete ()

//Formulario de Login
router.put("/update",[isLogged],usuario.update)
router.post("/access", [validLogin],usuario.access)//modificado 12/08/21 ingresa al profile despues del login, ver el action del ejs login 
//Procesar el Registro
router.post ("/save",[uploadFile.single ('avatar'),validRegister], usuario.save)
//Formulario de Registro

//test de Usuario
router.get("/prueba", test.test);
router.post("/prueba", test.testsave)

module.exports = router
