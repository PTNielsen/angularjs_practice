module.exports = function logStuff(req, res, next) {
  console.log('New Request: ', req.url, req.body);
  next();
};
