const multer = require('multer')
const path = require('path')

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './public/uploads', 'avatar')
    },
    filename: (req, file, cb) => {
        cb(null, "usuario"+ '-' + file.fieldname + '-' + Date.now()+ path.extname(file.originalname))
    }

})

module.exports = storage



