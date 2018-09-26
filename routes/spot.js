var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();

var viewTitle;
const schema = mongoose.Schema({label : String, longitude : String, latitude : String});

//Fonction de retour d'attribut pour la vue
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

//Fonction de connexion à la base de données MongoDB
function getConnectionMongo(){
  mongoose.connect('mongodb://localhost:27017/watchmyspot');
  return mongoose.connection;
}

//Fonction qui permet de cloturer la connexion à la bdd Mongo
function getCloseConnectionMongo(){
  mongoose.connection.close();
}

// Route pour la vue spot (sans param => Mes spots favoris)
router.get('/', function(req, res, next) {
  viewTitle = "Mes Spots";
  res.render('spot', returnRender());
});

// Route pour la vue d'un spot en particulier (avec un identifiant en param)
router.get('/:id', function(req, res, next) {
  //récupération de la connexion a Mongo
  var connexion = getConnectionMongo();

  connexion.on('error', console.error.bind(console, 'connection error:'));
  connexion.once('open', function () {
    var modelSpot = mongoose.model('spots', schema);

    console.log("MON ID EN PARAM = "+req.params.id);

    modelSpot.findById(req.params.id, function (err, spotSurf) {
      if (err) console.log(err);
      console.log(spotSurf);

      // rendu de la vue
      viewTitle = "Spot : "+spotSurf.label;
      res.render('spot', returnRender());

      //Fermeture de la connexion à MongoDB
      getCloseConnectionMongo();
    });
  });
});

module.exports = router;
