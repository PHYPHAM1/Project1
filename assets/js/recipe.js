
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

const index = localStorage.getItem(`recipe-choice`)


//render recipe details into page
const renderRecipe = function(array) {
    if (localStorage.getItem(`recipe-choice`)) {
    title.textContent = `${array[index].name}`;
    recipeName.textContent = `${array[index].name}`;
    cookTime.textContent = `${array[index].cooktime}`;
    ingredients.textContent = `${array[index].ingredients}`;
    instructions.textContent = `${array[index].instructions}`;
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



//add listener for edit form

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
        nameEdit.value = ''
        cookTimeEdit.value = ''
        ingredientsEdit.value = ''
        instructionsEdit.value = ''
        error.textContent = 'Recipe Saved';
        setTimeout(function(){location.assign('./recipe.html')}, 500)
      }
}

form.addEventListener('submit', editRecipe)


