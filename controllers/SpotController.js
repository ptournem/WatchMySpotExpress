const spotRepository = require('../repositories/spotRepository');
const disconnectMongo = require('../utils/disconnectMongo');
const wms_render = require('../utils/render');

var viewTitle;
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
  const spots = [];
  spotRepository.getTenBestSpots().then(function(spotsData){
    viewTitle = "Watch My Spot";
    spotsData.map(o=>o.toObject()).forEach(function (spot, index) {
      const {latitude, longitude, note, label} = spot;
      spots.push({latitude, longitude, note, label});
    });

    console.log(spots);
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
