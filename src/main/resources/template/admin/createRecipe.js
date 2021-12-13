

function createRecipe(){
    const recipeToCreate = {
        name:document.getElementById("create-recipe-name").value,
        recipe_method: editor.getData(),
        ingredient:editor1.getData(),
        image:document.getElementById("create-recipe-image").value,
        description:editor2.getData()

    }


    fetch("http://localhost:8080/recipes", {
        method: "POST",
        headers: {"Content-type": "application/json; charset=UTF-8"},
        body: JSON.stringify(recipeToCreate)
    })
        .then(response => response.json())
        .catch(error => console.log(error));
}



function goToCreateRecipe(){
    location.assign('createRecipe.html');
}


function myhref() {
    location.assign('recipes.html');

}


<!-- ingredient:document.getElementById("create-recipe-ingredient").value,-->
/*
description:document.getElementById("create-recipe-description").value*/
