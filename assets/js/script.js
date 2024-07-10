const nameInput = document.querySelector('#name-form')
const cookInput = document.querySelector('#cook-time-form')
const ingredientInput = document.querySelector('#ingredients-form')
const instructionInput = document.querySelector('#instructions-form')

const container = document.querySelector('.container')

const error = document.querySelector('#error')
const form = document.querySelector('form')


// take info from our recipe submission to create an object
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
      }
}
// take our submitted recipe object and push it into local storage
function recipeStorage(recipeList) {
    const storedArray = readRecipeList()
    storedArray.push(recipeList)
    localStorage.setItem('recipe', JSON.stringify(storedArray));
}
// function to render recipe list
function renderList() {
    const storedArray = readRecipeList()
    for (i = 0; i < storedArray.length; i++) {
        const art = document.createElement('article')
        art.textContent = `${storedArray[i].name}`
        art.classList.add('col-4');
        container.appendChild(art)
        art.setAttribute('data-index', `${i}`)
    }
    adjustColumnClass();
    // will run adjustment automatically on page load
}

function adjustColumnClass() {
    const recipeColumns = document.querySelectorAll('article');
    recipeColumns.forEach(article => {
        if (window.matchMedia("(min-width: 768px)").matches) {
            article.classList.remove('col-6', 'col-12');
            article.classList.add('col-4');
        } else if (window.matchMedia("(min-width: 576px)").matches) {
            article.classList.remove('col-4', 'col-12');
            article.classList.add('col-6');
        } else {
            article.classList.remove('col-4', 'col-6');
            article.classList.add('col-12');
        }
    });
}



adjustColumnClass()
renderList()

window.addEventListener('resize', adjustColumnClass);
form.addEventListener('submit',addRecipe);


//clickable recipe

container.addEventListener('click', function(event) {
    const element = event.target
if (element.matches('article')) {
    localStorage.setItem('recipe-choice', `${element.getAttribute('data-index')}`)
    window.location.href ="./recipe.html";
}});

