var express = require('express');
const spotController = require('../controllers/spotController');
var router = express.Router();
var wms_rendre = require('../utils/render');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', wms_rendre.returnRender("Watch My Spot"));
});




module.exports = router;
