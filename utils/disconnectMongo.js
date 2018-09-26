var mongoose = require('mongoose');

//Fonction qui permet de cloturer la connexion à la bdd Mongo
exports.getCloseConnectionMongo = function(){
  mongoose.connection.close();
}
