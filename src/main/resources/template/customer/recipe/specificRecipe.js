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
        
     <h1>${escapeHTML(recipe.name)}</h1>

    <div class="sectionwrapper">

        <div class="col">
            <figure>
                <img src="${recipe.image.toString()}" width="400" alt="">
                <h3>Ingredienser</h3>
                <p>${escapeHTML(recipe.ingredient)}</p>
                <p>${escapeHTML(recipe.ingredient)}</p>
                <p>${escapeHTML(recipe.ingredient)}</p>
                <p>${escapeHTML(recipe.ingredient)}</p>
            </figure>
        </div>

        <div class="col">
            <h3>Hvad er ..... ?</h3>
            <p>${escapeHTML(recipe.description)}
            </p>

            <h3>Fremgangsmåde</h3>
            <p>${escapeHTML(recipe.recipeMethod)}</p>
        </div>
        </div>
    `;

    tbodyElement.appendChild(cardElement);

    }