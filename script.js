const user = "stueblermoritz";
const repo = "data";
const pagesBase = `https://${user}.github.io/${repo}/`;

fetch(`https://api.github.com/repos/${user}/${repo}/contents`)
  .then(res => res.json())
  .then(files => {
    const list = document.getElementById("repoList");

    files.forEach(file => {

      // GitHub API Feld kann 'path' oder 'Pfad' sein
      const path = file.path || file.Pfad;

      // nur HTML-Dateien
      if (file.name.endsWith(".html")) {
        const li = document.createElement("li");
        const link = document.createElement("a");
        link.href = pagesBase + path;
        link.textContent = file.name;
        link.target = "_blank"; // in neuem Tab öffnen
        li.appendChild(link);
        list.appendChild(li);
      }

    });
  })
  .catch(err => console.error("API Fehler:", err));
