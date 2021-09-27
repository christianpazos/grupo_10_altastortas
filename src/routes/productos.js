const express = require ('express');
const productos = require('../controllers/productos');
const isAdmin = require ("../middlewares/isAdmin");
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

router.get("/crear",[isAdmin], productos.create);
router.get("/", productos.show);
router.get("/:categories", productos.category);
router.get("/detalle/:id", productos.show);
router.get("/editar/:id",[isAdmin], productos.edit);

router.post("/upload",[isAdmin, upload.single("imagen")],productos.save); //save usa new
router.put("/editar/:id",[isAdmin, upload.single("imagen")],productos.update); //update usa edit?
router.delete("/eliminar/:id",[isAdmin],productos.delete);
router.get("/prueba", productos.test);
 

module.exports = router