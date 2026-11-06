// Súper Mate · 6-7 años · Nivel 2 (Vuelo): números hasta 500, dos pasos, ¿cuántos faltan?, grupos iguales, mitades, vuelto, hora y tablas.
module.exports = {
  age: '6 a 7 años',
  slug: '6-7-anos',
  mode: 'basic',
  retos: [
    {
      title: 'El rompecabezas de Camila', skill: '¿Cuántos faltan?', art: '🧩',
      lu: '«¿Cuántos faltan?» quiere decir: ¿cuánto me falta para llegar a la meta? Puedes contar desde lo que tienes hasta la meta.',
      qs: [
        { t: 'prob', q: 'Camila arma un rompecabezas de 100 piezas. Ya puso 70 piezas. ¿Cuántas piezas le faltan para terminarlo?', scaffold: true, a: '100 − 70 = 30 (70, 80, 90, 100). Le faltan 30 piezas.' },
        { t: 'prob', q: 'Pipa quiere llegar al río, que está a 50 pasos. Ya caminó 32 pasos. ¿Cuántos pasos le faltan?', a: '50 − 32 = 18 (o 32 + 18 = 50). Le faltan 18 pasos.' },
        { t: 'choice', q: 'Yaku tiene 6 años. ¿Cuántos años le faltan para cumplir 10?', o: ['4 años', '6 años', '16 años'], a: 0 },
      ],
      tip: 'Para «¿cuántos faltan?» funciona contar hacia adelante: «tengo 70… 80, 90, 100: ¡faltan 30!». Practiquen en la mesa: «hay 6 platos y somos 9, ¿cuántos faltan?».',
    },
    {
      title: 'La kermés del colegio', skill: 'Números hasta 500', art: '🎪',
      lu: 'Con números grandes, suma primero las centenas y después las decenas: 200 + 100 = 300 y 300 + 50 = 350.',
      qs: [
        { t: 'prob', q: 'En la kermés del colegio vendieron 200 anticuchos el sábado y 150 anticuchos el domingo. ¿Cuántos anticuchos vendieron en total?', scaffold: true, a: '200 + 150 = 350. Vendieron 350 anticuchos.' },
        { t: 'prob', q: 'Prepararon 300 vasos de chicha morada y vendieron 120. ¿Cuántos vasos quedaron?', a: '300 − 120 = 180. Quedaron 180 vasos.' },
        { t: 'match', q: 'Une cada número con su nombre.', left: ['250', '405', '500'], right: ['quinientos', 'doscientos cincuenta', 'cuatrocientos cinco'], a: [2, 3, 1] },
      ],
      tip: 'Armen números grandes con billetes de juguete de S/ 100 y S/ 10: 350 son tres billetes de 100 y cinco de 10. Ver las centenas y las decenas ayuda muchísimo.',
    },
    {
      title: 'La fiesta de Renata', skill: 'Problemas de dos pasos', art: '🥟',
      lu: 'Algunos problemas esconden dos preguntas. Resuelve primero la que está escondida y con esa respuesta, la pregunta final.',
      qs: [
        { t: 'prob', q: 'Renata y su mamá hornearon 20 empanadas en la mañana y 12 en la tarde. En la fiesta se comieron 25. ¿Cuántas empanadas sobraron?', scaffold: true, a: '20 + 12 = 32; 32 − 25 = 7. Sobraron 7 empanadas.' },
        { t: 'choice', q: '¿Qué tuviste que averiguar primero?', o: ['cuántas empanadas hornearon en total', 'cuántas empanadas se comieron', 'cuántos invitados llegaron'], a: 0 },
        { t: 'prob', q: 'Coco tenía 14 pedacitos de queso. Tito le regaló 6 más y luego Coco se comió 9. ¿Cuántos pedacitos le quedan?', a: '14 + 6 = 20; 20 − 9 = 11. Le quedan 11 pedacitos.' },
      ],
      tip: 'Pídele que te cuente qué pasó primero y qué pasó después, como en un cuento. Cada parte del cuento es una cuenta.',
    },
    {
      title: 'El puesto de flores', skill: 'Grupos iguales', art: '💐',
      lu: '«En cada», «cada uno» y «grupos de» te avisan que hay grupos iguales. Puedes sumar el mismo número varias veces.',
      qs: [
        { t: 'prob', q: 'En el mercado, la señora Dora arma ramos de 5 rosas. Hoy armó 4 ramos. ¿Cuántas rosas usó?', scaffold: true, a: '5 + 5 + 5 + 5 = 20 (4 veces 5). Usó 20 rosas.' },
        { t: 'count', q: 'Hay 3 floreros y en cada uno hay 3 flores. ¿Cuántas flores hay en total?', rows: ['🌷🌷🌷', '🌷🌷🌷', '🌷🌷🌷'], op: '+', o: [6, 9, 12], a: 9 },
        { t: 'choice', q: '¿Qué suma muestra «3 grupos de 4»?', o: ['3 + 4', '4 + 4 + 4', '3 + 3 + 3'], a: 1 },
        { t: 'choice', q: 'Thiago dice: «5 + 5 + 5 es lo mismo que 3 veces 5». ¿Tiene razón?', o: ['sí', 'no'], a: 0 },
      ],
      tip: 'Armen grupos iguales con frejoles o tapitas y díganlo así: «4 grupos de 5», «4 veces 5». Es la puerta de entrada a la multiplicación, sin apuro por memorizar tablas.',
    },
    {
      title: 'Mitad para ti, mitad para mí', skill: 'La mitad', art: '⚖️',
      lu: 'La mitad es partir en 2 partes iguales. Si una parte es más grande que la otra, ¡no son mitades!',
      qs: [
        { t: 'prob', q: 'Yaku tiene 16 canicas y le da la mitad a su hermana Killa. ¿Cuántas canicas le da?', scaffold: true, a: '8 + 8 = 16, así que la mitad de 16 es 8. Le da 8 canicas.' },
        { t: 'tf', q: 'Marca V o F.', items: [['La mitad de 10 es 5.', true], ['Si parto una pizza en un pedazo grande y uno chico, cada pedazo es la mitad.', false], ['La mitad de 20 es 10.', true]] },
        { t: 'prob', q: 'En el salón de Thiago hay 24 niños. La mitad va al taller de música. ¿Cuántos niños van al taller?', a: '12 + 12 = 24, así que la mitad de 24 es 12. Van 12 niños.' },
      ],
      tip: 'En la cocina, partan un pan, una manzana o un queque en dos partes. Pregunta: «¿cómo sabemos que son mitades?». Así descubre que las dos partes deben ser iguales.',
    },
    {
      title: 'La bodega de don Lucho', skill: 'Calculo el vuelto', art: '🏪',
      lu: 'El vuelto es el dinero que te devuelven. Se resta: lo que pagaste menos lo que costó.',
      qs: [
        { t: 'prob', q: 'Thiago compra una bolsa de arroz de S/ 6 en la bodega de don Lucho. Paga con un billete de S/ 20. ¿Cuánto le dan de vuelto?', scaffold: true, a: '20 − 6 = 14. Le dan S/ 14 de vuelto.' },
        { t: 'prob', q: 'Killa compra una pelota de S/ 12 y un yoyo de S/ 5. Paga con un billete de S/ 20. ¿Cuánto le dan de vuelto?', a: '12 + 5 = 17; 20 − 17 = 3. Le dan S/ 3 de vuelto.' },
        { t: 'choice', q: 'Don Lucho le dio a Thiago S/ 15 de vuelto en lugar de S/ 14. ¿Qué pasó?', o: ['le dio S/ 1 de más', 'le dio S/ 1 de menos', 'le dio el vuelto justo'], a: 0 },
      ],
      tip: 'Cuando vayan a la bodega, deja que pague él y que calcule el vuelto antes de recibirlo. Después cuenten juntos las monedas para comprobar.',
    },
    {
      title: 'Natación y tarea', skill: 'En punto y media hora', img: 'lu-reloj.jpg',
      lu: 'Cuando la aguja larga señala el 12, es la hora en punto. Cuando señala el 6, es «y media». Media hora son 30 minutos.',
      qs: [
        { t: 'prob', q: 'La clase de natación de Valentina empieza a las 4 y media de la tarde y dura 1 hora. ¿A qué hora termina?', scaffold: true, a: '4:30 + 1 hora = 5:30. Termina a las 5 y media.' },
        { t: 'match', q: 'Une cada hora con su nombre.', left: ['7:00', '7:30', '9:30'], right: ['las nueve y media', 'las siete en punto', 'las siete y media'], a: [2, 3, 1] },
        { t: 'prob', q: 'Mateo empieza su tarea a las 6 en punto y trabaja media hora. ¿A qué hora termina?', a: '6:00 + 30 minutos = 6:30. Termina a las 6 y media.' },
      ],
      tip: 'Usen un reloj de agujas o uno hecho con un plato de cartón. Mueve la aguja larga del 12 al 6 y que diga la hora en voz alta: «las 4 en punto… las 4 y media».',
    },
    {
      title: 'La chacra de los Quispe', skill: 'Leo una tabla', art: '🐓',
      lu: 'Lee primero el título de la tabla: te dice de qué trata. Luego busca la columna del animal que necesitas.',
      intro: '<b>Animales de la chacra de la familia Quispe</b><table class="t" style="margin-top:2mm"><tr><th>Animal</th><th>Gallinas</th><th>Cuyes</th><th>Patos</th><th>Ovejas</th></tr><tr><td><b>Cuántos hay</b></td><td>18</td><td>25</td><td>9</td><td>12</td></tr></table>',
      qs: [
        { t: 'open', q: '¿Qué animal hay en mayor cantidad? ¿Cuántos son?', lines: 1, a: 'Los cuyes: hay 25.' },
        { t: 'prob', q: '¿Cuántas gallinas y patos hay en total?', scaffold: true, a: '18 + 9 = 27. Hay 27 entre gallinas y patos.' },
        { t: 'prob', q: '¿Cuántos cuyes más que ovejas hay en la chacra?', a: '25 − 12 = 13. Hay 13 cuyes más que ovejas.' },
      ],
      tip: 'Armen juntos una tabla con cosas de la casa: cuántos platos, vasos y cucharas hay. Hacer la tabla con sus propias manos le enseña a leerlas.',
    },
    {
      title: 'El huerto del colegio', skill: '¿Sumo o resto?', art: '🌱',
      lu: 'La palabra «más» no siempre quiere decir sumar. Imagina la historia como una película: ¿se junta, se quita o se compara?',
      qs: [
        { t: 'prob', q: 'En el huerto del colegio había 34 plantas de lechuga. Los niños sembraron 15 más. ¿Cuántas plantas de lechuga hay ahora?', scaffold: true, a: '34 + 15 = 49. Hay 49 plantas de lechuga.' },
        { t: 'choice', q: '«Había 40 semillas y sembraron 25. ¿Cuántas semillas quedan?» ¿Qué operación usas?', o: ['40 + 25', '40 − 25'], a: 1 },
        { t: 'prob', q: 'Los niños cosecharon 28 rabanitos el lunes y 17 el viernes. ¿Cuántos rabanitos más cosecharon el lunes?', a: '28 − 17 = 11. El lunes cosecharon 11 rabanitos más.' },
      ],
      tip: 'Antes de la cuenta, pregúntale: «¿la respuesta será más grande o más chica que los números del problema?». Así elige la operación pensando y no adivinando.',
    },
    {
      title: 'Problemas sin pregunta', skill: 'Le falta la pregunta', img: 'pipa.jpg',
      lu: 'Un problema sin pregunta es como un cuento sin final. ¡Tú puedes inventar la pregunta y luego responderla!',
      qs: [
        { t: 'open', q: 'Lee: «Pipa recogió 23 hojas en el bosque y Tito recogió 14». Escribe una pregunta para este problema.', lines: 2, a: 'Ejemplo: ¿Cuántas hojas recogieron entre los dos? o ¿Cuántas hojas más recogió Pipa que Tito?' },
        { t: 'prob', q: 'Ahora resuelve tu pregunta. Pipa recogió 23 hojas y Tito recogió 14.', scaffold: true, a: 'Depende de la pregunta. Entre los dos: 23 + 14 = 37 hojas. Cuántas más recogió Pipa: 23 − 14 = 9 hojas.' },
        { t: 'choice', q: '«Mamá compró 3 kilos de papa y 2 kilos de camote». ¿Qué pregunta sí se puede responder con estos datos?', o: ['¿Cuántos kilos compró en total?', '¿Cuánto dinero pagó?', '¿A qué hora fue al mercado?'], a: 0 },
      ],
      tip: 'Jueguen a «yo cuento, tú preguntas»: describe una situación con números («en la mesa hay 5 tazas y 3 platos») y que invente todas las preguntas que se le ocurran.',
    },
  ],
};
