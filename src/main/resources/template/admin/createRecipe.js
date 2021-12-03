const createRecipeForm = document.getElementById("recipe");

function createRecipe(){
    const recipeToCreate = {
        name:document.getElementById("create-recipe-name").value,
        recipeMethod:document.getElementById("create-recipe-recipeMethod").value,
        recipeMethod:document.getElementById("create-recipe-recipeMethod").value,
        ingredient:document.getElementById("create-recipe-ingredient").value,
        image:document.getElementById("create-recipe-image").value,
        description:document.getElementById("create-recipe-description").value

    }

    fetch("http://localhost:8080/recipes", {
        method: "POST",
        headers: {"Content-type": "application/json; charset=UTF-8"},
        body: JSON.stringify(recipeToCreate)
    })
        .then(response => response.json())
        .catch(error => console.log(error));
}