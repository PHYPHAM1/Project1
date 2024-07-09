



const recipeName = document.querySelector(`#name-recipe`)
const cookTime = document.querySelector(`#cook-time-recipe`)
const ingredients = document.querySelector(`#ingredients-recipe`)
const instructions = document.querySelector(`#instructions-recipe`)
const title = document.querySelector(`title`)

const edit = document.querySelector('#edit-recipe')
const nameEdit = document.querySelector('#name-edit')
const cookTimeEdit = document.querySelector('cook-time-edit')
const ingredientsEdit = document.querySelector('ingredients-edit')
const instructionsEdit = document.querySelector('instructions-edit')

const index = localStorage.getItem(`recipe-choice`)

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



renderRecipe(readRecipeList())

// to-do add functionality to edit current recipe

edit.addEventListener('click', function() {
nameEdit.innerText(`${array[`recipe-choice`].name}`)
cookTimeEdit.innerText(`${array[`recipe-choice`].cooktime}`)
ingredientsEdit.innerText(`${array[`recipe-choice`].ingredients}`)
instructionsEdit.innerText(`${array[`recipe-choice`].instructions}`)
})




// to-do addEventListener for back button to redirect to landing page
