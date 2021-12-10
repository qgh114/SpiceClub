const tbodyElement = document.getElementById("customer-recipe-list");

fetch("http://localhost:8080/recipes")
    .then(response => response.json())
    .then(result => {
        result.map(recipe => createTable(recipe));
    });

console.log("hej")
function createTable(recipe) {
    const cardElement = document.createElement("div");
    cardElement.innerHTML = `

     <section class="container">
  <div class="item">
  <a href="customer-recipe.html?recipeId=${recipe.id}">
    <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fgranditaliacdnprodimages.azureedge.net%2Ffiles%2Fimported_images%2Frecipes%2F700%2F000000000000SPAGUETTI_01.jpg&f=1&nofb=1" width="266" alt="">
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