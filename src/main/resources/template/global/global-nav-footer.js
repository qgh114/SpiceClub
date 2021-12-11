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
            <li class="krydderier"><a href="">Krydderier</a></li>
            <li class="opskrifter"><a href=>Opskrifter</a></li>

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
  </div>
  <div class="contact-info">
  <a href="http://localhost:63342/SpiceClub/template/global/contactInfo.html?_ijt=ai2fd4s3sdtknr7v0jhms333ga">KONTAKT OS</a>
  </div>
  <div class="terms">
  <a href="http://localhost:63342/SpiceClub/template/global/delivery.html?_ijt=v3iu0l400c3sctsjr28l18bo69">LEVERING</a>
  </div>
  <div class="delivery">
  <a href="http://localhost:63342/SpiceClub/template/global/privacyPolicy.html?_ijt=t4koj8j2lbiq3gaj1qa9l2e9va">PRIVATPOLITIK</a>
  </div>
  <div class="social-footer-icons">
    
      <a href="https://www.facebook.com/"><i class="fa fa-facebook" aria-hidden="true"></i></a>&nbsp;&nbsp;&nbsp;&nbsp;
      <a href="https://www.instagram.com/?hl=en"><i class="fa fa-instagram" aria-hidden="true"></i></a>&nbsp;&nbsp;&nbsp;&nbsp;

    
</footer>
    
    
    `;

    tbodyFooter.appendChild(footerElement);

}