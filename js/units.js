// js/units.js
// Solo datos. Añadir unidad = añadir un objeto aquí.

const UNITS = [
  {
  id: "u1",
  number: 1,
  title: "Unidad 1 — Matemática discreta y teoría de números para seguridad digital",
  summary:
    "Introducción a los fundamentos que sostienen criptografía y blockchain: números primos, divisibilidad, congruencias, algoritmo de Euclides y teorema fundamental de la aritmética. Se conectan con RSA, funciones hash, ECC y pruebas de conocimiento cero.",

  blocks: [
    {
      h3: "1.1 ¿Por qué matemática discreta en criptografía y blockchain?",
      p: [
        "La matemática discreta estudia estructuras no continuas: enteros, grafos y conjuntos finitos. A diferencia del cálculo, aquí trabajamos con objetos contables y reglas exactas.",
        "En seguridad digital es clave porque criptografía y blockchain dependen de propiedades de los enteros: primos, divisibilidad y aritmética modular. Esto permite proteger información, autenticar identidades y validar transacciones de forma verificable."
      ],
      ul: [
        "Criptografía: protege confidencialidad e integridad usando problemas matemáticos difíciles (ej. factorización).",
        "Blockchain: asegura inmutabilidad usando hashes y mecanismos criptográficos basados en aritmética modular.",
        "Objetivo de la unidad: construir base matemática para el resto del curso con ejemplos y ejercicios."
      ]
    },

    {
      h3: "1.2 Números primos: los “ladrillos” de la seguridad",
      p: [
        "Un número primo solo es divisible por 1 y por sí mismo. Su importancia en criptografía viene de una asimetría: multiplicar primos es fácil, pero factorizar un número grande en primos es muy difícil.",
        "Esto sustenta RSA (producto de dos primos grandes) y también aparece en generación de claves (tests de primalidad) y en sistemas modernos como ECC."
      ],
      ul: [
        "Ejemplos de primos: 2, 3, 5, 7, 11, 13, 17, 19…",
        "Idea central: verificación fácil vs inversión difícil (base de la criptografía moderna).",
        "Pruebas de primalidad: Fermat y Miller–Rabin (probabilísticas) para generar primos grandes."
      ]
    },

    {
      h3: "1.3 Divisibilidad: definición, propiedades y por qué importa",
      p: [
        "Decimos que a divide a b (a | b) si existe un entero k tal que b = a·k. Este concepto permite razonar sobre factores, MCD y algoritmos eficientes.",
        "En criptografía es esencial porque la factorización y la aritmética modular se apoyan en estas relaciones."
      ],
      ul: [
        "Transitividad: si a|b y b|c ⇒ a|c.",
        "Suma/resta: si a|b y a|c ⇒ a|(b+c) y a|(b−c).",
        "Multiplicación: si a|b ⇒ a|(b·c) para cualquier entero c."
      ]
    },

    {
      h3: "1.4 División euclidiana y algoritmo de Euclides (MCD)",
      p: [
        "La división euclidiana dice que para enteros a y b (b≠0) existen q y r únicos tales que a = bq + r con 0 ≤ r < |b|. Esta idea es la base del algoritmo de Euclides.",
        "El algoritmo de Euclides calcula el MCD de forma muy eficiente: MCD(a,b)=MCD(b, a mod b). Se repite hasta que el residuo sea 0. En criptografía es clave para comprobar coprimalidad y calcular inversos modulares (versión extendida)."
      ],
      code:
`Ejemplo: MCD(252, 105)
252 = 105·2 + 42   → MCD(252,105)=MCD(105,42)
105 = 42·2 + 21    → MCD(105,42)=MCD(42,21)
42  = 21·2 + 0     → MCD = 21`
    },

    {
      h3: "1.5 Teorema Fundamental de la Aritmética",
      p: [
        "Todo entero n>1 puede expresarse de manera única (salvo orden) como producto de números primos. Esta unicidad es una piedra angular de la teoría de números.",
        "En seguridad digital, se aprovecha que es fácil multiplicar y verificar, pero muy difícil reconstruir los primos cuando los números son enormes (caso RSA)."
      ],
      code:
`Ejemplo: 360 = 2^3 · 3^2 · 5
La factorización es única (salvo el orden de los factores).`
    },

    {
      h3: "1.6 Aplicaciones directas en criptografía y blockchain",
      p: [
        "Los conceptos anteriores se reflejan en sistemas reales. RSA usa factorización; las funciones hash garantizan integridad y efecto avalancha; ECC logra la misma seguridad con claves más pequeñas; y las pruebas de conocimiento cero permiten demostrar algo sin revelar el secreto.",
        "También se introduce el impacto de la computación cuántica (Shor) como reto para RSA, motivando la criptografía poscuántica."
      ],
      ul: [
        "RSA: seguridad basada en la dificultad de factorizar n = p·q (primos grandes).",
        "Hash en blockchain: sellan bloques; pequeñas variaciones ⇒ hash totalmente distinto (avalanchas).",
        "ECC: claves mucho menores para el mismo nivel de seguridad (ideal para móviles/IoT).",
        "ZKP: demostrar que sabes algo (p.ej. contraseña) sin enviarlo; casos como Zcash."
      ]
    },

    {
      h3: "1.7 Resultados de aprendizaje y práctica mínima",
      p: [
        "Al finalizar la unidad, el alumnado debe manejar primos, divisibilidad y congruencias en contextos matemáticos y criptográficos; implementar Euclides (y entender su rol en seguridad); valorar el teorema fundamental y conectar estos conceptos con criptografía y blockchain."
      ],
      ul: [
        "Ejercicios: identificación de primos, factorización, congruencias simples, MCD por Euclides.",
        "Mini-práctica: usar Euclides para comprobar coprimalidad (pre-RSA) y discutir por qué eso importa.",
        "Conexión: explicar con palabras la asimetría “fácil multiplicar, difícil factorizar”."
      ]
    }
  ],

  // ✅ Imagen sugerida: usa una de las láminas que has subido (ver apartado 2).
  figure: {
    src: "img/u1_portada.jpg",
    alt: "Portada unidad 1: teoría de números y seguridad digital",
    caption: "Unidad 1: teoría de números aplicada a criptografía y blockchain."
  },

  extras: [
    {
      title: "Notas del profesor (para guiar la sesión)",
      p: [
        "Enfatiza el patrón didáctico: (1) concepto → (2) ejemplo pequeño → (3) conexión con seguridad real.",
        "Cuando llegues a RSA: recalca que la seguridad no está en ocultar el algoritmo, sino en la dificultad matemática del problema.",
        "Si hay tiempo: introduce “coprimo” y por qué el inverso modular es la pieza clave del descifrado."
      ]
    }
  ]
},
];

