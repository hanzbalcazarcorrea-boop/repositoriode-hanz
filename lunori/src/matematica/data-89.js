// Súper Mate · 8-9 años: multiplicación y división, dos pasos, dinero, fracciones, medidas y tablas.
module.exports = {
  age: '8 a 9 años',
  slug: '8-9-anos',
  mode: 'mid',
  retos: [
    {
      title: 'El paseo de 4.º grado', skill: '¿Qué me preguntan?', art: '🚌',
      lu: 'Dos problemas pueden tener los mismos datos y preguntas distintas. ¡La pregunta decide la operación!',
      qs: [
        { t: 'prob', q: 'Para el paseo, 4.º grado tiene 3 secciones de 28 alumnos cada una. ¿Cuántos alumnos van al paseo?', scaffold: true, a: '3 × 28 = 84. Van 84 alumnos.' },
        { t: 'choice', q: 'Ahora te preguntan: «¿cuántos buses de 40 asientos se necesitan para los 84 alumnos?». ¿Qué debes hacer?', o: ['multiplicar 84 × 40', 'dividir 84 entre 40 y pensar qué pasa con los que sobran', 'sumar 84 + 40'], a: 1 },
        { t: 'prob', q: '¿Cuántos buses de 40 asientos necesitan? ¡Ojo: nadie se puede quedar!', a: '84 ÷ 40 = 2 y sobran 4 alumnos. Necesitan 3 buses.' },
      ],
      tip: 'En el problema de los buses, muchos niños responden «2,1 buses» o «2 buses». Pregúntale: «¿y los 4 alumnos que sobran se quedan en el colegio?». Así aprende a interpretar el resultado.',
    },
    {
      title: 'Las bolitas de Coco', skill: '«Cada uno» y «repartir»', img: 'coco.jpg',
      lu: 'Si se reparte en partes iguales, se divide. Si hay grupos iguales y quiero el total, se multiplica.',
      qs: [
        { t: 'prob', q: 'Coco preparó 36 bolitas de avena y las repartió en partes iguales en 4 táperes. ¿Cuántas bolitas puso en cada táper?', scaffold: true, a: '36 ÷ 4 = 9. Puso 9 bolitas en cada táper.' },
        { t: 'prob', q: 'Cada caja trae 12 lápices. La profesora compró 6 cajas. ¿Cuántos lápices compró?', a: '6 × 12 = 72. Compró 72 lápices.' },
        { t: 'tf', q: 'Marca V o F.', items: [['«Repartir en partes iguales» suele indicar una división.', true], ['«Cada uno» siempre significa sumar.', false]] },
      ],
      tip: 'Que explique con sus palabras: «son 4 táperes y en cada uno va lo mismo». Si puede contar la situación, elegirá bien la operación.',
    },
    {
      title: 'Las compras de Yaku', skill: 'Problemas de dos pasos', art: '🛍️',
      lu: 'Algunos problemas se resuelven por partes. Primero averigua lo que falta, y después responde la pregunta.',
      qs: [
        { t: 'prob', q: 'Yaku compró 3 cuadernos de S/ 4 cada uno y una regla de S/ 2. Pagó con un billete de S/ 20. ¿Cuánto le dieron de vuelto?', scaffold: true, a: '3 × 4 = 12; 12 + 2 = 14; 20 − 14 = 6. Le dieron S/ 6 de vuelto.' },
        { t: 'order', q: 'Ordena los pasos que usaste (1, 2 y 3).', o: ['Resto lo que gasté de los S/ 20.', 'Calculo cuánto cuestan los 3 cuadernos.', 'Le sumo el precio de la regla.'], a: [3, 1, 2] },
        { t: 'prob', q: 'En una granja hay 5 corrales con 8 gallinas cada uno. Vendieron 12 gallinas. ¿Cuántas gallinas quedan?', a: '5 × 8 = 40; 40 − 12 = 28. Quedan 28 gallinas.' },
      ],
      tip: 'En los problemas de dos pasos, ayúdalo con una pregunta: «¿qué necesitas saber primero?». Escribir cada paso en una línea distinta evita confusiones.',
    },
    {
      title: 'Los robots de Bruno', skill: 'Datos que sobran o faltan', img: 'club.jpg',
      lu: 'Antes de calcular, revisa: ¿tengo todos los datos? ¿Hay alguno que no sirve?',
      qs: [
        { t: 'choice', q: '«Nina tiene 9 años y compra 4 paquetes de galletas. ¿Cuánto pagó?». ¿Se puede resolver?', o: ['Sí: 9 × 4 = 36', 'No: falta saber cuánto cuesta cada paquete', 'Sí: 9 + 4 = 13'], a: 1 },
        { t: 'prob', q: 'Bruno armó 6 robots. Usó 7 tornillos en cada robot y tardó 2 horas en total. ¿Cuántos tornillos usó?', scaffold: true, a: '6 × 7 = 42. Usó 42 tornillos. (Las 2 horas no se usan).' },
        { t: 'open', q: 'En el problema de Bruno, ¿qué dato sobra?', lines: 1, a: 'Que tardó 2 horas.' },
      ],
      tip: 'Un truco: que subraye con azul los datos que usará y tache los que no. Si «sobra» o «falta» un dato, es señal de que leyó con atención.',
    },
    {
      title: 'La pizza familiar', skill: 'La mitad y la cuarta parte', art: '🍕',
      lu: 'La mitad es dividir entre 2. La cuarta parte es dividir entre 4. ¡Partes iguales!',
      qs: [
        { t: 'prob', q: 'Mamá compró una pizza cortada en 8 tajadas. Los niños se comieron la mitad. ¿Cuántas tajadas comieron?', scaffold: true, a: '8 ÷ 2 = 4. Comieron 4 tajadas.' },
        { t: 'prob', q: 'Lu tiene 20 libros. La cuarta parte son de aventuras. ¿Cuántos libros de aventuras tiene?', a: '20 ÷ 4 = 5. Tiene 5 libros de aventuras.' },
        { t: 'draw', q: 'Dibuja una pizza cortada en 4 partes iguales y pinta 3 de ellas. ¿Qué fracción pintaste?', h: 30 },
      ],
      tip: 'Las fracciones se entienden mejor con comida: partan una torta, una naranja o una tortilla en partes iguales y nombren cada parte.',
    },
    {
      title: 'Las caminatas de Pipa', skill: 'Problemas con medidas', img: 'pipa.jpg',
      lu: 'Fíjate en la unidad: metros, kilos, litros. ¡Tu respuesta también la lleva!',
      qs: [
        { t: 'prob', q: 'Pipa camina 250 metros para ir al río y 250 metros para volver, todos los días. ¿Cuántos metros camina en una semana?', scaffold: true, a: '250 + 250 = 500; 500 × 7 = 3500. Camina 3500 metros (3,5 km).' },
        { t: 'choice', q: '¿Cuánto pesa, más o menos, una sandía?', o: ['3 gramos', '3 kilos', '300 kilos'], a: 1 },
        { t: 'prob', q: 'Un rollo tiene 10 metros de cinta. Zara corta 4 trozos de 2 metros. ¿Cuánta cinta queda?', a: '4 × 2 = 8; 10 − 8 = 2. Quedan 2 metros.' },
      ],
      tip: 'Tengan a mano una cinta métrica y una balanza de cocina. Pesar y medir cosas reales le da «sentido de medida» para revisar sus respuestas.',
    },
    {
      title: 'La feria de jugos', skill: 'Leer una tabla', art: '🧃',
      lu: 'Primero lee el título de la tabla. Después busca la fila y la columna que necesitas.',
      intro: `<b>Jugos vendidos en la feria del colegio</b><table class="t" style="margin-top:2mm"><tr><th>Día</th><th>Lunes</th><th>Martes</th><th>Miércoles</th><th>Jueves</th><th>Viernes</th></tr><tr><td><b>Jugos</b></td><td>15</td><td>22</td><td>18</td><td>30</td><td>25</td></tr></table>`,
      qs: [
        { t: 'open', q: '¿Qué día vendieron más jugos? ¿Cuántos?', lines: 1, a: 'El jueves: 30 jugos.' },
        { t: 'prob', q: '¿Cuántos jugos vendieron en toda la semana?', a: '15 + 22 + 18 + 30 + 25 = 110 jugos.' },
        { t: 'prob', q: 'Si cada jugo cuesta S/ 2, ¿cuánto dinero juntaron en la semana?', a: '110 × 2 = 220. Juntaron S/ 220.' },
        { t: 'choice', q: '¿Cuántos jugos más vendieron el jueves que el lunes?', o: ['15', '45', '30'], a: 0 },
      ],
      tip: 'Busquen tablas en la vida real: el horario del colegio, la tabla nutricional de una caja de leche, una boleta del mercado. Leer tablas es comprensión lectora.',
    },
    {
      title: 'La entrada al museo', skill: 'Estimo y reviso', img: 'lu-lupa.jpg',
      lu: 'Antes de calcular, adivina más o menos cuánto saldrá. Si tu respuesta está muy lejos, ¡revísala!',
      qs: [
        { t: 'choice', q: 'Tito calculó que 49 + 52 = 911. Sin hacer la cuenta, ¿por qué está mal?', o: ['porque 50 + 50 es cerca de 100, no de 900', 'porque no se pueden sumar números impares', 'está bien'], a: 0 },
        { t: 'prob', q: 'La entrada al museo cuesta S/ 8 para adultos, y los niños pagan la mitad. Van 2 adultos y 3 niños. ¿Cuánto pagan en total?', scaffold: true, a: 'Adultos: 2 × 8 = 16. Niños: 8 ÷ 2 = 4; 3 × 4 = 12. Total: 16 + 12 = S/ 28.' },
        { t: 'choice', q: 'Antes de calcular, ¿cuánto crees que debía salir más o menos?', o: ['menos de S/ 10', 'entre S/ 20 y S/ 40', 'más de S/ 100'], a: 1 },
      ],
      tip: 'Estimar es la mejor herramienta para revisar. Antes de cada problema pregunta: «¿cuánto crees que saldrá, más o menos?». Después comparen.',
    },
    {
      title: 'La función de títeres', skill: 'Problemas con el tiempo', art: '🎭',
      lu: 'Recuerda: 1 hora tiene 60 minutos. Si pasas de 60, ¡avanzas una hora!',
      qs: [
        { t: 'prob', q: 'La función de títeres empieza a las 4:30 p. m. y dura 45 minutos. ¿A qué hora termina?', scaffold: true, a: '4:30 + 30 min = 5:00; + 15 min = 5:15. Termina a las 5:15 p. m.' },
        { t: 'prob', q: 'Simón practica piano 20 minutos cada día. ¿Cuántos minutos practica en 6 días? ¿Cuántas horas son?', a: '6 × 20 = 120 minutos = 2 horas.' },
        { t: 'choice', q: '¿Cuántos días tienen 3 semanas?', o: ['14', '21', '30'], a: 1 },
      ],
      tip: 'Hagan juntos el horario de la tarde: «si empiezas la tarea a las 4:15 y te demoras 40 minutos, ¿a qué hora terminas?». Así el tiempo cobra sentido.',
    },
    {
      title: '¡Ahora inventas tú!', skill: 'Invento mi problema', img: 'lu-piensa.jpg',
      lu: 'Un buen problema tiene una historia, datos, una pregunta clara… ¡y una respuesta que tenga sentido!',
      qs: [
        { t: 'open', q: 'Inventa un problema de dos pasos con estos datos: 5 bolsas, 6 mandarinas en cada bolsa, se comen 4 mandarinas.', lines: 3, a: 'Ejemplo: «Hay 5 bolsas con 6 mandarinas cada una y se comen 4. ¿Cuántas quedan?». 5 × 6 = 30; 30 − 4 = 26.' },
        { t: 'open', q: 'Inventa un problema que se resuelva con una multiplicación y cuya respuesta sea 24.', lines: 3, a: 'Ejemplo: «Compro 4 paquetes de 6 galletas. ¿Cuántas galletas tengo?». 4 × 6 = 24.' },
        { t: 'prob', q: 'Intercambia tu problema con alguien de tu familia y resuelve el suyo aquí.', a: 'Respuesta libre.' },
      ],
      tip: 'Si su problema no se puede resolver (falta un dato o la pregunta no es clara), no lo corrijas tú: intenta resolverlo y deja que descubra qué le falta.',
    },
  ],
};
