// js/units.js
// Solo datos. Añadir unidad = añadir un objeto aquí.

const UNITS = [
  {
    id: "u1",
    number: 1,
    title: "Unidad 1 — Matemática discreta y teoría de números para seguridad digital",
    summary:
      "Primos, divisibilidad, congruencias y Euclides como base matemática de criptografía y blockchain. Conexión con RSA, hashes, ECC y pruebas de conocimiento cero.",
    chips: ["Primos", "Euclides", "RSA"],
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
          "Criptografía: confidencialidad e integridad usando problemas difíciles.",
          "Blockchain: inmutabilidad con hashes y verificación distribuida.",
          "Objetivo: construir base para el resto del curso."
        ]
      },
      {
        h3: "1.2 Números primos: los ladrillos de la seguridad",
        p: [
          "Multiplicar primos es fácil; factorizar un número grande en primos es difícil. Esa asimetría está detrás de RSA.",
          "La generación de claves necesita tests de primalidad (probabilísticos) para primos grandes."
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
          "Patrón didáctico: concepto → ejemplo pequeño → conexión con seguridad real.",
          "En RSA, recalcar que el algoritmo es público: la seguridad está en la dificultad matemática."
        ]
      }
    ]
  }
];

