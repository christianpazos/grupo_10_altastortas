const express       = require ('express');
const router        = express.Router();
const path          = require ('path');
const multer        = require ('multer');
const controller    = require ('../controllers/usuario');
const isLogged      = require ("../middlewares/logged");
const isAdmin       = require ("../middlewares/isAdmin");
const isGuest       = require ("../middlewares/isGuest");
const validRegister = require ("../middlewares/validationRegister");
const validLogin    = require ('../middlewares/validationLogin');
const validProfile  = require ('../middlewares/validationProfile')
const storage       = require ("../middlewares/multerMiddleware");//esta con folder para que sea dinamico
const uploadFile    = multer  ({storage: storage('avatar')}); 
const test          = require ('../controllers/usuario');

router.get("/login",[isGuest], controller.login)
router.get("/register",[isGuest], controller.register)
router.get("/profile/:id",[isLogged],controller.profile)
router.get("/logout",[isLogged],controller.logout)
router.get("/listado",controller.show)

router.delete("/delete/:id",controller.delete)

//Formulario de Login
router.put("/update/:id",[uploadFile.single ('avatar'),isLogged,validProfile],controller.update)
router.post("/access", [validLogin],controller.access) 
//Procesar el Registro
router.post ("/save",[uploadFile.single ('avatar'),validRegister], controller.save)
//Formulario de Registro

//test de Usuario
router.get("/prueba", test.test);
router.post("/prueba", test.testsave)

module.exports = router
