const tbodyElement = document.getElementById("customer-recipe-list");

fetch(baseURL+"/recipes")
    .then(response => response.json())
    .then(result => {
        result.map(recipe => createTable(recipe));
    });


function createTable(recipe) {
    const cardElement = document.createElement("div");
    cardElement.innerHTML = `
        <p class="recipe-name">${escapeHTML(recipe.name)}</p>
        <p class="recipe-img"><img src="${recipe.image.toString()+
        recipe.image.full}" width="200"></p>
        <p class="recipe-desc">${escapeHTML(recipe.description)}</p>
        <p class="recipe-method">${escapeHTML(recipe.recipeMethod)}</p>
    `;

    tbodyElement.appendChild(cardElement);
}
