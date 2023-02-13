
var btn =document.getElementById("btn");
let card;

btn.addEventListener("click",()=>{
    console.log(meals)
})
const searched = 'v'
fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searched}`)
.then((response)=> response.json()
)
.then((data)=>{
    console.log(data.meals)
    const meals = data.meals

    meals.forEach(meal => {
         card = document.createElement("div")
        card.classList.add("card")
     const htm = `
     <img src="${meal.strMealThumb}" alt="" width="100%">
     <p>${meal.strMeal}</p>
     `
       card.innerHTML = htm
    
   container.append(card)
        
    }); 
    
    
})
.catch((error)=>{
    console.log(error)
})
var container =document.getElementById("container");



