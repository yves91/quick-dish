//BASE URL --- https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata

//Need to wrap all code in window.onload function for addEventListener to work            
window.onload = function(){

let searchBtn = document.getElementById('submitBtn');
searchBtn.addEventListener('click', mealSearch);

function mealSearch(openRecipe, deleteMeal){

const ingredientInput = document.getElementById('searchIngredient').value;
const baseUrl= `https://www.themealdb.com/api/json/v1/1/search.php?s=${ingredientInput}`;
    
    fetch(baseUrl)    
        .then(res => res.json())
        .then(data => {
            if (document.getElementById("containerFood").innerHTML = " "){
				for (let i = 0; i < data.meals.length; i++){
				document.querySelector('#containerFood').innerHTML +=
					`
						<div id="dynamicMeal">
							<img src="${data.meals[i].strMealThumb}" alt="">           
							<div id="titleAndBtn">
							<h2 id="mealTitle">${data.meals[i].strMeal}</h2>
													
							<p id="mealCategory">${data.meals[i].strCategory}</p>
							<p id="mealArea">${data.meals[i].strArea}</p>
							
							<details id="readRecipe">
							<summary id="openRecipe">See Recipe</summary>
							<p>${data.meals[i].strInstructions}</p>
							</details>									
								
							</div>      
						</div>
					`  			
				}//End of for loop to display image and meal name   
				
			}   //End of if function

        });     //End of data function

    }           //End of mealSearch()
  
};

function deleteMeal(){
    document.querySelector('#containerFood').innerHTML = "";
}