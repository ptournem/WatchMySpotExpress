var express = require('express');
const spotController = require('../controllers/spotController');
var router = express.Router();

// Route pour la vue spot (sans param => Mes spots favoris)
router.route('/').get(spotController.mySpot);

// Route pour la vue d'un spot en particulier (avec un identifiant en param)
router.route('/:id').get(spotController.getSpot);

module.exports = router;
