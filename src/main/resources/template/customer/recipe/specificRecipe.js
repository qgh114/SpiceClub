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
                <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fgranditaliacdnprodimages.azureedge.net%2Ffiles%2Fimported_images%2Frecipes%2F700%2F000000000000SPAGUETTI_01.jpg&f=1&nofb=1" width="400" alt="">
                <h3>Ingredienser</h3>
                <p>2 stk. løg</p>
                <p></p>
                <p>3 fed hvidløg</p>
                <p>500 g. hakket oksekød</p>
            </figure>
        </div>

        <div class="col">
            <h3>Hvad er ..... ?</h3>
            <p>Nem opskrift på den italienske pastaret, Spaghetti Bolognese. De fleste danskere vil egentlig nok bare kalde den for pasta med kødsovs, men uanset navn, så er det en hverdagsfavorit. Det er nem aftensmad, som også kan gøres ganske sund. Man kan eksempelvis tilsætte en masse skjulte grøntsager til sovsen.
            </p>

            <h3>Fremgangsmåde</h3>
            <p>Kog pastaen, til den er perfekt mør med bid. 
            Steg bacon på en pande ved middelhøj varme, til det er sprødt og stadig saftigt. 
            Kom bacon på en tallerken med fedtsugende papir. 
            Kom smør på panden med baconfedt og sauter løgene, til er bløde og klare</p>
            
        </div>
        </div>
    `;

    tbodyElement.appendChild(cardElement);

    }