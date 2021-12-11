function deleteSpice(blogId) {
    fetch(baseURL+"/blogs/" + blogId, {
        method: "DELETE"
    }).then(response => {
        if (response.status === 200) {
            document.getElementById(blogId).remove();
        } else {
            console.log(response.status);
        }
    });
}

function myhref2(blogId) {
    if (confirm("Er du sikker på du vil slette?")) {
        deleteSpice(blogId);
    }

    location.assign('blog.html');
}

