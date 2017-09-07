const mongoose = require('mongoose');

let foodSchema = mongoose.Schema({
  name: String,
  awesomeness: Number,
  isPoisonous: Boolean,
  creator: {
    name: String,
    employeeID: Number
  },
  createdOn: Date
});

module.exports = mongoose.model('food', foodSchema);
