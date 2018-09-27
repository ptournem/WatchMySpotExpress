const spotRepository = require('../repositories/spotRepository');
const disconnectMongo = require('../utils/disconnectMongo');
const wms_render = require('../utils/render');

var viewTitle;
var spots = [];
//Fonction de retour d'attribut pour la vue
function returnRender(viewTitle, spots){
  var obj =  {
      title: viewTitle,
      home: 'Accueil',
      search: 'Recherche',
      login: 'Connexion',
      spot: 'Mes spots',
      application: 'Une application pour les surfeurs à la recherche de nouveaux spot de surf!',
      tchat: 'Chat en ligne',
      spots: spots
    };

    return obj;
}

// Fonction qui retourne tous les spots
exports.getTenBestSpots = function(req, res) {
  spotRepository.getTenBestSpots().then(function(spotsData){
    viewTitle = "Watch My Spot";
    spotsData.forEach(function (spot, index) {
      console.log(spot);
      // Si la donnée lue n'est pas un nombre, on la retire du tableau
      if (typeof(spot.get('longitude') !== 'number' || typeof(spot.get('latitude') !== 'number'))) {
        console.log('location is not a number : ' + typeof(spot.get('longitude')) + ' ' + spot.get('latitude') + '/' + spot.get('longitude'));
        return;
      }
      spots.push({latitude: spot.get('latitude'), longitude: spot.get('longitude'), note: spot.get('note'), label: spot.get('label')});
    });
    res.render('index', returnRender(viewTitle, spots));
    //Fermeture de la connexion à MongoDB
    disconnectMongo.getCloseConnectionMongo();
  });
}

//Fonction qui retourne les informations d'un spot
exports.getSpot = function(req, res){
  spotRepository.getSpot(req.params.id).then(function(spot, error){
    if(!spot){ //Spot introuvable
      viewTitle = 'Spot introuvable';
    }else{ //Spot trouvé
      viewTitle = "Spot : "+spot.get('label');
    }
    // rendu de la vue
    res.render('spot', wms_render.returnRender(viewTitle));

    //Fermeture de la connexion à MongoDB
    disconnectMongo.getCloseConnectionMongo();
  });
}

//Fonction pour la vue des spots favori d'un utilisateur
exports.mySpot = function(req, res){
    res.render('spot', wms_render.returnRender("Mes Spots favoris"));
}
