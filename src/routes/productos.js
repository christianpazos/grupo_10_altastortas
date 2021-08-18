const express = require ('express');
const productos = require('../controllers/productos');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const product = require('../models/product');

let dest = multer.diskStorage({
    destination: function (req, file, cb) {
        let extension = path.extname(file.originalname);
        if(extension.indexOf("jpg") > 0){
            cb(null, path.resolve(__dirname,"../../public/uploads","products"))
        }
    },
    filename: function (req, file, cb) {
        cb(null, "torta"+ '-' +file.fieldname + '-' + Date.now()+ path.extname(file.originalname))
    }
})
const upload = multer({storage:dest});

router.get("/crear", productos.create);
router.get("/:category?", productos.index);//preguntar a edu
router.get("/detalle/:id", productos.show);
router.get("/editar/:id", productos.edit);
router.post("/upload",[upload.single("imagen")],productos.save); //save usa new
router.put("/editar/:id",[upload.single("imagen")],productos.update); //update usa edit?
router.delete("/eliminar/:id",productos.delete);
 

module.exports = router