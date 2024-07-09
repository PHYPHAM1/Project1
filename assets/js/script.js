function recipeStorage(recipeList) {
    localStorage.setItem('recipe', JSON.stringify(recipeList));
}

function redirectPage (url) {
    window.location.href = url;
}
