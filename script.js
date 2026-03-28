const user = "stueblermoritz";
const repo = "data";

const pagesBase = `https://${user}.github.io/${repo}/`;

fetch(`https://api.github.com/repos/${user}/${repo}/contents`)
.then(res => res.json())
.then(files => {

    const list = document.getElementById("repoList");

    files.forEach(file => {

        const li = document.createElement("li");
        const link = document.createElement("a");

        link.href = pagesBase + file.path;
        link.textContent = file.name;

        li.appendChild(link);
        list.appendChild(li);

    });

});
