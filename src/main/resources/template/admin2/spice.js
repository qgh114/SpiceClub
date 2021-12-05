const spiceTableBody = document.getElementById("spice-tbody");

fetch("http://localhost:8080/spices")
    .then(response => response.json())
    .then(data => {
        console.log(data)
        data.map(createSpicesTableRow);
    });

function createSpicesTableRow(spice){
    const spiceTableRow = document.createElement("tr");
    spiceTableRow.id = spice.id;

    spiceTableBody.appendChild(spiceTableRow);
    constructSpiceTableRow(spiceTableRow, spice);
}

function constructSpiceTableRow(spiceTableRow, spice) {
    spiceTableRow.innerHTML = `
      
   
    <td id="spice-name">${(spice.name)}</td>
    
    <td><button id="expand-spice-"${spice.id} onclick="myhref3(${spice.id})">🖊️</button></td>
        
    `;



}
function myhref3(spiceId) {
    location.assign('./updateSpice.html?spiceId='+ spiceId)

    //spiceId som står inde i url er vores jquery string dvs. som vist forneden. + spiceId er faktisk spice.id
    //const queryString = window.location.search;
    // const URLParams = new URLSearchParams(queryString);
    // const spiceId = URLParams.get("spiceId");
}













