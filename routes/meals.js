const express = require('express')
const router = express.Router()
const mealsController = require('../controllers/meals') 
const { ensureAuth } = require('../middleware/auth')

router.get('/', ensureAuth, mealsController.getMeals)

router.post('/createMeal', mealsController.createMeal)

router.put('/markComplete', mealsController.markComplete)

router.put('/markIncomplete', mealsController.markIncomplete)

router.delete('/deleteMeal', mealsController.deleteMeal)

router.get('/getRandomMeal', mealsController.getRandomMeal)

module.exports = router