const createSpiceButton = document.getElementById('create-spice-button')


function createSpice(){
    const spiceToCreate = {
        name:document.getElementById("create-spice-name").value,
        description:document.getElementById("create-spice-description").value,
        price:document.getElementById("create-spice-price").value,
        image:document.getElementById("create-spice-image").value,
    }

    fetch(baseURL + "/spices", {
        method: "POST",
        headers: {"Content-type": "application/json; charset=UTF-8"},
        body: JSON.stringify(spiceToCreate)
    })
        .then(response => response.json())
        .catch(error => console.log(error));
}

function myhref() {
    location.assign('./createSpice.html');
}

function myhref2() {
    location.assign('spice.html');
}

