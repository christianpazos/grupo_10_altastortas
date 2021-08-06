const express = require ('express');
const router = express.Router();
const usuario = require ('../controllers/usuario')

router.get("/login", usuario.login)
router.get("/register", usuario.register)

const path = require ('path');
const multer = require ('multer');

const { body } = require ('express-validator')

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './public/img/avatars')
    },
    filename: (req, file, cb) => {
        cb(null, "usuario"+ '-' + file.fieldname + '-' + Date.now()+ path.extname(file.originalname))
    }
})

const uploadFile = multer ({storage});
const validaciones = [
    body('nombre').notEmpty().withMessage('Tenés que escribir tu nombre completo'),
    body('nombreUsuario').notEmpty().withMessage('Tenés que elegir un nombre de usuario'),
    body('email').notEmpty().isEmail().withMessage('Tenés que escribir un email válido'),
    body('password').notEmpty().withMessage('Tenés que elegir una contraseña'),
    body('avatar').custom((value, { req })=> {
        let file = req.file;
        if (!file) {
            throw new Error ('Tenes que subir una imagen');
        }
        return true;
    })
]
//Formulario de Login
router.get("/login", usuario.login)
//Procesar el Registro
router.post ("/register",uploadFile.single ('avatar'),validaciones, usuario.processRegister)
//Formulario de Registro
router.get("/register", usuario.register)


module.exports = router