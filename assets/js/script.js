const nameInput = document.querySelector('#name-form')
const cookInput = document.querySelector('#cook-time-form')
const ingredientInput = document.querySelector('#ingredients-form')
const instructionInput = document.querySelector('#instructions-form')

//clickable recipe list variable
const card = document.querySelector('#container');

const error = document.querySelector('#error')
const form = document.querySelector('form')

function addRecipe(event) {
    event.preventDefault();

    const recipeList = {
        name: nameInput.value.trim(),
        cooktime: cookInput.value.trim(),
        ingredients: ingredientInput.value.trim(),
        instructions: instructionInput.value.trim()
    };
    if (recipeList.name === '' || recipeList.cooktime === '' || recipeList.ingredients === '' || recipeList.instructions === '') {
        error.textContent = 'Please complete the form.';
      } else {
        recipeStorage(recipeList)
        nameInput.value = ''
        cookInput.value = ''
        ingredientInput.value = ''
        instructionInput.value = ''
        error.textContent = 'Submitted Recipe Successfully';
        setTimeout(function(){location.assign('./index.html')}, 500)
        // let redirectURL = "./recipe.html";
        // redirectPage (redirectURL);
      }
}

function recipeStorage(recipeList) {
    const storedArray = readRecipeList()
    storedArray.push(recipeList)
    localStorage.setItem('recipe', JSON.stringify(storedArray));
}

// function redirectPage (url) {
//     window.location.href = url;
// }
// don't need to redirect to recipe page after filling form, leave that to the recipe list

// function readLocalStorage () {
//     let recipeCollection = JSON.parse(localStorage.getItem('recipeCollection')) || [];
//     return recipeCollection;
// }
// shouldn't be necessary, read function is in shared.js

form.addEventListener('submit',addRecipe);


//clickable recipe
card.addEventListener('click', function() {
    localStorage.setItem('recipe-choice', `${card.getAttribute('data-index')}`)
    window.location.href ="./recipe.html";
});

