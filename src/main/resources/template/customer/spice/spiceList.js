const tbodyElement = document.getElementById("customer-spice-list");

fetch(baseURL+"/spices")
    .then(response => response.json())
    .then(spices => {
        spices.map(createSpice);
    });

function createSpice (spice) {
    const spiceElement = document.createElement("div");
    spiceElement.innerHTML = `
    <div class="product-center container">
    <div class="product">
    <div class="product-header">
        <a href="specific-spice.html">
        <img src="${(spice.image)}" alt=""><a/>
       

            <ul class="icons">
                <span><i class="bx bx-heart"></i></span>
                <span><i class="bx bx-shopping-bag"></i></span>
            </ul>
    </div>
    <div class="product-footer">
        <h3>${(spice.name)}</h3>
        <h4 class="price">${(spice.price)}</h4>
    </div>
</div>
    
    `;

    tbodyElement.appendChild(spiceElement);
}
