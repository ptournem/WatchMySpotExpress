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

/* GET home page. */
router.get('/', function(req, res, next) {
  viewTitle = "Watch My Spot";
  res.render('index', returnRender());
});

// Route pour la vue spot
router.get('/spot', function(req, res, next) {
  viewTitle = "Mes Spots";
  res.render('spot', returnRender());
});

// Route pour la vue recherche
router.get('/search', function(req, res, next) {
  viewTitle = "Recherche";
  res.render('search', returnRender());
});

// Route pour la vue login
router.get('/login', function(req, res, next) {
  viewTitle = "Connexion";
  res.render('login', returnRender());
});

// Route pour la vue login
router.get('/Chat', function(req, res, next) {
  viewTitle = "Chat en ligne";
  res.render('chat', returnRender());
});




module.exports = router;
