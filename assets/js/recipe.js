
let btnBack = document.querySelector('#home');

const recipeName = document.querySelector(`#name-recipe`)
const cookTime = document.querySelector(`#cook-time-recipe`)
const ingredients = document.querySelector(`#ingredients-recipe`)
const instructions = document.querySelector(`#instructions-recipe`)
const title = document.querySelector(`title`)

const edit = document.querySelector('#edit-recipe')
const nameEdit = document.querySelector('#name-edit')
const cookTimeEdit = document.querySelector('#cook-time-edit')
const ingredientsEdit = document.querySelector('#ingredients-edit')
const instructionsEdit = document.querySelector('#instructions-edit')
const form = document.querySelector('form')

const deleteConfirm = document.querySelector('#confirm-delete')
const message = document.querySelector('#message')

const index = localStorage.getItem(`recipe-choice`)


//render recipe details into page
const renderRecipe = function(array) {
    if (localStorage.getItem(`recipe-choice`)) {
    title.textContent = `${array[index].name}`;
    recipeName.innerText = `${array[index].name}`;
    cookTime.innerText = `${array[index].cooktime}`;
    ingredients.innerText = `${array[index].ingredients}`;
    instructions.innerText = `${array[index].instructions}`;
    }
    else {
    recipeName.textContent = `Recipe not found`
    }

}

//back button
btnBack.addEventListener('click', () => {
    window.location.assign("index.html");
});

renderRecipe(readRecipeList())



//add listener for edit button

edit.addEventListener('click', function() {
    const object = readRecipeList()[index]
nameEdit.value =`${object.name}`
cookTimeEdit.value = `${object.cooktime}`
ingredientsEdit.value = `${object.ingredients}`
instructionsEdit.value = `${object.instructions}`
})

//create object with form data, splice into chosen index in array, set local storage to newly spliced array

function editRecipe(event) {
    event.preventDefault();

    const array = readRecipeList()
    const recipeList = {
        name: nameEdit.value.trim(),
        cooktime: cookTimeEdit.value.trim(),
        ingredients: ingredientsEdit.value.trim(),
        instructions: instructionsEdit.value.trim()
    };
    if (recipeList.name === '' || recipeList.cooktime === '' || recipeList.ingredients === '' || recipeList.instructions === '') {
        error.textContent = 'Please complete the form.';
      } else {
        array.splice(index, 1, recipeList)
        localStorage.setItem('recipe', JSON.stringify(array))
        location.assign('./recipe.html')
      }
}

form.addEventListener('submit', editRecipe)

// add delete recipe function

function deleteRecipe() {
    const array = readRecipeList()
    array.splice(index, 1)
    localStorage.setItem('recipe', JSON.stringify(array))
    localStorage.setItem('recipe-choice', '')
    location.assign('./index.html')
}



// add event listener modal delete confirm button

deleteConfirm.addEventListener('click', deleteRecipe)
