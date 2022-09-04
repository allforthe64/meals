const mongoose = require('mongoose')

const MealSchema = new mongoose.Schema({
  meal: {
    type: String,
    required: true,
  },
  completed: {
    type: Boolean,
    required: true,
  },
  userId: {
    type: String,
    required: true
  },
  completed: {
    type: Boolean,
    required: true
  },
  img: {
    type: String,
    default: '',
  }
})

module.exports = mongoose.model('Meal', MealSchema)
