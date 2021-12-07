const queryString = window.location.search;
const URLParams = new URLSearchParams(queryString);
const spiceId = URLParams.get("spiceId");

const tBodyDetails = document.getElementById("spice-details")

fetch(baseURL+"/spices/" + spiceId)
    .then(response => response.json())
    .then(spices => {
        (createSpecificSpice(spices));
    });

function createSpecificSpice (spice) {
    const spiceElement = document.createElement("div");
    spiceElement.innerHTML = `
  <section id="om">

    <h1>${(spice.name)}</h1>

    <div class="sectionwrapper">

        <div class="col">
            <figure>
                <img src="https://cdn-adl.gelatogroup.com/do/emK4BTSbyo0/listing_large-p1-dk-DK?v=1625047713" alt="">
                    <p>${(spice.name)}</p>
                    <p>${(spice.price)} kr ,</p>
                    <div class="kurv">
                        <button>Tilføj til kurv</button>
                    </div>
            </figure>
        </div>

        <div class="col">
            <h3>Beskrivelse </h3>
            <p>${(spice.description)}
            </p>

        </div>

    </div>

</section>
    `;

    tBodyDetails.appendChild(spiceElement);
}

