var express = require('express');
var fs = require('fs');
var router = express.Router();

const filePath = './public/data/spots.json';
var locations = [];

fs.readFile(filePath, function (err, data) {
  if (err) {
    console.log(err);
    return;
  }

  locations = JSON.parse(data).spots;
});

/* GET map page. */
router.get('/', function(req, res, next) {
  res.render('map', { title: 'Exemple map', locations: locations });
});

module.exports = router;
