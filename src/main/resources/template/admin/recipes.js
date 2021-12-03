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
        <td>
                <p class="row-recipe-name">${escapeHTML(recipe.name)}</p>
        </td>
        
        <td>
                <button id="update-button-${recipe.id}">Updater opskrift</button>            
        </td>  
        
        <td>
                <button onclick="deleteRecipe(${recipe.id})">❌</button>            
        </td>  
             
                 
        
        
    `;
}