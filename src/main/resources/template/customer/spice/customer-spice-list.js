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
    <img src="https://cdn-adl.gelatogroup.com/do/emK4BTSbyo0/listing_large-p1-dk-DK?v=1625047713">
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

/*<div id ="spice-list">
   <div>
        <img src="./oregano.jpg">
        <p>${(spice.name)}</p>
        <p>${(spice.price)} kr ,-</p>
        <div class="kurv">
            <button>Tilføj til kurv</button>
            <p class="like">Hjerte</p>
        </div>
    </div>*/

