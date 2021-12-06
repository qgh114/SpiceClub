const baseURL = "http://localhost:8080";
const tbodyNav = document.getElementById("nav-bar");
const tbodyFooter = document.getElementById("footer");

getNavbar()
function getNavbar() {
    const navElement = document.createElement("div");
    navElement.innerHTML = `
    
    <!-- Navigation -->
    <nav class="nav">
        <div class="navigation container">
            <div class="logo">
                <h1>Spice Club</h1>
            </div>

            <div class="menu">
                <div class="top-nav">
                    <div class="logo">
                        <h1>Codevo</h1>
                    </div>
                    <div class="close">
                        <i class="bx bx-x"></i>
                    </div>
                </div>

                <ul class="nav-list">
                    <li class="nav-item">
                        <a href="spice-list.html" class="nav-link">Krydderier</a>
                    </li>
                    <li class="nav-item">
                        <a href="" class="nav-link">Opskrifter</a>
                    </li>
                    <!-- <li class="nav-item">
                       <a href="#about" class="nav-link">About</a>
                     </li>
                     <li class="nav-item">
                       <a href="#contact" class="nav-link">Contact</a>
                     </li>
                     <li class="nav-item">
                       <a href="account.html" class="nav-link">Account</a>
                     </li>
                     <li class="nav-item">
                       <a href="cart.html" class="nav-link icon"><i class="bx bx-shopping-bag"></i></a>
                     </li>-->
                </ul>
            </div>

            <a href="cart.html" class="cart-icon">
                <i class="bx bx-shopping-bag"></i>
            </a>

            <div class="hamburger">
                <i class="bx bx-menu"></i>
            </div>
        </div>
    </nav>
    `;

    tbodyNav.appendChild(navElement);

}

getFooter()
function getFooter() {
    const footerElement = document.createElement("div");
    footerElement.innerHTML = `
    <footer id="footer" class="section footer">
  <div class="container">
    <div class="footer-container">
      <div class="footer-center">
        <h3>EXTRAS</h3>
        <a href="#">Brands</a>
        <a href="#">Gift Certificates</a>
        <a href="#">Affiliate</a>
        <a href="#">Specials</a>
        <a href="#">Site Map</a>
      </div>
      <div class="footer-center">
        <h3>INFORMATION</h3>
        <a href="#">About Us</a>
        <a href="#">Privacy Policy</a>
        <a href="#">Terms & Conditions</a>
        <a href="#">Contact Us</a>
        <a href="#">Site Map</a>
      </div>
      <div class="footer-center">
        <h3>MY ACCOUNT</h3>
        <a href="#">My Account</a>
        <a href="#">Order History</a>
        <a href="#">Wish List</a>
        <a href="#">Newsletter</a>
        <a href="#">Returns</a>
      </div>
      <div class="footer-center">
        <h3>CONTACT US</h3>
        <div>
                        <span>
                            <i class="fas fa-map-marker-alt"></i>
                        </span>
          42 Dream House, Dreammy street, 7131 Dreamville, USA
        </div>
        <div>
                        <span>
                            <i class="far fa-envelope"></i>
                        </span>
          company@gmail.com
        </div>
        <div>
                        <span>
                            <i class="fas fa-phone"></i>
                        </span>
          456-456-4512
        </div>
        <div>
                        <span>
                            <i class="far fa-paper-plane"></i>
                        </span>
          Dream City, USA
        </div>
      </div>
    </div>
  </div>
  </div>
</footer>
    
    
    `;

    tbodyFooter.appendChild(footerElement);

}

