const Meal = require('../models/Meal')

module.exports = {
    getMeals: async (req,res)=>{
        console.log(req.user)
        try{
            const mealsItems = await Meal.find({userId:req.user.id})
            const itemsLeft = await Meal.countDocuments({userId:req.user.id,completed: false})
            res.render('meals.ejs', {meals: mealsItems, left: itemsLeft, user: req.user})
        }catch(err){
            console.log(err)
        }
    },
    createMeal: async (req, res)=>{
        try{
            await Meal.create({meal: req.body.mealsItem, completed: false, userId: req.user.id})
            console.log('Meal has been added!')
            res.redirect('/meals')
        }catch(err){
            console.log(err)
        }
    },
    markComplete: async (req, res)=>{
        try{
            await Meal.findOneAndUpdate({_id:req.body.mealIdFromJSFile},{
                completed: true
            })
            console.log('Marked Complete')
            res.json('Marked Complete')
        }catch(err){
            console.log(err)
        }
    },
    markIncomplete: async (req, res)=>{
        try{
            await Meal.findOneAndUpdate({_id:req.body.mealIdFromJSFile},{
                completed: false
            })
            console.log('Marked Incomplete')
            res.json('Marked Incomplete')
        }catch(err){
            console.log(err)
        }
    },
    deleteMeal: async (req, res)=>{
        console.log(req.body.mealIdFromJSFile)
        try{
            await Meal.findOneAndDelete({_id:req.body.mealIdFromJSFile})
            console.log('Deleted Meal')
            res.json('Deleted It')
        }catch(err){
            console.log(err)
        }
    }
}    