const user = "USERNAME";
const repo = "REPOSITORY";

fetch(`https://api.github.com/repos/${user}/${repo}/contents/`)
.then(response => response.json())
.then(data => {

    const list = document.getElementById("repoList");

    data.forEach(file => {

        const li = document.createElement("li");
        const link = document.createElement("a");

        link.href = file.html_url;
        link.textContent = file.name;

        li.appendChild(link);
        list.appendChild(li);

    });

});
