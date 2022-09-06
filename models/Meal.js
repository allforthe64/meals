const mongoose = require('mongoose')

const MealSchema = new mongoose.Schema({
  meal: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
  userId: {
    type: String,
    required: true
  },
  img: {
    type: String,
    default: '',
  },
  tag: {
    type: String,
    default: ''
  },
})

module.exports = mongoose.model('Meal', MealSchema)
