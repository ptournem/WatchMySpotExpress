const UserRepo = require('../repositories/UserRepository');
const jwt = require('jsonwebtoken');

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

exports.logout = function(req,res){
  req.session.destroy((err)=>{console.log(err)});
  res.redirect('/');
}

exports.signup = (req,res) => {
const JWTToken = jwt.sign({
    user : req.fingerprint.hash,
    user_id : 1
  },
  'secret');

  res.status(200).json({
    success: 'Welcome to the JWT Auth',
    token: JWTToken
  });
}

exports.connect_jwt = (req,res) =>  {
  const verified = jwt.verify(req.query.token,'secret');
  console.log(verified);
  res.status(200).json(verified);
}
