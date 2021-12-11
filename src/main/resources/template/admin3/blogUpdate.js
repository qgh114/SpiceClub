
const queryString = window.location.search;
const URLParams = new URLSearchParams(queryString);
const blogId = URLParams.get("blogId");

const spiceBody = document.getElementById("blog-wrapper");

fetch(baseURL + "/blogs/"+ blogId)
    .then(response => response.json())
    .then(blogs => {
        (createBlogRow(blogs));

    });

function createBlogRow(blog) {

    const blogRow = document.createElement("div");
    blogRow.id = blog.id;


    spiceBody.appendChild(blogRow);
    constructBlogRow(blogRow, blog);
}

function constructBlogRow(blogRow, blog) {
    blogRow.innerHTML = `
   <h1> Detaljer af ${(blog.title)}</h1>
   <br>
   <p id="blog-description"> Beskrivelse: ${(blog.description)}</p>
   <br>
   <p><img id="blog-image" src="${(blog.image)}">Billede: virker ikke endnu</p>
   <br>
    <button id="update-button-${blog.id}">Redigere</button> 
    <button onclick="myhref2(${blog.id})">❌</button>
   
            `;

    document.getElementById(`update-button-${blog.id}`)
        .addEventListener("click", () => {updateBlog(blog)

        });
}

function updateBlog(blog) {
    const tableRowToUpdate = document.getElementById(blog.id);

    tableRowToUpdate.innerHTML = `
            <h1>Redigere</h1>
            <br> 
           
            <label>Titel: </label>
           <br><input id="update-blog-title-${blog.id}" value="${escapeHTML(blog.title)}"><br>
           <br><label><b>Beskrivelse: </b></label>
            <br><textarea id="update-blog-description-${blog.id}">${escapeHTML(blog.description)}</textarea><br>
          
            <br><label>Billede: </label>
            <br><input type="file" id="update-blog-image-${blog.id}" value="${(blog.image)}"><br>
           <br> <button onclick="updateBlogBackend(${blog.id})">✅</button><br>
          
            `;
}

function updateBlogBackend(blogId) {

    const blogRowToUpdate = document.getElementById(blogId);

    const blogToUpdate = {
        id: blogId,
        title: document.getElementById(`update-blog-title-${blogId}`).value,
        description: document.getElementById(`update-blog-description-${blogId}`).value,
        image: document.getElementById(`update-blog-image-${blogId}`).value


    };

    fetch(baseURL + "/blogs/" + blogId, {
        method: "PATCH",
        headers: {"Content-type": "application/json; charset=UTF-8"},
        body: JSON.stringify(blogToUpdate)
    }).then(response => {
        if (response.status === 200) {
            constructBlogRow(blogRowToUpdate, blogToUpdate)
        }
    });
}



