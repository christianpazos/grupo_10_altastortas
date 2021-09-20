const express = require ('express');
const router = express.Router();
const main = require ('../controllers/main')

router.get("/", main.index)
//router.get("/contacto", main.contact)
//router.get("/search", main.search);


module.exports = router