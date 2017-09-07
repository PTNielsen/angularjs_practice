const foodRouter = require('express').Router();
const Food = require('../models/food.model.js');

// GET ALL THE FOODS
foodRouter.get('/', function showAllFoods(req, res, next) {
  // res.set('Content-Type', 'application/json');
  // res.end(JSON.stringify(allFoods));
  // ORRRR we would just do this..
  
  Food.find()
    .then(function handleResponse(data) {
      res.json(data);
    })
    .catch(function handleError(err) {
      // Good practice not to send errors from DB back to
      // the user - big security issue
      console.log(err);
      let ourError = new Error('Unable to retrieve foods.');
      ourError.status = 500;
      next(ourError);
    });
});

// GET A FOOD BY QUERY STRING CRITERIA
foodRouter.get('/find', function getMatchingFood(req, res, next) {
  Food.find({ name: {$regex: req.query.name, $options: 'i'} })
    .then(function handleResponse(data) {
      res.json(data);
    })
    .catch(function handleError(err) {
      next(err);
    });
});

// GET A FOOD
foodRouter.get('/:id', function getAFood(req, res, next) {
  Food.findById(req.params.id)
    .then(function handleResponse(data) {
      if (!data) {
        let ourError = new Error('Unable to retrieve the food.');
        ourError.status = 404;
        return next(ourError);
      }
      res.json(data);
    })
    .catch(function handleError(err) {
      // Good practice not to send errors from DB back to
      // the user - big security issue
      console.log(err);
      let ourError = new Error('Something went wrong.');
      ourError.status = 500;
      next(ourError);
    });
});

function makeAFood(req, res, next) {
  console.log('incoming data for POST', req.body);
  // if (!req.body.food) {
  //   let err = new Error('You must provide a food');
  //   err.status = 400;
  //   return next(err);
  // };

  let newFood = new Food({
    name: req.body.name,
    awesomeness: req.body.awesomeness,
    isPoisonous: req.body.isPoisonous
  });

  newFood.save()
    .then(function handleResponse(data) {
      res.json({message: 'Food made!', addedFood: data});
    })
    .catch(function handleError(err) {
      // Good practice not to send errors from DB back to
      // the user - big security issue
      console.log(err);
      let ourError = new Error('Unable to save food.');
      ourError.status = 422;
      next(ourError);
    });
};

foodRouter.post('/', makeAFood);

module.exports = foodRouter;
