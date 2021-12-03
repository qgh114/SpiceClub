const tbodyElement = document.getElementById("create-recipe-list");

fetch(baseURL+"/recipes")
    .then(response => response.json())
    .then(result => {
        result.map(recipe => createTable(recipe));
    });


function createTable(recipe) {
    const cardElement = document.createElement("tr");
    cardElement.innerHTML = `
        <p>${escapeHTML(recipe.name)}</p>
        <img src="${recipe.image.toString()+
        recipe.image.full}" width="110">
   
    `;

    tbodyElement.appendChild(cardElement);
}