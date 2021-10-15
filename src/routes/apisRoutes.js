const express = require('express');
const router = express.Router();
const apiController = require('../controllers/apiControl');

router.get('/users', apiController.users);
router.get('/users/:id', apiController.userId);
router.get('/productos', apiController.productos);
router.get('/productos/:id', apiController.productosId);
router.get('/categorias', apiController.category);
router.get('/categorias/:id', apiController.categoryId);
module.exports = router;