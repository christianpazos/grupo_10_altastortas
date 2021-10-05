const multer = require('multer')
const path = require('path')

module.exports= function (carpetaLoQueVenga){//cualquier carpeta despues de /public/avatars/xxx 
    const storage = multer.diskStorage({
        destination:(req,file,cb)=> cb (null, path.resolve(__dirname, '../../public/uploads',carpetaLoQueVenga)), 
        filename: (req,file,cb)=> cb (null, file.fieldname + Date.now() + path.extname(file.originalname))
    });
    
    return storage;
}



