const tbodyElement = document.getElementById("customer-recipe-list");

fetch("http://localhost:8080/recipes")
    .then(response => response.json())
    .then(result => {
        result.map(recipe => createTable(recipe));
    });


function createTable(recipe) {
    const cardElement = document.createElement("div");
    cardElement.innerHTML = `

     <section class="container">
  <div class="item">
  <a href="customer-recipe.html?recipeId=${recipe.id}">
    <img src="${recipe.image.toString()}" width="266" alt="">
        <p>${(recipe.name)}</p>
       
        
        <p class="kurv">
         <p>Hjerte</p>
  
  </p>
</div>
</section>
         
    `;
    tbodyElement.appendChild(cardElement);
}
function getRecipeId(recipeId) {
    location.assign('./customer-recipe.html?recipeId='+ recipeId)

}