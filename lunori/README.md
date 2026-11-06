# Productos digitales Lunori

Cuatro infoproductos imprimibles (PDF A4) con la identidad de lunoriperu.com: tipografías Fredoka y Nunito, azul `#1E2A5A`, naranja `#F28C28`, crema `#FFF8EE` y los personajes de Súper Lector.

| PDF | Qué es | Páginas |
|---|---|---|
| `pdf/Super-Lector-Comprension-5-anos.pdf` | Cuaderno de comprensión lectora · 5 años | 17 |
| `pdf/Super-Lector-Comprension-6-7-anos.pdf` | Cuaderno de comprensión lectora · 6 a 7 años | 17 |
| `pdf/Super-Lector-Comprension-8-9-anos.pdf` | Cuaderno de comprensión lectora · 8 a 9 años | 18 |
| `pdf/Super-Lector-Comprension-10-12-anos.pdf` | Cuaderno de comprensión lectora · 10 a 12 años | 18 |
| `pdf/Super-Mate-Problemas-5-anos.pdf` | Cuaderno de problemas matemáticos · 5 años | 17 |
| `pdf/Super-Mate-Problemas-6-7-anos.pdf` | Cuaderno de problemas matemáticos · 6 a 7 años | 18 |
| `pdf/Super-Mate-Problemas-8-9-anos.pdf` | Cuaderno de problemas matemáticos · 8 a 9 años | 18 |
| `pdf/Super-Mate-Problemas-10-12-anos.pdf` | Cuaderno de problemas matemáticos · 10 a 12 años | 18 |
| `pdf/100-Planes-sin-Pantallas.pdf` | 100 actividades sin pantallas · 3 a 12 años | 18 |
| `pdf/Kit-Emociones-y-Rutinas.pdf` | Kit de emociones y rutinas visuales · 3 a 10 años | 21 |

## Cómo encajan con lo que ya tiene Lunori

- **Súper Lector · Comprensión (Leo y entiendo)** es el compañero de *Súper Lector en 21 días*. Usa las mismas franjas de edad y los mismos personajes: Lu, Tito, Coco y Pipa del Bosque de las Letras, y el Club de Exploradores (Zara, Bruno y Nina) en la edición de 10 a 12 años. Súper Lector trabaja la fluidez y este cuaderno trabaja la comprensión. Cada edición trae 10 lecturas originales con una habilidad por lectura, un consejo para mamá en cada página, tabla de progreso, diploma y respuestas.
- **Súper Mate (Leo, entiendo y resuelvo)** es comprensión lectora aplicada a los problemas matemáticos. Tiene las mismas cuatro edades y los mismos personajes. El método de 4 pasos (leo, entiendo, resuelvo, reviso) viene en un póster para recortar. Cada edición trae 10 retos, cada uno con una habilidad: qué me preguntan, datos que sobran o faltan, problemas de dos pasos, estimar y revisar, inventar problemas, entre otras. El primer problema de cada reto viene guiado, con espacios para los datos, la pregunta, el dibujo y la respuesta. Usa situaciones peruanas: soles, mercado, quiosco, bus, chacra.
- **100 planes sin pantallas** tiene 10 categorías de 10 planes, un reto de 30 días, un acuerdo familiar de pantallas y el «frasco de planes» para recortar, pensado para reutilizar el frasco vacío de Lunori. No repite los juegos de la guía *Que se enfoque*.
- **Kit de Emociones y Rutinas** complementa *Rutina Día y Noche* sin repetirla:
  - **Emociones:** qué pasa en una rabieta, el método C.A.L.M.A., frases para el momento difícil, 8 láminas, termómetro, rincón de la calma con técnicas distintas a las de la guía, diario de emociones y 20 tarjetas para conversar.
  - **Rutinas:** tableros visuales de mañana, tarde y noche, tarjetas para recortar, tabla semanal y planificador de la semana.

Todos los PDFs terminan con una página de EnfoKIDS / Buenas Noches / Combo Día y Noche y el aviso legal de la web: «son suplementos nutricionales y no reemplazan…».

## Regenerar los PDFs

Requisitos: Node y Playwright con Chromium.

```bash
cd lunori
node build.js                # genera todos los PDF en pdf/
node build.js Comprension    # solo los que contienen esa palabra en el nombre
PREVIEW=1 node build.js Kit  # además guarda un PNG por página en preview/
```

El script avisa si algún contenido se sale de la página o si una tarjeta queda con el texto cortado.

## Dónde se edita cada cosa

- Textos de las lecturas: `src/comprension/data-*.js`, un archivo por edad. El diseño de las páginas está en `src/comprension/index.js`.
- Problemas de Súper Mate: `src/matematica/data-*.js`, un archivo por edad. El diseño está en `src/matematica/index.js`.
- Las 100 actividades: `src/actividades-data.js`. El diseño está en `src/actividades.js`.
- El kit: `src/kit-emociones.js`.
- Colores, tipografías, caritas de emociones y pie de página: `src/base.js`.
- Imágenes: `assets/img/`. El logo y los personajes salen de los PDFs y de la web de Lunori.
