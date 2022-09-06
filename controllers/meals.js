const Meal = require('../models/Meal')

module.exports = {
    getMeals: async (req,res)=>{
        console.log(req.user)
        try{
            const mealItems = await Meal.find({userId:req.user.id})
            const itemsLeft = await Meal.countDocuments({userId:req.user.id,completed: false})
            res.render('meals.ejs', {meals: mealItems, left: itemsLeft, user: req.user, selector:-1})
        }catch(err){
            console.log(err)
        }
    },
    createMeal: async (req, res)=>{
        try{
            await Meal.create({meal: req.body.mealItem, link: req.body.link, userId: req.user.id, completed: false, img: req.body.img, tag:req.body.tag})
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
        console.log(`here I am ${req.body.mealIdFromJSFile}`)
        try{
            await Meal.findOneAndDelete({_id:req.body.mealIdFromJSFile})
            console.log('Deleted Meal')
            res.json('Deleted It')
        }catch(err){
            console.log(err)
        }
    },
    getRandomMeal: async (req, res)=>{
        try{
            const mealItems = await Meal.find({userId:req.user.id})

            //get a random meal out of the array
            let randomNumber = Math.floor(Math.random() * (mealItems.length))

            console.log(randomNumber)

            res.render('meals.ejs', {meals: mealItems, user: req.user, selector: randomNumber})
        }catch(err){
            console.log(err)
        }
    }
}    