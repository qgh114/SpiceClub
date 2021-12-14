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
   
    <img class="image_img" src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.sarajevotimes.com%2Fwp-content%2Fuploads%2F2019%2F10%2Fsalt.jpg&f=1&nofb=1" width="266" alt="">
        <div class="col">
                <div class="image_overlay">
                <h1>${(blog.title)}</h1>
                <p class="blog-desc">${(blog.shortDescription)}</p>
                </div>
                <a class="read-more-btn" href="specific-blog.html?blogId=${blog.id}">Læs mere</a>
        </div>
    
    </div>

</section>
    `;

    tbodyElement.appendChild(blogElement);



}


/* <p>${(spice.price)} kr ,-</p>*/