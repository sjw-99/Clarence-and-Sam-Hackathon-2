function createPostElement(data) {
    const post = document.createElement("div");
    post.className = "post";

    // 1. Get category from the database (it's stored in data.category)
    const category = data.category || "Club News";
    const categoryClass = category.toLowerCase().replace(" ", "-");
    post.classList.add(categoryClass);

    // 2. Add the badge
    const badge = document.createElement("span");
    badge.className = `category-badge badge-${categoryClass}`;
    badge.textContent = category;
    post.appendChild(badge);

    // 3. Add the Title (Note: DB uses 'post_id')
    const header = document.createElement("h2");
    const link = document.createElement("a");
    link.href = `post.html?id=${data.post_id}`; // Changed 'id' to 'post_id'
    link.textContent = data.title;
    header.appendChild(link);
    post.appendChild(header);

    // 4. Add the Club and Date
    const info = document.createElement("em");
    info.style.display = "block";
    info.style.marginBottom = "10px";
    info.textContent = `${data.club} | ${new Date(data.date).toLocaleDateString()}`;
    post.appendChild(info);

    // 5. Add Content (Note: DB uses 'text' instead of 'content')
    const content = document.createElement("p");
    content.textContent = data.text.substring(0, 150) + "...";
    post.appendChild(content);

    return post;
}

document.getElementById("post-form").addEventListener("submit", async (e) => {
    e.preventDefault();
    const form = new FormData(e.target);

    const options = {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            title: form.get("title"),
            text: form.get("content"), // Change 'content' to 'text' to match DB
            category: form.get("category"),
            club: form.get("club"),      // Add this field
            date: new Date().toISOString().split('T')[0], // Today's date (YYYY-MM-DD)
            time: new Date().toLocaleTimeString('en-GB')  // Current time (HH:MM:SS)
        })
    };

    const result = await fetch("http://localhost:3000/posts", options);
    if (result.status == 201) {
        window.location.reload();
    }
});

async function loadPosts () {
    const options = {
        headers: {
            Authorization: localStorage.getItem("token") 
        }
    }
    const response = await fetch("http://localhost:3000/posts", options);

    if (response.status == 200) {
        const posts = await response.json();
    
        const container = document.getElementById("posts");

        posts.forEach(p => {
            const elem = createPostElement(p);
            container.appendChild(elem);
        })
    } else {
        window.location.assign("./index.html");
    }

}

loadPosts();
