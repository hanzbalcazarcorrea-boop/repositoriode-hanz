// Súper Mate · 10-12 años · Nivel 3 (Súper mate): porcentajes en varios pasos, proporcionalidad directa e inversa, áreas compuestas, interés simple, probabilidad, ecuaciones sencillas, lógica, patrones y revisión de errores.
const T = 'font-family="Nunito" font-weight="700" fill="#1E2A5A"';

// Biohuerto en forma de L (10 m × 8 m, con un rectángulo de 6 m × 4 m recortado arriba a la derecha).
const huerto = `<svg viewBox="0 0 160 108" style="width:44mm;flex:none">
  <polygon points="30,12 70,12 70,52 130,52 130,92 30,92" fill="#E3F4E8" stroke="#3E8E5C" stroke-width="1.6" stroke-linejoin="round"/>
  <text x="50" y="8.5" font-size="8" text-anchor="middle" ${T}>4 m</text>
  <text x="26" y="55" font-size="8" text-anchor="end" ${T}>8 m</text>
  <text x="80" y="103" font-size="8" text-anchor="middle" ${T}>10 m</text>
  <text x="134" y="75" font-size="8" text-anchor="start" ${T}>4 m</text>
  <text x="100" y="48" font-size="9" text-anchor="middle" font-family="Nunito" font-weight="800" fill="#C2620A">?</text>
  <text x="75" y="35" font-size="9" text-anchor="start" font-family="Nunito" font-weight="800" fill="#C2620A">?</text>
</svg>`;

// Diagrama de Venn vacío para completar.
const venn = `<svg viewBox="0 0 200 96" style="width:78mm;flex:none">
  <rect x="2" y="2" width="196" height="92" rx="6" fill="#fff" stroke="#4A5578" stroke-width="1"/>
  <circle cx="80" cy="52" r="36" fill="#F28C28" fill-opacity=".15" stroke="#C2620A" stroke-width="1.3"/>
  <circle cx="120" cy="52" r="36" fill="#6F8FD8" fill-opacity=".15" stroke="#3A5BB0" stroke-width="1.3"/>
  <text x="62" y="12" font-size="8" text-anchor="middle" ${T}>Fútbol</text>
  <text x="138" y="12" font-size="8" text-anchor="middle" ${T}>Vóley</text>
  <text x="8" y="88" font-size="7" text-anchor="start" font-family="Nunito" fill="#4A5578">30 alumnos</text>
  <text x="192" y="88" font-size="7" text-anchor="end" font-family="Nunito" fill="#4A5578">Ninguno</text>
</svg>`;

// Mesas cuadradas en fila: 1, 2 y 3 mesas, con una persona por lado libre.
const mesas = (() => {
  const s = 14; let g = '';
  [1, 2, 3].forEach((n, i) => {
    const cx = 32 + 64 * i; const x0 = cx - (n * s) / 2; const y0 = 9;
    for (let k = 0; k < n; k++) {
      g += `<rect x="${x0 + k * s}" y="${y0}" width="${s}" height="${s}" fill="#FFE7B8" stroke="#C2620A" stroke-width="1"/>`;
      g += `<circle cx="${x0 + k * s + s / 2}" cy="${y0 - 5}" r="3" fill="#6F8FD8"/><circle cx="${x0 + k * s + s / 2}" cy="${y0 + s + 5}" r="3" fill="#6F8FD8"/>`;
    }
    g += `<circle cx="${x0 - 5}" cy="${y0 + s / 2}" r="3" fill="#6F8FD8"/><circle cx="${x0 + n * s + 5}" cy="${y0 + s / 2}" r="3" fill="#6F8FD8"/>`;
    g += `<text x="${cx}" y="${y0 + s + 17}" font-size="6" text-anchor="middle" ${T}>${n} mesa${n > 1 ? 's' : ''}: ${2 * n + 2} personas</text>`;
  });
  return `<svg viewBox="0 0 192 42" style="width:96mm;flex:none">${g}</svg>`;
})();

