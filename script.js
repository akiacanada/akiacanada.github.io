// Render current year in footer
document.getElementById("year").textContent = new Date().getFullYear();

// Render projects as cards
(function renderProjects() {
  const grid = document.getElementById("project-grid");
  grid.innerHTML = "";
  PROJECTS.forEach(p => {
    const card = document.createElement("article");
    card.className = "card";
    const title = document.createElement("h3");
    title.textContent = p.title;
    const blurb = document.createElement("p");
    blurb.textContent = p.blurb;
    const badges = document.createElement("div");
    badges.className = "badges";
    (p.tech || []).forEach(t => {
      const b = document.createElement("span");
      b.className = "badge";
      b.textContent = t;
      badges.appendChild(b);
    });
    const links = document.createElement("p");
    links.className = "links";
    if (p.repo) { const a = document.createElement("a"); a.href = p.repo; a.target="_blank"; a.rel="noopener"; a.textContent="GitHub"; links.appendChild(a); }
    if (p.demo) { const a = document.createElement("a"); a.href = p.demo; a.target="_blank"; a.rel="noopener"; a.textContent="Demo"; links.appendChild(a); }
    if (p.report) { const a = document.createElement("a"); a.href = p.report; a.target="_blank"; a.rel="noopener"; a.textContent="Report"; links.appendChild(a); }
    card.appendChild(title); card.appendChild(blurb); card.appendChild(badges); if (links.childNodes.length) card.appendChild(links);
    grid.appendChild(card);
  });
})();