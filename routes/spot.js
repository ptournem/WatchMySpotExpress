var express = require('express');
var mongoose = require('mongoose');
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
  //Connexion à MongoDB via Mongoose
  mongoose.connect('mongodb://localhost:27017/watchmyspot');
  var connection = mongoose.connection;

  connection.on('error', console.error.bind(console, 'connection error:'));
  connection.once('open', function () {

  connection.db.collection("spots", function(err, collection){
      collection.find({}).toArray(function(err, data){
          console.log(data); // it will print your collection data
      })
  });
});

  //Fermeture de la connexion à MongoDB
  mongoose.connection.close();

  // rendu de la vue
  viewTitle = "Spot : ";
  res.render('spot', returnRender());
});

module.exports = router;
