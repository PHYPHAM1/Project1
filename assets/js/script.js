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
        location.assign('./index.html')
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
        art.textContent = `${storedArray[i].name.toUpperCase()}`
        art.classList.add('col-lg-3')
        art.classList.add('col-md-5')
        art.classList.add('col-sm-12')
        art.classList.add('col-12')
        art.classList.add('m-1')
        container.appendChild(art)
        art.setAttribute('data-index', `${i}`)
    }
}

renderList()

form.addEventListener('submit',addRecipe);


//clickable recipe

container.addEventListener('click', function(event) {
    const element = event.target
if (element.matches('article')) {
    localStorage.setItem('recipe-choice', `${element.getAttribute('data-index')}`)
    window.location.href ="./recipe.html";
}});

