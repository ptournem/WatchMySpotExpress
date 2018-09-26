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
  console.log("begin attemptLogin");
  console.log(req.body);
  if(typeof req.body.password === "undefined" || typeof req.body.pseudo === "undefined"){
    console.log('missing param')
    res.redirect('/login');
    return;
  }

  const {pseudo,password} = req.body;

  console.log("attemptLogin has params");
  UserRepo.attemptLogin(pseudo, password).then(function(success){
    console.log('success ? ');
    console.log(success);
    if(success){
      res.redirect('/');
    }

    res.redirect('/login');
  });
}
