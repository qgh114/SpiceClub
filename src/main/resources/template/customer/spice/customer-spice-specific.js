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
            <br><br>
                <img src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.sarajevotimes.com%2Fwp-content%2Fuploads%2F2019%2F10%2Fsalt.jpg&f=1&nofb=1" alt="">
                     <h3><strong>${(spice.name)}</strong></h3>
                     <h3><strong>${(spice.price)} kr ,-</strong></h3>
                    <div class="kurv">
                        <button>Tilføj til kurv</button>
                    </div>
            </figure>
        </div>

        <div class="col">
            <h2>Beskrivelse </h2>
            <p>${(spice.description)}
            </p>

        </div>

    </div>

</section>
    `;

    tBodyDetails.appendChild(spiceElement);
}

