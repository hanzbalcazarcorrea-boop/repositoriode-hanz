# Productos digitales Lunori

Infoproductos imprimibles (PDF A4) con la identidad de lunoriperu.com: tipografías Fredoka y Nunito, azul `#1E2A5A`, naranja `#F28C28`, crema `#FFF8EE` y los personajes de Súper Lector.

Súper Lector · Comprensión y Súper Mate tienen **4 edades × 3 niveles** (Nivel 1 · Despegue, Nivel 2 · Vuelo, Nivel 3 · Súper lector / Súper mate), con los mismos nombres de nivel que *Súper Lector en 21 días*. En total son 24 cuadernos de 10 lecturas o retos cada uno.

| PDF | Qué es | Páginas |
|---|---|---|
| `pdf/Super-Lector-Comprension-<edad>-Nivel-<1|2|3>.pdf` | Comprensión lectora · 5, 6-7, 8-9 y 10-12 años · 12 cuadernos | 17-18 |
| `pdf/Super-Mate-Problemas-<edad>-Nivel-<1|2|3>.pdf` | Problemas matemáticos · 5, 6-7, 8-9 y 10-12 años · 12 cuadernos | 17-18 |
| `pdf/Prueba-de-Nivel-Lunori-<edad>.pdf` | Prueba de nivel gratis («¿Qué nivel le toca?»): 6 preguntas de lectura y 6 de matemática, de ★ a ★★★, con tabla de resultado hacia el Nivel 1, 2 o 3 · 4 edades | 4 |
| `pdf/100-Planes-sin-Pantallas.pdf` | 100 actividades sin pantallas · 3 a 12 años | 18 |
| `pdf/Kit-Emociones-y-Rutinas.pdf` | Kit de emociones y rutinas visuales · 3 a 10 años | 21 |

`<edad>` puede ser `5-anos`, `6-7-anos`, `8-9-anos` o `10-12-anos`.

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

- Textos de las lecturas: `src/comprension/data-<edad>.js` (Nivel 1), `data-<edad>-n2.js` y `data-<edad>-n3.js`. Si creas un archivo de nivel nuevo, el build lo detecta solo. El diseño de las páginas está en `src/comprension/index.js`.
- Problemas de Súper Mate: `src/matematica/data-<edad>.js`, `-n2.js` y `-n3.js`, igual que en comprensión. El diseño está en `src/matematica/index.js`.
- Prueba de nivel: `src/prueba-data.js` (preguntas) y `src/prueba.js` (diseño).
- Las 100 actividades: `src/actividades-data.js`. El diseño está en `src/actividades.js`.
- El kit: `src/kit-emociones.js`.
- Colores, tipografías, caritas de emociones y pie de página: `src/base.js`.
- Imágenes: `assets/img/`. El logo y los personajes salen de los PDFs y de la web de Lunori.
