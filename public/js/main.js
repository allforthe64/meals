const deleteBtn = document.querySelectorAll('.del')
const mealItem = document.querySelectorAll('span.not')
const mealComplete = document.querySelectorAll('span.completed')
const rDel = document.getElementById('r-del')

// rDel.addEventListener('click', () => { 
//     document.getElementById('random-card').remove()
// })

Array.from(deleteBtn).forEach((el)=>{
    el.addEventListener('click', deleteMeal)
})

Array.from(mealItem).forEach((el)=>{
    el.addEventListener('click', markComplete)
})

Array.from(mealComplete).forEach((el)=>{
    el.addEventListener('click', markIncomplete)
})

async function deleteMeal(){
    const mealId = this.parentNode.parentNode.dataset.id
    try{
        const response = await fetch('/meals/deleteMeal', {
            method: 'delete',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'mealIdFromJSFile': mealId
            })
        })
        const data = await response.json()
        console.log(data)
        location.replace("/meals")
    }catch(err){
        console.log(err)
    }
}

async function markComplete(){
    const mealId = this.parentNode.dataset.id
    try{
        const response = await fetch('meals/markComplete', {
            method: 'put',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'mealIdFromJSFile': mealId
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    }catch(err){
        console.log(err)
    }
}

async function markIncomplete(){
    const mealId = this.parentNode.dataset.id
    try{
        const response = await fetch('meals/markIncomplete', {
            method: 'put',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'mealIdFromJSFile': mealId
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    }catch(err){
        console.log(err)
    }
}
