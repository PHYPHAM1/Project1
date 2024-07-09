


form.addEventListener('submit',addRecipe);
const recipeName = document.querySelector(`#name-recipe`)
const cookTime = document.querySelector(`#cook-time-recipe`)
const ingredients = document.querySelector(`#ingredients-recipe`)
const instructions = document.querySelector(`#instructions-recipe`)
const title = document.querySelector(`title`)


const renderRecipe = function(array) {
    const index = localStorage.getItem(`recipe-choice`)
    title.textContent = `${array[index].name}`
    recipeName.textContent = `${array[index].name}`
    cookTime.textContent = `${array[index].cooktime}`
    ingredients.textContent = `${array[index].ingredients}`
    instructions.textContent = `${array[index].instructions}`
}



renderRecipe(readRecipeList())


// to-do addEventListener for back button to redirect to landing page
