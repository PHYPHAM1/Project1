let recipeArray

const readRecipeList = function() {
    
    if (!localStorage.getItem(`recipes`))
        {recipeArray = []}
    else
        {recipeArray = JSON.parse(localStorage.getItem(`recipes`))}

return recipeArray
}