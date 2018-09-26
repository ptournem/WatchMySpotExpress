const RequireLoginMiddleware = (req,res,next) => {
  if(req.session && req.session.user && req.session.user.connected){
    return next();
  }

  var err = new Error('You must be logged in to view this page.');
  err.status = 401;
  return next(err);
}

module.exports = RequireLoginMiddleware;
