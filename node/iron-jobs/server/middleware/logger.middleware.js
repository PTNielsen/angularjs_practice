module.exports = function logger(req, res, next) {
  console.log('New Request: ', req.url, req.body);
  next();
};
