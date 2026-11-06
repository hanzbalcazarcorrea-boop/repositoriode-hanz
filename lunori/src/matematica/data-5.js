// Súper Mate · 5 años: mamá lee el problema en voz alta; el niño cuenta, encierra y dibuja.
module.exports = {
  age: '5 años',
  slug: '5-anos',
  mode: 'pre',
  retos: [
    {
      title: 'Los huesos de Coco', skill: '¿Cuántos hay?', img: 'coco.jpg',
      lu: 'Para contar bien, toca cada dibujo con tu dedo y di un número. ¡Uno por uno!',
      qs: [
        { t: 'count', q: 'Coco tiene huesos. ¿Cuántos huesos tiene? Encierra el número.', rows: ['🦴🦴🦴🦴'], o: [3, 4, 5], a: 4 },
        { t: 'count', q: 'Tito encontró quesos. ¿Cuántos quesos encontró?', rows: ['🧀🧀🧀🧀🧀🧀'], o: [5, 6, 7], a: 6 },
        { t: 'draw', q: 'Dibuja 3 pelotas para que Coco juegue.', h: 34 },
      ],
      tip: 'Cuenten cosas de verdad durante el día: escalones, cucharas, carros rojos. Contar con objetos reales es la base de todo.',
    },
    {
      title: '¿Quién tiene más?', skill: 'Más y menos', img: 'lu.jpg',
      lu: 'Para saber quién tiene más, cuenta los dos grupos y compara. ¡El número más grande gana!',
      qs: [
        { t: 'count', q: 'Lu tiene libros. ¿Cuántos tiene?', rows: ['📕📕📕📕📕'], o: [4, 5, 6], a: 5 },
        { t: 'count', q: 'Tito tiene libros. ¿Cuántos tiene?', rows: ['📗📗'], o: [1, 2, 3], a: 2 },
        { t: 'pic', q: '¿Quién tiene más libros?', o: [['🦉', 'Lu'], ['🐭', 'Tito']], a: 0 },
        { t: 'pic', q: '¿Quién tiene menos libros?', o: [['🦉', 'Lu'], ['🐭', 'Tito']], a: 1 },
      ],
      tip: 'Usa las palabras «más», «menos» y «lo mismo» en la mesa: «¿quién tiene más papas en su plato?». Son las primeras palabras matemáticas.',
    },
    {
      title: 'Las manzanas de Pipa', skill: 'Juntamos', img: 'pipa.jpg',
      lu: 'Cuando juntamos dos grupos, tenemos más que antes. ¡Cuenta todo junto!',
      qs: [
        { t: 'count', q: 'Pipa tiene 2 manzanas. Su mamá le da 3 más. ¿Cuántas tiene ahora?', rows: ['🍎🍎', '🍎🍎🍎'], op: '+', o: [4, 5, 6], a: 5 },
        { t: 'count', q: 'Coco tiene 1 pelota y encuentra 2 más. ¿Cuántas tiene ahora?', rows: ['⚽', '⚽⚽'], op: '+', o: [2, 3, 4], a: 3 },
        { t: 'say', q: 'Cuando juntamos, ¿tenemos más o menos que antes?' },
      ],
      tip: 'Usa juguetes para representar el problema: «aquí hay 2 carritos, llegan 3 más». Mover objetos le ayuda a entender qué está pasando.',
    },
    {
      title: 'Los globos de Tito', skill: 'Quitamos', img: 'tito.jpg',
      lu: 'Cuando algo se va, tenemos menos. Tacha lo que se fue y cuenta lo que queda.',
      qs: [
        { t: 'count', q: 'Tito tiene 5 globos. Se le escapan 2. Tacha 2 globos. ¿Cuántos le quedan?', rows: ['🎈🎈🎈🎈🎈'], o: [2, 3, 4], a: 3 },
        { t: 'count', q: 'Lu tiene 4 galletas y se come 1. Tacha 1. ¿Cuántas le quedan?', rows: ['🍪🍪🍪🍪'], o: [2, 3, 4], a: 3 },
        { t: 'pic', q: 'Cuando quitamos, ¿queda más o menos?', o: [['⬆️', 'más'], ['⬇️', 'menos']], a: 1 },
      ],
      tip: 'Juega a «la tienda que vende»: pon 5 frutas y que te «venda» algunas. ¿Cuántas quedaron? Restar es más fácil cuando se ve.',
    },
    {
      title: 'Formas por todas partes', skill: 'Las formas', art: '🔺',
      lu: 'El círculo es redondo, el cuadrado tiene 4 lados iguales y el triángulo tiene 3 lados.',
      qs: [
        { t: 'pic', q: '¿Qué tiene forma de círculo?', o: [['🕐', 'reloj'], ['🚪', 'puerta'], ['📦', 'caja']], a: 0 },
        { t: 'pic', q: '¿Qué tiene forma de triángulo?', o: [['🍕', 'pizza'], ['⚽', 'pelota'], ['📺', 'tele']], a: 0 },
        { t: 'draw', q: 'Dibuja un círculo, un cuadrado y un triángulo.', h: 34 },
      ],
      tip: 'Salgan de «cacería de formas» por la casa: ¿qué es redondo?, ¿qué tiene 4 esquinas? Reconocer formas prepara para la geometría.',
    },
    {
      title: 'El collar de Pipa', skill: '¿Qué sigue?', art: '📿',
      lu: 'Un patrón se repite y se repite. Di los colores en voz alta y descubre cuál viene.',
      qs: [
        { t: 'seq', q: 'Pipa hace un collar. ¿Qué color sigue?', row: '🔴🔵🔴🔵🔴❓', o: [['🔵', 'azul'], ['🔴', 'rojo'], ['🟢', 'verde']], a: 0 },
        { t: 'seq', q: '¿Qué fruta sigue?', row: '🍎🍌🍎🍌🍎🍌❓', o: [['🍌', 'plátano'], ['🍎', 'manzana'], ['🍇', 'uvas']], a: 1 },
        { t: 'draw', q: 'Inventa tu propio collar con 2 colores que se repiten.', h: 30 },
      ],
      tip: 'Hagan patrones con palmas y zapateos: palma, palma, pie… Los patrones entrenan la lógica que después usará en las tablas.',
    },
    {
      title: '¿Quién es más alto?', skill: 'Grande y pequeño', img: 'bosque-amigos.jpg',
      lu: 'Para comparar tamaños, ponlos uno al lado del otro y mira quién llega más arriba.',
      qs: [
        { t: 'pic', q: 'Los amigos se miden. Coco es el más alto. ¿Quién es el más alto?', o: [['🦉', 'Lu'], ['🐭', 'Tito'], ['🐶', 'Coco']], a: 2 },
        { t: 'pic', q: 'Tito es el más pequeño. ¿Quién es el más pequeño?', o: [['🦉', 'Lu'], ['🐭', 'Tito'], ['🐶', 'Coco']], a: 1 },
        { t: 'draw', q: 'Dibuja algo grande y algo pequeño.', h: 34 },
      ],
      tip: 'Midan cosas con las manos o con los pies: «la mesa mide 6 manos». Así entiende qué es medir antes de usar la regla.',
    },
    {
      title: 'Fresas para todos', skill: 'Repartimos', art: '🍓',
      lu: 'Repartir es dar a cada uno la misma cantidad. Da una a cada uno, y otra, y otra…',
      qs: [
        { t: 'count', q: 'Hay 4 fresas para 2 amigos. Cada uno recibe lo mismo. ¿Cuántas recibe cada amigo?', rows: ['🍓🍓🍓🍓'], o: [1, 2, 3], a: 2 },
        { t: 'draw', q: 'Dibuja 6 galletas en 2 platos: la misma cantidad en cada plato.', h: 34 },
        { t: 'say', q: '¿Es justo que un amigo tenga más? ¿Por qué?' },
      ],
      tip: 'A la hora del lonche, que él reparta las galletas o las uvas entre la familia, «una para ti, una para mí». Es su primera división.',
    },
    {
      title: 'La fila del colegio', skill: 'Primero, segundo, tercero', art: '🏫',
      lu: 'El primero es el que va adelante. Después viene el segundo, y luego el tercero.',
      qs: [
        { t: 'pic', q: 'Lu va primera, Tito segundo y Pipa tercera. ¿Quién va primero?', o: [['🦉', 'Lu'], ['🐭', 'Tito'], ['🐢', 'Pipa']], a: 0 },
        { t: 'pic', q: '¿Quién va después de Tito?', o: [['🦉', 'Lu'], ['🐢', 'Pipa'], ['🐶', 'Coco']], a: 1 },
        { t: 'count', q: '¿Qué número va después del 4?', rows: ['1 2 3 4 ❓'], o: [3, 5, 6], a: 5 },
      ],
      tip: 'Cuenten hacia adelante y hacia atrás al subir escaleras o esperar el bus. Saber qué número viene «después» es clave para sumar.',
    },
    {
      title: 'Inventa con Lu', skill: 'Invento mi problema', img: 'lu-piensa.jpg',
      lu: '¡Ahora tú eres el profe! Inventa un problema con tus juguetes y que mamá lo resuelva.',
      qs: [
        { t: 'count', q: 'Hay 3 patos en el agua y llegan 2 más. ¿Cuántos patos hay ahora?', rows: ['🦆🦆🦆', '🦆🦆'], op: '+', o: [4, 5, 6], a: 5 },
        { t: 'say', q: 'Inventa un problema con tus juguetes y cuéntaselo a mamá. ¿Ella lo resolvió bien?' },
        { t: 'draw', q: 'Dibuja tu problema.', h: 40 },
      ],
      tip: 'Inventar problemas es más difícil que resolverlos, ¡y enseña mucho más! Equivócate a propósito para que él te corrija.',
    },
  ],
};
