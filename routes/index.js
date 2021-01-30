var express = require('express');
var router = express.Router();

const views = require('../controllers/index.js');

/* GET home page. */
router.get('/', views.indexView );
router.get('/about', views.aboutView);

module.exports = router;
