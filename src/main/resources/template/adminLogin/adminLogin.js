fetch("http://localhost:8080/admins/1")
    .then(response => response.json())
    .then(data => {
        console.log(data);

    });