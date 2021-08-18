
const { body } = require ('express-validator')
module.exports = [
    body('nombre').notEmpty().withMessage('Tenés que escribir tu nombre completo'),
    
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