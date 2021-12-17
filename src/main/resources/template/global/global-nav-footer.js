const tbodyNav = document.getElementById("nav-bar");
const tbodyFooter = document.getElementById("footer");

getNavbar()
function getNavbar() {
    const navElement = document.createElement("div");
    navElement.innerHTML = `
    
    <!-- Navigation -->
    <nav class="nav">
        <ul>
            <a href="#"><img alt="spiceclub-logo" class="logo" src="../../../../../SpiceClub/template/global/spiceclub1.png"></a>
             <li class="blog"><a href="../../customer/blog/customer-blog-list.html">Blog</a></li>
            <li class="krydderier"><a href="../../customer/spice/customer-spice-list.html">Krydderier</a></li>
            <li class="opskrifter"><a href="../../customer/recipe/recipe-list.html">Opskrifter</a></li>

        </ul>
    </nav>
    `;

    tbodyNav.appendChild(navElement);

}

getFooter()
function getFooter() {
    const footerElement = document.createElement("div");
    footerElement.innerHTML = `
<footer class="social-footer">
  <div class="social-footer-left">
    <a href="#"><img alt="spiceclub-logo" class="logo" src="../../../../../SpiceClub/template/global/spiceclub1.png"></a>
  </div>
  
  <div class="footer-info">
  <div class="contact-info">
  <a href="../../global/contactInfo.html">KONTAKT OS</a>
  </div>
  <div class="delivery">
  <a href="../../global/delivery.html">LEVERING</a>
  </div>
  <div class="privacy-policy">
  <a href="../../global/privacyPolicy.html">PRIVATPOLITIK</a>
  </div>
  
  <div class="terms-of-trade">
  <a href="../../global/termsOfTrade.html">HANDELSBETINGELSER</a>
  </div>
  
  <div class="health-rapport">
  <a href="../../global/healthRapport.html">FØDEVARESTYRRELSENS KONTROLRAPPORTER</a>
  </div>
  
  <div class="cookie-policy">
  <a href=../../global/cookiePolicy.html">COOKIEPOLITIK</a>
  </div>
  
  </div>
  
  <div class="social-footer-icons">
    
      <a href="https://www.facebook.com/"><i class="fa fa-facebook" aria-hidden="true"></i></a>&nbsp;&nbsp;&nbsp;&nbsp;
      <a href="https://www.instagram.com/?hl=en"><i class="fa fa-instagram" aria-hidden="true"></i></a>&nbsp;&nbsp;&nbsp;&nbsp;
</div>
    
</footer>
    
    
    `;

    tbodyFooter.appendChild(footerElement);

}