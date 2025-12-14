// ---------- Datos (añadir unidad = añadir texto aquí) ----------
const UNITS = [
  {
    id: "u1",
    number: 1,
    title: "Unidad 1 — Matemática discreta y teoría de números para seguridad digital",
    summary:
      "Fundamentos: primos, divisibilidad, congruencias, Euclides y teorema fundamental. Conexión con RSA, hash, ECC y ZKP.",
    figure: {
      src: "img/u1_portada.jpg",
      alt: "Portada unidad 1: teoría de números y seguridad digital",
      caption: "Unidad 1: teoría de números aplicada a criptografía y blockchain."
    },
    blocks: [
      {
        h3: "1.1 ¿Por qué matemática discreta en criptografía y blockchain?",
        p: [
          "La matemática discreta estudia estructuras no continuas: enteros, grafos y conjuntos finitos.",
          "En seguridad digital es clave porque criptografía y blockchain dependen de propiedades de los enteros: primos, divisibilidad y aritmética modular."
        ],
        ul: [
          "Criptografía: confidencialidad e integridad (problemas matemáticos difíciles).",
          "Blockchain: inmutabilidad mediante hashes y verificación.",
          "Objetivo: construir base matemática para el resto del curso."
        ]
      },
      {
        h3: "1.2 Números primos: los ladrillos de la seguridad",
        p: [
          "Multiplicar primos es fácil; factorizar un número grande es difícil.",
          "Esa asimetría es la base de RSA y aparece en generación de claves."
        ]
      },
      {
        h3: "1.4 Algoritmo de Euclides (MCD)",
        p: [
          "El algoritmo de Euclides calcula el MCD de forma eficiente: MCD(a,b)=MCD(b, a mod b).",
          "Es esencial para coprimalidad e inversos modulares (versión extendida)."
        ],
        code:
`Ejemplo: MCD(252, 105)
252 = 105·2 + 42
105 = 42·2 + 21
42  = 21·2 + 0
MCD = 21`
      }
    ],
    extras: [
      {
        title: "Notas del profesor",
        p: [
          "Patrón: concepto → ejemplo pequeño → conexión con seguridad real.",
          "En RSA, recalcar que el algoritmo es público: la seguridad está en la dificultad matemática."
        ]
      }
    ]
  }
];

// ---------- Helpers ----------
function esc(s) {
  return String(s).replace(/[&<>"']/g, m => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;"
  }[m]));
}

// ---------- DOM ----------
const unitList = document.getElementById("unitList");
const content = document.getElementById("content");
const q = document.getElementById("q");

// Modal DOM
const modal = document.getElementById("unitModal");
const mBadge = document.getElementById("mBadge");
const mTitle = document.getElementById("mTitle");
const mSummary = document.getElementById("mSummary");
const mBody = document.getElementById("mBody");
const mClose = document.getElementById("mClose");

// ---------- Render list + (opcional) contenido en main ----------
function renderUnits(filterTerm = "") {
  const term = filterTerm.trim().toLowerCase();

  const filtered = !term ? UNITS : UNITS.filter(u => {
    const hay = [
      u.title, u.summary,
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

  // Sidebar
  unitList.innerHTML = "";
  filtered.forEach(u => {
    const a = document.createElement("a");
    a.className = "unitlink";
    a.href = `#${u.id}`;
    a.setAttribute("data-open-unit", u.id);

    const titleShort = (u.title || "").replace(/^Unidad\s+\d+\s+—\s*/i, "");
    a.innerHTML = `
      <strong>Unidad ${u.number}</strong>
      <small>${esc(titleShort)}</small>
      <span class="open-pill">Abrir</span>
    `;
    unitList.appendChild(a);
  });

  // Main: puedes dejarlo vacío o mostrar “ayuda”
  content.innerHTML = "";
  if (!filtered.length) {
    content.innerHTML = `
      <article class="unit">
        <header>
          <div class="unit-title">
            <span class="badge">Sin resultados</span>
            <h2 style="font-size:1.1rem;">No se encontró nada</h2>
          </div>
        </header>
        <p class="meta">Prueba con otra palabra clave.</p>
      </article>`;
    return;
  }

  content.innerHTML = `
    <article class="unit">
      <header>
        <div class="unit-title">
          <span class="badge">Consejo</span>
          <h2 style="font-size:1.1rem;">Selecciona una unidad para abrirla en ventana</h2>
        </div>
      </header>
      <p class="meta">
        Haz clic en cualquier unidad del índice. Se abrirá en un panel central con transiciones.
      </p>
    </article>`;
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

// ---------- Modal open/close (con cierre animado) ----------
function openUnitModal(unitId) {
  const u = UNITS.find(x => x.id === unitId);
  if (!u) return;

  mBadge.textContent = `Unidad ${u.number}`;
  mTitle.textContent = (u.title || "").replace(/^Unidad\s+\d+\s+—\s*/i, "");
  mSummary.textContent = u.summary || "";
  mBody.innerHTML = unitToHTML(u);

  document.body.classList.add("modal-open");
  modal.classList.remove("is-closing");
  if (!modal.open) modal.showModal();

  // foco accesible
  mClose.focus();
}

function closeUnitModal() {
  if (!modal.open) return;

  modal.classList.add("is-closing");
  // deja que corra la transición y luego cierra
  setTimeout(() => {
    modal.close();
    modal.classList.remove("is-closing");
    document.body.classList.remove("modal-open");
  }, 180);
}

// Click en índice -> abrir modal
unitList.addEventListener("click", (e) => {
  const link = e.target.closest("[data-open-unit]");
  if (!link) return;
  e.preventDefault();
  openUnitModal(link.getAttribute("data-open-unit"));
});

// Botón cerrar
mClose.addEventListener("click", closeUnitModal);

// Click fuera (backdrop)
modal.addEventListener("click", (e) => {
  const rect = modal.getBoundingClientRect();
  const outside =
    e.clientX < rect.left || e.clientX > rect.right ||
    e.clientY < rect.top  || e.clientY > rect.bottom;
  if (outside) closeUnitModal();
});

// Abrir por hash
function openFromHash() {
  const id = location.hash.replace("#", "");
  if (id && UNITS.some(u => u.id === id)) openUnitModal(id);
}
window.addEventListener("hashchange", openFromHash);

// ---------- Search ----------
q.addEventListener("input", () => renderUnits(q.value));

// ---------- Theme toggle ----------
const THEME_KEY = "teoria-theme";
const html = document.documentElement;
const themeBtn = document.getElementById("themeBtn");
const themeIcon = document.getElementById("themeIcon");
const themeLabel = document.getElementById("themeLabel");

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
});

// ---------- Print ----------
document.getElementById("printBtn").addEventListener("click", () => window.print());

// ---------- Init ----------
renderUnits("");
openFromHash();
