var mongoose = require('mongoose');
const connectMongo = require('../utils/connectMongo');
const schema_spot = require('../schema/spot');
const wms_render = require('../utils/render');

//récupération de la connexion a Mongo
var modelSpot = mongoose.model('spots', schema_spot);

//Fonction qui récupère les informations d'un spot
exports.getSpot = function(idSpot){
    return new Promise(function(resolve, reject){
      var connexion = connectMongo.getConnectionMongo();
      modelSpot.findById(idSpot, function (err, spotSurf) {
        if (err) resolve(false);

        resolve(spotSurf);
      });
  });
}
