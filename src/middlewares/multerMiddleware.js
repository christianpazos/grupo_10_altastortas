const path = require ('path');
const multer = require ('multer');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './public/img/avatars')
    },
    filename: (req, file, cb) => {
        cb(null, "usuario"+ '-' + file.fieldname + '-' + Date.now()+ path.extname(file.originalname))
    }
})

const uploadFile = multer ({storage});