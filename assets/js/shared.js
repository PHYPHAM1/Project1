let recipeArray

// read our recipe data from local storage
const readRecipeList = function() {
    
    if (!localStorage.getItem(`recipe`))
        {recipeArray = []}
    else
        {recipeArray = JSON.parse(localStorage.getItem(`recipe`))}

return recipeArray
}

