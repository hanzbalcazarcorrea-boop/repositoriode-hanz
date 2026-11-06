// Súper Mate · 8-9 años · Nivel 2 (Vuelo): 2 cifras × 1 cifra, división con resto, fracciones de una cantidad,
// perímetro, minutos, pictograma, gráfico de barras, datos escondidos, comparaciones y hacer preguntas.

// Pictograma: una fila con el mismo dibujo repetido.
const fila = (name, e, n) => `<div style="display:flex;align-items:center;gap:3mm;height:8.5mm"><span style="width:18mm;font-weight:700">${name}</span><span class="emoji" style="font-size:16pt;letter-spacing:1.5mm">${e.repeat(n)}</span></div>`;

// Gráfico de barras con escala de 10 en 10 (2,4 mm por unidad, líneas cada 10).
const grafico = (rows, max) => {
  const U = 2.4;
  const w = max * U;
  const names = rows.map(([name]) => `<div style="height:8mm;display:flex;align-items:center;font-weight:700">${name}</div>`).join('');
  const bars = rows.map(([, n, color]) => `<div style="height:8mm;display:flex;align-items:center"><span style="display:block;height:5.5mm;width:${n * U}mm;background:${color};border-radius:0 1.5mm 1.5mm 0"></span></div>`).join('');
  const ticks = [];
  for (let k = 0; k <= max; k += 10) ticks.push(`<span style="position:absolute;left:${k * U}mm;transform:translateX(-50%)">${k}</span>`);
  return `<div style="display:flex;margin-top:2mm"><div style="flex:none;width:16mm">${names}</div><div style="width:${w + 1}mm;background:repeating-linear-gradient(90deg,#B8C1DB 0 .35mm,transparent .35mm ${10 * U}mm)">${bars}</div></div>`
    + `<div style="position:relative;height:5mm;margin-left:16mm;font-size:8.5pt;font-weight:700;color:#4A5578">${ticks.join('')}</div>`;
};

