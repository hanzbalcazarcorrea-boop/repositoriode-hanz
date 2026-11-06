// Súper Mate · 6-7 años · Nivel 3 (Súper mate): hasta 1000, tablas del 2, 5 y 10, repartir, cm y m, dos pasos con soles, pictogramas, problemas al revés y acertijos.
const picto = (fruta, n) => `<div style="display:flex;align-items:center;gap:2mm"><b style="width:23mm">${fruta}</b><span class="emoji" style="font-size:13pt;letter-spacing:.6mm">${'⭐'.repeat(n)}</span></div>`;

module.exports = {
  age: '6 a 7 años',
  slug: '6-7-anos',
  mode: 'basic',
  retos: [
    {
      title: 'Las botellas del colegio', skill: 'Números hasta 1000', art: '♻️',
      lu: 'Piensa en centenas, decenas y unidades: 350 son 3 centenas y 5 decenas. Suma primero las centenas.',
      qs: [
        { t: 'prob', q: 'El colegio de Yaku recicla botellas. En marzo juntaron 350 botellas y en abril, 420. ¿Cuántas botellas juntaron en los dos meses?', scaffold: true, a: '350 + 420 = 770. Juntaron 770 botellas.' },
        { t: 'prob', q: 'La meta del colegio es juntar 1000 botellas. ¿Cuántas botellas les faltan?', a: '1000 − 770 = 230 (770 + 30 = 800 y 800 + 200 = 1000). Les faltan 230 botellas.' },
        { t: 'open', q: '¿Cómo lo pensaste? Explica cómo encontraste cuántas botellas faltan.', lines: 2, a: 'Ejemplo: conté desde 770; hasta 800 son 30 y hasta 1000 son 200 más. 30 + 200 = 230.' },
      ],
      tip: 'Pídele que te explique su camino en voz alta, aunque la respuesta esté bien. Contar hacia adelante (770, 800, 1000) es una estrategia excelente: celébrala.',
    },
    {
      title: 'Zapatillas y estrellas', skill: 'Tablas del 2 y del 5', art: '👟',
      lu: 'Contar de 2 en 2 o de 5 en 5 es más rápido que contar de uno en uno. ¡Eso es multiplicar!',
      qs: [
        { t: 'prob', q: 'Después del partido, en la puerta de la casa de Killa hay 7 pares de zapatillas. ¿Cuántas zapatillas hay en total?', scaffold: true, a: '7 × 2 = 14 (2, 4, 6, 8, 10, 12, 14). Hay 14 zapatillas.' },
        { t: 'choice', q: 'Cuenta de 5 en 5: 5, 10, 15, 20… ¿Qué número sigue?', o: ['21', '25', '30'], a: 1 },
        { t: 'prob', q: 'Cada estrella de papel tiene 5 puntas. Renata hizo 6 estrellas. ¿Cuántas puntas hay en total?', a: '6 × 5 = 30 (5, 10, 15, 20, 25, 30). Hay 30 puntas.' },
        { t: 'open', q: '¿Cómo lo sabes? Explica cómo contaste las puntas.', lines: 1, a: 'Ejemplo: conté de 5 en 5, una vez por cada estrella: 5, 10, 15, 20, 25, 30.' },
      ],
      tip: 'Cuenten de 2 en 2 al subir escaleras y de 5 en 5 con los dedos de las manos de la familia. Decir los saltos en voz alta prepara las tablas sin memorizar a la fuerza.',
    },
    {
      title: 'Las piedritas de Pipa', skill: 'Tabla del 10', img: 'pipa.jpg',
      lu: 'Contar de 10 en 10 es contar decenas: 10, 20, 30… Así, 6 grupos de 10 son 60.',
      qs: [
        { t: 'prob', q: 'Pipa guarda las piedritas de colores que encuentra en bolsitas de 10. Llenó 9 bolsitas y le sobraron 4 piedritas sueltas. ¿Cuántas piedritas encontró?', scaffold: true, a: '9 × 10 = 90; 90 + 4 = 94. Encontró 94 piedritas.' },
        { t: 'prob', q: 'En el salón hay 6 cajas de crayolas. Cada caja trae 10 crayolas. ¿Cuántas crayolas hay?', a: '6 × 10 = 60. Hay 60 crayolas.' },
        { t: 'tf', q: 'Marca V o F.', items: [['Con 7 billetes de S/ 10 tengo S/ 70.', true], ['10 × 5 = 15', false]] },
        { t: 'open', q: '¿Por qué 10 × 5 no es 15? Explícalo.', lines: 1, a: '10 × 5 es 5 veces 10: 10, 20, 30, 40, 50. Da 50. El 15 sale de sumar 10 + 5, que es otra cosa.' },
      ],
      tip: 'Junten palitos de chupete en atados de 10 con una liga. Contar los atados («10, 20, 30…») y luego los sueltos le hace ver qué significa cada cifra.',
    },
    {
      title: 'Los tamales de la abuela', skill: 'Reparto en partes iguales', art: '🧺',
      lu: 'Repartir en partes iguales es dar a cada uno lo mismo. Ve dando de uno en uno, como cuando se reparten cartas, hasta que no quede nada.',
      qs: [
        { t: 'prob', q: 'La abuela Carmen preparó 12 tamales y los reparte en partes iguales entre sus 4 nietos. ¿Cuántos tamales le tocan a cada nieto?', scaffold: true, a: '12 ÷ 4 = 3 (3 + 3 + 3 + 3 = 12). A cada nieto le tocan 3 tamales.' },
        { t: 'prob', q: 'Coco, Tito y Pipa se reparten 15 quesitos en partes iguales. ¿Cuántos quesitos recibe cada uno?', a: '15 ÷ 3 = 5 (5 + 5 + 5 = 15). Cada uno recibe 5 quesitos.' },
        { t: 'open', q: 'Si los 15 quesitos se repartieran entre 5 amigos, ¿a cada uno le tocarían más o menos de 5? ¿Cómo lo sabes?', lines: 2, a: 'Menos: les tocarían 3 a cada uno (3 + 3 + 3 + 3 + 3 = 15). Si hay más amigos, a cada uno le toca menos.' },
      ],
      tip: 'Den a repartir algo real (uvas, galletas) entre sus peluches: «uno para ti, uno para ti…». Luego pregunta: «¿y si llega otro peluche?». Así descubre que con más personas, a cada uno le toca menos.',
    },
    {
      title: 'La cinta de Camila', skill: 'Centímetros y metros', art: '📏',
      lu: 'Un metro tiene 100 centímetros. Las cosas chicas se miden en centímetros (cm) y las largas, como un patio, en metros (m).',
      qs: [
        { t: 'prob', q: 'Camila tiene una cinta de 1 metro. Corta 35 cm para adornar su trenza. ¿Cuántos centímetros de cinta le quedan?', scaffold: true, a: '1 m = 100 cm; 100 − 35 = 65. Le quedan 65 cm de cinta.' },
        { t: 'choice', q: '¿Qué medirías en metros?', o: ['el largo de un lápiz', 'el largo del patio del colegio', 'el ancho de una galleta'], a: 1 },
        { t: 'prob', q: 'En un juego, Pipa avanza 20 cm en cada turno. ¿Cuántos centímetros avanza en 5 turnos?', a: '5 × 20 = 100 (20 + 20 + 20 + 20 + 20). Avanza 100 cm.' },
        { t: 'open', q: '¿Llegó Pipa a 1 metro? ¿Cómo lo sabes?', lines: 1, a: 'Sí, justo: avanzó 100 cm y 1 metro tiene 100 cm.' },
      ],
      tip: 'Mídanse con una cinta métrica: su altura, su cama, un zapato. Antes de medir, pregunta: «¿medirá más o menos de 1 metro?». Estimar y comprobar entrena el sentido de la medida.',
    },
    {
      title: 'Compras en el mercado', skill: 'Dos pasos con soles', art: '🥑',
      lu: 'Primero averigua lo que necesitas saber (¿cuánto gastó?). Con esa respuesta, resuelve la pregunta final.',
      qs: [
        { t: 'prob', q: 'Mateo compra en el mercado 6 paltas a S/ 2 cada una y un kilo de limones a S/ 3. ¿Cuánto gasta en total?', scaffold: true, a: '6 × 2 = 12; 12 + 3 = 15. Gasta S/ 15.' },
        { t: 'prob', q: 'Mateo paga con un billete de S/ 20. ¿Cuánto le dan de vuelto?', a: '20 − 15 = 5. Le dan S/ 5 de vuelto.' },
        { t: 'prob', q: 'Thiago tiene S/ 30 y quiere una mochila de S/ 45. Si ahorra S/ 5 cada semana, ¿en cuántas semanas podrá comprarla?', a: '45 − 30 = 15; 5 + 5 + 5 = 15. Podrá comprarla en 3 semanas.' },
      ],
      tip: 'En el mercado, dile el precio de una fruta y pregúntale cuánto costarán 3 o 4. Luego, que calcule el vuelto antes de pagar: son dos pasos de la vida real.',
    },
    {
      title: 'La fruta favorita', skill: 'Leo un pictograma', art: '📊',
      lu: 'En un pictograma, mira siempre la clave: ¿cuánto vale cada dibujo? ¡A veces un dibujo vale más de uno!',
      intro: `<div style="display:flex;justify-content:space-between;align-items:baseline;margin-bottom:1.5mm"><b>¿Qué fruta prefieren los niños de 2.º grado?</b><span style="background:#fff;border-radius:2mm;padding:.5mm 2.5mm;font-weight:700">Clave: <span class="emoji">⭐</span> = 2 niños</span></div><div style="display:grid;grid-template-columns:1fr 1fr;gap:1.2mm 6mm">${picto('Mango', 5)}${picto('Granadilla', 4)}${picto('Plátano', 3)}${picto('Fresa', 2)}</div>`,
      qs: [
        { t: 'open', q: '¿Qué fruta eligieron más niños? ¿Cuántos niños fueron?', lines: 1, a: 'El mango: 5 estrellas, 5 × 2 = 10 niños.' },
        { t: 'prob', q: '¿Cuántos niños votaron en total?', scaffold: true, a: 'Mango 10, granadilla 8, plátano 6 y fresa 4; 10 + 8 + 6 + 4 = 28. Votaron 28 niños.' },
        { t: 'open', q: 'Tito dice: «Al plátano lo eligieron 3 niños, porque tiene 3 estrellas». ¿Tiene razón? ¿Cómo lo sabes?', lines: 2, a: 'No. Cada estrella vale 2 niños: 2 + 2 + 2 = 6. Al plátano lo eligieron 6 niños.' },
      ],
      tip: 'Hagan una encuesta en la familia («¿qué postre prefieren?») y dibujen el pictograma juntos. Si ya cuenta bien de uno en uno, prueben que cada dibujo valga 2.',
    },
    {
      title: 'El concurso de marinera', skill: '¿Quién tiene razón?', img: 'tito.jpg',
      lu: 'Para saber quién tiene razón, resuelve tú primero. Luego busca el error: ¿eligió mal la operación o se equivocó en la cuenta?',
      qs: [
        { t: 'prob', q: 'Al concurso de marinera llegaron 245 personas en la mañana y 130 personas más en la tarde. ¿Cuántas personas fueron al concurso?', scaffold: true, a: '245 + 130 = 375. Fueron 375 personas.' },
        { t: 'choice', q: 'Tito dice que fueron 375 personas. Coco dice que fueron 115. ¿Quién tiene razón?', o: ['Tito', 'Coco', 'ninguno de los dos'], a: 0 },
        { t: 'tf', q: 'Marca V o F.', items: [['Si en la tarde llegaron más personas, al final debe haber más de 245.', true], ['La respuesta 115 tiene sentido.', false]] },
        { t: 'open', q: '¿Qué error cometió el otro? Explícale cómo hacerlo bien.', lines: 2, a: 'Coco restó (245 − 130 = 115), pero en la tarde llegaron más personas: había que sumar. 245 + 130 = 375.' },
      ],
      tip: 'Equivócate a propósito y deja que él descubra el error. Pregúntale «¿cómo lo sabes?» y escucha toda su explicación antes de corregir.',
    },
    {
      title: 'La pulsera de Valentina', skill: 'El número escondido', img: 'lu-lupa.jpg',
      lu: 'Si no sabes cómo empezó la historia, piensa al revés: si se agregó algo, quítalo; si se quitó algo, devuélvelo.',
      qs: [
        { t: 'prob', q: 'Valentina tenía algunas bolitas para su pulsera. Su tía le regaló 15 bolitas y ahora tiene 40. ¿Cuántas bolitas tenía antes?', scaffold: true, a: '40 − 15 = 25. Tenía 25 bolitas. (Compruebo: 25 + 15 = 40).' },
        { t: 'choice', q: 'Lu pensó un número. Le sumó 10 y le dio 32. ¿Qué número pensó?', o: ['22', '42', '32'], a: 0 },
        { t: 'prob', q: 'En una fila había algunos niños. Se fueron 8 y quedaron 12. ¿Cuántos niños había al principio?', a: '12 + 8 = 20. Al principio había 20 niños.' },
        { t: 'open', q: '¿Cómo puedes comprobar tu respuesta de la fila?', lines: 1, a: 'Hago la historia otra vez con mi respuesta: si había 20 y se fueron 8, quedan 12 (20 − 8 = 12). ¡Coincide!' },
      ],
      tip: 'Los problemas «al revés» son de los más difíciles a esta edad. Si se traba, actúenlo con monedas: esconde algunas en tu mano, agrega otras y que descubra cuántas había al principio.',
    },
    {
      title: 'Los acertijos de Lu', skill: 'Acertijos de lógica', img: 'lu-trofeo.jpg',
      lu: 'En un acertijo, cada pista ayuda. Léelas una por una y descarta lo que no puede ser.',
      qs: [
        { t: 'prob', q: 'En el parque hay 3 bicicletas y 4 triciclos. ¿Cuántas ruedas hay en total?', scaffold: true, a: '3 × 2 = 6 ruedas de bicicleta; 4 × 3 = 12 ruedas de triciclo; 6 + 12 = 18. Hay 18 ruedas.' },
        { t: 'choice', q: 'Killa es más alta que Renata. Renata es más alta que Thiago. ¿Quién es el más bajo?', o: ['Killa', 'Renata', 'Thiago'], a: 2 },
        { t: 'choice', q: 'Pipa está en una fila. Delante de ella hay 3 animalitos y detrás hay 2. ¿Cuántos animalitos hay en la fila, contando a Pipa?', o: ['5', '6', '7'], a: 1 },
        { t: 'open', q: 'Soy un número mayor que 10 y menor que 20. Estoy en la cuenta de 5 en 5. ¿Qué número soy? ¿Cómo lo supiste?', lines: 2, a: 'El 15. De 5 en 5 se cuenta 5, 10, 15, 20: el único mayor que 10 y menor que 20 es el 15.' },
      ],
      tip: 'Inventen acertijos en familia a la hora de la comida («soy un número…»). Pídele que explique cómo descartó opciones: ese razonamiento es lo más valioso del cuaderno.',
    },
  ],
};
