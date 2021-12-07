
function deleteSpice(recipeId) {
    fetch(baseURL + "/recipes/" + recipeId, {
        method: "DELETE"
    }).then(response => {
        if (response.status === 200) {
            document.getElementById(recipeId).remove();
        } else {
            console.log(response.status);
        }
    });
}

function myhref2(recipeId) {
    if (confirm("Er du sikker på du vil slette?")) {
        deleteSpice(recipeId);
    }

    location.assign('recipes.html');
}









