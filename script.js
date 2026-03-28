const user = "stueblermoritz";
const repo = "data";

const api = `https://api.github.com/repos/${user}/${repo}/contents`;

fetch(api)
  .then(response => response.json())
  .then(files => {

    const list = document.getElementById("repoList");

    files.forEach(file => {

      const li = document.createElement("li");
      const link = document.createElement("a");

      link.href = file.download_url;
      link.textContent = file.name;

      li.appendChild(link);
      list.appendChild(li);

    });

  })
  .catch(error => {
    console.error("API Fehler:", error);
  });
