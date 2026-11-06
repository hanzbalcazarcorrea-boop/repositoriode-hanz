// Súper Mate · 5 años · Nivel 2 (Vuelo): números hasta 10, comparar, juntar y quitar, ordinales, patrones de 3 y medir.
// Mamá lee el problema en voz alta; el niño cuenta, encierra, dibuja o responde en voz alta.
const RACE = [['🐒', 'mono'], ['🦜', 'guacamayo'], ['🐸', 'rana'], ['🐢', 'Pipa'], ['🦥', 'perezoso']];

module.exports = {
  age: '5 años',
  slug: '5-anos',
  mode: 'pre',
  retos: [
    {
      title: 'La cosecha de Killa', skill: 'Contamos hasta 10', art: '🌽',
      lu: 'Cuando hay muchos, toca cada uno con tu dedo. El último número que dices es cuántos hay.',
      qs: [
        { t: 'count', q: 'Killa cosechó choclos en la chacra de su abuelo. ¿Cuántos choclos cosechó?', rows: ['🌽🌽🌽🌽🌽🌽🌽'], o: [6, 7, 8], a: 7 },
        { t: 'count', q: 'El abuelo sacó papas de la tierra. ¿Cuántas papas sacó?', rows: ['🥔🥔🥔🥔🥔<br>🥔🥔🥔🥔🥔'], o: [8, 9, 10], a: 10 },
        { t: 'draw', q: 'Dibuja 9 semillas en el surco para sembrar.', h: 30 },
        { t: 'say', q: 'Cuenta hacia atrás desde el 10 hasta el 1, como un cohete. ¡Despegue!', a: '10, 9, 8, 7, 6, 5, 4, 3, 2, 1.' },
      ],
      tip: 'Al terminar de contar algo, pregúntale: «entonces, ¿cuántos hay?». Si responde con el último número que dijo, ya entendió qué significa contar.',
    },
    {
      title: 'Mandarinas del mercado', skill: '¿Cuál es mayor?', art: '🍊',
      lu: 'Cuando cuentas, los números van creciendo: 1, 2, 3… El que dices más tarde es el mayor. ¡El 9 es mayor que el 7!',
      qs: [
        { t: 'count', q: 'Mateo compró mandarinas en el mercado. ¿Cuántas compró?', rows: ['🍊🍊🍊🍊🍊🍊🍊🍊🍊'], o: [8, 9, 10], a: 9 },
        { t: 'count', q: 'Camila también compró mandarinas. ¿Cuántas compró ella?', rows: ['🍊🍊🍊🍊🍊🍊🍊'], o: [6, 7, 8], a: 7 },
        { t: 'pic', q: '¿Quién compró más mandarinas?', o: [['👦', 'Mateo'], ['👧', 'Camila']], a: 0 },
        { t: 'pic', q: 'Ahora sin dibujos: ¿qué número es el mayor?', o: [['6️⃣', 'seis'], ['4️⃣', 'cuatro'], ['8️⃣', 'ocho']], a: 2 },
      ],
      tip: 'Jueguen con naipes del 1 al 10: cada uno voltea una carta y se lleva las dos quien tenga el número mayor. Pregúntale cómo lo supo.',
    },
    {
      title: 'La combi de Thiago', skill: 'Juntamos hasta 10', art: '🚐',
      lu: 'Para juntar más rápido, guarda el número grande en tu cabeza y sigue contando: cuatro… ¡cinco, seis, siete!',
      qs: [
        { t: 'count', q: 'En la combi van 4 personas. En el paradero suben 3 más. ¿Cuántas personas van ahora?', rows: ['🧑🧑🧑🧑', '🧑🧑🧑'], op: '+', o: [6, 7, 8], a: 7 },
        { t: 'count', q: 'Thiago tiene 6 crayones y su prima le presta 3 más. ¿Cuántos crayones tiene ahora?', rows: ['🖍️🖍️🖍️🖍️🖍️🖍️', '🖍️🖍️🖍️'], op: '+', o: [8, 9, 10], a: 9 },
        { t: 'say', q: 'En la combi van 5 personas. En el paradero no sube nadie. ¿Cuántas personas van ahora?', a: '5 personas: si no llega nadie, queda igual.' },
        { t: 'draw', q: 'Dibuja 3 flores y luego 2 flores más. ¿Cuántas dibujaste en total?', h: 28 },
      ],
      tip: 'Enséñale a «seguir contando»: que guarde el primer número en la cabeza y cuente desde ahí con los dedos. Es más rápido que contar todo desde el 1.',
    },
    {
      title: 'La canasta de panes', skill: 'Quitamos hasta 10', art: '🍞',
      lu: 'Compra, come, regala, se va… ¡son pistas de que quedan menos! Tacha lo que se va y cuenta lo que queda.',
      qs: [
        { t: 'count', q: 'En la panadería hay 9 panes. Una señora compra 4. Tacha 4 panes. ¿Cuántos quedan?', rows: ['🍞🍞🍞🍞🍞🍞🍞🍞🍞'], o: [4, 5, 6], a: 5 },
        { t: 'count', q: 'Pipa tiene 8 hojitas de lechuga y se come 2. Tacha 2. ¿Cuántas le quedan?', rows: ['🥬🥬🥬🥬🥬🥬🥬🥬'], o: [5, 6, 7], a: 6 },
        { t: 'pic', q: 'Renata tenía 6 panes en su bolsa. Ahora tiene 2. ¿Qué pasó?', o: [['➕', 'le dieron más'], ['➖', 'regaló algunos']], a: 1 },
        { t: 'count', q: 'Quedaban 3 panes y se vendieron los 3. ¿Cuántos panes quedan?', rows: ['🍞🍞🍞'], o: [0, 1, 3], a: 0 },
      ],
      tip: 'Antes de resolver, pregúntale: «¿al final habrá más o menos que al principio?». Pensar qué va a pasar antes de calcular evita muchos errores.',
    },
    {
      title: 'La gran carrera del bosque', skill: 'Del 1.º al 5.º', img: 'pipa.jpg',
      lu: 'Para saber en qué lugar llegó cada uno, cuenta desde la meta: primero, segundo, tercero, cuarto, quinto.',
      intro: `<b>Así terminó la carrera.</b> El que está más cerca de la meta 🏁 llegó primero.<div style="display:flex;align-items:flex-end;justify-content:center;gap:7mm;margin-top:2mm"><div class="emoji" style="font-size:30pt">🏁</div>${RACE.map(([e, l]) => `<div style="text-align:center"><div class="emoji" style="font-size:27pt">${e}</div><div class="f" style="font-size:9.5pt;margin-top:1mm">${l}</div></div>`).join('')}</div>`,
      qs: [
        { t: 'pic', q: '¿Quién llegó primero?', o: [['🐸', 'rana'], ['🐒', 'mono'], ['🦥', 'perezoso']], a: 1 },
        { t: 'pic', q: '¿Quién llegó tercero?', o: [['🦜', 'guacamayo'], ['🐢', 'Pipa'], ['🐸', 'rana']], a: 2 },
        { t: 'pic', q: '¿En qué lugar llegó Pipa?', o: [['2️⃣', 'segunda'], ['4️⃣', 'cuarta'], ['5️⃣', 'quinta']], a: 1 },
        { t: 'say', q: 'Pipa no se rindió y llegó a la meta. ¿Quién llegó justo después de ella? ¿En qué lugar?', a: 'El perezoso, en quinto lugar.' },
      ],
      tip: 'Usa los ordinales en la vida diaria: «el segundo cajón», «el cuarto piso», «eres el tercero en la fila». Así los aprende sin esfuerzo.',
    },
    {
      title: 'La chalina de la abuela', skill: 'Patrones de 3', art: '🧶',
      lu: 'Busca el grupito que se repite y dilo como una canción: rojo, amarillo, azul… ¡rojo, amarillo, azul!',
      qs: [
        { t: 'seq', q: 'La abuela teje una chalina con 3 colores. ¿Qué color sigue?', row: '🟥🟨🟦🟥🟨🟦❓', o: [['🟦', 'azul'], ['🟥', 'rojo'], ['🟨', 'amarillo']], a: 1 },
        { t: 'seq', q: 'Ahora el grupito es estrella, luna, luna. ¿Qué sigue?', row: '⭐🌙🌙⭐🌙🌙⭐❓', o: [['⭐', 'estrella'], ['🌙', 'luna'], ['☀️', 'sol']], a: 1 },
        { t: 'seq', q: 'Aquí falta un color en el medio. ¿Cuál es?', row: '🟩🟪🟧🟩❓🟧', o: [['🟧', 'naranja'], ['🟩', 'verde'], ['🟪', 'morado']], a: 2 },
        { t: 'draw', q: 'Inventa tu chalina con 3 colores que se repiten.', h: 28 },
      ],
      tip: 'Armen patrones con tapitas de 3 colores y tapen una pieza con la mano: que descubra cuál falta. Después, que él te arme uno a ti.',
    },
    {
      title: '¿Cuánto mide?', skill: 'Medimos con objetos', art: '📏',
      lu: 'Para medir, pon los objetos en fila, uno pegadito al otro, sin dejar huecos. ¡Y luego cuéntalos!',
      qs: [
        { t: 'count', q: 'Tito midió su lápiz con clips, uno pegado al otro. ¿Cuántos clips mide el lápiz?', rows: ['📎📎📎📎📎'], o: [4, 5, 6], a: 5 },
        { t: 'count', q: 'Valentina midió la mesa con sus manos. ¿Cuántas manos mide la mesa?', rows: ['✋✋✋✋✋✋✋✋'], o: [7, 8, 9], a: 8 },
        { t: 'pic', q: 'La cinta roja mide 4 clips. La cinta azul mide 7 clips. ¿Cuál es más larga?', o: [['🟥', 'la roja'], ['🟦', 'la azul']], a: 1 },
        { t: 'say', q: 'Mide tu cama con tus pasos, poniendo un pie justo delante del otro. ¿Cuántos pasos mide?', a: 'Respuesta libre: depende de la cama y del tamaño del pie.' },
      ],
      tip: 'Midan juntos la cama, la puerta o la mesa con pasos, manos o cucharas. Pregúntale: «¿por qué a ti te salen más pasos que a mí?».',
    },
    {
      title: '¿Qué hay que contar?', skill: 'Escucho la pregunta', img: 'lu-lupa.jpg',
      lu: 'Antes de contar, escucha bien la pregunta. ¡No todo lo que ves hay que contarlo!',
      qs: [
        { t: 'count', q: 'Pipa la exploradora encontró caracoles, hojas y una flor. ¿Cuántos caracoles encontró?', rows: ['🐌🐌🐌', '🍃🍃', '🌼'], o: [3, 5, 6], a: 3 },
        { t: 'count', q: 'En el árbol hay pajaritos y mariposas. ¿Cuántos pajaritos hay?', rows: ['🐦🐦🐦🐦', '🦋🦋'], o: [2, 4, 6], a: 4 },
        { t: 'pic', q: 'Valentina tiene 2 helados y 5 conchitas de la playa. Mamá pregunta: «¿cuántas conchitas tiene?». ¿Qué tienes que contar?', o: [['🍦', 'los helados'], ['🐚', 'las conchitas']], a: 1 },
        { t: 'say', q: 'Escucha: «Tito tiene 3 quesos y 4 lápices. ¿Cuántos lápices tiene?». ¿Qué número no sirve para responder?', a: 'El 3 (los quesos) no sirve. Tito tiene 4 lápices.' },
      ],
      tip: 'Pídele que te repita la pregunta con sus palabras: «¿qué tenemos que averiguar?». Así aprende que no todos los números ni dibujos del problema sirven.',
    },
    {
      title: 'La escalera de Tito', skill: 'Antes y después', img: 'tito.jpg',
      lu: 'El número que va después es uno más. El que va antes es uno menos. ¡Sube y baja la escalera contando!',
      qs: [
        { t: 'count', q: 'Tito sube la escalera contando. ¿Qué número falta?', rows: ['5 6 ❓ 8'], o: [6, 7, 9], a: 7 },
        { t: 'count', q: '¿Qué número va justo antes del 10?', rows: ['❓ 10'], o: [8, 9, 11], a: 9 },
        { t: 'count', q: 'Ahora Tito baja contando hacia atrás. ¿Qué número falta?', rows: ['10 9 ❓ 7'], o: [6, 8, 11], a: 8 },
        { t: 'say', q: 'Tito está en el escalón 6 y sube un escalón más. ¿En qué escalón está ahora?', a: 'En el 7: es el número que va después del 6.' },
      ],
      tip: 'Jueguen a «¿qué número viene?» al subir escaleras o esperar en una fila: tú dices un número y él dice el que va después, o el que va antes.',
    },
    {
      title: 'Cuentos con números', skill: 'Problemas con mis dedos', img: 'lu-lee.jpg',
      lu: 'Cuando no hay dibujo, ¡tus dedos te ayudan! Levanta un dedo por cada cosa que escuches.',
      qs: [
        { t: 'say', q: 'En el corral hay 3 gallinas y llegan 2 más. ¿Cuántas gallinas hay ahora? Usa tus dedos.', a: '3 + 2 = 5. Hay 5 gallinas.' },
        { t: 'say', q: 'Camila tiene 6 uvas y le da 2 a su hermano. ¿Cuántas uvas le quedan?', a: '6 − 2 = 4. Le quedan 4 uvas.' },
        { t: 'say', q: 'Levanta 2 dedos y después 4 dedos más. ¿Cuántos dedos tienes levantados?', a: '2 + 4 = 6. Tengo 6 dedos levantados.' },
        { t: 'draw', q: 'Dibuja el problema de las gallinas para comprobar tu respuesta.', h: 32 },
      ],
      tip: 'Lee despacio y haz una pausa después de cada número para que alcance a levantar los dedos. Si se pierde, vuelve a leer sin apuro: escuchar también se entrena.',
    },
  ],
};
