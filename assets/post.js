
async function loadSinglePost() {

    const urlParams = new URLSearchParams(window.location.search);
    const postId = urlParams.get('id');

    if (!postId) {
        window.location.assign("board.html");
        return;
    }

    try {
     
        const response = await fetch(`http://localhost:3000/posts/${postId}`);
        if (response.status !== 200) throw new Error("Post not found");
        
        const post = await response.json();
        
       
        const container = document.getElementById("single-post-container");
        
      
        const catClass = post.category.toLowerCase().replace(" ", "-");

        container.innerHTML = `
            <div class="full-post-view">
                <span class="category-badge badge-${catClass}">${post.category}</span>
                <p class="post-meta"><strong>${post.club}</strong> | ${new Date(post.date).toLocaleDateString()}</p>
                <h1 class="post-title">${post.title}</h1>
                <hr />
                <div class="post-content">
                    ${post.text}
                </div>
                <div class="post-footer">
                    <strong>Keywords:</strong> ${post.keywords ? post.keywords.join(", ") : 'None'}
                </div>
            </div>
        `;
    } catch (err) {
        console.error(err);
        document.getElementById("single-post-container").innerHTML = "<p>Error loading report.</p>";
    }
}


loadSinglePost();
