function createPostElement(data) {
    const post = document.createElement("div");
    post.className = "post";

  
    const category = data.category || "Club News";
    const categoryClass = category.toLowerCase().replace(" ", "-");
    post.classList.add(categoryClass);


    const badge = document.createElement("span");
    badge.className = `category-badge badge-${categoryClass}`;
    badge.textContent = category;
    post.appendChild(badge);

   
    const header = document.createElement("h2");
    const link = document.createElement("a");
    link.href = `post.html?id=${data.post_id}`; 
    link.textContent = data.title;
    header.appendChild(link);
    post.appendChild(header);

   
    const info = document.createElement("em");
    info.style.display = "block";
    info.style.marginBottom = "10px";
    info.textContent = `${data.club} | ${new Date(data.date).toLocaleDateString()}`;
    post.appendChild(info);


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
            text: form.get("content"), 
            category: form.get("category"),
            club: form.get("club"),
            date: new Date().toISOString().split('T')[0], 
            time: new Date().toLocaleTimeString('en-GB')  
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

