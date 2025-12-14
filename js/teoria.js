// js/teoria.js
(function () {
  const UNITS = window.UNITS;
  if (!Array.isArray(UNITS)) {
    console.error("UNITS no está definido. ¿Carga primero js/units.js?");
    return;
  }

  // ---------- DOM ----------
  const unitList = document.getElementById("unitList");
  const q = document.getElementById("q");
  const clearSearch = document.getElementById("clearSearch");
  const emptyState = document.getElementById("emptyState");

  // Modal
  const modal = document.getElementById("unitModal");
  const mBadge = document.getElementById("mBadge");
  const mTitle = document.getElementById("mTitle");
  const mSummary = document.getElementById("mSummary");
  const mBody = document.getElementById("mBody");
  const mClose = document.getElementById("mClose");
  const prevUnitBtn = document.getElementById("prevUnit");
  const nextUnitBtn = document.getElementById("nextUnit");

  const y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();

  // Theme/Print
  const html = document.documentElement;
  const themeBtn = document.getElementById("themeBtn");
  const themeIcon = document.getElementById("themeIcon");
  const themeLabel = document.getElementById("themeLabel");
  const printBtn = document.getElementById("printBtn");

  // ---------- Utils ----------
  function esc(s) {
    return String(s).replace(/[&<>"']/g, m => ({
      "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;"
    }[m]));
  }

  function inferChips(u){
    if (Array.isArray(u.chips) && u.chips.length) return u.chips;
    const fromBlocks = (u.blocks || [])
      .map(b => (b.h3 || "").replace(/^\d+(\.\d+)?\s*/,"").trim())
      .filter(Boolean)
      .slice(0, 3);
    return fromBlocks.length ? fromBlocks : ["Teoría", "Ejemplos", "Práctica"];
  }

  function unitToHTML(u) {
    const figureHTML = (u.figure && u.figure.src) ? `
      <figure>
        <img src="${esc(u.figure.src)}" alt="${esc(u.figure.alt || "Imagen de unidad")}" loading="lazy">
        <figcaption>${esc(u.figure.caption || "")}</figcaption>
      </figure>` : "";

    const blocksHTML = (u.blocks || []).map(b => {
      const pHTML = (b.p || []).map(t => `<p>${esc(t)}</p>`).join("");
      const ulHTML = b.ul?.length ? `<ul>${b.ul.map(li => `<li>${esc(li)}</li>`).join("")}</ul>` : "";
      const olHTML = b.ol?.length ? `<ol>${b.ol.map(li => `<li>${esc(li)}</li>`).join("")}</ol>` : "";
      const codeHTML = b.code ? `<pre><code>${esc(b.code)}</code></pre>` : "";
      return `
        <section class="block">
          <h3>${esc(b.h3 || "")}</h3>
          ${pHTML}
          ${ulHTML}
          ${olHTML}
          ${codeHTML}
        </section>`;
    }).join("");

    const extrasHTML = (u.extras || []).map(ex => {
      const exP = (ex.p || []).map(t => `<p>${esc(t)}</p>`).join("");
      return `
        <details>
          <summary>${esc(ex.title || "Notas")}</summary>
          ${exP}
        </details>`;
    }).join("");

    return `${figureHTML}${blocksHTML}${extrasHTML}`;
  }

  // ---------- HTML5 Canvas background ----------
  function setupCanvasBackground(){
    const c = document.createElement("canvas");
    c.className = "bg-canvas";
    document.body.appendChild(c);

    const ctx = c.getContext("2d");
    let w = 0, h = 0, dpr = Math.max(1, Math.min(2, window.devicePixelRatio || 1));

    function resize(){
      w = window.innerWidth;
      h = window.innerHeight;
      c.width = Math.floor(w * dpr);
      c.height = Math.floor(h * dpr);
      c.style.width = w + "px";
      c.style.height = h + "px";
      ctx.setTransform(dpr,0,0,dpr,0,0);
    }
    window.addEventListener("resize", resize);
    resize();

    const n = Math.floor(Math.sqrt(w*h) / 22); // densidad suave
    const pts = Array.from({length: Math.min(160, Math.max(70, n))}, () => ({
      x: Math.random()*w,
      y: Math.random()*h,
      vx: (Math.random()*2-1)*0.18,
      vy: (Math.random()*2-1)*0.18,
      r: Math.random()*1.6 + 0.6
    }));

    const isLight = () => (document.documentElement.getAttribute("data-theme") === "light");

    function tick(){
      ctx.clearRect(0,0,w,h);

      // color dinámico por tema
      const dot = isLight() ? "rgba(15,23,42,0.25)" : "rgba(229,231,235,0.18)";
      const line = isLight() ? "rgba(22,163,74,0.10)" : "rgba(34,197,94,0.10)";

      // update
      for (const p of pts){
        p.x += p.vx; p.y += p.vy;
        if (p.x < -20) p.x = w+20;
        if (p.x > w+20) p.x = -20;
        if (p.y < -20) p.y = h+20;
        if (p.y > h+20) p.y = -20;
      }

      // lines
      ctx.strokeStyle = line;
      for (let i=0;i<pts.length;i++){
        for (let j=i+1;j<pts.length;j++){
          const a=pts[i], b=pts[j];
          const dx=a.x-b.x, dy=a.y-b.y;
          const d2=dx*dx+dy*dy;
          if (d2 < 140*140){
            const alpha = 1 - (Math.sqrt(d2)/140);
            ctx.globalAlpha = alpha;
            ctx.beginPath();
            ctx.moveTo(a.x,a.y);
            ctx.lineTo(b.x,b.y);
            ctx.stroke();
          }
        }
      }
      ctx.globalAlpha = 1;

      // dots
      ctx.fillStyle = dot;
      for (const p of pts){
        ctx.beginPath();
        ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
        ctx.fill();
      }

      requestAnimationFrame(tick);
    }
    tick();
  }

  // ---------- Reveal on scroll ----------
  let revealObserver = null;
  function setupReveal(){
    if (revealObserver) revealObserver.disconnect();
    const els = Array.from(document.querySelectorAll(".reveal"));
    revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add("is-visible");
      });
    }, { threshold: 0.12 });
    els.forEach(el => revealObserver.observe(el));
  }

  // ---------- Tilt cards (sin librerías) ----------
  function setupTilt(){
    const cards = Array.from(document.querySelectorAll(".unit-card"));
    const max = 7; // grados
    cards.forEach(card => {
      let raf = 0;
      function onMove(e){
        const r = card.getBoundingClientRect();
        const cx = r.left + r.width/2;
        const cy = r.top + r.height/2;
        const dx = (e.clientX - cx) / (r.width/2);
        const dy = (e.clientY - cy) / (r.height/2);
        const rx = (-dy * max);
        const ry = (dx * max);

        cancelAnimationFrame(raf);
        raf = requestAnimationFrame(() => {
          card.style.transform = `translateY(-8px) perspective(900px) rotateX(${rx.toFixed(2)}deg) rotateY(${ry.toFixed(2)}deg)`;
        });
      }
      function onLeave(){
        cancelAnimationFrame(raf);
        card.style.transform = "";
      }

      card.addEventListener("mousemove", onMove);
      card.addEventListener("mouseleave", onLeave);
    });
  }

  // ---------- Render cards ----------
  function renderUnits(filterTerm = "") {
    const term = filterTerm.trim().toLowerCase();

    const filtered = !term ? UNITS : UNITS.filter(u => {
      const hay = [
        u.title, u.summary,
        ...(u.chips || []),
        ...(u.blocks || []).flatMap(b => [
          b.h3,
          ...(b.p || []),
          ...(b.ul || []),
          ...(b.ol || []),
          b.code || ""
        ])
      ].join(" ").toLowerCase();
      return hay.includes(term);
    });

    unitList.innerHTML = "";

    filtered.forEach((u, idx) => {
      const a = document.createElement("a");
      a.className = "unit-card reveal";
      a.href = `#${u.id}`;
      a.setAttribute("data-open-unit", u.id);

      const titleShort = (u.title || "").replace(/^Unidad\s+\d+\s+—\s*/i, "");
      const chips = inferChips(u).slice(0, 3);

      const heroStyle = (u.figure && u.figure.src)
        ? `style="background-image:url('${esc(u.figure.src)}')"`
        : "";

      const heroClass = (u.figure && u.figure.src) ? "unit-hero has-img" : "unit-hero";

      a.innerHTML = `
        <div class="${heroClass}" ${heroStyle}></div>
        <div class="unit-body">
          <div class="unit-head">
            <span class="badge">Unidad ${u.number}</span>
            <span class="badge" style="opacity:.78;">Teoría</span>
          </div>

          <div class="unit-title">${esc(titleShort)}</div>
          <div class="unit-summary">${esc(u.summary || "")}</div>

          <div class="unit-chips">
            ${chips.map(c => `<span class="chip">${esc(c)}</span>`).join("")}
          </div>

          <div class="open-pill">Abrir <span style="opacity:.8;">↵</span></div>
        </div>
      `;

      a.style.transitionDelay = `${Math.min(idx * 35, 220)}ms`;
      unitList.appendChild(a);
    });

    emptyState.hidden = filtered.length !== 0;

    setupReveal();
    setupTilt();
  }

  // ---------- Modal navigation state ----------
  let currentIndex = -1;
  function setNavButtons(){
    prevUnitBtn.disabled = (currentIndex <= 0);
    nextUnitBtn.disabled = (currentIndex < 0 || currentIndex >= UNITS.length - 1);
    prevUnitBtn.style.opacity = prevUnitBtn.disabled ? .45 : 1;
    nextUnitBtn.style.opacity = nextUnitBtn.disabled ? .45 : 1;
  }

  function openUnitModalById(unitId) {
    const idx = UNITS.findIndex(x => x.id === unitId);
    if (idx < 0) return;

    currentIndex = idx;
    const u = UNITS[idx];

    mBadge.textContent = `Unidad ${u.number}`;
    mTitle.textContent = (u.title || "").replace(/^Unidad\s+\d+\s+—\s*/i, "");
    mSummary.textContent = u.summary || "";
    mBody.innerHTML = unitToHTML(u);

    setNavButtons();

    document.body.classList.add("modal-open");
    modal.classList.remove("is-closing");
    if (!modal.open) modal.showModal();
    mClose.focus();
  }

  function closeUnitModal() {
    if (!modal.open) return;
    modal.classList.add("is-closing");
    setTimeout(() => {
      modal.close();
      modal.classList.remove("is-closing");
      document.body.classList.remove("modal-open");
    }, 200);
  }

  function openPrev(){ if (currentIndex > 0) openUnitModalById(UNITS[currentIndex - 1].id); }
  function openNext(){ if (currentIndex >= 0 && currentIndex < UNITS.length - 1) openUnitModalById(UNITS[currentIndex + 1].id); }

  // ---------- Events ----------
  unitList.addEventListener("click", (e) => {
    const link = e.target.closest("[data-open-unit]");
    if (!link) return;
    e.preventDefault();
    openUnitModalById(link.getAttribute("data-open-unit"));
  });

  mClose.addEventListener("click", closeUnitModal);
  prevUnitBtn.addEventListener("click", openPrev);
  nextUnitBtn.addEventListener("click", openNext);

  modal.addEventListener("click", (e) => {
    const rect = modal.getBoundingClientRect();
    const outside =
      e.clientX < rect.left || e.clientX > rect.right ||
      e.clientY < rect.top  || e.clientY > rect.bottom;
    if (outside) closeUnitModal();
  });

  window.addEventListener("keydown", (e) => {
    // Atajo: "/" foco a búsqueda
    if (e.key === "/" && document.activeElement !== q && !modal.open) {
      e.preventDefault();
      q.focus();
      return;
    }
    if (!modal.open) return;
    if (e.key === "Escape") closeUnitModal();
    if (e.key === "ArrowLeft") openPrev();
    if (e.key === "ArrowRight") openNext();
  });

  function openFromHash() {
    const id = location.hash.replace("#", "");
    if (id && UNITS.some(u => u.id === id)) openUnitModalById(id);
  }
  window.addEventListener("hashchange", openFromHash);

  q.addEventListener("input", () => renderUnits(q.value));
  clearSearch.addEventListener("click", () => {
    q.value = "";
    q.focus();
    renderUnits("");
  });

  // Theme
  const THEME_KEY = "teoria-theme";
  function applyTheme(t) {
    html.setAttribute("data-theme", t);
    if (t === "dark") { themeIcon.textContent = "🌙"; themeLabel.textContent = "Oscuro"; }
    else { themeIcon.textContent = "☀️"; themeLabel.textContent = "Claro"; }
  }
  applyTheme(localStorage.getItem(THEME_KEY) === "light" ? "light" : "dark");
  themeBtn.addEventListener("click", () => {
    const next = html.getAttribute("data-theme") === "dark" ? "light" : "dark";
    applyTheme(next);
    localStorage.setItem(THEME_KEY, next);
    // el canvas cambia “solo” porque consulta el tema en cada frame
  });

  printBtn.addEventListener("click", () => window.print());

  // ----------  ----------
  setupCanvasBackground();
  renderUnits("");
  openFromHash();
})();
