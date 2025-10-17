(async () => {
  const listEl = document.getElementById("list");
  listEl.textContent = "Loading...";

  try {
    const response = await fetch(
      "https://api.github.com/repos/CaltropNetwork/website/contents/content/funny/"
    );
    const data = await response.json();

    // If the API returns an error message, show it
    if (!Array.isArray(data)) {
      listEl.innerHTML =
        "<p>Unable to load list. " + escapeHtml(JSON.stringify(data)) + "</p>";
      return;
    }

    const items = data; // keep the fetched array so we can filter locally

    function renderList(filter = "") {
      const q = (filter || "").trim().toLowerCase();
      let html = "<ul>";
      for (let file of items) {
        const name = file.name || "";
        const path = file.path || "";
        if (
          !q ||
          name.toLowerCase().includes(q) ||
          path.toLowerCase().includes(q)
        ) {
          const url =
            "https://caltrop.asterisk.lol/funny/" + encodeURIComponent(name);
          html += `<li><a href="${url}">${escapeHtml(name)}</a></li>`;
        }
      }
      html += "</ul>";
      // show friendly message when nothing matches
      const empty = html === "<ul></ul>";
      listEl.innerHTML = empty ? "<p>No images found.</p>" : html;
    }

    function escapeHtml(s) {
      return String(s).replace(
        /[&<>"']/g,
        (c) =>
          ({
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#39;",
          }[c])
      );
    }

    // initial render
    renderList();

    // wire up the search input
    const input = document.getElementById("funny-search");
    input.addEventListener("input", (e) => renderList(e.target.value));
    // optional: focus the search box on load
    input.focus();
  } catch (err) {
    console.error(err);
    listEl.textContent = "Failed to load image list.";
  }
})();
