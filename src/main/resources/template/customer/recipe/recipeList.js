const tbodyElement = document.getElementById("customer-recipe-list");

fetch("http://localhost:8080/recipes")
    .then(response => response.json())
    .then(result => {
        result.map(recipe => createTable(recipe));
    });


function createTable(recipe) {
    const cardElement = document.createElement("div");
    cardElement.innerHTML = `

        <div class="product">
      <div class="product-header">
        <img src="${recipe.image.toString()+
    recipe.image.full}" alt="">

        <ul class="icons">
          <span><i class="bx bx-heart"></i></span>
        </ul>
      </div>
      <div class="product-footer">
        <h3>${escapeHTML(recipe.name)}</h3>
        <button onclick="getRecipeId(${recipe.id})">Click Me</button>
      </div>
    </div>
    `;

    tbodyElement.appendChild(cardElement);
}
function getRecipeId(recipeId) {
    location.assign('./customer-recipe.html?recipeId='+ recipeId)

    //spiceId som står inde i url er vores jquery string dvs. som vist forneden. + spiceId er faktisk spice.id
    //const queryString = window.location.search;
    // const URLParams = new URLSearchParams(queryString);
    // const spiceId = URLParams.get("spiceId");
}