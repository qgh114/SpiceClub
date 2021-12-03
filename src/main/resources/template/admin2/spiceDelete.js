function deleteSpice(spiceId) {
    fetch("http://localhost:8080/spices/" + spiceId, {
        method: "DELETE"
    }).then(response => {
        if (response.status === 200) {
            document.getElementById(spiceId).remove();
        } else {
            console.log(response.status);
        }
    });
}
