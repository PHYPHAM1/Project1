const nameInput = document.querySelector('#name-form')
const cookInput = document.querySelector('#cook-time-form')
const ingredientInput = document.querySelector('#ingredients-form')
const instructionInput = document.querySelector('#instructions-form')

const container = document.querySelector('.container')


function displayMessage(type, message) {
    error.textContent = message;
  }
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
        art.textContent = `${storedArray[i].name}`
        art.classList.add('col-4');
        container.appendChild(art)
        art.setAttribute('data-index', `${i}`)
    }
}

function adjustColumnClass() {
    const recipeColumn = document.querySelectorAll('article');
    recipeColumn.forEach(article => {
        if (window.matchMedia("(max-width: 768px)").matches) {
            article.classList.remove('col-4');
            article.classList.add('col-5');
        } else {
            article.classList.remove('col-5');
            article.classList.add('col-4');
        }
    });
}



adjustColumnClass()
renderList()

window.addEventListener('resize', adjustColumnClass);
form.addEventListener('submit',addRecipe);


//clickable recipe
// const card = document.querySelectorAll('article')

container.addEventListener('click', function(event) {
    const element = event.target
if (element.matches('article')) {
    localStorage.setItem('recipe-choice', `${element.getAttribute('data-index')}`)
    window.location.href ="./recipe.html";
}});

