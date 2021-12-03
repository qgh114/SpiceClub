const spiceTableBody = document.getElementById("spice-tbody");

fetch("http://localhost:8080/spices")
    .then(response => response.json())
    .then(data => {
        data.map(createSpicesTableRow);
    });

function createSpicesTableRow(spice){
    const spiceTableRow = document.createElement("tr");
    spiceTableRow.id = spice.id;

    spiceTableBody.appendChild(spiceTableRow);
    constructSpiceTableRow(spiceTableRow, spice);
}

function constructSpiceTableRow(spiceTableRow, spice){
    spiceTableRow.innerHTML = `
        <td>
                <p class="row-spice-name">${escapeHTML(spice.name)}</p>
        </td>
        
        <td>
                <button id="update-button-${spice.id}">Opdater krydderi</button>            
        </td>  
        
        <td>
                <button onclick="deleteSpice(${spice.id})">❌</button>            
        </td>  
        
    `;
}