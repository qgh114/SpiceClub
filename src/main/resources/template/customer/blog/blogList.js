const tbodyElement = document.getElementById("customer-blog-list");


fetch(baseURL+"/blogs")
    .then(response => response.json())
    .then(blogs => {
        blogs.map(createBlog);
    });

function createBlog (blog) {
    const blogElement = document.createElement("div");
    blogElement.innerHTML = `

   <section id="om">

    <div class="sectionwrapper">

        <div class="col">
            <figure>
            <a href="specific-blog.html?blogId=${blog.id}">
                <img src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.sarajevotimes.com%2Fwp-content%2Fuploads%2F2019%2F10%2Fsalt.jpg&f=1&nofb=1" alt="">
                  
            </figure>
        </div>

        <div class="col">
           <h1>Titel: ${(blog.title)}</h1>
            <h3>Beskrivelse </h3>
            <p>${(blog.description)}
            </p>

        </div>

    </div>

</section>
    `;

    tbodyElement.appendChild(blogElement);



}


/* <p>${(spice.price)} kr ,-</p>*/