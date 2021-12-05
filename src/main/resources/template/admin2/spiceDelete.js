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

    function myhref2() {
       /* if (!alert.block) {
            alert.block = !confirm("er du sikker på du vil slette");
            if (alert.block) {
                setTimeout("alert.block = false;", 5000);
            }
        }*/
        location.assign('spice.html');
    }

