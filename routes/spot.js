var express = require('express');
var MongoClient = require("mongodb").MongoClient;
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
  //Connexion à MongoDB
  MongoClient.connect("mongodb://localhost:27017/watchmyspot", function(error, client) {
    if (error) throw error;
    var db = client.db('watchmyspot');

    console.log("Connecté à la base de données 'watchmyspot'");

     db.collection("spots").find().toArray(function (error, results) {
        if (error) throw error;
        console.log(results);
        console.log("-----");
        results.forEach(function(i, obj) {
            console.log(obj);
        });
    });
  });

  viewTitle = "Spot : ";
  res.render('spot', returnRender());
});

module.exports = router;
