const {User}= require ('../database/models');
const { body } = require ('express-validator');

module.exports = [
    body('nombre').notEmpty().withMessage('Tenés que escribir tu nombre completo').isLength({min:2}),
    body('email').notEmpty().isEmail().withMessage('Tenés que escribir un email válido').custom(async (value)=>{
        return await User.findOne({where:{email:value}}).then(user => {
            if (user) {
                return Promise.reject('E-mail already in use');
            }
        })
    }),
    body('contraseña').notEmpty().isLength({min:8}).withMessage('Tenés que elegir una contraseña'),
    body('avatar').custom(async(value, { req }) => {   
        let file = req.file;
        if(file === ('application/pdf' && 'application/jpg' && 'application/jpeg' && 'application/png' && 'application/gif'  )){
            throw new Error ('Tenes que subir una imagen con un formato correcto');
            }else{
                return true;
            }}
    )
]