var express = require('express');
const spotController = require('../controllers/spotController');
var router = express.Router();
var wms_rendre = require('../utils/render');

/* GET home page. */
router.route('/').get(spotController.getTenBestSpots);




module.exports = router;
