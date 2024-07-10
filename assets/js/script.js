const nameInput = document.querySelector('#name-form')
const cookInput = document.querySelector('#cook-time-form')
const ingredientInput = document.querySelector('#ingredients-form')
const instructionInput = document.querySelector('#instructions-form')

const container = document.querySelector('.container')

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

function renderList() {
    const storedArray = readRecipeList()
    for (i = 0; i < storedArray.length; i++) {
        const art = document.createElement('article')
        const artName = document.createElement('h3')
        artName.textContent = `${storedArray[i].name}`
        container.appendChild(art)
        art.appendChild(artName)
        art.setAttribute('data-index', `${i}`)
    }
}

renderList()

form.addEventListener('submit',addRecipe);


//clickable recipe
const card = document.querySelectorAll('article')

card.addEventListener('click', function() {
    localStorage.setItem('recipe-choice', `${card.getAttribute('data-index')}`)
    window.location.href ="./recipe.html";
});

