var express = require('express');
const spotController = require('../controllers/spotController');
var router = express.Router();



var viewTitle;
//Fonction de retour d'attribut pour la vue
function returnRender(viewTitle){
  var obj =  {
      title: viewTitle,
      home: 'Accueil',
      search: 'Recherche',
      login: 'Connexion',
      spot: 'Mes spots',
      application: 'Une application pour les surfeurs à la recherche de nouveaux spot de surf!',
      tchat: 'Chat en ligne'
    };

    return obj;
}

// Route pour la vue spot (sans param => Mes spots favoris)
router.get('/', function(req, res, next) {
  viewTitle = "Mes Spots";
  res.render('spot', returnRender());
});

// Route pour la vue d'un spot en particulier (avec un identifiant en param)
router.route('/:id').get(spotController.getSpot);

module.exports = router;
