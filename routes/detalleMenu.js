var express = require('express');
var router = express.Router();

const views = require('../controllers/index.js');
const products = require('../controllers/products.js');

/* GET home page. */
router.get('/', products.diferentProducts);
router.get('/:id', products.diferentProducts);

module.exports = router;