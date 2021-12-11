const createSpiceButton = document.getElementById('create-spice-button')


function createBlog(){
    const blogToCreate = {
        title:document.getElementById("create-blog-title").value,
        description:document.getElementById("create-blog-description").value,
        image:document.getElementById("create-blog-image").value
    }

    fetch(baseURL + "/blogs", {
        method: "POST",
        headers: {"Content-type": "application/json; charset=UTF-8"},
        body: JSON.stringify(blogToCreate)
    })
        .then(response => response.json())
        .catch(error => console.log(error));
}

function myhref() {
    location.assign('./createBlog.html');
}

function myhref2() {
    location.assign('blog.html');
}

