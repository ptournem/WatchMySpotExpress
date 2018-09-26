const UserRepo = require('../repositories/UserRepository');

exports.showLogin = function(req,res){
  viewTitle = "Connexion";
  res.render('login', {
      title: viewTitle,
      home: 'Accueil',
      search: 'Recherche',
      login: 'Connexion',
      spot: 'Mes spots',
      application: 'Une application pour les surfeurs à la recherche de nouveaux spot de surf!',
      tchat: 'Chat en ligne'
    });
};

exports.attemptLogin = function(req,res){
  if(req.body.password === "" || req.body.pseudo === ""){
    res.redirect('/auth');
    return;
  }

  const {pseudo,password} = req.body;

  UserRepo.attemptLogin(pseudo, password).then(function(success){
    if(success){
      req.session.user = {pseudo, connected : true};
      res.redirect('/');
      return;
    }
    res.redirect('/auth');
  });
}
