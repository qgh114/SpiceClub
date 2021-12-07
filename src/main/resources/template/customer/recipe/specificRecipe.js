const queryString = window.location.search;
const URLParams = new URLSearchParams(queryString);
const recipeId = URLParams.get("recipeId");

const tbodyElement = document.getElementById("specific-recipe");
 let results;
fetch("http://localhost:8080/recipes/"+ recipeId)
    .then(response => response.json())
    .then(result => {
        console.log(result)
        //results.map(recipe => createTable(recipe));
            createTable(result)
    });


function createTable(recipe) {
    const cardElement = document.createElement("div");
    cardElement.innerHTML = `
        
       
      <div class="product-footer">
        <h3 id>${(recipe.name)}</h3>
        <img src="${recipe.image.toString()}" width="400px" alt="">
        <h4>Beskrivelse</h4>
        <p class="recipe-desc">${(recipe.description)}</p>
        <h5>Ingredienser</h5>
        <p>${(recipe.ingredient)}</p>
        <h6>Fremgangsmåde</h6>
        <p class="recipe-method">${(recipe.recipeMethod)}</p>
      </div>
    
    `;

    tbodyElement.appendChild(cardElement);

    }