const queryString = window.location.search;
const URLParams = new URLSearchParams(queryString);
const blogId = URLParams.get("blogId");

const tbodyDetails = document.getElementById("blog-details");

fetch(baseURL + "/blogs/"+ blogId)
    .then(response => response.json())
    .then(result => {
        console.log(result)
        createBlog(result)
    });


function createBlog(blog) {
    const blogElement = document.createElement("div");
    blogElement.innerHTML = `
        
     <h1>${(blog.title)}</h1>

     <section id="om">

    <div class="sectionwrapper">

        <div class="col">
            <figure>
                <img src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.sarajevotimes.com%2Fwp-content%2Fuploads%2F2019%2F10%2Fsalt.jpg&f=1&nofb=1" alt="">
                  
                   
            </figure>
        </div>

        <div class="col">
            <h3>Beskrivelse </h3>
            <p>${(blog.description)}
            </p>

        </div>

    </div>

</section>
    `;

    tbodyDetails.appendChild(blogElement);



}
