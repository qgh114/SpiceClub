const tbodyElement = document.getElementById("recipe-tbody");

fetch(baseURL+"/recipes")
    .then(response => response.json())
    .then(result => {
        result.map(recipe => createTable(recipe));
    });


function createTable(recipe) {
    const cardElement = document.createElement("tr");
    cardElement.innerHTML = `
        <td>${escapeHTML(recipe.name)}</td>
        <td>${recipe.image}</td>
   
    `;

    tbodyElement.appendChild(cardElement);
}