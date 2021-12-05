
const queryString = window.location.search;
const URLParams = new URLSearchParams(queryString);
const spiceId = URLParams.get("spiceId");

const spiceBody = document.getElementById("spice-wrapper");

fetch(baseURL + "/spices/"+ spiceId)
    .then(response => response.json())
    .then(spice => {
        (createSpiceRow(spice));
        //spice.map(createSpiceRow);
    });

function createSpiceRow(spice) {
    console.log("here i am in createOwnerRow")
    const spiceRow = document.createElement("div");
    spiceRow.id = spice.id;


    spiceBody.appendChild(spiceRow);
    constructSpiceRow(spiceRow, spice);
}

function constructSpiceRow(spiceRow, spice) {
    spiceRow.innerHTML = `

   <p id="spice-name"> Navn: ${(spice.name)}</p>
   <br>
   <p id="spice-description"> Beskrivelse: ${(spice.description)}</p>
   <br>
   <p id="spice-price">Pris: ${(spice.price)} kr</p>
   <br>
   <p><img id="spice-image" src="${(spice.image)}">Billede</p>
   <br>
    <button id="update-button-${spice.id}">Redigere</button>
    <button onclick="deleteSpice(${spice.id}); myhref2()">x</button>
   
            `;

    document.getElementById(`update-button-${spice.id}`)
        .addEventListener("click", () => {updateSpice(spice)


        });
}
/* /!*"${(escapeHTML(spice.price.toString()))}" man kan kun fungere hvis du gøre det igennem spice.html. og ikke spiceupdate.html*!/*/
function updateSpice(spice) {
    const tableRowToUpdate = document.getElementById(spice.id);

    tableRowToUpdate.innerHTML = `
           <input id="update-spice-name-${spice.id}" value="${escapeHTML(spice.name)}">
            <textarea id="update-spice-description-${spice.id}">${escapeHTML(spice.description)}</textarea>
            <input type="number" id="update-spice-price-${spice.id}" value="${(escapeHTML(spice.price.toString()))}">
            <input type="file" id="update-spice-image-${spice.id}" value="${(spice.image)}">
           <button onclick="updateSpiceBackend(${spice.id})">✅</button>
           
            `;
}

function updateSpiceBackend(spiceId) {

    const spiceRowToUpdate = document.getElementById(spiceId);

    const spiceToUpdate = {
        id: spiceId,
        name: document.getElementById(`update-spice-name-${spiceId}`).value,
        description: document.getElementById(`update-spice-description-${spiceId}`).value,
        price: document.getElementById(`update-spice-price-${spiceId}`).value,
        image: document.getElementById(`update-spice-image-${spiceId}`).value


    };

    fetch(baseURL + "/spices/" + spiceId, {
        method: "PATCH",
        headers: {"Content-type": "application/json; charset=UTF-8"},
        body: JSON.stringify(spiceToUpdate)
    }).then(response => {
        if (response.status === 200) {
            constructSpiceRow(spiceRowToUpdate, spiceToUpdate)
        }
    });
}


/*
<p className="row-owner-firstName">${escapeHTML(spice.name)}</p>

<p className="row-owner-lastName">${escapeHTML(owner.lastName)}</p>

<button id="update-button-${owner.id}">🥯</button>*/
