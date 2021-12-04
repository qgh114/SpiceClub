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
      
   
    <td id="spice-name">${escapeHTML(spice.name)}</td>
    
    <td><button id="expand-spice-"${spice.id} onclick="myhref3()">🖊️</button></td>
        
    `;



}
function myhref3() {
    location.assign('./updateSpice.html')
}













