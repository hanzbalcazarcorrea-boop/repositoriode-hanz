// Súper Mate · 6-7 años: sumas y restas hasta 100, comparar, dinero y hora.
module.exports = {
  age: '6 a 7 años',
  slug: '6-7-anos',
  mode: 'basic',
  retos: [
    {
      title: 'Las figuritas de Mateo', skill: '¿Qué me preguntan?', art: '🃏',
      lu: 'Antes de hacer cuentas, busca la pregunta. Casi siempre está al final y lleva signos ¿ ?',
      qs: [
        { t: 'prob', q: 'Mateo tiene 12 figuritas. Su primo le regala 7 figuritas más. ¿Cuántas figuritas tiene Mateo ahora?', scaffold: true, a: '12 + 7 = 19. Mateo tiene 19 figuritas.' },
        { t: 'choice', q: '«Ana tiene 8 colores y pierde 3. ¿Cuántos colores le quedan?» ¿Qué te preguntan?', o: ['cuántos colores tenía', 'cuántos colores perdió', 'cuántos colores le quedan'], a: 2 },
        { t: 'prob', q: 'Ahora resuélvelo: Ana tiene 8 colores y pierde 3. ¿Cuántos colores le quedan?', a: '8 − 3 = 5. Le quedan 5 colores.' },
      ],
      tip: 'Pídele que te diga la pregunta con sus palabras antes de resolver: «me preguntan cuántas figuritas tiene ahora». Si la puede decir, la entendió.',
    },
    {
      title: 'La panadería de Rosa', skill: 'Juntar: sumar', art: '🥖',
      lu: '«En total», «juntos» y «ahora tiene» muchas veces nos dicen que hay que juntar. ¡Pero lee bien!',
      qs: [
        { t: 'prob', q: 'La señora Rosa vendió 25 panes en la mañana y 14 panes en la tarde. ¿Cuántos panes vendió en total?', scaffold: true, a: '25 + 14 = 39. Vendió 39 panes.' },
        { t: 'prob', q: 'Coco guarda 30 huesos en una caja y 20 en otra. ¿Cuántos huesos tiene en total?', a: '30 + 20 = 50. Tiene 50 huesos.' },
        { t: 'tf', q: 'Marca V o F.', items: [['Si me preguntan «en total», muchas veces tengo que juntar.', true], ['Siempre que veo números grandes, tengo que restar.', false]] },
      ],
      tip: 'Las «palabras pista» ayudan, pero no son mágicas. Pregunta siempre: «¿qué está pasando en el problema?, ¿se junta o se quita?».',
    },
    {
      title: 'Los caramelos de Tito', skill: 'Quitar: restar', img: 'tito.jpg',
      lu: 'Si algo se regala, se pierde, se come o se va… ¡queda menos! Eso es restar.',
      qs: [
        { t: 'prob', q: 'Tito tenía 18 caramelos. Repartió 6 entre sus amigos. ¿Cuántos caramelos le quedan?', scaffold: true, a: '18 − 6 = 12. Le quedan 12 caramelos.' },
        { t: 'prob', q: 'En el bus iban 27 personas. En el paradero bajaron 5. ¿Cuántas personas quedaron en el bus?', a: '27 − 5 = 22. Quedaron 22 personas.' },
        { t: 'choice', q: '«Tenía 15 stickers y regalé 4». ¿Qué operación usas?', o: ['suma', 'resta'], a: 1 },
      ],
      tip: 'Si se confunde entre sumar y restar, que lo actúe con objetos: «tienes 18 caramelos (usen frejoles), regalas 6…». La acción le dice la operación.',
    },
    {
      title: '¿Quién leyó más?', skill: 'Comparar: ¿cuántos más?', img: 'lu-lee.jpg',
      lu: '«¿Cuántos más?» no es juntar: es buscar la diferencia entre dos números. ¡Se resta!',
      qs: [
        { t: 'prob', q: 'Lu leyó 13 cuentos y Pipa leyó 9 cuentos. ¿Cuántos cuentos más leyó Lu que Pipa?', scaffold: true, a: '13 − 9 = 4. Lu leyó 4 cuentos más.' },
        { t: 'prob', q: 'Rocío mide 120 cm y su hermano Diego mide 98 cm. ¿Cuántos centímetros más mide Rocío?', a: '120 − 98 = 22. Rocío mide 22 cm más.' },
        { t: 'choice', q: '¿Quién leyó menos cuentos?', o: ['Lu', 'Pipa', 'leyeron igual'], a: 1 },
      ],
      tip: 'Los problemas de «comparar» son los más difíciles a esta edad. Dibujen dos filas de puntitos, una debajo de otra: la diferencia se ve.',
    },
    {
      title: 'Las bancas del parque', skill: 'Dibujo el problema', art: '🪑',
      lu: 'Si no sabes cómo empezar, ¡dibújalo! Con palitos y bolitas ya se entiende todo.',
      qs: [
        { t: 'prob', q: 'En el parque hay 4 bancas. En cada banca se sientan 2 niños. ¿Cuántos niños hay sentados?', scaffold: true, a: '2 + 2 + 2 + 2 = 8. Hay 8 niños sentados.' },
        { t: 'prob', q: 'Una mesa tiene 4 patas. ¿Cuántas patas tienen 3 mesas?', a: '4 + 4 + 4 = 12. Tienen 12 patas.' },
        { t: 'open', q: '¿Te ayudó dibujar? ¿Por qué?', lines: 1, a: 'Respuesta libre.' },
      ],
      tip: 'No le pidas dibujos bonitos: bolitas y palitos bastan. Dibujar el problema es la estrategia número uno de los buenos resolvedores.',
    },
    {
      title: 'Los stickers de Valentina', skill: 'Datos que sobran', art: '⭐',
      lu: 'A veces el problema trae números que no se usan. ¡No caigas en la trampa! Usa solo los que necesitas.',
      qs: [
        { t: 'prob', q: 'Valentina tiene 7 años. Compró 10 stickers de estrellas y 5 de corazones. ¿Cuántos stickers compró?', scaffold: true, a: '10 + 5 = 15. Compró 15 stickers. (La edad no se usa).' },
        { t: 'choice', q: '¿Qué dato no necesitas para resolverlo?', o: ['que tiene 7 años', 'los 10 stickers de estrellas', 'los 5 de corazones'], a: 0 },
        { t: 'prob', q: 'El bus de Simón sale a las 7 de la mañana. Lleva 20 niños y suben 8 más. ¿Cuántos niños van ahora?', a: '20 + 8 = 28. Van 28 niños. (La hora no se usa).' },
      ],
      tip: 'Muchos niños usan todos los números que ven. Pídele que tache con una línea los datos que no sirven antes de resolver.',
    },
    {
      title: 'De compras en el quiosco', skill: 'Problemas con soles', art: '🪙',
      lu: 'Con dinero se suma lo que gastas y se resta para saber cuánto te sobra.',
      qs: [
        { t: 'prob', q: 'Mamá le da a Inés S/ 10 para el quiosco. Ella compra un jugo de S/ 3 y una fruta de S/ 2. ¿Cuánto gastó?', scaffold: true, a: '3 + 2 = 5. Gastó S/ 5.' },
        { t: 'prob', q: '¿Cuánto dinero le sobró a Inés?', a: '10 − 5 = 5. Le sobraron S/ 5.' },
        { t: 'choice', q: 'Si tienes S/ 5, ¿qué puedes comprar?', o: ['un juguete de S/ 8', 'un lápiz de S/ 2 y un borrador de S/ 1', 'tres cuadernos de S/ 4'], a: 1 },
      ],
      tip: 'Dale monedas de verdad (o de papel) y jueguen a la bodega. Pagar y calcular el vuelto es matemática que entiende al instante.',
    },
    {
      title: 'El taller de pintura', skill: 'Problemas con la hora', art: '⏰',
      lu: 'Para saber a qué hora termina algo, empieza en la hora de inicio y avanza.',
      qs: [
        { t: 'prob', q: 'El taller de pintura empieza a las 3 de la tarde y dura 2 horas. ¿A qué hora termina?', scaffold: true, a: '3 + 2 = 5. Termina a las 5 de la tarde.' },
        { t: 'choice', q: 'Mateo se duerme a las 8 de la noche y se despierta a las 7 de la mañana. ¿Cuántas horas durmió?', o: ['9 horas', '10 horas', '11 horas'], a: 2 },
        { t: 'open', q: '¿A qué hora entras al colegio? ¿Y a qué hora sales? ¿Cuántas horas estás en el colegio?', lines: 2, a: 'Respuesta libre (cuenten las horas juntos).' },
      ],
      tip: 'Usen un reloj de agujas de la casa y muevan las horas con el dedo. Contar horas «saltando» de una en una lo hace visible.',
    },
    {
      title: '¿Tiene sentido?', skill: 'Reviso mi respuesta', img: 'lu-lupa.jpg',
      lu: 'Al terminar, pregúntate: ¿mi respuesta tiene sentido? Si se comió galletas, ¡no puede tener más que antes!',
      qs: [
        { t: 'tf', q: 'Coco tenía 9 galletas y se comió 3. Tito dice: «le quedan 12». Marca V o F.', items: [['Si Coco se comió galletas, debe tener menos de 9.', true], ['La respuesta de Tito tiene sentido.', false]] },
        { t: 'prob', q: 'Ayuda a Tito: Coco tenía 9 galletas y se comió 3. ¿Cuántas le quedan?', scaffold: true, a: '9 − 3 = 6. Le quedan 6 galletas.' },
        { t: 'choice', q: '¿Cuánto mide, más o menos, un niño de 7 años?', o: ['12 metros', 'un poco más de 1 metro', '3 centímetros'], a: 1 },
      ],
      tip: 'Cuando se equivoque, no le digas «está mal». Pregunta: «¿tiene sentido que le queden más galletas de las que tenía?». Él mismo lo verá.',
    },
    {
      title: '¡Ahora inventas tú!', skill: 'Invento mi problema', img: 'lu-piensa.jpg',
      lu: 'Un buen problema tiene una pequeña historia, datos con números y una pregunta.',
      qs: [
        { t: 'open', q: 'Mira los plátanos: 🍌🍌🍌🍌🍌 y 🍌🍌. Inventa un problema de sumar con ellos.', lines: 3, a: 'Ejemplo: «Tengo 5 plátanos y me regalan 2. ¿Cuántos tengo?». 5 + 2 = 7.' },
        { t: 'open', q: 'Inventa un problema de restar cuya respuesta sea 4.', lines: 3, a: 'Ejemplo: «Tenía 10 globos y se reventaron 6. ¿Cuántos me quedan?». 10 − 6 = 4.' },
        { t: 'prob', q: 'Pide a alguien de tu familia que invente un problema y resuélvelo aquí.', a: 'Respuesta libre.' },
      ],
      tip: 'Inventar problemas obliga a entender cómo están armados: historia, datos y pregunta. Resuelve tú los suyos y equivócate a propósito para que te corrija.',
    },
  ],
};
