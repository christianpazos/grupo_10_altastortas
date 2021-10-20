const {User}= require ('../database/models');
const { check,body } = require ('express-validator');

module.exports = [
    body('nombre').notEmpty().withMessage('Tenés que escribir tu nombre completo').isLength({min:2}),
    body('email').notEmpty().isEmail().withMessage('Tenés que escribir un email válido')/* .custom(async (value)=>{
        return await User.findOne({where:{email:value}}).then(user => {
            if (user) {
                return Promise.reject('Este email ya esta en uso :( ');
            }
        })
    }) */,
    body('contraseña').notEmpty().isLength({min:8}).withMessage('Tenés que elegir una contraseña con mas caracteres'),
    body('avatar').custom(async(value, { req }) => {  
        const exceptedFileType = ['png','gif','jpg','jpeg']
        if (req.file==undefined){
            return Promise.reject('Debes subir una imagen');
        }
        const fileExtension = req.file.mimetype.split('/').pop()
        if(!exceptedFileType.includes(fileExtension)){
            return Promise.reject('Extension de archivos no permitida');
        }
    }
    ).withMessage("Debes Subir una imagen con extension jpg, gif, jpeg y/o png ")
]