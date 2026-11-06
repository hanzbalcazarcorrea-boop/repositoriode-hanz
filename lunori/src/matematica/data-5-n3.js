// Súper Mate · 5 años · Nivel 3 (Súper mate): hasta 20, ¿cuántos faltan?, dobles, monedas, días de la semana, dos pasos y explicar cómo lo pensó.
// Mamá lee el problema en voz alta; el niño cuenta, encierra, dibuja o responde en voz alta.
const coin = (v) => `<span style="display:inline-flex;align-items:center;justify-content:center;width:14mm;height:14mm;border-radius:50%;background:#FFE7B8;border:2px solid #C2620A;box-shadow:inset 0 0 0 1.2mm #FFF4C9;font-family:Fredoka;font-weight:600;font-size:11pt;color:#1E2A5A;letter-spacing:0;vertical-align:middle;margin:0 .8mm">S/&nbsp;${v}</span>`;
const WEEK = [['lunes', '🎨'], ['martes', '🎵'], ['miércoles', '⚽'], ['jueves', '📚'], ['viernes', '🍳'], ['sábado', '🛒'], ['domingo', '👵']];

module.exports = {
  age: '5 años',
  slug: '5-anos',
  mode: 'pre',
  retos: [
    {
      title: 'La piñata de Killa', skill: 'Diez y algunos más', art: '🍬',
      lu: 'Si ya sabes que un grupo tiene 10, no vuelvas a contarlo: di «diez» y sigue: once, doce, trece…',
      qs: [
        { t: 'count', q: 'De la piñata caen 10 caramelos y después 3 más. ¿Cuántos caramelos son?', rows: ['🍬🍬🍬🍬🍬<br>🍬🍬🍬🍬🍬', '🍬🍬🍬'], op: '+', o: [12, 13, 14], a: 13 },
        { t: 'count', q: 'Killa pegó estrellas en su cuaderno. ¿Cuántas hay? Cuenta el grupo de 10 y sigue: once, doce…', rows: ['⭐⭐⭐⭐⭐<br>⭐⭐⭐⭐⭐', '⭐⭐⭐⭐⭐<br>⭐⭐⭐'], o: [17, 18, 19], a: 18 },
        { t: 'count', q: '¿Qué número falta?', rows: ['15 16 ❓ 18'], o: [14, 17, 19], a: 17 },
        { t: 'say', q: '¿Qué es más rápido: contar todo desde el 1 o empezar en el 10? ¿Por qué?', a: 'Empezar en el 10, porque ya sé que ese grupo tiene 10.' },
      ],
      tip: 'Guarden tapitas en vasitos de 10: «un vaso lleno y 4 sueltas son 14». Así entiende cómo se forman los números del 11 al 20.',
    },
    {
      title: 'La mesa del almuerzo', skill: '¿Cuántos faltan?', art: '🍽️',
      lu: 'Para saber cuántos faltan, empieza en lo que tienes y cuenta hasta lo que quieres: 6… 7, 8, 9, 10. ¡Faltan 4!',
      qs: [
        { t: 'count', q: 'Hoy almuerzan 7 personas en la casa de Mateo. Ya hay 4 platos en la mesa. ¿Cuántos platos faltan?', rows: ['🍽️🍽️🍽️🍽️⬜⬜⬜'], o: [2, 3, 4], a: 3 },
        { t: 'count', q: 'Tito quiere juntar 10 maníes. Ya tiene 6. ¿Cuántos le faltan?', rows: ['🥜🥜🥜🥜🥜<br>🥜⬜⬜⬜⬜'], o: [3, 4, 5], a: 4 },
        { t: 'pic', q: 'Pipa quiere leer 5 cuentos esta semana. Ya leyó los 5. ¿Cuántos le faltan?', o: [['0️⃣', 'ninguno'], ['5️⃣', 'cinco']], a: 0 },
        { t: 'say', q: 'Tienes 8 tapitas y quieres tener 10. ¿Cuántas te faltan? ¿Cómo lo pensaste?', a: 'Faltan 2: desde el 8 cuento 9, 10.' },
      ],
      tip: 'Al poner la mesa, pregúntale: «somos 5 y hay 3 vasos, ¿cuántos faltan?». Que primero lo piense y después lo compruebe trayendo los vasos.',
    },
    {
      title: 'El espejo de Lu', skill: 'Los dobles', img: 'lu.jpg',
      lu: 'Un doble es juntar dos grupos iguales: 3 y 3, 4 y 4. ¡Como cuando algo se mira en el espejo!',
      qs: [
        { t: 'count', q: 'Lu pone 3 flores frente al espejo. ¿Cuántas flores ve en total, contando las del espejo?', rows: ['🌷🌷🌷', '🌷🌷🌷'], op: '+', o: [5, 6, 7], a: 6 },
        { t: 'count', q: 'Valentina y Thiago tienen 4 plátanos cada uno. ¿Cuántos plátanos tienen entre los dos?', rows: ['🍌🍌🍌🍌', '🍌🍌🍌🍌'], op: '+', o: [7, 8, 9], a: 8 },
        { t: 'say', q: 'El doble de 2 es 4, porque 2 y 2 son 4. ¿Cuál es el doble de 5? ¿Cómo lo sabes?', a: 'El doble de 5 es 10, porque 5 y 5 son 10 (como los dedos de mis dos manos).' },
        { t: 'draw', q: 'Dibuja una mariposa con la misma cantidad de puntos en cada ala.', h: 30 },
      ],
      tip: 'Practiquen los dobles con los dedos: 2 y 2, 3 y 3, 4 y 4, 5 y 5. Si los aprende de memoria, después los usará para sumar más rápido.',
    },
    {
      title: 'La bodega de la esquina', skill: 'Mis primeras monedas', art: '🏪',
      lu: 'Una moneda de S/ 2 vale lo mismo que 2 monedas de S/ 1. ¡Mira cuánto vale cada moneda, no solo cuántas hay!',
      qs: [
        { t: 'pic', q: '¿Qué moneda vale más?', o: [[coin(1), 'un sol'], [coin(5), 'cinco soles'], [coin(2), 'dos soles']], a: 1 },
        { t: 'count', q: 'Renata tiene estas monedas. ¿Cuántos soles tiene?', rows: [coin(1) + coin(1) + coin(1) + coin(1)], o: [3, 4, 5], a: 4 },
        { t: 'count', q: 'Tito tiene una moneda de S/ 2 y una de S/ 1. ¿Cuántos soles tiene en total?', rows: [coin(2), coin(1)], op: '+', o: [2, 3, 4], a: 3 },
        { t: 'say', q: 'Una pelota cuesta S/ 5. Thiago tiene 2 monedas de S/ 2. ¿Le alcanza para comprarla? ¿Cómo lo sabes?', a: 'No: 2 + 2 = 4 soles, y la pelota cuesta 5. Le falta S/ 1.' },
      ],
      tip: 'Jueguen a la tienda con monedas de verdad: pongan precios de S/ 1, S/ 2 y S/ 5 a sus juguetes y que él pague. Luego cambien de papeles.',
    },
    {
      title: 'La semana de Valentina', skill: 'Los días de la semana', img: 'lu-reloj.jpg',
      lu: 'La semana tiene 7 días y siempre van en el mismo orden. Después del domingo, ¡vuelve a empezar el lunes!',
      intro: `<b>Lo que hace Valentina cada día</b><div style="display:grid;grid-template-columns:repeat(7,1fr);gap:1.6mm;margin-top:2mm">${WEEK.map(([d, e]) => `<div style="background:#fff;border-radius:2.5mm;padding:1.6mm .5mm;text-align:center"><div class="f" style="font-size:9.5pt">${d}</div><div class="emoji" style="font-size:21pt;margin-top:1mm">${e}</div></div>`).join('')}</div>`,
      qs: [
        { t: 'pic', q: '¿Qué día juega fútbol Valentina? Busca la pelota.', o: [['📅', 'lunes'], ['📅', 'miércoles'], ['📅', 'sábado']], a: 1 },
        { t: 'pic', q: 'Hoy es sábado y Valentina va al mercado. ¿Qué hará mañana?', o: [['🎨', 'pintar'], ['👵', 'ver a la abuela'], ['🍳', 'cocinar']], a: 1 },
        { t: 'count', q: '¿Cuántos días tiene la semana? Cuenta los dibujos.', rows: ['🎨🎵⚽📚🍳🛒👵'], o: [5, 6, 7], a: 7 },
        { t: 'say', q: 'Di los días de la semana en orden, empezando por el lunes. ¿Qué día es hoy? ¿Y qué día fue ayer?', a: 'Lunes, martes, miércoles, jueves, viernes, sábado y domingo. Hoy y ayer dependen del día en que lo hagan.' },
      ],
      tip: 'Cada mañana pregunten juntos: «¿qué día es hoy?, ¿qué día fue ayer?, ¿qué día será mañana?». Un calendario pegado en la refri ayuda mucho.',
    },
    {
      title: 'Los pollitos de la abuela', skill: 'Dos pasos', art: '🐥',
      lu: 'Cuando pasan dos cosas, resuélvelas una por una. Primero la primera… ¡y con ese número, la segunda!',
      qs: [
        { t: 'count', q: 'La abuela tiene 4 pollitos. Nacen 2 más y después llega 1 que estaba jugando en el patio. ¿Cuántos pollitos hay ahora?', rows: ['🐥🐥🐥🐥', '🐥🐥', '🐥'], op: '+', o: [6, 7, 8], a: 7 },
        { t: 'count', q: 'Thiago tiene 7 carritos. Le presta 2 a su primo y guarda 1 en la caja. Tacha. ¿Con cuántos carritos juega?', rows: ['🚗🚗🚗🚗🚗🚗🚗'], o: [3, 4, 5], a: 4 },
        { t: 'say', q: 'Escucha: «En el parque juegan 5 niños. Llegan 2 más y después 1 se va a su casa». ¿Cuántos niños juegan al final? Usa tus dedos.', a: '5 + 2 = 7; 7 − 1 = 6. Juegan 6 niños.' },
        { t: 'say', q: '¿Qué hiciste primero y qué hiciste después? Cuéntaselo a mamá.', a: 'Primero resolví lo primero que pasó y, con ese número, resolví lo segundo.' },
      ],
      tip: 'Antes de calcular, pídele que te cuente la historia en orden: «primero había…, luego…, al final…». Si entiende la historia, el cálculo le saldrá solo.',
    },
    {
      title: 'Torres de bloques', skill: '¿Cuántos más?', art: '🧱',
      lu: 'Empareja uno de arriba con uno de abajo. ¡Los que se quedan solitos son los que hay de más!',
      qs: [
        { t: 'count', q: 'Tito hizo una torre azul y Coco una torre roja. ¿Cuántos bloques más tiene la torre azul?', rows: ['🟦🟦🟦🟦🟦🟦🟦<br>🟥🟥🟥🟥'], o: [2, 3, 4], a: 3 },
        { t: 'count', q: 'En el jardín hay 9 flores rosadas y 5 girasoles. ¿Cuántas flores rosadas más que girasoles hay?', rows: ['🌸🌸🌸🌸🌸🌸🌸🌸🌸<br>🌻🌻🌻🌻🌻'], o: [3, 4, 5], a: 4 },
        { t: 'pic', q: 'Lu juntó 12 hojas y Pipa juntó 15. ¿Quién juntó más hojas?', o: [['🦉', 'Lu'], ['🐢', 'Pipa']], a: 1 },
        { t: 'say', q: '¿Cómo supiste cuántas flores más había? Explícaselo a mamá.', a: 'Emparejé cada flor rosada con un girasol y conté las que se quedaron sin pareja: 4.' },
      ],
      tip: 'Armen dos filas de objetos, una debajo de la otra, y emparejen uno con uno. Lo que sobra es la diferencia: así empieza a entender la resta.',
    },
    {
      title: 'Adivina, adivinador', skill: 'Pistas y lógica', img: 'lu-piensa.jpg',
      lu: 'Usa las pistas una por una, como un detective. Cada pista te dice quién NO puede ser.',
      qs: [
        { t: 'pic', q: 'Tiene 4 patas, le encanta el queso y no es un ratón. ¿Quién es?', o: [['🐭', 'Tito'], ['🦉', 'Lu'], ['🐶', 'Coco']], a: 2 },
        { t: 'pic', q: 'Pienso en un número. Va después del 5 y antes del 7. ¿Cuál es?', o: [['4️⃣', 'cuatro'], ['6️⃣', 'seis'], ['8️⃣', 'ocho']], a: 1 },
        { t: 'count', q: 'Es mayor que 10, es menor que 13 y no es el 11. ¿Qué número es?', rows: ['10 11 12 13'], o: [11, 12, 13], a: 12 },
        { t: 'say', q: '¿Qué pista te ayudó más a descubrir que era Coco? ¿Por qué?', a: '«No es un ratón», porque así ya no podía ser Tito. Y Lu no tiene 4 patas.' },
      ],
      tip: 'Jueguen a las adivinanzas con cosas de la casa: «es redondo, está en la cocina y no es un plato». Pensar con pistas entrena la lógica.',
    },
    {
      title: 'De dos en dos', skill: 'Contamos de 2 en 2', art: '👟',
      lu: 'Contar de 2 en 2 es más rápido. Di bajito un número y fuerte el siguiente: uno, ¡DOS!, tres, ¡CUATRO!',
      qs: [
        { t: 'count', q: 'Cuatro niños dejaron sus zapatillas en la puerta. Cuenta de 2 en 2. ¿Cuántas zapatillas hay?', rows: ['👟👟', '👟👟', '👟👟', '👟👟'], o: [6, 8, 10], a: 8 },
        { t: 'seq', q: 'Contamos de 2 en 2. ¿Qué número sigue?', row: '2 4 6 ❓', o: [['7️⃣', 'siete'], ['8️⃣', 'ocho'], ['🔟', 'diez']], a: 1 },
        { t: 'count', q: 'Cada gallina tiene 2 patas. ¿Cuántas patas tienen estas 3 gallinas?', rows: ['🐔', '🐔', '🐔'], o: [3, 5, 6], a: 6 },
        { t: 'say', q: '¿Cuántos ojos hay en tu familia? Cuéntalos de 2 en 2.', a: 'Depende de la familia: por ejemplo, 4 personas tienen 2, 4, 6, 8 ojos.' },
      ],
      tip: 'Cuando doblen la ropa limpia, cuenten las medias de 2 en 2: 2, 4, 6, 8… Es el primer paso hacia la multiplicación.',
    },
    {
      title: 'El gran reto de Lu', skill: 'Explico cómo lo pensé', img: 'lu-trofeo.jpg',
      lu: 'Un súper mate no solo da la respuesta: ¡también cuenta cómo la encontró! Empieza diciendo «yo pensé que…».',
      qs: [
        { t: 'count', q: 'Coco tenía 10 quesitos. Se comió 3 y después encontró 2 más. Tacha los que se comió. ¿Cuántos tiene ahora?', rows: ['🧀🧀🧀🧀🧀<br>🧀🧀🧀🧀🧀', '🧀🧀'], op: '+', o: [8, 9, 10], a: 9 },
        { t: 'say', q: 'Renata dice: «Tengo 6 lápices. Si me regalan 2, tendré 9». ¿Tiene razón? ¿Cómo lo sabes?', a: 'No: 6 + 2 = 8, no 9. Tendrá 8 lápices.' },
        { t: 'say', q: 'Inventa un problema de dos pasos para mamá: algo llega y después algo se va. ¿Ella lo resolvió bien?' },
        { t: 'draw', q: 'Dibuja tu problema y su respuesta.', h: 32 },
      ],
      tip: 'Pregúntale «¿cómo lo sabes?» también cuando acierta, no solo cuando se equivoca. Explicar su forma de pensar es lo que más fortalece su razonamiento.',
    },
  ],
};
