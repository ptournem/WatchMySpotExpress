var express = require('express');
var router = express.Router();

var locations = [];
locations.push({'latitude': '51.509', 'longitude': '-0.08'});
locations.push({'latitude': '50.509', 'longitude': '10.08'});

/* GET map page. */
router.get('/', function(req, res, next) {
  res.render('map', { title: 'Exemple map', locations: locations });
});

module.exports = router;
