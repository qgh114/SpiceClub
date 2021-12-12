const tbodyNav = document.getElementById("nav-bar");
const tbodyFooter = document.getElementById("footer");

getNavbar()
function getNavbar() {
    const navElement = document.createElement("div");
    navElement.innerHTML = `
    
    <!-- Navigation -->
    <nav class="nav">
        <ul>
            <li class="logo"><a href="#">LOGO</a></li>
            <!-- navbar virker ikke som det skal -->
             <li class="blog"><a href="">Blog</a></li>
            <li class="krydderier"><a href="http://localhost:63342/SpiceClub/template/customer/spice/customer-spice-list.html?_ijt=ati170iicq99d8bq1mgr8rvtrh">Krydderier</a></li>
            <li class="opskrifter"><a href="http://localhost:63342/SpiceClub/template/customer/recipe/recipe-list.html?_ijt=vk44pton3bijm4h1ui79gp5rvj">Opskrifter</a></li>

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
    <a href="#"><img class="logo" src="https://placehold.it/150x30"></a>
  </div>
  
  <div class="footer-info">
  <div class="contact-info">
  <a href="http://localhost:63342/SpiceClub/template/global/contactInfo.html?_ijt=ai2fd4s3sdtknr7v0jhms333ga">KONTAKT OS</a>
  </div>
  <div class="delivery">
  <a href="http://localhost:63342/SpiceClub/template/global/delivery.html?_ijt=v3iu0l400c3sctsjr28l18bo69">LEVERING</a>
  </div>
  <div class="privacy-policy">
  <a href="http://localhost:63342/SpiceClub/template/global/privacyPolicy.html?_ijt=t4koj8j2lbiq3gaj1qa9l2e9va">PRIVATPOLITIK</a>
  </div>
  
  <div class="terms-of-trade">
  <a href="http://localhost:63342/SpiceClub/template/global/termsOfTrade.html?_ijt=gospe9a5r6rg7j2h7dr3cab9v5">HANDELSBETINGELSER</a>
  </div>
  
  <div class="health-rapport">
  <a href="http://localhost:63342/SpiceClub/template/global/healthRapport.html?_ijt=gospe9a5r6rg7j2h7dr3cab9v5">FØDEVARESTYRRELSENS KONTROLRAPPORTER</a>
  </div>
  
  <div class="cookie-policy">
  <a href="http://localhost:63342/SpiceClub/template/global/cookiePolicy.html?_ijt=gospe9a5r6rg7j2h7dr3cab9v5">COOKIEPOLITIK</a>
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