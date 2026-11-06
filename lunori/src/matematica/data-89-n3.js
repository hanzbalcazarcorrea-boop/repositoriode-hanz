// Súper Mate · 8-9 años · Nivel 3 (Súper mate): tres pasos, comparar fracciones, área, decimales con dinero,
// promedio, sucesiones, lógica, buscar el error, probar y ajustar, y explicar cómo lo pensó.

// Rectángulo cubierto de cuadraditos (para el área).
const cuadricula = (cols, rows) => `<div style="display:inline-grid;grid-template-columns:repeat(${cols},7mm);grid-auto-rows:7mm;border:1.4px solid #3A5BB0;flex:none">${'<span style="border:.5px solid #8FA6E0;background:#E6EBFA"></span>'.repeat(cols * rows)}</div>`;

module.exports = {
  age: '8 a 9 años',
  slug: '8-9-anos',
  mode: 'mid',
  retos: [
    {
      title: 'La combi del barrio', skill: 'Problemas de tres pasos', art: '🚐',
      lu: 'En los problemas largos, avanza paso a paso y escribe lo que ya sabes después de cada cuenta: «ahora van…».',
      qs: [
        { t: 'prob', q: 'Una combi sale del paradero con 18 pasajeros. En la primera parada bajan 5 y suben 7. En la segunda parada baja la mitad de los pasajeros que iban. ¿Cuántos pasajeros siguen en la combi?', scaffold: true, a: '18 − 5 = 13; 13 + 7 = 20; 20 ÷ 2 = 10. Siguen 10 pasajeros.' },
        { t: 'prob', q: 'En un vivero hay 4 filas de 15 plantines. El sábado vendieron 38 plantines y el domingo, 9. ¿Cuántos plantines quedan?', a: '4 × 15 = 60; 38 + 9 = 47; 60 − 47 = 13. Quedan 13 plantines.' },
        { t: 'open', q: '¿Cómo pensaste el problema de los plantines? Escribe tus pasos en orden.', lines: 2, a: 'Primero calculé cuántos plantines había (60), después cuántos vendieron (47) y al final resté (13). También vale restar 38 y después 9.' },
      ],
      tip: 'En los problemas de tres pasos, pídele que escriba una oración después de cada cuenta («ahora hay 13 pasajeros»). Así no se pierde y puede encontrar dónde se equivocó.',
    },
    {
      title: 'Las tortas de Coco', skill: '¿Qué fracción es mayor?', img: 'coco.jpg',
      lu: 'Si el entero es del mismo tamaño, mientras más partes tenga, más pequeña es cada parte. ¡1/8 es menos que 1/4!',
      qs: [
        { t: 'prob', q: 'Coco horneó dos tortas del mismo tamaño. Cortó la de chocolate en 6 partes iguales y la de fresa en 8 partes iguales. Tito comió una tajada de chocolate y Pipa, una de fresa. ¿Quién comió más torta? ¿Cómo lo sabes?', scaffold: true, a: 'Tito: 1/6 es más que 1/8, porque la torta de chocolate se cortó en menos partes y cada tajada es más grande.' },
        { t: 'tf', q: 'Marca V o F.', items: [['1/3 de una torta es más que 1/5 de la misma torta.', true], ['2/4 es lo mismo que 1/2.', true], ['3/8 es más que 5/8.', false]] },
        { t: 'prob', q: 'Killa y Yaku tienen dos chocolates iguales. Killa se comió 1/2 del suyo y Yaku, 3/8 del suyo. ¿Quién comió más chocolate? Dibuja los chocolates para comprobarlo.', a: 'Killa: 1/2 es lo mismo que 4/8, y 4/8 es más que 3/8.' },
      ],
      tip: 'Corten dos panes iguales: uno en 2 partes y otro en 4. Comparen una parte de cada uno. Así descubre por qué 1/4 es menos que 1/2, aunque 4 sea mayor que 2.',
    },
    {
      title: 'El huerto de Pipa', skill: 'El área', img: 'pipa.jpg',
      lu: 'El área cuenta cuántos cuadraditos cubren una figura. En un rectángulo, multiplica las filas por los cuadraditos de cada fila.',
      intro: `<div style="display:flex;align-items:center;gap:8mm">${cuadricula(6, 4)}<div><b>Este rectángulo está cubierto de cuadraditos iguales.</b><br>¿Cuántos hay? Piensa en filas y columnas.</div></div>`,
      qs: [
        { t: 'open', q: '¿Cuántos cuadraditos cubren el rectángulo? ¿Cómo los puedes contar sin contarlos uno por uno?', lines: 1, a: '24 cuadraditos: hay 4 filas de 6 (4 × 6 = 24).' },
        { t: 'prob', q: 'Pipa va a sembrar lechugas en un huerto rectangular de 5 metros de largo y 3 metros de ancho. En cada metro cuadrado siembra 4 lechugas. ¿Cuántas lechugas sembrará?', scaffold: true, a: 'Área: 5 × 3 = 15 metros cuadrados. 15 × 4 = 60. Sembrará 60 lechugas.' },
        { t: 'choice', q: 'Un huerto mide 6 m por 2 m y otro mide 4 m por 3 m. ¿Cuál tiene más área?', o: ['el de 6 m por 2 m', 'el de 4 m por 3 m', 'tienen la misma área'], a: 2 },
      ],
      tip: 'Dibujen rectángulos en papel cuadriculado y cuenten los cuadraditos por filas. Cuando descubra que «filas × columnas» da lo mismo que contar uno por uno, entenderá de verdad el área.',
    },
    {
      title: 'El quiosco del colegio', skill: 'Soles y céntimos', art: '🥪',
      lu: 'S/ 4,70 son 4 soles y 70 céntimos. Para el vuelto, cuenta hacia arriba: de 4,70 a 5 y de 5 a 10. ¡100 céntimos forman 1 sol!',
      qs: [
        { t: 'prob', q: 'En el quiosco, Thiago compra un pan con pollo de S/ 3,50 y un refresco de S/ 1,20. Paga con un billete de S/ 10. ¿Cuánto le dan de vuelto?', scaffold: true, a: '3,50 + 1,20 = 4,70; 10 − 4,70 = 5,30. Le dan S/ 5,30 de vuelto.' },
        { t: 'open', q: '¿Qué es más: S/ 2,05 o S/ 2,50? ¿Cómo lo sabes?', lines: 1, a: 'S/ 2,50: son 2 soles y 50 céntimos; S/ 2,05 son 2 soles y solo 5 céntimos.' },
        { t: 'prob', q: 'Killa tiene 3 monedas de S/ 1, 2 monedas de 50 céntimos y 4 monedas de 20 céntimos. ¿Le alcanza para un cuaderno de S/ 5? ¿Cuánto le falta o le sobra?', a: '3 × 1 = 3; 2 × 0,50 = 1; 4 × 0,20 = 0,80. Total: S/ 4,80. No le alcanza: le faltan 20 céntimos.' },
      ],
      tip: 'Junten monedas reales de 10, 20 y 50 céntimos y jueguen a la tiendita: que pague y calcule el vuelto contando hacia arriba, como hacen los vendedores del mercado.',
    },
    {
      title: 'Las gallinas de la abuela', skill: 'El promedio', art: '🥚',
      lu: 'El promedio es lo que le tocaría a cada uno si repartimos todo en partes iguales: sumo todo y divido entre cuántos son.',
      intro: `<b>Huevos que pusieron las gallinas de la abuela de Mateo</b><table class="t" style="margin-top:2mm"><tr><th>Día</th><th>Lunes</th><th>Martes</th><th>Miércoles</th><th>Jueves</th><th>Viernes</th></tr><tr><td><b>Huevos</b></td><td>8</td><td>6</td><td>10</td><td>7</td><td>9</td></tr></table>`,
      qs: [
        { t: 'prob', q: '¿Cuántos huevos pusieron las gallinas, en promedio, cada día?', scaffold: true, a: '8 + 6 + 10 + 7 + 9 = 40; 40 ÷ 5 = 8. En promedio, 8 huevos por día.' },
        { t: 'open', q: 'Sin hacer cuentas, ¿por qué el promedio no puede ser 12? Explícalo.', lines: 1, a: 'Porque ningún día pusieron más de 10 huevos: el promedio nunca es mayor que el dato más grande.' },
        { t: 'prob', q: 'Mateo juntó 9 latas para reciclar, Camila 14 y Yaku 10. Si las reparten en partes iguales para llevarlas al centro de reciclaje, ¿cuántas lleva cada uno?', a: '9 + 14 + 10 = 33; 33 ÷ 3 = 11. Cada uno lleva 11 latas (ese es el promedio).' },
      ],
      tip: 'Muestra el promedio con torres de tapitas: hagan una torre por día y luego «emparejen» las torres pasando tapitas de las altas a las bajas. La altura final es el promedio.',
    },
    {
      title: 'La alcancía de Tito', skill: 'Descubro la regla', img: 'tito.jpg',
      lu: 'En una sucesión, compara cada número con el anterior: ¿cuánto aumenta o disminuye? Esa es la regla.',
      qs: [
        { t: 'prob', q: 'Tito ahorra para una cámara de fotos. La primera semana guarda S/ 3, la segunda S/ 5, la tercera S/ 7, y sigue así. ¿Cuánto guardará la sexta semana? ¿Cuánto habrá ahorrado en total en las 6 semanas?', scaffold: true, a: 'La regla es +2: 3, 5, 7, 9, 11, 13. La sexta semana guarda S/ 13. Total: 3 + 5 + 7 + 9 + 11 + 13 = S/ 48.' },
        { t: 'open', q: 'Completa la sucesión y escribe su regla: 64, 32, 16, ___, ___', lines: 1, a: '8 y 4. La regla es «la mitad» (dividir entre 2).' },
        { t: 'open', q: '¿Qué número sigue? 3, 6, 5, 8, 7, 10, ___ ¿Cómo lo pensaste? (Pista: la regla tiene dos pasos).', lines: 1, a: '9. La regla es «sumo 3 y resto 1», una y otra vez: 10 − 1 = 9.' },
      ],
      tip: 'Jueguen a «adivina mi regla»: tú dices 3 números (por ejemplo 4, 7, 10) y él descubre la regla y continúa la sucesión. Luego cambian los papeles.',
    },
    {
      title: 'El picnic del bosque', skill: 'Pistas de detective', art: '🧺',
      lu: 'Lee una pista a la vez y descarta lo que no puede ser. Una tabla con ✓ y ✗ te ayuda a ordenar las pistas.',
      qs: [
        { t: 'prob', q: 'Tito, Pipa y Coco llevaron al picnic pan, fruta y queso, una cosa cada uno. Coco no llevó queso (¡aunque le encanta!). Pipa no llevó pan ni queso. ¿Qué llevó cada uno?', scaffold: true, a: 'Pipa llevó fruta (no llevó pan ni queso). Coco no llevó queso ni fruta, así que llevó pan. Tito llevó queso.' },
        { t: 'prob', q: 'Pienso un número. Le sumo 8 y al resultado lo multiplico por 2. Me sale 30. ¿Qué número pensé? ¿Cómo lo descubriste?', a: 'Hago todo al revés: 30 ÷ 2 = 15; 15 − 8 = 7. Pensé el 7 (7 + 8 = 15; 15 × 2 = 30).' },
        { t: 'choice', q: 'En una fila, Mateo está delante de Killa y Renata está detrás de Killa. ¿Quién está en el medio?', o: ['Mateo', 'Killa', 'Renata'], a: 1 },
      ],
      tip: 'Para los acertijos, una tabla con ✓ y ✗ es la mejor herramienta. Dibújala con él la primera vez y después deja que la use solo.',
    },
    {
      title: 'Los errores de Tito', skill: 'Encuentro el error', img: 'lu-lupa.jpg',
      lu: 'Revisar el trabajo de otro es un gran entrenamiento: busca qué hizo bien, dónde se equivocó y por qué.',
      qs: [
        { t: 'prob', q: 'Tito escribió en el periódico: «La biblioteca del bosque tiene 4 estantes con 25 libros cada uno. Esta semana prestaron 30 libros. Quedan 130 libros». ¿En qué se equivocó Tito? Resuelve el problema bien.', scaffold: true, a: 'Tito sumó los 30 libros en vez de restarlos. 4 × 25 = 100; 100 − 30 = 70. Quedan 70 libros.' },
        { t: 'open', q: 'Tito escribió que 45 ÷ 5 = 8. ¿Cómo compruebas con una multiplicación que está mal? ¿Cuál es la respuesta correcta?', lines: 2, a: '8 × 5 = 40, no 45. La respuesta correcta es 9, porque 9 × 5 = 45.' },
        { t: 'tf', q: 'Revisa otras frases de Tito. Marca V o F.', items: [['La mitad de 50 es 25.', true], ['Un cuarto de hora son 25 minutos.', false], ['El doble de 35 es 70.', true]] },
      ],
      tip: 'Cuando él se equivoque, haz como con Tito: «¿dónde crees que está el error?». Buscar el error sin miedo es una de las habilidades más valiosas en matemática.',
    },
    {
      title: 'La juguería del mercado', skill: 'Pruebo y ajusto', art: '🥤',
      lu: 'Si no sabes por dónde empezar, prueba con un número. Revisa si te pasaste o te faltó, y ajusta tu prueba.',
      qs: [
        { t: 'prob', q: 'En la juguería, los jugos cuestan S/ 4 y los sánguches, S/ 3. Mateo compró 5 cosas en total y pagó S/ 17. ¿Cuántos jugos y cuántos sánguches compró?', scaffold: true, a: 'Pruebo: 1 jugo y 4 sánguches = 4 + 12 = 16 (falta). 2 jugos y 3 sánguches = 8 + 9 = 17 ✓. Compró 2 jugos y 3 sánguches.' },
        { t: 'prob', q: 'Yaku y su hermana Killa tienen juntos 20 canicas. Yaku tiene 4 más que Killa. ¿Cuántas canicas tiene cada uno?', a: 'Pruebo: 10 y 10 (diferencia 0); 11 y 9 (diferencia 2); 12 y 8 (diferencia 4) ✓. Yaku tiene 12 y Killa, 8.' },
        { t: 'prob', q: 'En un corral hay gallinas y cuyes. Yaku contó 5 cabezas y 14 patas. ¿Cuántas gallinas y cuántos cuyes hay? Dibújalos para probar.', a: 'Hay 3 gallinas y 2 cuyes: 3 × 2 = 6 patas; 2 × 4 = 8 patas; 6 + 8 = 14 patas.' },
      ],
      tip: 'Anímalo a hacer una lista ordenada de pruebas (1 jugo, 2 jugos, 3 jugos…). Probar así no es adivinar: es un método que usan también los matemáticos.',
    },
    {
      title: 'Dos caminos, una respuesta', skill: 'Explico mi estrategia', img: 'lu-piensa.jpg',
      lu: 'Un mismo problema se puede resolver de varias formas. Lo importante es que puedas explicar la tuya.',
      qs: [
        { t: 'prob', q: 'En el mercado, mamá compra 3 kilos de papa a S/ 4 el kilo y 3 kilos de camote a S/ 3 el kilo. ¿Cuánto paga en total? Resuélvelo a tu manera.', scaffold: true, a: '3 × 4 = 12; 3 × 3 = 9; 12 + 9 = 21. Paga S/ 21. (Otra forma: 4 + 3 = 7; 3 × 7 = 21).' },
        { t: 'choice', q: 'Valentina lo resolvió así: «4 + 3 = 7 y 7 × 3 = 21». ¿Está bien su forma?', o: ['Sí: 1 kilo de papa y 1 de camote cuestan S/ 7, y compra 3 de cada uno', 'No: siempre hay que multiplicar primero', 'No: le tenía que salir otro número'], a: 0 },
        { t: 'open', q: '¿Cuál de las dos formas te parece más fácil? ¿Por qué?', lines: 2, a: 'Respuesta libre, con una razón. Por ejemplo: «la de Valentina, porque hago menos cuentas».' },
        { t: 'say', q: 'Explícale a alguien de tu familia, paso a paso, cómo resolviste el problema del mercado.', a: 'Respuesta libre, en voz alta.' },
      ],
      tip: 'Cuando resuelva un problema, pídele que te lo explique como si fuera el profesor. Explicar en voz alta ordena el pensamiento y deja ver dónde se confunde.',
    },
  ],
};
