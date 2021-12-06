const queryString = window.location.search;
const URLParams = new URLSearchParams(queryString);
const spiceId = URLParams.get("spiceId");

const tBodyDetails = document.getElementById("spice-details")

fetch(baseURL+"/spices")
    .then(response => response.json())
    .then(spices => {
        (createSpecificSpice(spices));
    });

function createSpecificSpice () {
    const spiceElement = document.createElement("div");
    spiceElement.innerHTML = `
    <!-- Product Details -->
<section class="section product-detail">
  <div class="details container-md">
    <div class="left">
      <div class="main">
        <img src="./images/pic1.jpg" alt="">
      </div>
      <div class="thumbnails">
        <div class="thumbnail">
          <img src="./images/pic1.jpg" alt="">
        </div>
        <div class="thumbnail">
          <img src="./images/pic2.jpg" alt="">
        </div>
        <div class="thumbnail">
          <img src="./images/pic3.jpg" alt="">
        </div>
        <div class="thumbnail">
          <img src="./images/pic4.jpg" alt="">
        </div>
      </div>
    </div>
    <div class="right">
      <span>Home/T-shirt</span>
      <h1>Boy’s T-Shirt By Handsome</h1>
      <div class="price">$50</div>
      <form class="form">
        <input type="text" placeholder="1">
        <a href="cart.html" class="addCart">Add To Cart</a>
      </form>
      <h3>Product Detail</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero minima delectus nulla voluptates nesciunt
        quidem laudantium, quisquam voluptas facilis dicta in explicabo, laboriosam ipsam suscipit!</p>
    </div>
  </div>
</section>
    `;

    tBodyDetails.appendChild(spiceElement);
}

