// client/assets/post.js
async function loadSinglePost() {
    // 1. Get the ID from the URL (?id=2)
    const urlParams = new URLSearchParams(window.location.search);
    const postId = urlParams.get('id');

    if (!postId) {
        window.location.assign("board.html");
        return;
    }

    try {
        // 2. Fetch data from backend
        const response = await fetch(`http://localhost:3000/posts/${postId}`);
        if (response.status !== 200) throw new Error("Post not found");
        
        const post = await response.json();
        
        // 3. Display the data in the container
        const container = document.getElementById("single-post-container");
        
        // Create CSS-friendly category name
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