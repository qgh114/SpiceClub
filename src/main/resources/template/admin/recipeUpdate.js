const queryString = window.location.search;
const URLParams = new URLSearchParams(queryString);
const recipeId = URLParams.get("recipeId");

const recipeBody = document.getElementById("recipe-wrapper");

fetch(baseURL + "/recipes/" + recipeId)
    .then(response => response.json())
    .then(recipe => {
        createRecipesTableRow(recipe);
    });

function createRecipesTableRow(recipe){
    const recipeTableRow = document.createElement("div");
    recipeTableRow.id = recipe.id;

    recipeBody.appendChild(recipeTableRow);
    constructRecipeTableRow(recipeTableRow, recipe);
}

function constructRecipeTableRow(recipeTableRow, recipe){
    recipeTableRow.innerHTML = `
   <h1> Detaljer af ${(recipe.name)}</h1>
   <br>
   
   <br>
   <p id="recipe-description"> Beskrivelse: ${(recipe.description)}</p>
  <br>
  
   <p id="recipe-method"> Fremgangsmåde: ${(recipe.recipe_method)}</p>
   <br>
  
   <p id="recipe-ingredient"> Ingredienser: ${(recipe.ingredient)}</p>
   <br>
   <p><img id="recipe-image" src="${(recipe.image)}">Billede: virker ikke endnu</p>
   <br>
  
    <button id="update-button-${recipe.id}">Redigere</button> 
    <button onclick="myhref2(${recipe.id})">❌</button>
        
    `;

    document.getElementById(`update-button-${recipe.id}`)
        .addEventListener("click", () => {(updateRecipe(recipe))

});

}


function updateRecipe(recipe) {
    const tableRowToUpdate = document.getElementById(recipe.id);

    tableRowToUpdate.innerHTML = `
            <h1>Redigere</h1>
            <br> 
           
            <label>Navn: </label>
           <br><input id="update-recipe-name-${recipe.id}" value="${escapeHTML(recipe.name)}"><br>
           
           <br><label>Beskrivelse: </label>
            <br><textarea id="update-recipe-description-${recipe.id}">${escapeHTML(recipe.description)}</textarea><br>
            
            <br><label>Fremgangsmåde: </label>
            <br><textarea id="editor">${escapeHTML(recipe.recipe_method)}</textarea><br>
            
            <br><label>Ingredienser: </label>
            <br><textarea id="update-recipe-ingredient-${recipe.id}">${escapeHTML(recipe.ingredient)}</textarea><br>
            
            <br><label>Billede: </label>
            <br><input type="file" id="update-recipe-image-${recipe.id}"> "${(recipe.image)}"<br>
           
           <button onclick="updateRecipeBackend(${recipe.id})">✅</button><br>
          
            `;
    editText()
}


function updateRecipeBackend(recipeId) {

    const recipeRowToUpdate = document.getElementById(recipeId);

    const recipeToUpdate = {
        id: recipeId,
        name: document.getElementById(`update-recipe-name-${recipeId}`).value,
        description: document.getElementById(`update-recipe-description-${recipeId}`).value,
        recipe_method: document.getElementById(`update-recipe-recipeMethod-${recipeId}`).value,
        ingredient: document.getElementById(`update-recipe-ingredient-${recipeId}`).value,
        image: document.getElementById(`update-recipe-image-${recipeId}`).value


    };

    fetch(baseURL + "/recipes/" + recipeId, {
        method: "PATCH",
        headers: {"Content-type": "application/json; charset=UTF-8"},
        body: JSON.stringify(recipeToUpdate)
    }).then(response => {
        if (response.status === 200) {
            constructRecipeTableRow(recipeRowToUpdate, recipeToUpdate)
        }
    });
}

function editText() {
    let editor;

    ClassicEditor
        .create(document.querySelector('#editor'))
        .then(newEditor => {
            editor = newEditor;
        })
        .catch(error => {
            console.error(error);
        });
}