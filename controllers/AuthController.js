const UserRepo = require('../repositories/UserRepository');

exports.showLogin = function(req,res){



};

exports.attemptLogin = function(req,res){
  console.log("begin attemptLogin");
  console.log(req.body);
  if(typeof req.body.password === "undefined" || typeof req.body.pseudo === "undefined"){
    console.log('missing param')
    res.redirect('/login');
    return;
  }

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
