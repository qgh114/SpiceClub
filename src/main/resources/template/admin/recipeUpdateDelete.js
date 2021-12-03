

function deleteRecipe(recipeId) {
    fetch("http://localhost:8080/recipes/" + recipeId, {
        method: "DELETE"
    }).then(response => {
        if (response.status === 200) {
            document.getElementById(recipeId).remove();
        } else {
            console.log(response.status);
        }
    });
}
