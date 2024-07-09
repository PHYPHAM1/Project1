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

function recipeStorage(recipeList) {
    localStorage.setItem('recipe', JSON.stringify(recipeList));
}

function redirectPage (url) {
    window.location.href = url;
}

function readLocalStorage () {
    let recipeCollection = JSON.parse(localStorage.getItem('recipeCollection')) || [];
    return recipeCollection;
}

form.addEventListener('submit',addRecipe);