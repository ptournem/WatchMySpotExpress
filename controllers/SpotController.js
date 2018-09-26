const spotRepository = require('../repositories/spotRepository');
const disconnectMongo = require('../utils/disconnectMongo');

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

//Fonction qui retourne les informations d'un spot
exports.getSpot = function(req, res){
  spotRepository.getSpot(req.params.id).then(function(spot){
    // rendu de la vue
    viewTitle = "Spot : "+spot.get('label');
    res.render('spot', returnRender(viewTitle));

    //Fermeture de la connexion à MongoDB
    disconnectMongo.getCloseConnectionMongo();
  });
}
