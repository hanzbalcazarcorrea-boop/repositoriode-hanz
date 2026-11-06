// Súper Mate · 10-12 años · Nivel 2 (Vuelo): dos pasos, fracciones, porcentajes, razones, unidades, velocidad, volumen, media y mediana, decimales y tablas.
const td = 'padding:1.3mm 3mm';
const table = (head, rows) => `<table class="t" style="margin-top:2mm"><tr>${head.map((h) => `<th style="${td}">${h}</th>`).join('')}</tr>${rows.map((r) => `<tr>${r.map((c, i) => `<td style="${td}">${i ? c : `<b>${c}</b>`}</td>`).join('')}</tr>`).join('')}</table>`;

module.exports = {
  age: '10 a 12 años',
  slug: '10-12-anos',
  mode: 'adv',
  retos: [
    {
      title: 'La pregunta escondida', skill: 'Problemas de dos pasos', img: 'lu-lupa.jpg',
      lu: 'Muchos problemas esconden una pregunta en el medio. Antes de responder, pregúntate: ¿qué necesito saber primero?',
      qs: [
        { t: 'prob', q: 'El Club de Exploradores va a la feria de ciencias. La entrada cuesta S/ 8,50 por niño. Van 6 exploradores y Lu paga con un billete de S/ 100. ¿Cuánto recibe de vuelto?', scaffold: true, a: '6 × 8,50 = 51; 100 − 51 = 49. Lu recibe S/ 49 de vuelto.' },
        { t: 'open', q: '¿Cuál fue la «pregunta escondida» que tuviste que responder primero?', lines: 1, a: '¿Cuánto cuestan las 6 entradas? (S/ 51).' },
        { t: 'prob', q: 'En la feria, Bruno armó 3 robots iguales. Cada robot lleva 12 tornillos y 4 ruedas. Él compró una bolsa de 50 tornillos. ¿Cuántos tornillos le sobraron?', a: '3 × 12 = 36; 50 − 36 = 14. Le sobraron 14 tornillos. (El dato de las ruedas no se usa.)' },
        { t: 'choice', q: '«Nina tenía 120 hojas. Usó 35 en su cuaderno de campo y regaló 25. ¿Cuántas le quedan?». ¿Cuál es el camino correcto?', o: ['120 − 35 − 25 = 60', '120 − 35 + 25 = 110', '120 + 35 − 25 = 130'], a: 0 },
      ],
      tip: 'Cuando se trabe, pregúntale: «¿qué necesitas saber antes de poder responder?». Encontrar esa pregunta intermedia es la llave de los problemas de dos pasos.',
    },
    {
      title: 'El queque de Nina', skill: 'Sumar y restar fracciones', art: '🍰',
      lu: 'Para sumar o restar fracciones, primero haz que tengan el mismo denominador. Medios, cuartos y octavos se llevan muy bien.',
      qs: [
        { t: 'prob', q: 'Nina horneó un queque para el club. Zara se comió 1/4 del queque y Bruno, 3/8. ¿Qué fracción del queque se comieron entre los dos? ¿Qué fracción quedó?', scaffold: true, a: '1/4 = 2/8; 2/8 + 3/8 = 5/8. Se comieron 5/8 del queque y quedaron 3/8 (8/8 − 5/8).' },
        { t: 'prob', q: 'Bruno tenía una cuerda de 3/4 de metro. Cortó 1/2 metro para su invento. ¿Cuánta cuerda le quedó? Escríbelo en fracción y en centímetros.', a: '3/4 − 1/2 = 3/4 − 2/4 = 1/4. Le quedó 1/4 de metro, es decir, 25 cm.' },
        { t: 'choice', q: '¿Cuánto es 1/2 + 1/3?', o: ['2/5', '5/6', '2/6'], a: 1 },
        { t: 'tf', q: 'Marca V o F.', items: [['3/6 es lo mismo que 1/2.', true], ['2/3 es menor que 3/5.', false]] },
      ],
      tip: 'Doblen una hoja de papel en 4 partes iguales y luego en 8: verá con sus propios ojos que 1/4 y 2/8 ocupan lo mismo. Ver las fracciones ayuda más que memorizar reglas.',
    },
    {
      title: 'La encuesta del salón', skill: '¿Qué porcentaje es?', art: '📋',
      lu: 'Para saber qué porcentaje es una parte, escríbela como fracción del total y llévala a centésimos: 12 de 50 es 24 de 100, o sea, el 24 %.',
      qs: [
        { t: 'prob', q: 'En el salón de Thiago hay 25 alumnos. En una encuesta, 15 dijeron que su fruta favorita es el mango. ¿Qué porcentaje del salón prefiere el mango?', scaffold: true, a: '15/25 = 60/100 (multiplico arriba y abajo por 4). El 60 % del salón prefiere el mango.' },
        { t: 'prob', q: 'Camila respondió un examen de 40 preguntas y acertó 34. ¿Qué porcentaje de aciertos tuvo?', a: '34 ÷ 40 = 0,85 = 85/100. Tuvo 85 % de aciertos.' },
        { t: 'prob', q: 'Un polo costaba S/ 50 y ahora cuesta S/ 40. ¿Qué porcentaje de descuento le hicieron?', a: '50 − 40 = 10 de descuento; 10/50 = 20/100. Le hicieron 20 % de descuento.' },
      ],
      tip: 'Busquen porcentajes en las etiquetas de la casa («100 % algodón» en la ropa, el porcentaje de cacao de un chocolate) y pregúntale qué significan pensando en «de cada 100».',
    },
    {
      title: 'Los colores de Bruno', skill: 'Razones', art: '🎨',
      lu: 'Una razón compara dos cantidades: «2 a 3» significa que por cada 2 de una hay 3 de la otra. Si una crece, la otra crece en la misma proporción.',
      qs: [
        { t: 'prob', q: 'Bruno prepara pintura verde para su invento: por cada 2 vasos de pintura azul echa 3 vasos de pintura amarilla. Si usa 8 vasos de azul, ¿cuántos vasos de amarilla necesita? ¿Cuántos vasos de pintura verde obtiene?', scaffold: true, a: '8 ÷ 2 = 4 veces la mezcla; 3 × 4 = 12 vasos de amarilla. 8 + 12 = 20 vasos de pintura verde.' },
        { t: 'prob', q: 'En la biblioteca del club, por cada 3 libros de aventuras hay 2 de ciencia. Si hay 15 libros de aventuras, ¿cuántos libros de ciencia hay? ¿Cuántos hay en total?', a: '15 ÷ 3 = 5; 2 × 5 = 10 libros de ciencia. 15 + 10 = 25 libros en total.' },
        { t: 'choice', q: 'En el club hay 12 chicas y 8 chicos. ¿Cuál es la razón entre chicas y chicos, simplificada?', o: ['12 a 20', '3 a 2', '2 a 3'], a: 1 },
      ],
      tip: 'Mezclen témperas siguiendo una razón (por ejemplo, 1 cucharadita de rojo por cada 2 de blanco) y luego dupliquen la mezcla. Si sale el mismo color, comprobó que la razón se mantiene.',
    },
    {
      title: 'Arroz con leche para todos', skill: 'Cambiar de unidades', art: '⚖️',
      lu: 'Para pasar a una unidad más pequeña, multiplica (1 kg = 1000 g). Para pasar a una más grande, divide. ¿El número debe crecer o achicarse?',
      qs: [
        { t: 'prob', q: 'Para el Día de la Familia del colegio, Valentina ayuda a preparar arroz con leche. Cada olla lleva 750 g de arroz y harán 5 ollas. El arroz viene en bolsas de 1 kg. ¿Cuántas bolsas deben comprar? ¿Cuánto arroz sobrará?', scaffold: true, a: '750 × 5 = 3750 g = 3,75 kg. Deben comprar 4 bolsas de 1 kg y sobrarán 4000 − 3750 = 250 g.' },
        { t: 'prob', q: 'Cada olla lleva además 1,5 litros de leche. ¿Cuántas cajas de leche de 500 mL necesitan para las 5 ollas?', a: '1,5 × 5 = 7,5 L = 7500 mL; 7500 ÷ 500 = 15 cajas.' },
        { t: 'match', q: 'Une cada medida con su equivalente.', left: ['2,5 km', '3 horas', '1,2 kg', '0,5 L'], right: ['500 mL', '2500 m', '1200 g', '180 minutos'], a: [2, 4, 3, 1] },
      ],
      tip: 'Mientras cocinan, pídele que lea las etiquetas y convierta: «este paquete dice 500 g, ¿cuántos kilos son?». La cocina es el mejor laboratorio de unidades.',
    },
    {
      title: 'El viaje en bus', skill: 'Velocidad y tiempo', img: 'lu-reloj.jpg',
      lu: 'Velocidad = distancia ÷ tiempo. Si conoces dos de estos tres datos, puedes encontrar el que falta.',
      qs: [
        { t: 'prob', q: 'El club viaja en bus al pueblo de los abuelos de Yaku, que queda a 315 km. Si el bus avanza siempre a 70 km por hora, ¿cuánto tarda el viaje?', scaffold: true, a: '315 ÷ 70 = 4,5. El viaje dura 4 horas y media (4 h 30 min).' },
        { t: 'prob', q: 'El bus sale a las 6:45 de la mañana. ¿A qué hora llega al pueblo?', a: '6:45 + 4 h = 10:45; 10:45 + 30 min = 11:15. Llega a las 11:15 de la mañana.' },
        { t: 'prob', q: 'En el pueblo, Zara recorre 18 km en bicicleta en 1 hora y media. ¿A qué velocidad va, en km por hora?', a: 'En media hora recorre 18 ÷ 3 = 6 km; en una hora, 6 × 2 = 12 km. Va a 12 km por hora.' },
      ],
      tip: 'En su próximo viaje, anoten juntos los kilómetros y el tiempo que tardaron, y calculen la velocidad promedio. También pueden cronometrar cuánto tarda en caminar 100 metros.',
    },
    {
      title: 'La pecera del club', skill: 'Volumen', art: '🐠',
      lu: 'El volumen de una caja es largo × ancho × alto. Y recuerda: en 1 decímetro cúbico (dm³) cabe exactamente 1 litro.',
      qs: [
        { t: 'prob', q: 'Bruno construyó una pecera con forma de caja: mide 5 dm de largo, 3 dm de ancho y 4 dm de alto. ¿Cuál es su volumen? ¿Cuántos litros de agua caben si la llena hasta arriba?', scaffold: true, a: '5 × 3 × 4 = 60 dm³. Caben 60 litros de agua.' },
        { t: 'prob', q: 'El tanque de agua de la casa de Renata mide 2 m de largo, 1 m de ancho y 1,5 m de alto. Si su familia usa 250 litros al día, ¿para cuántos días alcanza el tanque lleno? (1 m³ = 1000 litros)', a: '2 × 1 × 1,5 = 3 m³ = 3000 litros. 3000 ÷ 250 = 12. Alcanza para 12 días.' },
        { t: 'choice', q: '¿Cuántos cubitos de 1 cm de lado entran en una caja de 4 cm × 4 cm × 4 cm?', o: ['12', '16', '64'], a: 2 },
      ],
      tip: 'Armen una caja de cartulina de 10 cm × 10 cm × 10 cm y llénenla con arroz usando una jarra medidora: verán que cabe justo 1 litro. Así el dm³ deja de ser abstracto.',
    },
    {
      title: 'El clima del campamento', skill: 'Media y mediana', art: '🌡️',
      lu: 'La media es el promedio. La mediana es el dato del medio cuando los ordenas de menor a mayor. ¡Ordena siempre primero!',
      intro: `<b>Temperatura a las 12 del día durante el campamento (anotada por Nina)</b>${table(['Día', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb', 'Dom'], [['°C', 14, 16, 13, 18, 15, 14, 22]])}`,
      qs: [
        { t: 'prob', q: '¿Cuál fue la temperatura media de la semana?', scaffold: true, a: '14 + 16 + 13 + 18 + 15 + 14 + 22 = 112; 112 ÷ 7 = 16. La media fue 16 °C.' },
        { t: 'open', q: 'Ordena las temperaturas de menor a mayor y encuentra la mediana.', lines: 1, a: '13, 14, 14, 15, 16, 18, 22. La mediana es 15 °C (el dato del medio).' },
        { t: 'choice', q: '¿Por qué la media salió mayor que la mediana?', o: ['porque el domingo hizo mucho más calor que los otros días', 'porque hubo dos días con 14 °C', 'porque la semana tiene 7 días'], a: 0 },
      ],
      tip: 'Anoten un dato durante una semana (minutos que tarda en llegar al colegio, horas de sueño) y calculen la media y la mediana. Conversen cuál describe mejor una semana «normal».',
    },
    {
      title: 'El salto largo', skill: 'Comparar decimales', art: '🏅',
      lu: 'Para comparar decimales, iguala las cifras después de la coma: 3,5 es lo mismo que 3,50, y es mayor que 3,45.',
      qs: [
        { t: 'prob', q: 'En el salto largo del colegio, Mateo saltó 3,45 m; Renata, 3,5 m, y Thiago, 3,08 m. ¿Quién saltó más lejos? ¿Por cuántos centímetros le ganó al segundo lugar?', scaffold: true, a: '3,50 > 3,45 > 3,08. Ganó Renata, y le ganó a Mateo por 3,50 − 3,45 = 0,05 m, es decir, 5 cm.' },
        { t: 'prob', q: 'Renata hizo tres saltos: 3,5 m, 3,25 m y 3,6 m. ¿Cuántos metros saltó en total?', a: '3,50 + 3,25 + 3,60 = 10,35. Saltó 10,35 m en total.' },
        { t: 'choice', q: 'Una vuelta a la pista de atletismo mide 0,4 km. ¿Cuántos kilómetros recorre Zara en 7 vueltas?', o: ['2,8 km', '28 km', '0,28 km'], a: 0 },
        { t: 'tf', q: 'Marca V o F.', items: [['0,7 es mayor que 0,65.', true], ['2,30 y 2,3 son el mismo número.', true], ['1,09 es mayor que 1,1.', false]] },
      ],
      tip: 'Con una cinta métrica, marquen en el piso 3,05 m y 3,5 m. Verá que 3,5 llega más lejos aunque tenga menos cifras: es la confusión más común con los decimales.',
    },
    {
      title: 'El parque de aventura', skill: 'Leer una tabla', art: '🎟️',
      lu: 'Antes de responder, lee los títulos de las filas y de las columnas. Cada dato está en el cruce de una fila y una columna.',
      intro: `<b>Precios y duración de las actividades del parque</b>${table(['Actividad', 'Niño', 'Adulto', 'Duración'], [['Tirolesa', 'S/ 15', 'S/ 20', '10 min'], ['Muro de escalar', 'S/ 8', 'S/ 12', '20 min'], ['Puente colgante', 'S/ 5', 'S/ 7', '15 min'], ['Paseo en bote', 'S/ 6', 'S/ 9', '30 min']])}`,
      qs: [
        { t: 'prob', q: 'Zara, Bruno y Nina van a subir a la tirolesa y al muro de escalar. Lu, que es adulta, solo va al puente colgante. ¿Cuánto pagan en total?', scaffold: true, a: 'Cada niño: 15 + 8 = 23; 3 × 23 = 69. Lu: S/ 7. 69 + 7 = S/ 76 en total.' },
        { t: 'choice', q: 'Un niño hace la tirolesa, el muro y el paseo en bote, uno detrás de otro. Si empieza a las 10:40, ¿a qué hora termina?', o: ['11:10', '11:40', '12:40'], a: 1 },
        { t: 'open', q: 'Un niño tiene S/ 30. ¿Qué actividades distintas puede hacer para gastar lo más posible sin pasarse? Explica cómo lo pensaste.', lines: 2, a: 'Tirolesa, muro y paseo en bote: 15 + 8 + 6 = S/ 29 (le sobra S/ 1). Las cuatro costarían S/ 34, más de lo que tiene.' },
      ],
      tip: 'Miren juntos una tabla real, como un horario de buses o una lista de precios, y pregúntale: «¿qué dato hay en el cruce de esta fila y esta columna?». Leer tablas es una habilidad que usará siempre.',
    },
  ],
};
