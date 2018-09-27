const spotRepository = require('../repositories/spotRepository');
const disconnectMongo = require('../utils/disconnectMongo');
const wms_render = require('../utils/render');

var viewTitle;

//Fonction qui retourne les informations d'un spot
exports.getSpot = function(req, res){
  spotRepository.getSpot(req.params.id).then(function(spot){
    // rendu de la vue
    viewTitle = "Spot : "+spot.get('label');
    res.render('spot', wms_render.returnRender(viewTitle));

    //Fermeture de la connexion à MongoDB
    disconnectMongo.getCloseConnectionMongo();
  });
}

//Fonction pour la vue des spots favori d'un utilisateur
exports.mySpot = function(req, res){
    res.render('spot', wms_render.returnRender("Mes Spots favoris"));
}
