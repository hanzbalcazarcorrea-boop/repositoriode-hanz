// Prueba de nivel Lunori: 6 preguntas de lectura y 6 de matemática por edad.
// d = dificultad (1 ★ · 2 ★★ · 3 ★★★): dos preguntas de cada nivel, de la más fácil a la más difícil.
module.exports = [
  {
    age: '5 años', slug: '5-anos', mode: 'pre',
    lectura: {
      title: 'El paseo de Pipa', img: 'pipa.jpg',
      text: ['Pipa sale a pasear con su mochila roja. En el camino ve nubes grises y escucha un trueno: ¡pum!', 'Pipa abre su paraguas y camina más rápido. Cuando llega a la casa de Lu, se sacude las gotas.', 'Lu le sirve una taza de leche calientita. —¡Qué bueno que trajiste tu paraguas! —le dice Lu.'],
      qs: [
        { d: 1, t: 'pic', q: '¿Qué llevaba Pipa?', o: [['🎒', 'mochila'], ['🧸', 'osito'], ['⚽', 'pelota']], a: 0 },
        { d: 1, t: 'pic', q: '¿A la casa de quién llegó?', o: [['🦉', 'Lu'], ['🐭', 'Tito'], ['🐶', 'Coco']], a: 0 },
        { d: 2, t: 'pic', q: '¿Qué hizo Pipa después de escuchar el trueno?', o: [['☂️', 'abrió su paraguas'], ['😴', 'se durmió'], ['🏊', 'se fue a nadar']], a: 0 },
        { d: 2, t: 'pic', q: '¿Por qué abrió su paraguas?', o: [['🌧️', 'empezó a llover'], ['☀️', 'hacía sol'], ['🌙', 'era de noche']], a: 0 },
        { d: 3, t: 'pic', q: '¿Por qué crees que Lu le dio leche calientita?', o: [['🥶', 'tenía frío y estaba mojada'], ['🎂', 'era su cumpleaños'], ['🍽️', 'era el almuerzo']], a: 0 },
        { d: 3, t: 'say', q: '¿Qué le habría pasado a Pipa sin su paraguas? (Vale si dice que se mojaba).', a: 'Se habría mojado (cualquier respuesta lógica).' },
      ],
    },
    mate: [
      { d: 1, t: 'count', q: '¿Cuántas manzanas hay?', rows: ['🍎🍎🍎🍎🍎'], o: [4, 5, 6], a: 5 },
      { d: 1, t: 'count', q: 'Tito tiene 2 quesos y le dan 1 más. ¿Cuántos tiene ahora?', rows: ['🧀🧀', '🧀'], op: '+', o: [2, 3, 4], a: 3 },
      { d: 2, t: 'count', q: 'Hay 7 globos. Se revientan 3. ¿Cuántos quedan?', rows: ['🎈🎈🎈🎈🎈🎈🎈'], o: [3, 4, 5], a: 4 },
      { d: 2, t: 'seq', q: '¿Qué sigue?', row: '🔺🟦🟡🔺🟦🟡🔺❓', o: [['🟦', 'cuadrado'], ['🟡', 'círculo'], ['🔺', 'triángulo']], a: 0 },
      { d: 3, t: 'count', q: 'En la mesa hay 4 platos y llegan 6 amigos. ¿Cuántos platos faltan?', rows: ['🍽️🍽️🍽️🍽️'], o: [1, 2, 3], a: 2 },
      { d: 3, t: 'count', q: 'Coco tiene 3 huesos. Pipa tiene el doble (lo mismo otra vez). ¿Cuántos tiene Pipa?', rows: ['🦴🦴🦴'], o: [3, 5, 6], a: 6 },
    ],
  },
  {
    age: '6 a 7 años', slug: '6-7-anos', mode: 'basic',
    lectura: {
      title: 'La huerta del colegio', art: '🌱',
      text: ['En el colegio de Mateo hay una huerta pequeña. El salón de Mateo sembró rabanitos, porque crecen rápido: en un mes ya se pueden cosechar. Cada día, un niño distinto riega las plantas.', 'Un lunes, Mateo encontró las hojas caídas y la tierra seca. —¿Quién debía regar el viernes? —preguntó la profesora. Camila bajó la mirada y se puso roja. —Perdón, me olvidé —dijo bajito.', 'Mateo le sonrió: —¡Hagamos un cartel con los turnos para que nadie se olvide! Esa misma tarde, después de regarlos, los rabanitos volvieron a levantar sus hojas.'],
      qs: [
        { d: 1, t: 'choice', q: '¿Qué sembró el salón de Mateo?', o: ['rabanitos', 'papas', 'flores'], a: 0 },
        { d: 1, t: 'choice', q: '¿Por qué eligieron rabanitos?', o: ['porque son rojos', 'porque crecen rápido', 'porque son baratos'], a: 1 },
        { d: 2, t: 'choice', q: '¿Quién se olvidó de regar?', o: ['Mateo', 'la profesora', 'Camila'], a: 2 },
        { d: 2, t: 'choice', q: '¿Cómo se sentía Camila?', o: ['orgullosa', 'avergonzada', 'aburrida'], a: 1 },
        { d: 3, t: 'open', q: '¿Qué quiere decir que los rabanitos «volvieron a levantar sus hojas»?', lines: 1, a: 'Que se recuperaron porque los regaron.' },
        { d: 3, t: 'open', q: '¿Fue buena la idea de Mateo? ¿Por qué?', lines: 1, a: 'Vale si da una razón lógica (así nadie se olvida de su turno).' },
      ],
    },
    mate: [
      { d: 1, q: 'Mateo tiene 14 canicas y gana 5 más. ¿Cuántas canicas tiene ahora?', a: '14 + 5 = 19 canicas.' },
      { d: 1, q: 'En la panadería había 25 panes y vendieron 10. ¿Cuántos panes quedan?', a: '25 − 10 = 15 panes.' },
      { d: 2, q: 'Camila tiene 8 stickers y quiere juntar 15. ¿Cuántos stickers le faltan?', a: '15 − 8 = 7 stickers.' },
      { d: 2, q: 'Compro un jugo de S/ 3 y un pan de S/ 1. Pago con S/ 10. ¿Cuánto me dan de vuelto?', a: '3 + 1 = 4; 10 − 4 = S/ 6.' },
      { d: 3, q: 'En el aula hay 4 mesas y en cada mesa hay 5 sillas. ¿Cuántas sillas hay?', a: '5 + 5 + 5 + 5 = 20 sillas (4 × 5).' },
      { d: 3, q: 'Lu tiene 30 libros. Tito tiene 10 libros menos que Lu. ¿Cuántos libros tienen entre los dos?', a: 'Tito: 30 − 10 = 20. Juntos: 30 + 20 = 50 libros.' },
    ],
  },
  {
    age: '8 a 9 años', slug: '8-9-anos', mode: 'mid',
    lectura: {
      title: 'La cometa de Gael', art: '🪁',
      text: ['Faltaba una semana para el concurso de cometas del barrio y Gael quería ganar. Pasó tardes enteras armando una cometa enorme, con papel brillante y una cola larguísima. Su abuelo lo miraba trabajar. —Está muy bonita —le dijo—, pero quizás es demasiado pesada. Gael no le hizo caso.', 'El día del concurso, el viento soplaba suave. Las cometas pequeñas de los demás niños subieron enseguida. La de Gael corrió, saltó… y cayó al pasto una y otra vez. Gael sintió un nudo en la garganta. Entonces recordó las palabras de su abuelo.', 'Con ayuda de su prima, recortó la cola y quitó dos capas de papel. La cometa, ahora más liviana, subió despacio hasta quedar como un punto brillante en el cielo. No ganó el primer lugar, pero el jurado le dio un premio especial: «a la mejor corrección en vuelo».'],
      qs: [
        { d: 1, t: 'choice', q: '¿Para qué preparaba Gael su cometa?', o: ['para un concurso del barrio', 'para regalársela a su abuelo', 'para venderla'], a: 0 },
        { d: 1, t: 'open', q: '¿Qué le advirtió su abuelo?', lines: 1, a: 'Que la cometa quizás era demasiado pesada.' },
        { d: 2, t: 'choice', q: '«Sintió un nudo en la garganta» quiere decir que…', o: ['tenía ganas de llorar', 'tenía tos', 'comió muy rápido'], a: 0 },
        { d: 2, t: 'choice', q: '¿Por qué la cometa no subía?', o: ['era muy pesada y el viento era suave', 'no tenía cola', 'Gael corrió muy lento'], a: 0 },
        { d: 3, t: 'open', q: '¿Qué aprendió Gael en esta historia?', lines: 1, a: 'A escuchar los consejos y a corregir sus errores sin rendirse.' },
        { d: 3, t: 'open', q: '¿Por qué crees que el jurado le dio un premio especial?', lines: 1, a: 'Porque supo arreglar su cometa en el momento y no se rindió.' },
      ],
    },
    mate: [
      { d: 1, q: 'Cada caja trae 6 huevos. ¿Cuántos huevos hay en 7 cajas?', a: '7 × 6 = 42 huevos.' },
      { d: 1, q: 'Se reparten 24 galletas entre 4 niños, en partes iguales. ¿Cuántas recibe cada uno?', a: '24 ÷ 4 = 6 galletas.' },
      { d: 2, q: 'Compro 3 cuadernos de S/ 5 cada uno y pago con S/ 20. ¿Cuánto me dan de vuelto?', a: '3 × 5 = 15; 20 − 15 = S/ 5.' },
      { d: 2, q: 'En cada bus entran 40 personas. ¿Cuántos buses se necesitan para 90 personas?', a: '90 ÷ 40 = 2 y sobran 10: se necesitan 3 buses.' },
      { d: 3, q: 'Una pizza tiene 8 tajadas. Ana comió 1/4 de la pizza y Luis comió la mitad. ¿Cuántas tajadas quedan?', a: 'Ana: 8 ÷ 4 = 2; Luis: 8 ÷ 2 = 4; 2 + 4 = 6; 8 − 6 = 2 tajadas.' },
      { d: 3, q: 'Un patio mide 6 m de largo y 4 m de ancho. Se cubre con losetas de 1 m², y cada loseta cuesta S/ 3. ¿Cuánto cuesta cubrirlo?', a: 'Área: 6 × 4 = 24 m²; 24 × 3 = S/ 72.' },
    ],
  },
  {
    age: '10 a 12 años', slug: '10-12-anos', mode: 'adv',
    lectura: {
      title: 'Las lomas: cerros que reverdecen', art: '🌼',
      text: ['En el invierno, cuando el cielo de Lima se pone gris, algunos cerros que pasan el verano secos y pelados se cubren de verde. Son las lomas costeras, ecosistemas que viven gracias a la neblina. Las gotitas de la neblina quedan atrapadas en las plantas y humedecen la tierra. Así crecen pastos y flores, como el amancae, y llegan aves, mariposas y caracoles.', 'Sin embargo, las lomas están en peligro. Muchas son invadidas para construir viviendas o se llenan de basura. Cuando se pierde una loma, se pierden plantas y animales que solo viven allí.', 'En mi opinión, visitar las lomas es el mejor paseo que una familia limeña puede hacer en invierno. Pero hay que hacerlo con respeto: sin salir de los senderos, sin arrancar flores y llevándose la basura de regreso. Si las conocemos, las vamos a querer; y si las queremos, las vamos a cuidar.'],
      qs: [
        { d: 1, t: 'open', q: '¿De dónde obtienen agua las plantas de las lomas?', lines: 1, a: 'De la neblina del invierno.' },
        { d: 1, t: 'open', q: '¿Qué peligros amenazan a las lomas?', lines: 1, a: 'Las invasiones para construir viviendas y la basura.' },
        { d: 2, t: 'choice', q: 'Por el contexto, un «ecosistema» es…', o: ['seres vivos y su ambiente', 'un tipo de flor', 'un cerro seco'], a: 0 },
        { d: 2, t: 'ho', q: 'Escribe H (hecho) u O (opinión).', items: [['Las lomas reverdecen gracias a la neblina.', 'H'], ['Visitar las lomas es el mejor paseo familiar.', 'O']] },
        { d: 3, t: 'choice', q: '¿Cuál es el propósito principal del autor?', o: ['informar y pedir cuidarlas', 'vender entradas', 'contar un cuento'], a: 0 },
        { d: 3, t: 'open', q: 'Explica con tus palabras la última oración. ¿Estás de acuerdo? ¿Por qué?', lines: 1, a: 'Conocer un lugar hace que lo valoremos y queramos protegerlo. Vale si explica y da una razón.' },
      ],
    },
    mate: [
      { d: 1, q: 'Un polo cuesta S/ 40 y tiene 25 % de descuento. ¿Cuánto se paga?', a: '25 % de 40 = 10; 40 − 10 = S/ 30.' },
      { d: 1, q: 'Bruno sacó 12, 16 y 17 en tres exámenes. ¿Cuál es su promedio?', a: '12 + 16 + 17 = 45; 45 ÷ 3 = 15.' },
      { d: 2, q: 'Para 3 personas se usan 2 tazas de arroz. ¿Cuántas tazas se necesitan para 12 personas?', a: '12 ÷ 3 = 4; 4 × 2 = 8 tazas.' },
      { d: 2, q: 'Nina ya recorrió 2/5 de un camino de 30 km. ¿Cuántos kilómetros le faltan?', a: '30 ÷ 5 = 6; 2 × 6 = 12 km recorridos; 30 − 12 = 18 km.' },
      { d: 3, q: 'Una mochila de S/ 80 sube 10 % y después baja 10 %. ¿Vuelve a costar S/ 80? Explica.', a: 'No: 80 + 8 = 88; 10 % de 88 = 8,80; 88 − 8,80 = S/ 79,20.' },
      { d: 3, q: 'Pienso un número, lo multiplico por 4 y le resto 6. Obtengo 30. ¿Qué número pensé?', a: '30 + 6 = 36; 36 ÷ 4 = 9. Pensé el 9.' },
    ],
  },
];
