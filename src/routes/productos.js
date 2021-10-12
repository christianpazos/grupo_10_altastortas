const express = require ('express');
const multer = require ('multer');
const router = express.Router();
const productos = require('../controllers/productos');
const isAdmin = require ("../middlewares/isAdmin");
const storage = require("../middlewares/multerMiddleware");
const uploadFile = multer({storage: storage('products')});


router.get("/crear",[isAdmin], productos.create);//falta
router.get("/list", productos.show);
router.get("/categories", productos.category);
router.get("/detalle/:id", productos.detalle);
router.get("/editar/:id",[isAdmin], productos.edit);

router.post("/upload",[isAdmin, uploadFile.single('products')],productos.save); //save usa new
router.put("/editar/:id",[isAdmin, uploadFile.single('products')],productos.update); //update usa edit?
router.delete("/eliminar/:id",[isAdmin],productos.delete);
router.get("/prueba", productos.test);

module.exports = router