// js/units.js
// Solo datos. Añadir unidad = añadir un objeto aquí.

window.UNITS = [
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
//------------------------------------------------------------------------------------------------------------------------------
//
//
//------------------------------------------------------------------------------------------------------------------------------
{
  id: "u2",
  number: 2,
  title: "Unidad 2 — Fundamentos de Criptografía",
  summary:
    "Evolución histórica (César, Vigenère, Enigma) hasta la criptografía moderna. Diferencias entre cifrados clásicos y modernos, y los pilares: confidencialidad, integridad y autenticación. Introducción a cifrado simétrico/asimétrico y su uso en seguridad digital.",
  chips: ["Historia", "CIA + Auth", "Simétrico/Asimétrico"],

  figure: {
    src: "img/u2_portada.jpg",
    alt: "Portada unidad 2: fundamentos de criptografía",
    caption: "Unidad 2: de la criptografía clásica a la seguridad digital moderna."
  },

  blocks: [
    {
      h3: "2.1 Historia y evolución de la criptografía",
      p: [
        "La criptografía nace por la necesidad de ocultar mensajes y proteger comunicaciones. Evoluciona desde técnicas simples hasta sistemas matemáticos y estándares modernos.",
        "En la Antigüedad aparece el cifrado de César (sustitución por desplazamiento). En la Edad Media se populariza el cifrado Vigenère (polialfabético) para resistir mejor ataques. En el siglo XX, las máquinas electromecánicas como Enigma marcan un salto enorme: combinaciones masivas, pero también el nacimiento del criptoanálisis moderno."
      ],
      ul: [
        "César: sustitución simple → vulnerable a análisis de frecuencia.",
        "Vigenère: clave + sustitución variable → más resistente que César.",
        "Enigma: rotores + permutaciones → auge de criptoanálisis (Bletchley Park)."
      ]
    },

    {
      h3: "2.2 Criptografía clásica vs criptografía moderna",
      p: [
        "Los cifrados clásicos suelen basarse en reglas “lingüísticas” (sustitución/transposición) y se rompen con estadística y pruebas sistemáticas. La criptografía moderna se apoya en matemáticas, algoritmos estandarizados y modelos de amenaza.",
        "Con la era digital surgen estándares como DES en los años 70 y posteriormente AES en los 2000, consolidados como cifrado simétrico. En paralelo, la criptografía asimétrica (clave pública/privada) aparece en los 70 y cambia el paradigma: permite comunicación segura sin compartir previamente una clave secreta."
      ],
      ul: [
        "Clásica: fácil de implementar, poca seguridad frente a ataques modernos.",
        "Moderna: algoritmos públicos, seguridad basada en claves y problemas difíciles.",
        "Estándares: DES → AES (simétrico); clave pública para intercambio y firmas."
      ]
    },

    {
      h3: "2.3 Principios de seguridad: confidencialidad, integridad y autenticación",
      p: [
        "La criptografía moderna persigue tres objetivos: confidencialidad (solo acceden los autorizados), integridad (detectar alteraciones) y autenticación (verificar identidad). En sistemas reales trabajan juntos.",
        "Por ejemplo, confidencialidad sin integridad permitiría modificar datos cifrados sin que nadie lo detecte. Integridad sin autenticación puede permitir que un atacante altere información ‘como si’ fuera el emisor legítimo. Por eso se combinan cifrado, hashes/MAC, firmas y certificados."
      ],
      ul: [
        "Confidencialidad: cifrado (simétrico/asimétrico).",
        "Integridad: hashes, MAC, firmas digitales.",
        "Autenticación: contraseñas, 2FA, biometría, certificados y PKI."
      ]
    },

    {
      h3: "2.4 Autenticación: métodos y firma digital",
      p: [
        "La autenticación valida identidades antes de conceder acceso. Puede basarse en ‘algo que sabes’ (contraseña/PIN), ‘algo que tienes’ (2FA con móvil/token) o ‘algo que eres’ (biometría).",
        "En entornos profesionales, los certificados digitales (emitidos por una CA) enlazan una identidad con una clave pública. Las firmas digitales usan criptografía asimétrica para asegurar que un mensaje proviene del emisor y no ha sido alterado."
      ],
      ul: [
        "Contraseñas/PIN: simples pero vulnerables (reutilización, phishing).",
        "2FA: reduce riesgo si la contraseña se filtra.",
        "Certificados/CA: base de confianza en Internet (identidad ↔ clave pública).",
        "Firma digital: integridad + autenticidad del mensaje/documento."
      ]
    },

    {
      h3: "2.5 Cifrado simétrico vs asimétrico (cuándo usar cada uno)",
      p: [
        "En cifrado simétrico se usa la misma clave para cifrar/descifrar: es rápido y eficiente, ideal para grandes volúmenes (por ejemplo, cifrar ficheros o tráfico una vez establecida la sesión). Su reto es el intercambio seguro de claves.",
        "En cifrado asimétrico hay par de claves (pública/privada): resuelve el intercambio inicial y permite firmas digitales, pero es más costoso computacionalmente. En la práctica se combinan: asimétrico para acordar la clave, simétrico para cifrar datos."
      ],
      ul: [
        "Simétrico: muy rápido, pero requiere compartir clave secreta.",
        "Asimétrico: facilita intercambio y firmas, pero más lento.",
        "Uso real: híbrido (TLS/HTTPS: handshake asimétrico + datos simétricos)."
      ]
    },

    {
      h3: "2.6 Mini-ejemplos rápidos (para clase y práctica)",
      p: [
        "Los ejemplos pequeños ayudan a entender el ‘por qué’ de la evolución. Un cifrado simple puede ser didáctico, pero inseguro en producción. En cambio, los cifrados modernos están diseñados para resistir ataques conocidos.",
        "En esta unidad se recomienda practicar cifrados clásicos, simular ataques (frecuencia/bruteforce) y luego comparar con herramientas modernas para ver por qué hoy usamos estándares."
      ],
      code:
`César (desplazamiento k=3):
TEXTO:  HOLA
CIFRA:  KROD  (H→K, O→R, L→O, A→D)

Idea clave:
- Fácil cifrar/descifrar
- Fácil romper con fuerza bruta (25 opciones) y frecuencia`
    }
  ],

  extras: [
    {
      title: "Resultados de aprendizaje (qué deberían dominar)",
      p: [
        "Describir la evolución histórica de la criptografía y cómo cambian los métodos con la tecnología.",
        "Diferenciar cifrados clásicos y modernos, identificando ventajas/limitaciones actuales.",
        "Explicar confidencialidad, integridad y autenticación y su implementación práctica.",
        "Aplicar conceptos básicos de cifrado simétrico y asimétrico en escenarios sencillos."
      ]
    },
    {
      title: "Idea de práctica para enlazar con tu web (HTML5)",
      p: [
        "Actividad sugerida: ‘Rompe el cifrado’. La app permite cifrar con César/Vigenère y luego atacar (frecuencia/bruteforce) para ver debilidades. Después, comparan con un cifrado moderno (demo conceptual) y redactan conclusiones."
      ]
    }
  ]
},
//------------------------------------------------------------------------------------------------------------------------------
//
// Unidad 3 — Funciones Hash y Cifrado Simétrico (SHA-2 / AES) + uso real (integridad, autenticación y fallos típicos)
//
//------------------------------------------------------------------------------------------------------------------------------
{
  id: "u3",
  number: 3,
  title: "Unidad 3 — Hash (SHA-2) y Cifrado Simétrico (AES)",
  summary:
    "Funciones hash como huella digital (salida fija), propiedades (determinismo, avalancha, colisiones/preimagen) y usos reales: integridad, verificación, forense, deduplicación, blockchain. Segunda parte: cifrado simétrico (DES/3DES/AES), modos de operación (ECB/CBC/CTR/GCM), IV/nonce y AEAD. Enfoque realista: la cripto fuerte no compensa mala ingeniería (nonces repetidos, claves filtradas, endpoints).",
  chips: ["Hash", "SHA-2", "AES", "Modos", "AEAD", "Realismo"],

  figure: {
    src: "img/u3_portada.jpg",
    alt: "Portada unidad 3: hash y cifrado simétrico",
    caption: "Unidad 3: integridad (hash) + confidencialidad (AES) + uso correcto en sistemas reales."
  },

  blocks: [
    {
      h3: "3.1 Hash: qué es y por qué importa (huella digital)",
      p: [
        "Una función hash transforma cualquier entrada (texto/archivo/firmware) en una salida de tamaño fijo (digest). No cifra: no oculta contenido; permite identificarlo y detectar cambios.",
        "La salida fija hace que sea ideal para comparar rápido, indexar en BBDD, deduplicar y verificar descargas. Si el archivo cambia, el digest cambia de forma drástica."
      ],
      ul: [
        "Salida fija: SHA-256 → 256 bits siempre.",
        "Uso típico: verificación de integridad (descargas, firmware, backups).",
        "Hash ≠ mini-copia: no permite reconstruir el archivo."
      ]
    },

    {
      h3: "3.2 Propiedades criptográficas (determinismo, avalancha, resistencias)",
      p: [
        "Para que un hash sea útil en seguridad debe ser determinista (mismo input → mismo digest), mostrar efecto avalancha (cambio mínimo → digest totalmente distinto) y resistir ataques clave.",
        "Resistencias: preimagen (dado H, encontrar M), segunda preimagen (dado M1, hallar M2), y colisiones (dos entradas distintas con mismo digest)."
      ],
      ul: [
        "Determinismo: base de la verificación.",
        "Avalancha: detecta alteraciones con 1 bit de diferencia.",
        "Colisiones/preimagen: marcan qué usos son seguros (firmas, integridad adversarial)."
      ]
    },

    {
      h3: "3.3 Algoritmos hash: MD5, SHA-1, SHA-256 (SHA-2) y SHA-3",
      p: [
        "No todos los hashes sirven para seguridad moderna. MD5 y SHA-1 se consideran obsoletos para escenarios adversarios por colisiones prácticas o debilidades conocidas.",
        "SHA-256 (SHA-2) es el estándar práctico actual para integridad. SHA-3 aporta una familia alternativa con diseño distinto (diversidad criptográfica)."
      ],
      ul: [
        "Evitar: MD5 / SHA-1 en integridad bajo ataque y firmas.",
        "Usar: SHA-256 (verificación, integridad) / SHA-3 como alternativa robusta.",
        "Idea clave: elegir algoritmo según amenaza, no por costumbre."
      ]
    },

    {
      h3: "3.4 Contraseñas: por qué un hash rápido no basta (salt + KDF + coste)",
      p: [
        "Guardar contraseñas en texto plano es crítico. Guardarlas como hash ayuda, pero si el hash es rápido (SHA-256 sin más), un atacante puede probar millones de intentos por segundo (diccionario/fuerza bruta).",
        "Defensas: salt (rompe reutilización y rainbow tables) + KDF (encarece cada intento) + coste/memoria (dificulta ataques masivos)."
      ],
      ul: [
        "Ataques reales: diccionario, fuerza bruta, tablas arcoíris.",
        "Salt por usuario: hashes distintos aunque la contraseña sea igual.",
        "KDF/coste: cada intento se vuelve caro → defensa práctica."
      ]
    },

    {
      h3: "3.5 Integridad autenticada: MAC/HMAC y el límite del hash ‘solo’",
      p: [
        "Un hash por sí solo no demuestra quién envió el mensaje: si un atacante puede modificar mensaje y hash, te engaña igual.",
        "HMAC (hash + clave secreta) aporta integridad + autenticidad entre dos partes que comparten clave. Para identidad pública: firmas digitales."
      ],
      ul: [
        "Hash solo: integridad si el ‘hash de referencia’ es confiable.",
        "HMAC: el atacante no puede recalcular sin la clave.",
        "Regla mental: integridad ≠ autenticidad."
      ]
    },

    {
      h3: "3.6 Cifrado simétrico: DES/3DES y salto a AES",
      p: [
        "El cifrado simétrico protege confidencialidad usando la misma clave para cifrar/descifrar. DES fue histórico pero hoy es vulnerable (clave corta). 3DES fue un parche, pero es lento y con bloque pequeño.",
        "AES es el estándar moderno: rápido, robusto, soporte amplio, claves 128/192/256 y bloque de 128 bits."
      ],
      ul: [
        "DES: obsoleto por fuerza bruta (clave corta).",
        "3DES: compatibilidad histórica, hoy en retirada.",
        "AES: estándar moderno en la práctica."
      ]
    },

    {
      h3: "3.7 Modos de operación: ECB, CBC, CTR, GCM (AEAD) y IV/nonce",
      p: [
        "AES cifra bloques; para mensajes reales se usan modos. ECB filtra patrones (malo). CBC evita patrones pero requiere IV correcto y no da integridad por sí solo. CTR es rápido, pero no se puede repetir nonce con la misma clave.",
        "GCM (AEAD) integra cifrado + autenticación (tag). En sistemas modernos, AEAD es la opción preferida para evitar manipulación."
      ],
      ul: [
        "ECB: no usar en datos reales.",
        "CBC/CTR: seguros si se usan bien (IV/nonce correctos) y con autenticación.",
        "GCM (AEAD): estándar moderno (confidencialidad + integridad)."
      ]
    },

    {
      h3: "3.8 Realismo de seguridad: no se rompe AES, se rompe el sistema alrededor",
      p: [
        "Romper SHA-256 o AES-256 por fuerza bruta no es realista hoy. Los incidentes ocurren por fallos de ingeniería: contraseñas débiles, nonces repetidos, claves filtradas, endpoints comprometidos, ingeniería social.",
        "‘Seguro’ no significa invulnerable: significa que, implementado correctamente, el coste del ataque es demasiado alto."
      ],
      ul: [
        "Errores típicos: nonce reuse, claves hardcodeadas, logs con secretos.",
        "Buenas prácticas: AEAD, rotación de claves, controles de acceso y auditoría.",
        "Mentalidad: modelo de amenaza + implementación correcta."
      ]
    },

    {
      h3: "3.9 Mini-ejemplos rápidos (para clase y práctica)",
      p: [
        "Ejemplos guiados para fijar ideas: determinismo/avalancha con SHA-256, verificación de firmware OT con hash oficial, y demostración de por qué ECB filtra patrones.",
        "Objetivo: que el alumno elija herramienta correcta (hash/cifrado/HMAC) según el problema (integridad, confidencialidad, autenticidad)."
      ],
      code:
`Ejemplo conceptual (no cálculos):
- Mismo archivo → mismo SHA-256 (determinismo)
- Cambiar 1 byte → SHA-256 cambia por completo (avalancha)

Checklist operativo (firmware):
hash oficial + cálculo local + comparación

Regla de oro (CTR/GCM):
NO repetir nonce con la misma clave`
    }
  ],

  extras: [
    {
      title: "Resultados de aprendizaje (qué deberían dominar)",
      p: [
        "Explicar qué es un hash, sus propiedades y sus usos reales (integridad, verificación, forense, deduplicación, blockchain).",
        "Diferenciar colisiones, preimagen y ataques a contraseñas (diccionario/fuerza bruta) y justificar defensas (salt + KDF).",
        "Explicar cifrado simétrico (DES/3DES/AES) y seleccionar modos seguros (CBC/CTR/GCM) entendiendo IV/nonce y AEAD.",
        "Aplicar criterio realista: la cripto fuerte exige buena implementación y gestión de claves."
      ]
    },
    {
      title: "Idea de práctica para enlazar con tu web (HTML5)",
      p: [
        "Actividad sugerida: ‘Integrity Lab’. La app permite: (1) calcular SHA-256 de archivos/textos y comprobar determinismo/avalancha, (2) simular verificación de firmware con hash oficial, (3) demo visual ECB vs CBC/CTR, (4) mini-simulador de ‘nonce reuse’ (por qué rompe CTR/GCM). Los alumnos entregan conclusiones y checklist de buenas prácticas."
      ]
    }
  ]
},
//------------------------------------------------------------------------------------------------------------------------------
//
//  UNIDAD 4 — ESQUEMA (igual estilo que U2)
//------------------------------------------------------------------------------------------------------------------------------
{
  id: "u4",
  number: 4,
  title: "Unidad 4 — Criptografía Asimétrica (RSA, Firma Digital y Certificados)",
  summary:
    "Introducción a la criptografía de clave pública: par de claves (pública/privada), flujos de cifrado/descifrado y firma/verificación. Estudio del algoritmo RSA (fundamentos matemáticos, generación de claves y uso práctico en seguridad web). Cierre con firma digital, certificados digitales y PKI: confianza, validación y revocación, con prácticas guiadas usando OpenSSL.",
  chips: ["Clave pública/privada", "RSA", "Firma digital", "Certificados", "PKI", "TLS/HTTPS"],

  figure: {
    src: "img/u4_portada.jpg",
    alt: "Portada unidad 4: criptografía asimétrica, RSA, firma digital y certificados",
    caption: "Unidad 4: identidad y confianza en Internet mediante criptografía asimétrica."
  },

  blocks: [
    {
      h3: "4.1 Criptografía asimétrica: concepto y motivación",
      p: [
        "La criptografía asimétrica (clave pública) nace para resolver el problema de arrancar comunicaciones seguras sin intercambiar previamente un secreto. En lugar de una clave compartida, cada entidad genera un par de claves relacionadas matemáticamente: una clave pública (distribuible) y una clave privada (secreta).",
        "Este paradigma permite dos funciones esenciales: (1) confidencialidad mediante cifrado con clave pública del destinatario y descifrado con su clave privada; (2) autenticación e integridad mediante firma digital, donde la clave privada produce la firma y la pública la verifica.",
        "La unidad conecta estos conceptos con usos reales: navegación segura (HTTPS/TLS), firma de documentos, correo seguro y sistemas de certificación (PKI) que convierten una clave pública en una identidad verificable."
      ],
      ul: [
        "Dos claves (pública/privada) en vez de una sola compartida.",
        "Dos procesos principales: cifrado/descifrado y firma/verificación.",
        "Base de confianza para identidad digital y transacciones seguras."
      ]
    },

    {
      h3: "4.2 Claves pública y privada: definición y funcionamiento",
      p: [
        "La clave pública es el componente que se comparte para que terceros puedan cifrar hacia ti o verificar tus firmas. La clave privada es el componente que nunca debe salir del control del propietario: con ella descifras lo cifrado para ti y firmas en tu nombre.",
        "Un error típico en alumnos es mezclar los dos usos (confidencialidad vs autenticación). Aquí se debe fijar el modelo mental: 'Cifrar para ti' usa tu pública; 'Firmar como tú' usa tu privada.",
        "A partir de esta base, la unidad presenta ventajas (no intercambio previo, autenticación fuerte) y riesgos (rendimiento, gestión de claves, impacto crítico si se filtra la privada)."
      ],
      ul: [
        "Clave pública: cifrar hacia el destinatario / verificar firmas del emisor.",
        "Clave privada: descifrar lo recibido / firmar documentos o mensajes.",
        "Compromiso de la privada = pérdida de confidencialidad y suplantación."
      ]
    },

    {
      h3: "4.3 Dos flujos que hay que dominar: (A) cifrado y (B) firma",
      p: [
        "Flujo A — Cifrado/Descifrado (confidencialidad): el emisor cifra con la clave pública del destinatario. Aunque el mensaje viaje por Internet, solo el destinatario puede abrirlo con su clave privada.",
        "Flujo B — Firma/Verificación (autenticidad + integridad): el emisor firma (normalmente el hash del documento) con su clave privada. Cualquiera puede verificar la firma con la clave pública del emisor y detectar modificaciones.",
        "El objetivo de esta sección es que el alumno sea capaz de mirar un diagrama y decir sin dudar: 'esto es cifrado' o 'esto es firma', y qué clave se usa en cada paso."
      ],
      ul: [
        "Cifrado: pública del destinatario → privada del destinatario.",
        "Firma: privada del emisor → pública del emisor.",
        "Firma no implica ocultar el contenido: garantiza origen e integridad."
      ]
    },

    {
      h3: "4.4 Ventajas y desafíos (incluye MITM y gestión de claves)",
      p: [
        "Ventajas: no hace falta intercambiar una clave secreta antes de empezar; habilita firmas digitales; mejora la autenticación en sistemas distribuidos; y es base de infraestructuras complejas como TLS/HTTPS y PKI.",
        "Desafíos: la criptografía asimétrica consume más recursos que la simétrica (por eso se usa de forma híbrida en muchos protocolos); requiere infraestructura de gestión (generación, rotación, almacenamiento, revocación); y la exposición de la clave privada es un fallo catastrófico.",
        "MITM: el modelo de clave pública reduce ciertos riesgos, pero si el atacante consigue que confíes en su clave pública 'como si' fuera la del servidor real, puede interponerse. De ahí la necesidad de certificados y cadenas de confianza."
      ],
      ul: [
        "Ventaja: arranque seguro sin secreto compartido previo.",
        "Problema: coste computacional y operación (gestión de claves).",
        "MITM: se mitiga de verdad cuando la clave pública está ligada a identidad (certificados/PKI)."
      ]
    },

    {
      h3: "4.5 RSA: fundamentos matemáticos mínimos (para entenderlo de verdad)",
      p: [
        "RSA se apoya en teoría de números: dos primos grandes p y q, su producto n = p·q y la dificultad práctica de factorizar n cuando los primos son grandes.",
        "El cifrado y descifrado se basan en exponenciación modular: elevar a un exponente y reducir módulo n. Aparece el papel de φ(n) (totiente de Euler) para construir los exponentes e (público) y d (privado) como inversos modulares.",
        "Esta sección debe ser 'matemáticas mínimas pero correctas': que el alumno entienda qué se calcula, por qué, y qué parte es el secreto real."
      ],
      ul: [
        "Primos y factorización: n = p·q es fácil; factorizar n es difícil.",
        "Aritmética modular: operaciones 'mod n' (exponenciación modular).",
        "Totiente φ(n): base para calcular d como inverso de e."
      ]
    },

    {
      h3: "4.6 RSA: generación de claves + cifrado/descifrado (con ejemplo guiado)",
      p: [
        "Generación de claves (visión paso a paso): elegir p y q; calcular n = p·q; calcular φ(n) = (p−1)(q−1); elegir e coprimo con φ(n); calcular d tal que e·d ≡ 1 (mod φ(n)). La pública es (n,e) y la privada es (n,d).",
        "Cifrado: c = m^e mod n. Descifrado: m = c^d mod n. Con números pequeños se puede simular para entender el flujo, aunque en producción se usan tamaños enormes y padding seguro (esto se menciona como idea, sin entrar en estandarización si no toca).",
        "La meta práctica: que puedan simular una ejecución completa con un ejemplo de juguete y luego relacionarlo con usos reales (TLS, firma, PGP)."
      ],
      code:
`RSA (esqueleto didáctico):
1) Elegir primos p, q
2) n = p*q
3) phi = (p-1)*(q-1)
4) Elegir e tal que gcd(e, phi)=1
5) Calcular d = inv_mod(e, phi)

Clave pública  = (n, e)
Clave privada  = (n, d)

Cifrado:    c = m^e mod n
Descifrado: m = c^d mod n`
    },

    {
      h3: "4.7 RSA en la vida real: TLS/HTTPS, PGP/GPG y PKI + futuro",
      p: [
        "Aplicaciones: en TLS/HTTPS, RSA puede intervenir para establecer seguridad (históricamente para intercambio/arranque), y en general aparece en autenticación y firma. En PGP/GPG se usa para cifrar y firmar correos/archivos. En PKI es un componente típico para emisión/validación de certificados.",
        "Limitaciones actuales: RSA requiere claves grandes para alta seguridad, lo que lo hace menos eficiente que alternativas modernas como ECC en muchos escenarios.",
        "Futuro: se introduce el riesgo de computación cuántica (Shor) como motivación para investigar criptografía post-cuántica. El alumno debe salir con la idea: 'RSA sigue siendo pilar, pero no es eterno'."
      ],
      ul: [
        "TLS/HTTPS: identidad + canal seguro (arquitectura híbrida).",
        "PGP/GPG: cifrado y firma en correo/archivos.",
        "Desafíos: tamaño de clave, rendimiento, amenaza cuántica, transición a post-cuántica."
      ]
    },

    {
      h3: "4.8 Firma digital: proceso, propiedades y aplicaciones",
      p: [
        "Proceso estándar (conceptual): (1) calcular hash del documento; (2) 'firmar' cifrando el hash con la clave privada del firmante; (3) verificar descifrando con la clave pública y comparando con el hash recalculado del documento recibido.",
        "Propiedades: autenticidad (quién firmó), integridad (no se alteró), no repudio (el firmante no puede negar de forma creíble si su clave privada está bajo su control).",
        "Aplicaciones: contratos digitales, transacciones financieras, correo seguro y validación de transacciones en blockchain/cripto (firmas para autorizar operaciones)."
      ],
      ul: [
        "Firma = hash(documento) firmado con clave privada.",
        "Verificación = clave pública + comparación de hashes.",
        "Aporta autenticidad, integridad y no repudio."
      ]
    },

    {
      h3: "4.9 Certificados digitales y PKI: identidad verificable en Internet",
      p: [
        "Un certificado digital asocia una clave pública con una identidad (persona/empresa/servidor). Lo emite una Autoridad de Certificación (CA) y va firmado por ella para que terceros puedan confiar en esa asociación.",
        "Contenido típico: clave pública, datos del titular, datos de la CA emisora, fechas (emisión/expiración) y firma digital de la CA. Funcionamiento: se solicita, se verifica identidad (a veces mediante una RA), la CA firma y el cliente (por ejemplo un navegador) valida el certificado con la clave pública de la CA.",
        "PKI: el 'sistema' alrededor de certificados: CA (emite), RA (valida identidad), repositorios y mecanismos de revocación (CRL/OCSP). Esta parte conecta directamente con HTTPS: tu navegador no 'cree' al servidor, verifica su certificado y su cadena de confianza."
      ],
      ul: [
        "Certificado: identidad ↔ clave pública (firmado por una CA).",
        "PKI: CA + RA + repositorios + revocación/validación.",
        "No confundir: firma digital asegura documento; certificado asegura identidad de la clave."
      ]
    },

    {
      h3: "4.10 Laboratorio guiado (OpenSSL) + mini-casos de ataque",
      p: [
        "Práctica 1: generar un par de claves RSA, exportar la clave pública y entender qué se comparte vs qué se protege.",
        "Práctica 2: firmar un mensaje/archivo y verificar la firma con la clave pública. Repetir modificando 1 byte del archivo para comprobar que la verificación falla (integridad).",
        "Práctica 3: inspeccionar un certificado X.509, identificar campos clave (issuer, subject, validez) y razonar sobre cadena de confianza y revocación. Cierre con mini-casos: intento de MITM con clave falsa, clave privada comprometida y certificado caducado."
      ],
      code:
`OpenSSL (mínimo para prácticas):
# 1) Generar clave privada RSA
openssl genpkey -algorithm RSA -pkeyopt rsa_keygen_bits:2048 -out priv.pem

# 2) Extraer clave pública
openssl pkey -in priv.pem -pubout -out pub.pem

# 3) Firmar (hash + firma)
openssl dgst -sha256 -sign priv.pem -out firma.bin mensaje.txt

# 4) Verificar firma
openssl dgst -sha256 -verify pub.pem -signature firma.bin mensaje.txt

# 5) Ver un certificado (si tienes server.crt)
openssl x509 -in server.crt -noout -text`
    }
  ],

  extras: [
    {
      title: "Resultados de aprendizaje (qué deberían dominar)",
      p: [
        "Comprender y explicar criptografía asimétrica: generación y uso de claves pública/privada.",
        "Describir RSA desde fundamentos matemáticos hasta su aplicación en cifrado y firma.",
        "Implementar o simular cifrado/descifrado RSA y relacionarlo con seguridad web (HTTPS/TLS).",
        "Explicar firma digital (integridad, autenticidad, no repudio) y aplicaciones reales.",
        "Analizar certificados digitales, confianza, validación y revocación; entender PKI.",
        "Evaluar desafíos: ataques, gestión de claves y evolución hacia criptografía post-cuántica."
      ]
    },
    {
      title: "Idea de práctica para tu web (HTML5 + ejercicios)",
      p: [
        "Actividad sugerida: ‘Diagnóstico de seguridad’. Das 4 mini-escenarios (cifrado, firma, MITM, clave privada comprometida) y el alumno debe: (1) clasificar el tipo de problema, (2) decir qué mecanismo lo evita (firma, certificado/PKI, rotación/revocación, etc.), (3) justificarlo en 3 líneas.",
        "Complemento: un ‘visor de certificados’ simple (frontend) que muestre campos clave (subject, issuer, validez) y un quiz de ‘¿confiarías o no?’ con casos de caducado, issuer desconocido, hostname mismatch."
      ]
    }
  ]
},
//------------------------------------------------------------------------------------------------------------------------------
//
// Unidad 5 — Introducción a Blockchain
//
//------------------------------------------------------------------------------------------------------------------------------
{
  id: "u5",
  number: 5,
  title: "Unidad 5 — Introducción a Blockchain",
  summary:
    "Qué es blockchain (DLT) y por qué surge: confianza sin intermediarios, transparencia, inmutabilidad y seguridad. Fundamentos matemáticos (hash, firmas digitales, consenso) y estructuras de datos (bloques, Merkle trees, lista enlazada). Comparación crítica con bases de datos tradicionales: estructura, control, seguridad, rendimiento, escalabilidad y casos de uso industriales.",

  chips: ["Motivación", "Cripto + Consenso", "Estructuras + Comparativa BD"],

  figure: {
    src: "img/u5_portada.jpg",
    alt: "Portada unidad 5: introducción a blockchain",
    caption: "Unidad 5: blockchain como infraestructura de confianza sin intermediarios."
  },

  blocks: [
    {
      h3: "5.1 Concepto y motivación detrás de Blockchain",
      p: [
        "Blockchain es una tecnología de registro distribuido (DLT) donde la información se almacena en una estructura de bloques interconectados. A diferencia de una base de datos tradicional, no hay una entidad central controlando el sistema: el estado se acuerda mediante mecanismos criptográficos y algoritmos distribuidos.",
        "Su origen se remonta a Bitcoin (2008). Aunque se diseñó para transacciones de criptomonedas, su potencial se extendió a finanzas, logística, votación electrónica e identidad digital. La idea clave no es ‘la moneda’, sino el modelo de confianza: convertir la verificación en una propiedad del sistema."
      ],
      ul: [
        "Descentralización: reduce intermediarios, costes y riesgos de censura/manipulación.",
        "Transparencia: permite verificación y auditoría (trazabilidad).",
        "Inmutabilidad: lo registrado no se altera sin evidencias (cambia toda la cadena).",
        "Seguridad: criptografía y firmas digitales para autenticidad sin revelar secretos.",
        "Reducción de costes e inclusión financiera: menos fricción y acceso sin banca tradicional."
      ]
    },

    {
      h3: "5.2 Aplicaciones más allá de las criptomonedas (visión de negocio)",
      p: [
        "La unidad subraya que blockchain se vuelve relevante cuando el problema central es la confianza entre actores, la trazabilidad, la auditoría y la resistencia a manipulaciones. Por eso aparecen casos de uso fuera del dinero.",
        "Estas aplicaciones suelen apoyarse en redes públicas o permisionadas, y a menudo conviven con sistemas tradicionales: blockchain no reemplaza todo, sino que aporta una capa de verificación y registro."
      ],
      ul: [
        "Contratos inteligentes: ejecución automática de acuerdos (ej.: pagos condicionados).",
        "Cadena de suministro: trazabilidad de productos y eventos logísticos.",
        "Identidad digital: credenciales verificables y descentralizadas para personas sin documentación.",
        "Votaciones electrónicas: registro verificable y reducción de fraude (con retos técnicos y de diseño)."
      ]
    },

    {
      h3: "5.3 Fundamentos matemáticos: criptografía en blockchain",
      p: [
        "La seguridad y confiabilidad de blockchain se apoya en criptografía y problemas matemáticos ‘difíciles’. La criptografía no es un accesorio: es el mecanismo que hace que el sistema sea verificable y resistente a alteraciones.",
        "En la unidad se destacan tres piezas: funciones hash (identidad e integridad), firmas digitales (autenticidad), y problemas criptográficos (PoW, ZKP) que dan soporte a la seguridad del consenso."
      ],
      ul: [
        "Funciones hash: identificadores únicos de bloques/transacciones e integridad (ej.: SHA-256 en Bitcoin).",
        "Firmas digitales: prueban autoría sin revelar la clave privada (ej.: ECDSA en Bitcoin/Ethereum).",
        "Problemas criptográficos: PoW y ZKP como ejemplos de ‘pruebas’ matemáticas."
      ],
      code:
`Ejemplo conceptual de hash (tipo SHA-256):
- Entrada:  "Bloque 1000"
- Salida:   f6e3aeb41bbf6bc5b8a70ea...
Idea clave:
- Un cambio mínimo en la entrada => hash completamente distinto (efecto avalancha)
- Esto hace "tamper-evident" la cadena`
    },

    {
      h3: "5.4 Consenso: cómo se acuerda el estado sin autoridad central",
      p: [
        "En una red distribuida, los participantes deben ponerse de acuerdo sobre qué transacciones son válidas y qué bloque se añade a continuación. El consenso es la pieza que permite que todos los nodos mantengan un registro consistente sin confiar en un ‘servidor central’.",
        "La unidad introduce los protocolos más comunes y su intuición: PoW (trabajo computacional), PoS (apuesta de valor) y DPoS (validadores elegidos por votación)."
      ],
      ul: [
        "PoW (Proof of Work): mineros compiten resolviendo acertijos (nonce bajo un umbral).",
        "PoS (Proof of Stake): validadores se seleccionan según stake (monedas bloqueadas).",
        "DPoS: validadores elegidos mediante votación (eficiencia mayor, modelo más ‘gobernado’)."
      ],
      code:
`Ejemplo PoW (idea):
Objetivo: encontrar un nonce tal que Hash(bloque + nonce) < umbral
- Repetir intentos: nonce = 0,1,2,3...
- Cuando se cumple, el bloque se considera válido y se propaga a la red`
    },

    {
      h3: "5.5 Estructuras de datos: bloques, cadenas y Merkle trees",
      p: [
        "Blockchain organiza transacciones agrupándolas en bloques. Los bloques se enlazan criptográficamente: cada bloque incluye el hash del bloque anterior, formando una cadena. Esto hace que modificar un bloque antiguo invalide los siguientes.",
        "Para verificar muchas transacciones de forma eficiente, se usan árboles de Merkle: combinan hashes por niveles hasta llegar a una raíz (Merkle Root). Si cambia una transacción, cambia la raíz, y la alteración se detecta."
      ],
      ul: [
        "Bloques: transacciones + timestamp + hash del anterior + (nonce en PoW).",
        "Cadena: enlace por hashes => secuencia e inmutabilidad práctica.",
        "Árbol de Merkle: verificación eficiente del conjunto de transacciones.",
        "Blockchain como lista enlazada: cada bloque apunta al anterior."
      ],
      code:
`Ejemplo de Merkle tree (4 transacciones):
TX1 = Hash(A)
TX2 = Hash(B)
TX3 = Hash(C)
TX4 = Hash(D)

H1 = Hash(TX1 + TX2)
H2 = Hash(TX3 + TX4)
MerkleRoot = Hash(H1 + H2)

Si cambia A => cambia TX1 => cambia H1 => cambia MerkleRoot (alarma de integridad)`
    },

    {
      h3: "5.6 Blockchain vs Bases de Datos tradicionales (comparación útil para decidir)",
      p: [
        "La unidad insiste en que son tecnologías con propósitos distintos. Blockchain prioriza descentralización, seguridad criptográfica e inmutabilidad. Las bases de datos priorizan rendimiento, escalabilidad y control administrativo.",
        "La comparación se hace por: estructura de datos, centralización, control de acceso, seguridad frente a manipulación, rendimiento (TPS vs consultas/seg) y casos de uso. En muchos escenarios, la solución realista es híbrida."
      ],
      ul: [
        "Estructura: blockchain (bloques inmutables) vs BD (tablas SQL / modelos NoSQL editables).",
        "Centralización: blockchain distribuida vs BD controlada por una entidad.",
        "Acceso: blockchain pública o permisionada (ej.: Hyperledger/Corda) vs BD con control total del admin.",
        "Seguridad: blockchain resistente a manipulación por estructura criptográfica; BD depende de permisos/cifrado/backups.",
        "Rendimiento: blockchain limitada por consenso (Bitcoin ~5–7 TPS; Ethereum ~15–30 TPS) y mejoras Layer 2; BD puede manejar millones de consultas/seg."
      ]
    }
  ],

  extras: [
    {
      title: "Resultados de aprendizaje (qué deberían dominar)",
      p: [
        "Entender el concepto de Blockchain y las razones detrás de su creación e implementación.",
        "Comprender los fundamentos matemáticos y las estructuras de datos que permiten el funcionamiento de Blockchain.",
        "Comparar blockchain frente a bases de datos tradicionales y evaluar ventajas/desventajas según el contexto.",
        "Discutir aplicaciones más allá de criptomonedas (supply chain, votación, identidad, registros).",
        "Reflexionar sobre desafíos actuales: escalabilidad, rendimiento y regulación."
      ]
    },
    {
      title: "Idea de práctica (para clase + refuerzo)",
      p: [
        "Práctica 1: ‘Simula una blockchain simple’. Crear 4–6 bloques con: índice, timestamp, datos, hash_anterior y hash_actual. Verificar qué pasa si se modifica un bloque antiguo.",
        "Práctica 2: ‘Decisión tecnológica’. Dado un caso (logística, banco, inventario), justificar si usarías BD, blockchain o solución híbrida con argumentos de estructura, control, seguridad y rendimiento."
      ]
    }
  ]
},
//------------------------------------------------------------------------------------------------------------------------------
//
//
//------------------------------------------------------------------------------------------------------------------------------
{
  id: "u6",
  number: 6,
  title: "Unidad 6 — Aplicaciones de Blockchain",
  summary:
    "Blockchain ha trascendido las criptomonedas para convertirse en una infraestructura de confianza sin intermediarios. En esta unidad veremos: (1) criptomonedas (Bitcoin y Ethereum), (2) contratos inteligentes y sus aplicaciones (DeFi, NFTs, DAOs, seguros, logística) y (3) gestión de documentos oficiales e identidad digital en blockchain, con beneficios y retos reales (escalabilidad, regulación, privacidad/GDPR, costes).",
  chips: ["Criptomonedas", "Smart Contracts", "Gestión documental"],

  figure: {
    src: "img/u6_portada.jpg",
    alt: "Portada unidad 6: aplicaciones de blockchain",
    caption: "Unidad 6: blockchain como infraestructura de confianza sin intermediarios."
  },

  blocks: [
    {
      h3: "6.1 Introducción a las aplicaciones de Blockchain",
      p: [
        "Desde Bitcoin (2008), blockchain ha evolucionado más allá de las criptomonedas: hoy se aplica en contratos inteligentes, gestión documental, logística, identidad digital y otros sectores.",
        "Su valor diferencial es crear confianza sin una autoridad central: elimina intermediarios, reduce costes y aumenta la verificabilidad de procesos digitales."
      ],
      ul: [
        "Descentralización: participación sin depender de una entidad central.",
        "Transparencia y verificabilidad: registros auditable por múltiples nodos.",
        "Seguridad e inmutabilidad: lo registrado no se altera sin dejar evidencia."
      ]
    },

    {
      h3: "6.2 Principales áreas de aplicación (mapa rápido)",
      p: [
        "Blockchain se usa donde la confianza, el fraude o la trazabilidad son un problema. En vez de ‘creer’ en un tercero, se valida con reglas y consenso.",
        "Estas son las áreas más típicas donde el impacto es inmediato."
      ],
      ul: [
        "Criptomonedas: pagos y finanzas descentralizadas (Bitcoin, Ethereum).",
        "Contratos inteligentes: acuerdos autoejecutables sin intermediarios.",
        "Gestión de documentos oficiales: diplomas, registros de propiedad, documentos legales.",
        "Cadenas de suministro y logística: trazabilidad (IBM/Walmart).",
        "Votación electrónica: registros inmutables para reducir manipulación.",
        "Salud: historias clínicas y acceso controlado sin comprometer privacidad."
      ]
    },

    {
      h3: "6.3 Criptomonedas: Bitcoin y Ethereum (visión general)",
      p: [
        "Bitcoin y Ethereum son las referencias históricas y tecnológicas del ecosistema. Ambas usan blockchain, pero persiguen objetivos distintos.",
        "Bitcoin se centra en transferencia/reserva de valor; Ethereum amplía el concepto con una blockchain programable (contratos inteligentes y DApps)."
      ],
      ul: [
        "Bitcoin: moneda digital descentralizada, fuerte enfoque en seguridad y escasez.",
        "Ethereum: plataforma programable para ejecutar lógica (smart contracts) y crear apps.",
        "Impacto: acelera adopción de blockchain y modelos financieros sin intermediarios."
      ]
    },

    {
      h3: "6.3.1 Bitcoin: características y funcionamiento",
      p: [
        "Bitcoin (2008, Satoshi Nakamoto) nace para permitir transferencias de dinero sin bancos ni intermediarios.",
        "Se apoya en una red pública de nodos y un consenso PoW (minería) para validar y registrar transacciones."
      ],
      ul: [
        "Descentralización: sin control de gobiernos o entidad central.",
        "Oferta limitada: 21 millones de BTC (activo deflacionario).",
        "Seguridad y transparencia: transacciones verificadas y registradas públicamente.",
        "PoW (minería): validación mediante resolución de problemas criptográficos."
      ]
    },

    {
      h3: "6.3.2 ¿Cómo funciona Bitcoin? (paso a paso)",
      p: [
        "Bitcoin opera con un flujo simple pero robusto: transacción → validación → agrupación en bloques → consenso → registro permanente.",
        "El consenso PoW hace costoso modificar el historial y convierte la cadena en un registro altamente resistente a manipulaciones."
      ],
      ul: [
        "Transacciones: envío entre direcciones únicas.",
        "Validación: difusión a la red y verificación por nodos/mineros.",
        "Minado y bloques: agrupación de transacciones y competencia por validar el bloque.",
        "Registro: el bloque validado se añade a la cadena (confirmación)."
      ]
    },

    {
      h3: "6.3.3 Bitcoin: ventajas y desafíos",
      p: [
        "Bitcoin destaca por su resistencia y su diseño conservador, pero paga ese diseño con límites de rendimiento y costes operativos.",
        "Esto explica por qué se buscan soluciones de escalabilidad y por qué la regulación entra en juego."
      ],
      ul: [
        "Ventajas: resistencia a la censura, seguridad criptográfica, escasez programada.",
        "Desafíos: escalabilidad (~7 tx/s), alto consumo energético (minería), fees altos en picos de demanda."
      ]
    },

    {
      h3: "6.3.4 Ethereum: más que una criptomoneda",
      p: [
        "Ethereum (propuesto en 2013 y lanzado en 2015) extiende blockchain para poder ejecutar programas: contratos inteligentes y aplicaciones descentralizadas (DApps).",
        "Su moneda (ETH) se usa para pagar transacciones y la ejecución de contratos (gas)."
      ],
      ul: [
        "Contratos inteligentes: código autoejecutable en la blockchain.",
        "EVM: entorno de ejecución descentralizado.",
        "ETH: activo nativo para transacciones y gas.",
        "Red programable: DeFi, juegos, mercados NFT, etc."
      ]
    },

    {
      h3: "6.3.5 Ethereum: funcionamiento e innovaciones",
      p: [
        "Ethereum sigue una lógica similar a Bitcoin, pero añade la ejecución de código como parte del ‘estado’ de la red.",
        "Uno de sus cambios clave es la transición a Proof of Stake (PoS), reduciendo drásticamente el consumo energético."
      ],
      ul: [
        "Creación y despliegue de contrato: se publica en la cadena.",
        "Ejecución por la red: cualquiera puede interactuar sin intermediarios.",
        "PoS: reducción del consumo energético (según el temario).",
        "DApps: casos como DeFi y juegos operan sobre la red."
      ]
    },

    {
      h3: "6.3.6 Comparación express: Bitcoin vs Ethereum",
      p: [
        "Aunque se suelen meter en el mismo saco, su propuesta de valor es diferente.",
        "Entender esta diferencia te permite justificar por qué un caso de uso encaja (o no) con una u otra red."
      ],
      ul: [
        "Bitcoin: ‘dinero’/reserva de valor; enfoque en seguridad y descentralización.",
        "Ethereum: ‘plataforma’ programable; contratos inteligentes + DApps.",
        "Escalabilidad: se buscan mejoras (Lightning en Bitcoin, Ethereum 2.0 en Ethereum)."
      ]
    },

    {
      h3: "6.4 Contratos inteligentes: definición y flujo de ejecución",
      p: [
        "Un contrato inteligente es un programa autoejecutable almacenado en blockchain que se activa cuando se cumplen condiciones definidas.",
        "Se populariza con Ethereum: el contrato no depende de confianza personal, sino de reglas públicas y ejecución automática."
      ],
      ul: [
        "Definir el acuerdo: condiciones + red donde se ejecutará (p.ej., Ethereum).",
        "Programar el contrato: lógica ‘si-entonces’ (Solidity, Rust, etc.).",
        "Desplegar: queda almacenado en la blockchain, sin posibilidad de alteración simple.",
        "Ejecutar: se activa al cumplirse las condiciones; resultado verificable por la red."
      ]
    },

    {
      h3: "6.5 Ventajas y aplicaciones de los contratos inteligentes",
      p: [
        "El salto conceptual: pasas de ‘contratos que alguien aplica’ a ‘contratos que se ejecutan solos’.",
        "Esto habilita ecosistemas completos: DeFi, NFTs, DAOs, seguros automatizados y trazabilidad industrial."
      ],
      ul: [
        "Ventajas: transparencia, eliminación de intermediarios, inmutabilidad, eficiencia/velocidad.",
        "DeFi: préstamos (Aave/Compound), DEX (Uniswap/SushiSwap), staking y rendimientos.",
        "NFTs: propiedad/derechos digitales (arte, coleccionables) con transferencia automática.",
        "DAOs: gobernanza y votación con ejecución automática de decisiones.",
        "Seguros: pagos automáticos (p.ej., evento verificado por sensores/IoT).",
        "Logística: trazabilidad y autenticidad (p.ej., seguimiento de lotes)."
      ]
    },

    {
      h3: "6.6 Desafíos y limitaciones de los contratos inteligentes",
      p: [
        "La automatización trae un precio: si el código está mal, el sistema ejecuta el error con ‘disciplina matemática’.",
        "Por eso se habla tanto de auditorías, gas fees y barreras de integración con sistemas existentes."
      ],
      ul: [
        "Seguridad y bugs: un fallo puede ser catastrófico; ejemplo clásico: The DAO (2016).",
        "Coste de ejecución (gas): puede ser alto con congestión en Ethereum.",
        "Integración: muchas industrias siguen atadas a bases de datos centralizadas."
      ]
    },

    {
      h3: "6.7 Gestión de documentos oficiales: por qué blockchain encaja",
      p: [
        "Los documentos oficiales (gobiernos, universidades, justicia, empresas) suelen estar en sistemas centralizados o físicos: son vulnerables a fraude, pérdidas, alteraciones y burocracia.",
        "Blockchain aporta inmutabilidad y verificabilidad para emisión, almacenamiento y validación de registros."
      ],
      ul: [
        "Registros inmutables: no se altera ni elimina una vez registrado.",
        "Verificación descentralizada: validar sin contactar con la entidad emisora.",
        "Antifraude: una alteración cambia el hash y deja evidencia inmediata."
      ]
    },

    {
      h3: "6.8 Casos de uso (documentos e identidad digital)",
      p: [
        "Aquí blockchain se vuelve ‘infraestructura’: no es especulación, es administración de evidencias y derechos.",
        "El foco es autenticidad + acceso + reducción de intermediarios."
      ],
      ul: [
        "Registro civil: nacimiento/matrimonio/defunción (ejemplo: Estonia en identidad digital).",
        "Títulos académicos: diplomas verificables (ejemplo: MIT).",
        "Registro de propiedad: títulos inmutables y transferencias más eficientes (ej.: Suecia y Georgia).",
        "Contratos y licencias: automatización/verificación transparente (permisos, contratos laborales, patentes)."
      ]
    },

    {
      h3: "6.9 Beneficios y desafíos en gestión documental (GDPR incluido)",
      p: [
        "Los beneficios son claros: menos fraude y menos burocracia. Pero aparecen fricciones: regulación, migración tecnológica y privacidad.",
        "La solución realista a menudo pasa por modelos privados o híbridos cuando hay datos sensibles."
      ],
      ul: [
        "Beneficios: reducción del fraude, ahorro de costes/burocracia, accesibilidad global, control del usuario sobre permisos.",
        "Retos: regulación y adopción gubernamental, integración con sistemas tradicionales, privacidad y protección de datos (GDPR → privadas/híbridas)."
      ]
    },

    {
      h3: "6.10 Mini-ejemplo rápido (para clase y práctica)",
      p: [
        "La idea no es ‘ser programador blockchain’, sino entender el modelo mental: lógica automática + ejecución verificable.",
        "Este ejemplo ilustra un pago automático muy simple (concepto)."
      ],
      code:
`// Ejemplo conceptual (Solidity) — Pago automático
pragma solidity ^0.8.0;

contract PagoAutomatico {
  address payable public receptor;
  uint public monto;

  constructor(address payable _receptor, uint _monto) {
    receptor = _receptor;
    monto = _monto;
  }

  function liberarPago() public {
    receptor.transfer(monto);
  }
}

// Idea clave:
// - Si está desplegado, el contrato ejecuta reglas.
// - No hay notario/banco verificando: la red valida y registra.`
    }
  ],

  extras: [
    {
      title: "Resultados de aprendizaje (qué deberían dominar)",
      p: [
        "Comprender cómo funcionan Bitcoin y Ethereum y su impacto en la economía digital.",
        "Explicar contratos inteligentes, sus aplicaciones (DeFi/NFT/DAO) y sus limitaciones (bugs, gas, integración).",
        "Analizar cómo blockchain transforma la gestión documental (seguridad, eficiencia, accesibilidad) y el control del usuario.",
        "Evaluar casos de uso reales (incluyendo implicaciones legales, privacidad y viabilidad de implementación).",
        "Identificar oportunidades donde blockchain aporta valor y reconocer barreras reales de adopción."
      ]
    },
    {
      title: "Idea de práctica para enlazar con tu web (HTML5)",
      p: [
        "Actividad sugerida A (Smart Contracts): diseñar un ‘contrato’ en pseudocódigo (si-entonces) para un caso real (seguro paramétrico, apuesta, licencia) y listar riesgos (bugs, gas, oráculos, integración).",
        "Actividad sugerida B (Documentos): diseñar un sistema de verificación de documentos con hash + registro (qué se guarda on-chain vs off-chain), y decidir si usarías blockchain pública, privada o híbrida por GDPR."
      ]
    }
  ]
},
//------------------------------------------------------------------------------------------------------------------------------
//
// Unidad 7 — Minería en Blockchain
//
//------------------------------------------------------------------------------------------------------------------------------
{
  id: "u7",
  number: 7,
  title: "Unidad 7 — Minería en Blockchain",
  summary:
    "Qué es la minería y por qué permite consenso sin autoridad central. Proof of Work vs Proof of Stake y otros mecanismos (DPoS, PoA, PoB, Space/Time). Problemas reales: centralización, consumo energético y escalabilidad; y soluciones como SegWit, Lightning, rollups y sharding.",
  chips: ["Minería", "Consenso (PoW/PoS)", "Energía + Escalabilidad"],

  figure: {
    src: "img/u7_portada.jpg",
    alt: "Portada unidad 7: minería y consenso en blockchain",
    caption: "Unidad 7: cómo se valida la verdad en blockchain — consenso, energía y escalabilidad."
  },

  blocks: [
    {
      h3: "7.1 Concepto y función de la minería en Blockchain",
      p: [
        "La minería es el proceso por el cual las transacciones se verifican y se añaden a la blockchain. En redes basadas en Proof of Work, los mineros compiten por resolver un reto matemático y el ganador propone el siguiente bloque.",
        "La minería cumple tres funciones clave: registrar transacciones válidas (evitando doble gasto), aportar seguridad (hacer ataques computacionalmente inviables) y, en algunas redes, emitir nuevas monedas como incentivo."
      ],
      ul: [
        "Validación: transacciones legítimas y sin doble gasto.",
        "Seguridad: coste computacional alto para atacar/reescribir la cadena.",
        "Incentivos/emisión: recompensa + fees por incluir transacciones en el bloque."
      ]
    },

    {
      h3: "7.2 Consenso distribuido: cómo la red se pone de acuerdo",
      p: [
        "En blockchain no hay un “jefe” que valide: los nodos deben aceptar un estado único sin autoridad central. Ese acuerdo es el consenso distribuido.",
        "Para aceptar un bloque, debe cumplir las reglas del algoritmo (PoW/PoS) y además ser validado por la mayoría de nodos. Así se evita manipulación y todas las copias permanecen consistentes."
      ],
      ul: [
        "Evita fraudes y manipulaciones.",
        "Garantiza que todas las copias de la cadena sean idénticas.",
        "Permite descentralización: no depende de bancos/autoridades centrales."
      ]
    },

    {
      h3: "7.3 Proceso de minería (PoW): del mempool al bloque aceptado",
      p: [
        "Paso 1: el minero agrupa transacciones no confirmadas en un bloque candidato. Paso 2: busca un nonce que produzca un hash con la dificultad exigida (por ejemplo, que empiece con muchos ceros).",
        "Paso 3: cuando lo encuentra, propaga el bloque y los nodos verifican. Paso 4: recibe recompensa (subsidio) y comisiones. En Bitcoin, el subsidio se reduce periódicamente en eventos tipo ‘halving’."
      ],
      ul: [
        "Agrupar transacciones → construir bloque candidato.",
        "Buscar nonce → hash válido (dificultad/target).",
        "Propagar/validar → añadir a la cadena.",
        "Cobrar recompensa + fees (modelo de incentivos)."
      ],
      code:
`// PoW simplificado (idea conceptual)
target = difficultyToTarget(difficulty)
nonce = 0
do {
  hash = SHA256(blockHeader + nonce)
  nonce++
} while (hash > target)

// Si hash cumple target → el bloque se acepta y se propaga a la red`
    },

    {
      h3: "7.4 Tipos de minería: individual, pools y cloud mining",
      p: [
        "La minería individual (solo) compite contra toda la red: hoy suele ser difícil obtener recompensa por la competencia y la dificultad.",
        "Los pools agregan potencia de cómputo: aumentan probabilidad y reparten recompensas proporcionalmente. El cloud mining alquila hashpower a terceros: reduce la inversión en equipos, pero añade riesgo (fraude y baja rentabilidad)."
      ],
      ul: [
        "Individual: control total, pero probabilidad baja y recompensas irregulares.",
        "Pools: recompensas más estables, pero riesgo de centralización.",
        "Cloud mining: sin hardware propio, pero dependes de terceros (riesgo/ROI)."
      ]
    },

    {
      h3: "7.5 Algoritmos de consenso: PoW vs PoS y alternativas",
      p: [
        "PoW aporta seguridad fuerte, pero consume mucha energía, escala peor y tiende a concentrarse en grandes pools. PoS cambia mineros por validadores: se eligen según stake, reciben recompensa y pueden ser penalizados (slashing) si actúan mal.",
        "Además aparecen variantes: DPoS (delegados votados), PoA (validadores por identidad/reputación en redes privadas), PoB (quema de tokens), Proof of Space (disco) y Proof of Time (factor temporal en modelos híbridos)."
      ],
      ul: [
        "PoW: seguridad alta, pero energía + escalabilidad + pools.",
        "PoS: eficiencia energética, pero riesgo de centralización por riqueza.",
        "DPoS/PoA/PoB/Space/Time: diseños para casos específicos (públicas/privadas)."
      ]
    },

    {
      h3: "7.6 Impacto energético y sostenibilidad de la minería",
      p: [
        "El gran coste de PoW viene de cálculos intensivos, competencia simultánea y uso de hardware especializado (ASIC). Esto abre un debate ambiental: emisiones (si la energía es fósil) y e-waste por obsolescencia rápida.",
        "Dos líneas de mejora: migrar a PoS (reduce drásticamente consumo) y usar energía renovable (hidro, solar/eólica, geotérmica) para disminuir la huella."
      ],
      ul: [
        "Causas: complejidad + competencia + ASICs.",
        "Impacto: huella de carbono y residuos electrónicos.",
        "Mitigación: PoS + minería con renovables."
      ]
    },

    {
      h3: "7.7 Escalabilidad: límites y soluciones (SegWit, L2, rollups, sharding)",
      p: [
        "En PoW la escalabilidad se limita por tamaño de bloque, tiempo de confirmación y tarifas en congestión. Esto afecta a TPS, latencia y coste.",
        "Soluciones: SegWit optimiza el espacio separando firmas; capas 2 como Lightning mueven transacciones fuera de la cadena principal; rollups agrupan transacciones (especialmente en Ethereum); y sharding paraleliza procesamiento dividiendo la red en fragmentos."
      ],
      ul: [
        "Problemas: TPS bajo, confirmación lenta, fees altos en picos.",
        "SegWit: más eficiencia por bloque.",
        "L2 (Lightning): pagos rápidos y baratos fuera de cadena.",
        "Rollups: lotes fuera de cadena; Sharding: paralelismo por fragmentos."
      ]
    }
  ],

  extras: [
    {
      title: "Resultados de aprendizaje (qué deberían dominar)",
      p: [
        "Comprender la minería en Blockchain y su papel en el consenso distribuido.",
        "Diferenciar algoritmos de consenso (PoW, PoS y alternativos) y justificar pros/contras.",
        "Analizar problemas reales: energía, centralización y escalabilidad, y evaluar soluciones.",
        "Relacionar decisiones de consenso con objetivos: seguridad, coste, sostenibilidad y rendimiento."
      ]
    },
    {
      title: "Idea de práctica para enlazar con tu web (HTML5)",
      p: [
        "Actividad sugerida: ‘Simulador de minería PoW’. La app permite ajustar dificultad/target, iterar nonces y ver cómo cambia el tiempo esperado. Segundo bloque: comparar ‘PoW vs PoS’ con un mini-simulador de selección de validadores por stake + slashing conceptual. Conclusión escrita: trade-offs y qué consenso escogerían para un caso dado."
      ]
    }
  ]
},
//------------------------------------------------------------------------------------------------------------------------------
//
// Unidad 8 — Fundamentos de Minería de Datos
//
//------------------------------------------------------------------------------------------------------------------------------
{
  id: "u8",
  number: 8,
  title: "Unidad 8 — Fundamentos de Minería de Datos",
  summary:
    "Introducción a la minería de datos como parte del ciclo KDD: extraer conocimiento útil a partir de grandes volúmenes de información. Objetivos (patrones, predicción, clasificación, segmentación), aplicaciones reales, retos éticos. Técnicas clave de preprocesamiento y limpieza, y una panorámica de métodos estadísticos avanzados (regresión, clústeres, PCA, supervivencia, series temporales) con validación.",
  chips: ["KDD", "Preprocesamiento + Limpieza", "Regresión + Clustering + Validación"],

  figure: {
    src: "img/u8_portada.jpg",
    alt: "Portada unidad 8: fundamentos de minería de datos (KDD, preprocesamiento, modelos)",
    caption: "Unidad 8: transformar datos brutos en decisiones mediante minería de datos."
  },

  blocks: [
    {
      h3: "8.1 Concepto de minería de datos y ciclo KDD",
      p: [
        "En la era digital, no basta con almacenar datos: el valor aparece cuando somos capaces de extraer patrones y conocimiento accionable. La minería de datos combina estadística, aprendizaje automático e IA para descubrir tendencias y correlaciones en grandes conjuntos de datos.",
        "La minería de datos se entiende como parte del proceso KDD (Knowledge Discovery in Databases): un flujo que va desde la recolección de datos hasta la implementación de decisiones basadas en resultados validados."
      ],
      ul: [
        "KDD: datos → preparación → algoritmos → interpretación/validación → decisión.",
        "Objetivo final: convertir información masiva en ventaja competitiva o mejora de procesos.",
        "Clave mental: sin preparación/validación, el “conocimiento” puede ser ruido."
      ]
    },

    {
      h3: "8.2 Objetivos principales: patrones, predicción, clasificación y segmentación",
      p: [
        "La minería de datos puede perseguir objetivos distintos según el problema: descubrir relaciones ocultas, anticipar eventos futuros, asignar categorías a casos o dividir una población en grupos homogéneos.",
        "Estos objetivos aparecen una y otra vez en proyectos reales: desde recomendaciones y detección de fraude hasta diagnóstico asistido y análisis de riesgo."
      ],
      ul: [
        "Descubrimiento de patrones: relaciones no obvias (ej.: cesta de la compra).",
        "Predicción: modelos con datos históricos (ej.: impago de préstamo).",
        "Clasificación: etiquetas (ej.: nivel de riesgo médico / fraude sí-no).",
        "Segmentación: clustering de perfiles (ej.: campañas de marketing personalizadas)."
      ]
    },

    {
      h3: "8.3 Aplicaciones reales + impacto social (retos y ética)",
      p: [
        "La minería de datos se aplica en marketing/e-commerce (recomendaciones, churn), finanzas (fraude, scoring), salud (diagnóstico, brotes) y sector público (optimización de recursos, fiscalidad, seguridad).",
        "Pero también implica desafíos: privacidad, protección de datos, sesgos históricos y decisiones automatizadas que pueden afectar a personas y colectivos."
      ],
      ul: [
        "Marketing: recomendadores, sentimiento, pricing dinámico.",
        "Finanzas: fraude en tiempo real, riesgos crediticios, series temporales.",
        "Salud: clasificación de imágenes, eficacia de tratamientos, epidemias.",
        "Gobierno/seguridad: criminalidad, transporte, fraude fiscal.",
        "Ética: GDPR/privacidad y sesgos en modelos (riesgo de discriminación)."
      ]
    },

    {
      h3: "8.4 Preprocesamiento de datos (integración, transformación y reducción)",
      p: [
        "El preprocesamiento prepara los datos para que los algoritmos funcionen: integra fuentes heterogéneas, transforma formatos/escalas y reduce complejidad sin perder información clave.",
        "Es un paso crítico porque la mayoría de datasets reales llegan mezclados, incompletos y con escalas incompatibles."
      ],
      ul: [
        "Integración: fusión de fuentes, resolución de conflictos, mapeo de esquemas.",
        "Transformación: normalización, codificación categórica, agregación, discretización.",
        "Reducción: selección de características, PCA, muestreo representativo."
      ],
      code:
`Pipeline mental:
1) Integrar (unificar fuentes) → 2) Transformar (hacer comparable) → 3) Reducir (quitar lo que sobra)
Si te saltas esto: el modelo aprende “artefactos”, no realidad.`
    },

    {
      h3: "8.5 Limpieza de datos (errores, faltantes, ruido/duplicados, estandarización)",
      p: [
        "La limpieza elimina inconsistencias, errores y redundancias que distorsionan el análisis. Sin limpieza, los modelos pueden dar predicciones erróneas y conclusiones engañosas.",
        "Incluye corregir valores imposibles, tratar datos faltantes con criterio, eliminar duplicados/ruido y estandarizar formatos (unidades, fechas, texto)."
      ],
      ul: [
        "Datos incorrectos: reglas lógicas, corrección manual/automática, eliminación de valores imposibles.",
        "Datos faltantes: eliminar registros vs imputar (media/mediana) vs modelos predictivos.",
        "Ruido y duplicados: outliers (boxplot/desviación), deduplicación por claves, filtrado/suavizado.",
        "Estandarización: unidades, formatos de fecha, normalización de cadenas."
      ]
    },

    {
      h3: "8.6 Métodos estadísticos avanzados + validación (visión global)",
      p: [
        "Una vez los datos están listos, aplicamos técnicas para predecir, clasificar, segmentar o extraer estructura: regresión (lineal/logística), clústeres (k-means/jerárquico), reducción (PCA), supervivencia (Cox) y series temporales (ARIMA/SARIMA).",
        "Antes de llevar un modelo a producción, se evalúa con validación (por ejemplo, validación cruzada) para reducir sobreajuste y asegurar robustez."
      ],
      ul: [
        "Regresión lineal: predicción numérica; interpretable, sensible a outliers.",
        "Regresión logística: clasificación; devuelve probabilidades.",
        "Clustering: segmentación sin etiquetas (k-means, jerárquico).",
        "PCA: reducir dimensionalidad preservando estructura.",
        "Supervivencia (Cox): tiempo hasta evento (p. ej., fallo/recidiva).",
        "Series temporales: ARIMA/SARIMA (tendencia + estacionalidad).",
        "Validación cruzada: medir generalización y evitar sobreajuste."
      ]
    }
  ],

  extras: [
    {
      title: "Resultados de aprendizaje (qué deberían dominar)",
      p: [
        "Comprender los objetivos fundamentales de la minería de datos e identificar aplicaciones prácticas en diferentes sectores.",
        "Dominar técnicas esenciales de preprocesamiento y limpieza, entendiendo su impacto en la calidad de los análisis posteriores.",
        "Aplicar métodos estadísticos avanzados para extraer conocimiento útil (predicción, clasificación, tendencias).",
        "Evaluar críticamente resultados considerando validez, precisión y aplicabilidad.",
        "Implementar técnicas de validación para asegurar robustez de modelos predictivos y de clasificación."
      ]
    },
    {
      title: "Idea de práctica para enlazar con tu web (HTML5)",
      p: [
        "Actividad sugerida (mini-proyecto): “Dataset de principio a fin”. Dar un dataset real (churn, fraude o ventas) y obligar a pasar por: (1) integración/estandarización, (2) limpieza (faltantes + duplicados + outliers), (3) transformación (normalización + categóricas), (4) un modelo simple (logística o k-means), (5) validación cruzada + conclusiones.",
        "Entregable: reporte corto con decisiones justificadas (qué limpiaron, qué imputaron, qué variables dejaron fuera y por qué)."
      ]
    }
  ]
},
//------------------------------------------------------------------------------------------------------------------------------
//
// Unidad 9 — 
//
//------------------------------------------------------------------------------------------------------------------------------
{
  id: "u9",
  number: 9,
  title: "Unidad 9 — Extracción de Información Supervisada y No Supervisada",
  summary:
    "Introducción a la extracción de información en Learning Analytics, ciencia de datos y machine learning. Diferencias entre aprendizaje supervisado y no supervisado, uso de regresión, árboles de decisión y clustering, y aplicación de estas técnicas en datasets grandes de sectores como educación, marketing, salud, finanzas y redes sociales.",
  chips: ["Supervisado", "Clustering", "Big Data"],
  figure: {
    src: "img/u9_portada.jpg",
    alt: "Portada unidad 9: extracción de información supervisada y no supervisada",
    caption: "Unidad 9: cómo predecir, segmentar y extraer valor a partir de los datos."
  },
  blocks: [
    {
      h3: "9.1 Introducción a la extracción de información supervisada y no supervisada",
      p: [
        "La extracción de información es uno de los pilares del análisis de datos moderno. Su objetivo es transformar datos en conocimiento útil para apoyar decisiones, detectar patrones y anticipar comportamientos en contextos educativos, empresariales y sociales.",
        "Dentro de este proceso distinguimos dos grandes enfoques. El aprendizaje supervisado trabaja con datos etiquetados y sirve para predecir valores o clasificar casos nuevos. El aprendizaje no supervisado, en cambio, busca estructuras ocultas sin etiquetas previas, siendo especialmente útil para segmentar, descubrir grupos y analizar comportamientos complejos."
      ],
      ul: [
        "Supervisado: datos etiquetados → predicción y clasificación.",
        "No supervisado: datos sin etiquetas → segmentación y descubrimiento de patrones.",
        "Aplicación directa en Learning Analytics, marketing, salud, finanzas y redes sociales."
      ]
    },
    {
      h3: "9.2 Importancia en Learning Analytics y retos principales",
      p: [
        "En el ámbito educativo, estas técnicas permiten predecir rendimiento académico, identificar estudiantes en riesgo, segmentar perfiles de aprendizaje y personalizar estrategias docentes a partir de evidencias cuantitativas.",
        "Sin embargo, trabajar con modelos de extracción de información también plantea retos importantes. No basta con obtener una predicción: los datos deben ser de calidad, los modelos deben poder escalar a grandes volúmenes, sus resultados deben ser interpretables y su uso debe respetar criterios éticos y normativos."
      ],
      ul: [
        "Predicción de rendimiento y detección de abandono.",
        "Segmentación de estudiantes según comportamiento y compromiso.",
        "Retos clave: escalabilidad, calidad del dato, interpretabilidad y ética."
      ]
    },
    {
      h3: "9.3 Aprendizaje supervisado: regresión lineal y regresión logística",
      p: [
        "La regresión es una de las herramientas más utilizadas en aprendizaje supervisado. Permite modelar la relación entre variables y estimar resultados futuros a partir de información previa. En contextos educativos, puede servir para anticipar calificaciones, rendimiento o probabilidad de éxito académico.",
        "La regresión lineal se utiliza cuando queremos predecir una variable continua, mientras que la regresión logística se aplica cuando la salida es categórica, por ejemplo aprobado o suspendido. Ambas técnicas destacan por su simplicidad, interpretabilidad y valor didáctico como puerta de entrada al machine learning."
      ],
      ul: [
        "Regresión lineal: predicción de valores continuos.",
        "Regresión logística: clasificación binaria y probabilidad.",
        "Uso típico: calificaciones, aprobación/reprobación, riesgo o rendimiento."
      ]
    },
    {
      h3: "9.4 Árboles de decisión: reglas, segmentación e interpretación",
      p: [
        "Los árboles de decisión dividen los datos en subconjuntos a partir de reglas basadas en características observables. El modelo se representa como un árbol en el que cada nodo plantea una pregunta y cada rama conduce a una decisión o clasificación.",
        "Su gran ventaja es la interpretabilidad: permiten visualizar por qué el modelo toma una decisión. Por eso son especialmente útiles en contextos donde no solo interesa acertar, sino también explicar el criterio seguido, como educación, salud o análisis de riesgos."
      ],
      ul: [
        "Modelo visual basado en preguntas y reglas.",
        "Capta relaciones no lineales entre variables.",
        "Riesgo de sobreajuste si no se poda o ajusta correctamente."
      ]
    },
    {
      h3: "9.5 Aprendizaje no supervisado: clustering como descubrimiento de estructura",
      p: [
        "Cuando no disponemos de etiquetas, el aprendizaje no supervisado permite explorar la estructura interna de los datos. El clustering es la técnica más representativa dentro de este enfoque y consiste en agrupar observaciones similares entre sí y diferentes del resto.",
        "En Learning Analytics, esto permite detectar perfiles de estudiantes, niveles de implicación, patrones de uso de plataformas o grupos con necesidades distintas. En otros sectores se usa para segmentación de clientes, agrupación de documentos, análisis biológico o detección de comunidades."
      ],
      ul: [
        "No necesita etiquetas previas.",
        "Agrupa por similitud y revela patrones ocultos.",
        "Muy útil para segmentación en educación y negocio."
      ]
    },
    {
      h3: "9.6 K-means y clustering jerárquico",
      p: [
        "K-means es un algoritmo iterativo basado en centroides. Agrupa los datos en k clústeres y asigna cada observación al centroide más cercano. Es rápido, intuitivo y muy útil cuando queremos una segmentación clara y eficiente.",
        "El clustering jerárquico, por su parte, construye una estructura en árbol o dendrograma. No obliga a fijar desde el principio el número de clústeres y permite observar relaciones entre grupos a diferentes niveles. Su interpretación es muy rica, aunque su coste computacional puede ser mayor."
      ],
      ul: [
        "K-means: rápido, eficiente y basado en centroides.",
        "Jerárquico: estructura en árbol y visión multinivel.",
        "Elección según tamaño del dataset, interpretabilidad y objetivo analítico."
      ]
    },
    {
      h3: "9.7 Datasets grandes: escalabilidad y optimización",
      p: [
        "Cuando el volumen de datos crece, el reto ya no es solo construir un modelo correcto, sino hacerlo de manera eficiente. En entornos Big Data, los algoritmos pueden volverse lentos o inviables si no se aplican estrategias específicas de escalabilidad y optimización.",
        "Entre las técnicas más habituales se encuentran el muestreo representativo, el procesamiento distribuido con frameworks como Spark o Hadoop, la reducción de dimensionalidad y el entrenamiento por lotes pequeños. También aparecen versiones optimizadas de algoritmos clásicos, como Mini-batch K-means o el uso de SGD en modelos de regresión."
      ],
      ul: [
        "Muestreo, procesamiento distribuido y reducción de dimensionalidad.",
        "Mini-batch K-means y SGD para mejorar rendimiento.",
        "Objetivo: escalar sin perder demasiada precisión ni interpretabilidad."
      ]
    },
    {
      h3: "9.8 Casos prácticos en distintos sectores",
      p: [
        "Las técnicas vistas en esta unidad tienen aplicaciones directas en muchos ámbitos. En marketing permiten segmentar clientes y personalizar campañas; en salud ayudan al diagnóstico y la predicción de riesgos; en finanzas mejoran la detección de fraudes; y en redes sociales facilitan el análisis de comunidades e interacciones.",
        "Estos casos muestran que la extracción de información no es solo una cuestión técnica. También exige saber interpretar resultados, valorar limitaciones, entender el contexto del problema y decidir qué modelo tiene más sentido según el tipo de datos y la finalidad del análisis."
      ],
      ul: [
        "Marketing: segmentación y personalización.",
        "Salud: diagnóstico y predicción de riesgo.",
        "Finanzas y redes sociales: fraude, anomalías y comunidades."
      ]
    }
  ],
  extras: [
    {
      title: "Resultados de aprendizaje (qué deberían dominar)",
      p: [
        "Distinguir con claridad entre aprendizaje supervisado y no supervisado, comprendiendo cuándo conviene utilizar cada enfoque.",
        "Aplicar regresión lineal, regresión logística y árboles de decisión en problemas sencillos de predicción y clasificación.",
        "Utilizar K-means y clustering jerárquico para segmentar datos y descubrir estructuras ocultas en conjuntos sin etiquetar.",
        "Comprender los principales retos de trabajar con datasets grandes, incluyendo escalabilidad, optimización, interpretabilidad y calidad del dato.",
        "Analizar casos reales de distintos sectores y justificar la elección de técnicas en función del problema planteado."
      ]
    },
    {
      title: "Idea de práctica para enlazar con tu web (HTML5)",
      p: [
        "Actividad sugerida: ‘Predict or Cluster Lab’. La app permite cargar un pequeño dataset y elegir entre dos modos: supervisado o no supervisado. En el modo supervisado, el alumno prueba una regresión o un árbol de decisión para predecir un resultado. En el modo no supervisado, aplica K-means para ver cómo se forman clústeres.",
        "La práctica puede cerrar con una comparación guiada: qué información aporta cada enfoque, qué limitaciones tiene, cómo cambia la interpretación y qué pasaría si el dataset creciera muchísimo."
      ]
    }
  ]
}  
//------------------------------------------------------------------------------------------------------------------------------
//
//
//------------------------------------------------------------------------------------------------------------------------------
];

