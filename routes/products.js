var express = require('express');
var router = express.Router();

const products = require('../controllers/products.js');

/* GET home page. */
router.get('/:id?', products.show);

module.exports = router;