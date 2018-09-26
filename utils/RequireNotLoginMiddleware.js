const RequireNotLoginMiddleware = (req,res,next) => {
  if(req.session && req.session.user && req.session.user.connected){
    res.redirect("/");
    return;
  }
  return next();
}

module.exports = RequireNotLoginMiddleware;
