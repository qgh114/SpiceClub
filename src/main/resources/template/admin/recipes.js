const recipesTableBody = document.getElementById("recipe-tbody");

fetch("http://localhost:8080/recipes")
    .then(response => response.json())
    .then(data => {
        data.map(createRecipesTableRow);
    });

function createRecipesTableRow(recipe){
    const recipeTableRow = document.createElement("tr");
    recipeTableRow.id = recipe.id;

    recipesTableBody.appendChild(recipeTableRow);
    constructRecipeTableRow(recipeTableRow, recipe);
}

function constructRecipeTableRow(recipeTableRow, recipe){
    recipeTableRow.innerHTML = `
   
     <td id="recipe-name">${(recipe.name)}</td>
    
    <td><button id="expand-recipe-"${recipe.id} onclick="myhref3(${recipe.id})">🖊️</button></td>
        
    `;

}

function myhref3(recipeId) {
    location.assign('./updateRecipe.html?recipeId='+ recipeId)

}

