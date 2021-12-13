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
         <img src="${(spice.image)}">
        <p><strong>${(spice.name)}</strong></p>
        <p><strong>${(spice.price)} kr ,-</strong></p>
        
        <p class="kurv">
         <button>Tilføj til kurv</button>
         <p>Hjerte</p>
  
  </p>
</div>
</section>

      `;

    tbodyElement.appendChild(spiceElement);

}


