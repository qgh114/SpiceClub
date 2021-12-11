const queryString = window.location.search;
const URLParams = new URLSearchParams(queryString);
const recipeId = URLParams.get("recipeId");

const tbodyElement = document.getElementById("om-section");
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
        
     <h1>${(recipe.name)}</h1>

    <div class="sectionwrapper">

        <div class="col">
            <figure>
                <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fgranditaliacdnprodimages.azureedge.net%2Ffiles%2Fimported_images%2Frecipes%2F700%2F000000000000SPAGUETTI_01.jpg&f=1&nofb=1" width="400" alt="">
                <h3>Ingredienser</h3>
                <p>${(recipe.ingredient)}</p>
            </figure>
        </div>

        <div class="col">
            <h3>Beskrivelse</h3>
            <p>${(recipe.description)}
            </p>

            <h3>Fremgangsmåde</h3>
            <p>${(recipe.recipe_method)}</p>
            
        </div>
        </div>
    `;

    tbodyElement.appendChild(cardElement);

    }