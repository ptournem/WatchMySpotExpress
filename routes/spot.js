var express = require('express');
var router = express.Router();

var viewTitle;

function returnRender(){
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
router.get('/:id', function(req, res, next) {
  viewTitle = "Spot : ";
  res.render('spot', returnRender());
});

module.exports = router;
