const tbodyElement = document.getElementById("customer-spice-list");


fetch(baseURL+"/spices")
    .then(response => response.json())
    .then(spices => {
        spices.map(createSpice);
    });

function createSpice (spice) {
    const spiceElement = document.createElement("div");
    spiceElement.innerHTML = `

  <section class="container">
  <div class="item">
  <a href="customer-spice.html?spiceId=${spice.id}">
    <img src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.sarajevotimes.com%2Fwp-content%2Fuploads%2F2019%2F10%2Fsalt.jpg&f=1&nofb=1">
        <p>${(spice.name)}</p>
        <p>${(spice.price)} kr ,-</p>
        
        <p class="kurv">
         <button>Tilføj til kurv</button>
         <p>Hjerte</p>
  
  </p>
</div>
</section>

      `;

    tbodyElement.appendChild(spiceElement);

}


