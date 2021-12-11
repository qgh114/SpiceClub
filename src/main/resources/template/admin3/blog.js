const blogTableBody = document.getElementById("blog-tbody");

fetch(baseURL+"/blogs")
    .then(response => response.json())
    .then(data => {
        console.log(data)
        data.map(createBlogsTableRow);
    });

function createBlogsTableRow( blog){
    const blogTableRow = document.createElement("tr");
    blogTableRow.id = blog.id;

    blogTableBody.appendChild(blogTableRow);
    constructBlogTableRow(blogTableRow, blog);
}

function constructBlogTableRow(blogTableRow, blog) {
    blogTableRow.innerHTML = `
      
   
    <td id="blog-name">${(blog.title)}</td>
    
    <td><button id="expand-blog-"${blog.id} onclick="myhref3(${blog.id})">🖊️</button></td>
        
    `;



}
function myhref3(blogId) {
    location.assign('./updateBlog.html?blogId=' + blogId)

}
