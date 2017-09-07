module.exports = function authentication(req, res, next) {
  console.log(req.headers);
  // If there is no Authorization header do this
  if (!req.headers.authorization) {
    let err    = new Error('You are not authenticated. GTFO.');
    err.status = 401

    return next(err);
  }
  
  // Properly check auth here if there is a token
  // in the authorization header but just next() for now
  next();
};
