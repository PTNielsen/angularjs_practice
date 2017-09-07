module.exports = function errorHandling(err, req, res, next) {
  console.log('ERROR: ', err.message);
  res.status(err.status || 500);

  res.json({message: err.message, time: Date.now()});
};
