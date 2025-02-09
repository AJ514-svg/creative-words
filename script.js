document.addEventListener("DOMContentLoaded", function () {
    const blogContainer = document.getElementById("blog-container");
    const storedBlogs = JSON.parse(localStorage.getItem("blogs")) || [];

    function displayBlogs() {
        blogContainer.innerHTML = "";
        storedBlogs.forEach((blog, index) => {
            const blogPost = document.createElement("div");
            blogPost.classList.add("blog-post");
            blogPost.innerHTML = `
                <h2>${blog.title}</h2>
                <p>${blog.content}</p>
                <button onclick="deleteBlog(${index})">Delete</button>
            `;
            blogContainer.appendChild(blogPost);
        });
    }

    window.deleteBlog = function (index) {
        storedBlogs.splice(index, 1);
        localStorage.setItem("blogs", JSON.stringify(storedBlogs));
        displayBlogs();
    };

    displayBlogs();
});
