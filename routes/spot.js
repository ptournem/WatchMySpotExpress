var express = require('express');
var router = express.Router();

var viewTitle;

function returnRender(){
  return {
      title: viewTitle,
      home: 'Accueil',
      search: 'Recherche',
      login: 'Connexion',
      spot: 'Mes spots',
      application: 'Une application pour les surfeurs à la recherche de nouveaux spot de surf!',
      tchat: 'Chat en ligne'
    };
}


// Route pour la vue spot
router.get('/', function(req, res, next) {
  viewTitle = "Mes Spots";
  res.render('spot', returnRender());
});


module.exports = router;
