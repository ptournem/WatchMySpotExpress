var mongoose = require('mongoose');

//Fonction de connexion à la base de données MongoDB
exports.getConnectionMongo = function(){
  mongoose.connect('mongodb://localhost:27017/watchmyspot');
  var connexion = mongoose.connection;
  connexion.on('error', console.error.bind(console, 'connection error:'));
  connexion.once('open', function () {
    return connexion;
  });
}