module.exports = {
  age: '10 a 12 años',
  slug: '10-12-anos',
  mode: 'adv',
  retos: [
    {
      title: 'Dos descuentos seguidos', skill: 'Porcentajes en varios pasos', art: '🛍️',
      lu: 'Cuando hay dos descuentos seguidos, el segundo se calcula sobre el precio que ya bajó. ¡No los sumes de frente!',
      qs: [
        { t: 'prob', q: 'Una casaca cuesta S/ 200. Esta semana tiene 20 % de descuento y, si pagas en efectivo, te descuentan un 10 % más sobre el nuevo precio. ¿Cuánto pagas en efectivo?', scaffold: true, a: '20 % de 200 = 40; 200 − 40 = 160. 10 % de 160 = 16; 160 − 16 = 144. Pagas S/ 144.' },
        { t: 'choice', q: 'Zara dice: «20 % y luego 10 % es lo mismo que 30 % de descuento». ¿Tiene razón?', o: ['Sí, porque 20 + 10 = 30.', 'No: con 30 % pagarías S/ 140, y en realidad pagas S/ 144.', 'No: con 30 % pagarías más que con los dos descuentos.'], a: 1 },
        { t: 'prob', q: 'El pasaje de la combi de Mateo costaba S/ 2 y subió un 25 %. ¿Cuánto cuesta ahora? ¿Cuánto gastará Mateo en 20 viajes?', a: '25 % de 2 = 0,50; 2 + 0,50 = S/ 2,50. 20 × 2,50 = S/ 50 en 20 viajes.' },
        { t: 'open', q: 'Un precio sube 10 % y después baja 10 %. ¿Vuelve al precio inicial? Prueba con S/ 100 y explica.', lines: 2, a: 'No. 100 + 10 = 110; 10 % de 110 = 11; 110 − 11 = 99. Termina en S/ 99: el segundo 10 % se calcula sobre un precio más alto.' },
      ],
      tip: 'Cuando vean una oferta del tipo «20 % + 10 % adicional», pídele que calcule el precio final antes de llegar a la caja y que luego lo compare con la boleta.',
    },
    {
      title: 'La minga del canal', skill: 'Proporción directa o inversa', art: '🤝',
      lu: 'Pregúntate: si una cantidad aumenta, ¿la otra aumenta o disminuye? Si aumenta al mismo ritmo, es directa; si disminuye, es inversa.',
      qs: [
        { t: 'prob', q: 'En la comunidad de Killa organizan una minga para limpiar el canal de riego. Si 6 personas lo limpian en 8 horas, ¿cuánto tardarían 12 personas trabajando al mismo ritmo?', scaffold: true, a: 'Es inversa: el doble de personas tarda la mitad. 6 × 8 = 48; 48 ÷ 12 = 4. Tardarían 4 horas.' },
        { t: 'prob', q: 'Para el almuerzo de la minga compran panes: 30 panes cuestan S/ 6. ¿Cuánto cuestan 75 panes?', a: 'Es directa: cada pan cuesta 6 ÷ 30 = S/ 0,20; 75 × 0,20 = S/ 15.' },
        { t: 'tf', q: 'Marca V o F.', items: [['Si 4 caños iguales llenan un tanque en 6 horas, 8 caños lo llenan en 3 horas.', true], ['Si un carro va más rápido, tarda más en llegar.', false], ['Si 1 kg de papa cuesta S/ 2,50, 4 kg cuestan S/ 10.', true]] },
        { t: 'open', q: '¿Cómo supiste que el problema 1 era de proporción inversa?', lines: 1, a: 'Porque si hay más personas, el tiempo disminuye: el doble de personas tarda la mitad.' },
      ],
      tip: 'Jueguen a «¿directa o inversa?»: más invitados, ¿más o menos torta para cada uno?; más velocidad, ¿más o menos tiempo? Pídele que siempre justifique su respuesta.',
    },
    {
      title: 'El biohuerto en forma de L', skill: 'Áreas compuestas', art: '🥬',
      lu: 'Parte la figura en rectángulos, o completa el rectángulo grande y resta el pedazo que falta.',
      intro: `<div style="display:flex;align-items:center;gap:6mm">${huerto}<div><b>El biohuerto del colegio de Renata, visto desde arriba</b><br>Todas sus esquinas son ángulos rectos. Los lados marcados con «?» no tienen medida: descúbrela tú.</div></div>`,
      qs: [
        { t: 'prob', q: '¿Cuál es el área del biohuerto de Renata? Pista: divídelo en dos rectángulos.', scaffold: true, a: 'Rectángulo de abajo: 10 × 4 = 40 m². Rectángulo de arriba: 4 × (8 − 4) = 4 × 4 = 16 m². 40 + 16 = 56 m².' },
        { t: 'open', q: 'Calcula el área de otra manera y explica cómo lo pensaste.', lines: 2, a: 'Completo el rectángulo grande: 10 × 8 = 80 m². Le resto el pedazo que falta: 6 × 4 = 24 m². 80 − 24 = 56 m².' },
        { t: 'prob', q: 'Quieren poner una malla alrededor de todo el biohuerto. ¿Cuántos metros de malla necesitan?', a: 'Lados que faltaban: 10 − 4 = 6 m y 8 − 4 = 4 m. 10 + 4 + 6 + 4 + 4 + 8 = 36 m de malla.' },
      ],
      tip: 'Dibujen en papel cuadriculado el plano de un ambiente de la casa con forma irregular y calculen su área partiéndolo en rectángulos. Pregúntale: «¿hay otra forma de partirlo?».',
    },
    {
      title: 'Los ahorros de Killa', skill: 'Interés simple', art: '🏦',
      lu: 'El interés simple es lo que te paga el banco cada año por guardar tu dinero: siempre el mismo porcentaje del dinero que depositaste.',
      qs: [
        { t: 'prob', q: 'Killa depositó S/ 400 en una cuenta de ahorros que paga 5 % de interés simple al año. ¿Cuánto dinero tendrá en total después de 3 años?', scaffold: true, a: '5 % de 400 = 20 por año. 20 × 3 = 60 de interés. 400 + 60 = S/ 460.' },
        { t: 'prob', q: 'Thiago depositó S/ 600 y, después de 2 años, ganó S/ 48 de interés simple. ¿Qué porcentaje de interés le pagaron cada año?', a: '48 ÷ 2 = 24 por año; 24/600 = 4/100. Le pagaron 4 % al año.' },
        { t: 'choice', q: 'Para ahorrar S/ 1000 durante 1 año, ¿qué conviene más?', o: ['una cuenta que paga 6 % al año', 'una cuenta que paga S/ 5 cada mes', 'las dos pagan lo mismo'], a: 2 },
        { t: 'open', q: '¿Cuántos años necesita Killa para ganar S/ 100 de interés con su cuenta? ¿Cómo lo sabes?', lines: 1, a: '5 años: gana S/ 20 cada año y 100 ÷ 20 = 5.' },
      ],
      tip: 'Si tiene una alcancía, propónle un «banco familiar»: por cada S/ 10 que guarde un mes completo, le pagas S/ 1 de interés. Así entiende por qué conviene ahorrar.',
    },
    {
      title: 'Los caramelos de la kermés', skill: 'Probabilidad', art: '🍬',
      lu: 'La probabilidad se escribe como fracción: casos favorables entre casos posibles. Si es 0, es imposible; si es 1, es seguro.',
      qs: [
        { t: 'prob', q: 'En la kermés del colegio, una bolsa tiene 5 caramelos de fresa, 3 de limón y 2 de piña, todos iguales por fuera. Camila saca uno sin mirar. ¿Qué probabilidad hay de que sea de limón? ¿Y de que no sea de fresa?', scaffold: true, a: 'Hay 5 + 3 + 2 = 10 caramelos. Limón: 3/10. No fresa: 3 + 2 = 5 de 10, es decir, 5/10 = 1/2.' },
        { t: 'tf', q: 'Marca V o F.', items: [['Es imposible sacar un caramelo de mango.', true], ['Es seguro que saldrá uno de fresa.', false], ['Sacar piña es menos probable que sacar limón.', true]] },
        { t: 'choice', q: 'En otro juego lanzas un dado normal (caras del 1 al 6) y ganas si sale un número mayor que 4. ¿Qué probabilidad tienes de ganar?', o: ['1/6', '1/3', '2/3'], a: 1 },
        { t: 'open', q: 'Camila sacó un caramelo de fresa y se lo comió. Ahora, ¿es más o menos probable que el siguiente sea de fresa? Explica.', lines: 2, a: 'Menos probable: ahora quedan 4 de fresa entre 9 caramelos (4/9, menos de la mitad); antes eran 5 de 10 (justo la mitad).' },
      ],
      tip: 'Hagan el experimento: pongan fichas o caramelos de colores en una bolsa, saquen uno sin mirar 20 veces (devolviéndolo cada vez) y anoten. Comparen lo que salió con lo que predijeron.',
    },
    {
      title: 'La máquina de Bruno', skill: 'Pienso un número', img: 'lu-piensa.jpg',
      lu: 'Para descubrir el número escondido, recorre el camino al revés: lo que se sumó, réstalo; lo que se multiplicó, divídelo. ¡Y luego comprueba!',
      qs: [
        { t: 'prob', q: 'Bruno inventó una máquina: le metes un número, la máquina lo multiplica por 3 y luego le suma 7. Nina metió un número y salió 52. ¿Qué número metió?', scaffold: true, a: 'Al revés: 52 − 7 = 45; 45 ÷ 3 = 15. Metió el 15. (Compruebo: 15 × 3 + 7 = 52.)' },
        { t: 'prob', q: 'Zara pensó un número, le restó 8, dividió el resultado entre 2 y obtuvo 11. ¿Qué número pensó?', a: 'Al revés: 11 × 2 = 22; 22 + 8 = 30. Pensó el 30.' },
        { t: 'prob', q: 'Lu tiene el triple de libros que Bruno. Entre los dos tienen 48 libros. ¿Cuántos libros tiene cada uno?', a: 'Bruno tiene 1 parte y Lu, 3 partes: 4 partes = 48; 48 ÷ 4 = 12. Bruno tiene 12 libros y Lu, 3 × 12 = 36.' },
        { t: 'open', q: '□ × 4 − 6 = 30. ¿Qué número va en el cuadrado? Explica cómo lo pensaste.', lines: 1, a: 'El 9: 30 + 6 = 36 y 36 ÷ 4 = 9. (Compruebo: 9 × 4 − 6 = 30.)' },
      ],
      tip: 'Jueguen a «pienso un número» en el bus o en la cola: tú piensas un número, le dices las operaciones y el resultado, y él lo descubre. Luego cambien de rol.',
    },
    {
      title: 'Fútbol, vóley o ninguno', skill: 'Diagramas de Venn', art: '⚽',
      lu: 'Cuando dos grupos comparten miembros, dibuja dos círculos que se cruzan. Empieza siempre por el centro: los que están en los dos grupos.',
      intro: `<div style="display:flex;align-items:center;gap:6mm">${venn}<div><b>Diagrama para completar</b><br>Escribe en cada parte del diagrama cuántos alumnos hay. No olvides a los que no están en ningún círculo.</div></div>`,
      qs: [
        { t: 'prob', q: 'En el salón de Mateo hay 30 alumnos. A 18 les gusta el fútbol, a 15 les gusta el vóley y a 4 no les gusta ninguno de los dos. ¿A cuántos les gustan los dos deportes?', scaffold: true, a: '30 − 4 = 26 alumnos gustan de al menos uno. 18 + 15 = 33; 33 − 26 = 7. A 7 alumnos les gustan los dos.' },
        { t: 'open', q: '¿A cuántos les gusta solo el fútbol? ¿Y solo el vóley?', lines: 1, a: 'Solo fútbol: 18 − 7 = 11. Solo vóley: 15 − 7 = 8. (Compruebo: 11 + 7 + 8 + 4 = 30.)' },
        { t: 'open', q: 'Mateo dice: «18 + 15 = 33, y en el salón solo hay 30. ¡El problema está mal!». ¿Tiene razón? Explica.', lines: 2, a: 'No: la suma pasa de 30 porque los 7 alumnos a los que les gustan los dos deportes se contaron dos veces.' },
      ],
      tip: 'Hagan una encuesta en la familia (¿te gusta el café?, ¿te gusta el té?) y ordenen las respuestas en dos círculos. Pregúntale dónde va quien responde «los dos» y dónde, quien responde «ninguno».',
    },
    {
      title: 'Las mesas del aniversario', skill: 'Patrones y reglas', art: '🍽️',
      lu: 'Para descubrir una regla, mira qué cambia de un paso al siguiente. Luego pregúntate: ¿funciona para cualquier número?',
      intro: `<b>Mesas cuadradas juntas en una fila (cada punto azul es una persona)</b><div style="display:flex;justify-content:center;margin-top:1.5mm">${mesas}</div>`,
      qs: [
        { t: 'prob', q: 'Para el almuerzo del aniversario del club juntan mesas cuadradas en una fila larga, como en el dibujo. ¿Cuántas personas se pueden sentar con 10 mesas?', scaffold: true, a: 'Cada mesa nueva agrega 2 sitios. Con 10 mesas: 2 × 10 + 2 = 22 personas.' },
        { t: 'open', q: 'Escribe la regla con tus palabras: ¿cómo calculas las personas para cualquier cantidad de mesas?', lines: 2, a: 'Multiplico el número de mesas por 2 (los de arriba y los de abajo) y sumo 2 (los de las puntas).' },
        { t: 'prob', q: 'Al almuerzo van a ir 40 personas. ¿Cuántas mesas necesitan juntar?', a: '40 − 2 = 38; 38 ÷ 2 = 19. Necesitan 19 mesas.' },
      ],
      tip: 'Construyan el patrón con palitos de helado o tapitas: armen las figuras 1, 2 y 3 y pídele que prediga la figura 10 antes de construirla. Que te explique por qué funciona su regla.',
    },
    {
      title: '¿Cuál conviene más?', skill: 'Comparar precios', art: '🛒',
      lu: 'Para comparar ofertas, calcula cuánto cuesta 1 unidad (1 kg, 1 litro, 1 cuaderno) en cada una. La más barata por unidad es la que conviene.',
      qs: [
        { t: 'prob', q: 'En la bodega venden arroz en dos presentaciones: una bolsa de 5 kg a S/ 19 y una bolsa de 2 kg a S/ 8,20. ¿Cuál conviene más? ¿Cuánto se ahorra por kilo?', scaffold: true, a: '19 ÷ 5 = S/ 3,80 el kilo; 8,20 ÷ 2 = S/ 4,10 el kilo. Conviene la bolsa de 5 kg: se ahorran 4,10 − 3,80 = S/ 0,30 por kilo.' },
        { t: 'prob', q: 'Una oferta dice: «Lleva 3 cuadernos y paga 2». Cada cuaderno cuesta S/ 4,50. Renata necesita 6 cuadernos. ¿Cuánto paga con la oferta? ¿Cuánto ahorra?', a: 'Por 6 cuadernos paga solo 4: 4 × 4,50 = S/ 18. Sin oferta pagaría 6 × 4,50 = S/ 27. Ahorra 27 − 18 = S/ 9.' },
        { t: 'choice', q: 'Un jugo de 1 litro cuesta S/ 5,40 y uno de 250 mL cuesta S/ 1,50. ¿Cuál conviene más?', o: ['el de 1 litro', 'el de 250 mL', 'cuestan lo mismo por litro'], a: 0 },
        { t: 'open', q: 'Valentina dice: «La bolsa más grande siempre conviene». ¿Estás de acuerdo? Da una razón.', lines: 2, a: 'No siempre: hay que comparar el precio por unidad (en el jugo, 4 × 1,50 = S/ 6 el litro en botellitas). Además, si no vas a usar todo, lo grande se puede desperdiciar.' },
      ],
      tip: 'En la próxima compra, elijan dos presentaciones de un mismo producto y pídele que descubra cuál conviene. Muchas veces la respuesta sorprende.',
    },
    {
      title: 'El cuaderno de Zara', skill: 'Encontrar el error', img: 'zara.jpg',
      lu: 'Revisar es parte de resolver. Lee cada paso y pregúntate: ¿esto tiene sentido? ¿Más o menos qué número debería salir?',
      qs: [
        { t: 'prob', q: 'Zara resolvió muy rápido: «De 60 exploradores, 3/4 fueron a la selva. ¿Cuántos fueron? 60 ÷ 3 = 20; 20 × 4 = 80 exploradores». ¿Qué error cometió? Resuélvelo bien.', scaffold: true, a: 'Invirtió los números: dividió entre 3 y multiplicó por 4. Además, 80 es más que los 60 que había: ¡no tiene sentido! Bien: 60 ÷ 4 = 15; 15 × 3 = 45 exploradores.' },
        { t: 'open', q: 'Zara escribió: «Nina tenía S/ 50 y gastó S/ 18,50 en un libro. Le quedan 50 − 18,50 = S/ 32,50». ¿Está bien? ¿Cómo lo puedes comprobar?', lines: 2, a: 'Está mal: 50 − 18,50 = 31,50. Se comprueba sumando: 31,50 + 18,50 = 50; en cambio, 32,50 + 18,50 = 51.' },
        { t: 'prob', q: 'Zara escribió: «Un polo de S/ 80 tiene 15 % de descuento. Pago 80 − 15 = S/ 65». Encuentra el error y corrígelo.', a: 'Restó 15 soles en vez del 15 %. 10 % de 80 = 8 y 5 % = 4, así que 15 % = 12. 80 − 12 = S/ 68.' },
        { t: 'say', q: '¿Qué consejo le darías a Zara para que se equivoque menos?', a: 'Respuesta libre. Por ejemplo: leer dos veces, estimar antes de calcular y revisar si la respuesta tiene sentido.' },
      ],
      tip: 'Equivócate a propósito al resolver un problema y pídele que encuentre tu error. Explicar por qué algo está mal es una de las formas más profundas de entenderlo.',
    },
  ],
};
