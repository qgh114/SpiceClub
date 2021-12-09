
const LoginForm = document.getElementById("loginform");


function createForm() {
    const formElement = document.createElement("div");
    formElement.innerHTML = `

<div class="container">
    <h2>Log ind</h2>
    <input id="get-username" type="text" placeholder="Username">
        <br><br>
            <div class="input">
                <input id="get-password" type="password" placeholder="Password" id="password-input">
            </div>
            <br><br>
            <button id="loginBtn">Login</button>
                
</div>
        `;

    LoginForm.appendChild(formElement);


}

createForm();

document.getElementById("loginBtn").addEventListener("click", getAdminBackend);

function getAdminBackend() {


    fetch(baseURL + "/admins",  {
        method: "POST",
        headers: {"Content-type": "application/json; charset=UTF-8"},
        body: JSON.stringify({
            email: document.getElementById(`get-username`).value,
            password: document.getElementById(`get-password`).value
        })
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
      if (data.id === null) {
          alert ("Forkert indtastet bruger")

      } else {
          location.href ="http://localhost:" + window.location.port  + "/SpiceClub/template/frontpage/frontpage.html"}


            //console.log(data["id"])

       // location.assign("http://localhost:63342/admins/"+ data["id"])
      // location.href = baseURL + "template/frontpage/frontpage.html" + data["id"];
    })
}





