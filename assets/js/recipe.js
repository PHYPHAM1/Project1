const nameInput = document.querySelector('#name-form')
const cookInput = document.querySelector('#cook-time-form')
const ingredientInput = document.querySelector('#ingredients-form')
const instructionInput = document.querySelector('#instructions-form')

function displayMessage(type, message) {
    error.textContent = message;
  }

function addRecipe(event) {
    event.preventDefault();

    const recipeList = {
        cooktime: cookInput.value.trim(),
        ingredients: ingredientInput.value.trim(),
        instructions: instructionInput.value.trim()
    };
    if (recipeList.cooktime === '' || recipeList.ingredients === '' || recipeList.instructions === '') {
        displayMessage('error', "Please complete the form.");
      } else {
        displayMessage('success', 'Submitted Recipe Successfully');
        recipeStorage(recipeList)
        
        let redirectURL = "./recipe.html";
        redirectPage (redirectURL);
      }
}


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
