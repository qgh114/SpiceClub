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

    function myhref2(spiceId) {
        if (confirm("Er du sikker på du vil slette?")) {
            deleteSpice(spiceId);
        }

        location.assign('spice.html');
    }

