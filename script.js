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

      // Pfad aus API berücksichtigen
      const path = file.path || file.Pfad;

      // Alle Dateien anzeigen
      // HTML & Bilder → direkt öffnen
      if (file.name.match(/\.(html|jpg|jpeg|png|gif)$/i)) {
        link.href = pagesBase + path;
        link.target = "_blank";
      } else {
        // Alle anderen → Download
        link.href = file.download_url;
        link.target = "_blank";
      }

      link.textContent = file.name;
      li.appendChild(link);
      list.appendChild(li);
    });
  })
  .catch(err => console.error("API Fehler:", err));