module.exports = {
  age: '8 a 9 años',
  slug: '8-9-anos',
  mode: 'mid',
  retos: [
    {
      title: 'El desfile de Fiestas Patrias', skill: 'Multiplico por partes', art: '🇵🇪',
      lu: 'Para multiplicar 24 × 6, separa el 24 en 20 y 4. Multiplica cada parte por 6 y después junta los resultados.',
      qs: [
        { t: 'prob', q: 'Para el desfile de Fiestas Patrias, los alumnos de primaria marchan en 6 filas de 24 niños cada una. ¿Cuántos niños desfilan?', scaffold: true, a: '24 × 6: 20 × 6 = 120; 4 × 6 = 24; 120 + 24 = 144. Desfilan 144 niños.' },
        { t: 'choice', q: '¿Qué cuentas te ayudan a calcular 35 × 4?', o: ['30 × 4 y 5 × 4, y después sumo los resultados', '35 + 4', '30 × 4, y después le sumo 5'], a: 0 },
        { t: 'prob', q: 'En la chacra del abuelo de Mateo hay 7 surcos con 45 plantas de maíz en cada uno. ¿Cuántas plantas de maíz hay?', a: '40 × 7 = 280; 5 × 7 = 35; 280 + 35 = 315. Hay 315 plantas de maíz.' },
      ],
      tip: 'Usen billetes y monedas de juguete: 24 × 6 son 6 grupos de 2 billetes de S/ 10 y 4 monedas de S/ 1. Separar decenas y unidades le da sentido a la multiplicación.',
    },
    {
      title: 'La kermés del colegio', skill: '¿Qué hago con lo que sobra?', art: '🧁',
      lu: 'Cuando al repartir sobra algo, piensa en la historia: ¿lo dejo aparte o necesito un grupo más para que nadie se quede fuera?',
      qs: [
        { t: 'prob', q: 'Para la kermés, Renata preparó 50 queques y los pone en cajas de 6. Solo vende cajas llenas. ¿Cuántas cajas llenas puede vender? ¿Cuántos queques le sobran?', scaffold: true, a: '50 ÷ 6 = 8 y sobran 2 (6 × 8 = 48). Vende 8 cajas llenas y le sobran 2 queques.' },
        { t: 'prob', q: 'Al almuerzo de la kermés llegan 39 personas. En cada mesa se sientan 6. ¿Cuántas mesas hay que armar para que nadie se quede de pie?', a: '39 ÷ 6 = 6 y sobran 3. Hay que armar 7 mesas: las 3 personas que sobran también necesitan sentarse.' },
        { t: 'tf', q: 'En todas estas historias, 31 ÷ 4 = 7 y sobran 3. Marca V o F.', items: [['Si 31 niños pasean en botes de 4 asientos, se necesitan 8 botes.', true], ['Si tengo S/ 31 y cada helado cuesta S/ 4, puedo comprar 8 helados.', false], ['Si pego 31 fotos, 4 en cada página, lleno 7 páginas y sobran 3 fotos.', true]] },
      ],
      tip: 'Cuando una división tenga resto, pregúntale siempre: «¿y qué pasa con lo que sobra?». La misma cuenta puede tener respuestas distintas según la historia.',
    },
    {
      title: 'La cosecha de naranjas', skill: 'Fracciones de una cantidad', art: '🍊',
      lu: 'Para sacar 3/4 de algo, primero divide entre 4 para saber cuánto es una parte. Después multiplica por 3.',
      qs: [
        { t: 'prob', q: 'Killa cosechó 24 naranjas en la chacra de su familia, en la selva. Le regaló 1/3 a su vecina. ¿Cuántas naranjas regaló? ¿Cuántas le quedaron?', scaffold: true, a: '24 ÷ 3 = 8. Regaló 8 naranjas. 24 − 8 = 16. Le quedaron 16 naranjas.' },
        { t: 'prob', q: 'El libro de cuentos de Valentina tiene 40 páginas. Ya leyó 3/4 del libro. ¿Cuántas páginas leyó?', a: '40 ÷ 4 = 10; 3 × 10 = 30. Leyó 30 páginas.' },
        { t: 'choice', q: 'Coco tenía 12 trocitos de queso y se comió 3/4. ¿Cuántos trocitos le quedan? ¡Ojo con la pregunta!', o: ['9', '3', '4'], a: 1 },
      ],
      tip: 'Usen objetos reales: 12 frejoles repartidos en 4 montoncitos iguales. «Tres cuartos» son 3 montoncitos. Ver los grupos ayuda más que memorizar el procedimiento.',
    },
    {
      title: 'El corral de las alpacas', skill: 'El perímetro', art: '🦙',
      lu: 'El perímetro es la medida de todo el borde de una figura. Suma todos sus lados, ¡sin olvidar ninguno!',
      qs: [
        { t: 'prob', q: 'En la sierra, la familia de Yaku arma un corral rectangular para sus 12 alpacas. El corral mide 15 metros de largo y 9 metros de ancho. ¿Cuántos metros de cerca necesitan para rodearlo?', scaffold: true, a: '15 + 9 + 15 + 9 = 48. Necesitan 48 metros de cerca. (El dato de las 12 alpacas no se usa).' },
        { t: 'prob', q: 'Camila quiere pegar cinta dorada en todo el borde de un cuadro cuadrado de 25 cm de lado. ¿Cuántos centímetros de cinta necesita? ¿Le alcanza con 1 metro de cinta?', a: '25 × 4 = 100. Necesita 100 cm. Sí le alcanza justo, porque 1 metro = 100 cm.' },
        { t: 'choice', q: 'El perímetro de un triángulo es 30 cm. Dos de sus lados miden 8 cm y 12 cm. ¿Cuánto mide el tercer lado?', o: ['10 cm', '20 cm', '50 cm'], a: 0 },
      ],
      tip: 'Midan juntos el borde de una mesa o de una ventana con una cinta métrica. Que pase el dedo por todo el borde mientras suma: así entiende qué es el perímetro.',
    },
    {
      title: 'Rumbo al colegio', skill: '¿Cuánto tiempo pasó?', img: 'lu-reloj.jpg',
      lu: 'Para saber cuánto tiempo pasó, cuenta desde la hora de inicio: primero hasta la hora en punto y después lo que falta.',
      qs: [
        { t: 'prob', q: 'Camila se despierta a las 6:40 a. m. Sale de su casa a las 7:35 a. m. y llega al colegio a las 8:10 a. m. ¿Cuántos minutos dura su viaje en combi?', scaffold: true, a: 'De 7:35 a 8:00 hay 25 minutos; de 8:00 a 8:10, 10 minutos más. 25 + 10 = 35 minutos. (La hora en que se despierta no se usa).' },
        { t: 'prob', q: 'Un partido de fulbito del colegio tiene dos tiempos de 30 minutos y un descanso de 15 minutos. ¿Cuánto dura todo el partido? Escríbelo en horas y minutos.', a: '30 + 30 + 15 = 75 minutos. 75 − 60 = 15. Dura 1 hora y 15 minutos.' },
        { t: 'choice', q: '¿Qué dura más?', o: ['media hora', '25 minutos', 'un cuarto de hora'], a: 0 },
      ],
      tip: 'Usen un reloj de agujas (de verdad o dibujado): que mueva el minutero de 5 en 5 desde la hora de salida hasta la de llegada. Contar los saltos hace visible el tiempo que pasa.',
    },
    {
      title: 'La encuesta de Tito', skill: 'Leer un pictograma', art: '📋',
      lu: 'En un pictograma, cada dibujo puede valer más de 1. ¡Lee primero cuánto vale cada dibujo!',
      intro: `<b>Tito, el reportero del bosque, preguntó en una escuela: «¿Cuál es tu fruta favorita?»</b><div style="margin-top:1.5mm">${fila('Mango', '🥭', 6)}${fila('Plátano', '🍌', 4)}${fila('Fresa', '🍓', 5)}${fila('Uva', '🍇', 3)}</div><div style="margin-top:1mm"><span style="background:#FFE7B8;color:#C2620A;font-weight:800;border-radius:2mm;padding:.8mm 3mm">Cada dibujo = 4 niños</span></div>`,
      qs: [
        { t: 'open', q: '¿Cuántos niños eligieron mango? ¿Cómo lo sabes?', lines: 1, a: '24 niños: hay 6 dibujos y cada uno vale 4 (6 × 4 = 24).' },
        { t: 'prob', q: '¿Cuántos niños respondieron la encuesta de Tito en total?', scaffold: true, a: '6 + 4 + 5 + 3 = 18 dibujos; 18 × 4 = 72 niños. (También vale: 24 + 16 + 20 + 12 = 72).' },
        { t: 'choice', q: '¿Cuántos niños más eligieron fresa que uva?', o: ['2', '8', '32'], a: 1 },
      ],
      tip: 'Hagan una encuesta en la familia (comida o color favorito) y dibujen juntos su pictograma. Decidir cuánto vale cada dibujo es lo que más lo hace pensar.',
    },
    {
      title: 'La campaña de reciclaje', skill: 'Leer un gráfico de barras', art: '♻️',
      lu: 'Sigue el final de cada barra hasta los números de abajo. Si la barra termina entre dos números, ¡piensa en la mitad!',
      intro: `<b>Botellas de plástico que juntó cada sección para reciclar</b>${grafico([['3.º A', 35, '#F28C28'], ['3.º B', 50, '#6F8FD8'], ['4.º A', 40, '#7CC596'], ['4.º B', 25, '#9B86E0']], 50)}`,
      qs: [
        { t: 'open', q: '¿Cuántas botellas juntó 3.º A? ¿Cómo lo sabes?', lines: 1, a: '35 botellas: su barra termina en la mitad, entre el 30 y el 40.' },
        { t: 'prob', q: 'La meta del colegio era juntar 200 botellas entre las cuatro secciones. ¿Llegaron a la meta? ¿Cuántas botellas les faltaron o les sobraron?', scaffold: true, a: '35 + 50 + 40 + 25 = 150. No llegaron: 200 − 150 = 50. Les faltaron 50 botellas.' },
        { t: 'choice', q: '¿Qué sección juntó el doble de botellas que 4.º B?', o: ['3.º A', '3.º B', '4.º A'], a: 1 },
      ],
      tip: 'Que pase el dedo desde el final de cada barra hasta la escala de números. Leer la escala con cuidado es lo más importante de un gráfico; busquen otros en periódicos o folletos.',
    },
    {
      title: 'Las humitas de Coco', skill: 'Datos escondidos', img: 'coco.jpg',
      lu: 'Algunas palabras esconden números: una docena son 12, un par son 2 y una semana tiene 7 días. ¡Búscalos antes de calcular!',
      qs: [
        { t: 'prob', q: 'Coco va a preparar humitas para sus amigos. Compró 2 docenas de choclos y usó 18. ¿Cuántos choclos le quedan?', scaffold: true, a: '2 docenas = 2 × 12 = 24 choclos; 24 − 18 = 6. Le quedan 6 choclos.' },
        { t: 'match', q: 'Une cada palabra con el número que esconde.', left: ['una docena', 'un par', 'una semana', 'media docena'], right: ['7', '6', '12', '2'], a: [3, 4, 1, 2] },
        { t: 'prob', q: 'Renata toma 2 vasos de agua en cada comida y hace 3 comidas al día. ¿Cuántos vasos de agua toma en una semana?', a: '2 × 3 = 6 vasos al día; 6 × 7 = 42. Toma 42 vasos en una semana.' },
      ],
      tip: 'Jueguen a cazar números escondidos en la casa: una docena de huevos, un par de zapatos, los 7 días de la semana. Si los conoce, no se le escaparán en los problemas.',
    },
    {
      title: 'El álbum de figuritas', skill: '«Más que» y «el triple»', art: '🌟',
      lu: '«3 más que» es sumar 3. «El triple» es multiplicar por 3. ¡Lee despacio esas palabras, que cambian toda la cuenta!',
      qs: [
        { t: 'prob', q: 'Mateo tiene 15 figuritas. Su prima Camila tiene el triple que él. ¿Cuántas figuritas tienen entre los dos?', scaffold: true, a: 'Camila: 15 × 3 = 45. Entre los dos: 15 + 45 = 60 figuritas.' },
        { t: 'choice', q: 'Thiago tiene 12 figuritas y Valentina tiene 3 más que él. ¿Cuántas tiene Valentina?', o: ['36', '15', '9'], a: 1 },
        { t: 'tf', q: 'Marca V o F.', items: [['El doble de 20 es 40.', true], ['5 menos que 30 es 35.', false], ['Killa tiene 8 años y su papá tiene 4 veces su edad: su papá tiene 32 años.', true]] },
      ],
      tip: 'Antes de calcular, que dibuje barras: una para Mateo y tres iguales para Camila. Ver «el triple» como tres barras evita que lo confunda con «tres más».',
    },
    {
      title: 'La noticia de Tito', skill: 'Hago la pregunta', img: 'tito.jpg',
      lu: 'Una buena pregunta usa los datos que tienes y se puede responder. Si falta un dato, ¡esa pregunta no sirve!',
      intro: `<b>📰 El Periódico del Bosque</b><div style="margin-top:1mm;font-size:10.5pt;line-height:1.45">«¡Éxito en la feria del bosque! Pipa vendió 18 empanadas a S/ 3 cada una y 12 jugos de maracuyá a S/ 2 cada uno. La feria duró 4 horas y llegaron muchos vecinos».</div>`,
      qs: [
        { t: 'choice', q: '¿Qué pregunta NO se puede responder con los datos de la noticia?', o: ['¿Cuánto dinero juntó Pipa con las empanadas?', '¿Cuántas cosas vendió Pipa en total?', '¿Cuántos vecinos llegaron a la feria?'], a: 2 },
        { t: 'prob', q: '¿Cuánto dinero juntó Pipa en total con las empanadas y los jugos?', scaffold: true, a: '18 × 3 = 54; 12 × 2 = 24; 54 + 24 = 78. Juntó S/ 78. (Las 4 horas no se usan).' },
        { t: 'open', q: 'Escribe tú una pregunta nueva que se pueda responder con la noticia. Después, respóndela.', lines: 2, a: 'Ejemplo: «¿Cuántas empanadas más que jugos vendió?». 18 − 12 = 6 empanadas más.' },
      ],
      tip: 'Lean juntos una boleta del mercado o un folleto de ofertas y túrnense para hacer preguntas: «¿cuánto costaron las papas?», «¿qué fue lo más caro?». Preguntar bien es tan importante como responder.',
    },
  ],
};
