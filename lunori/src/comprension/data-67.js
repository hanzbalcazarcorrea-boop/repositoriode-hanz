// Edición 6-7 años: textos de 50-80 palabras. El niño lee (en voz alta) y responde; mamá acompaña.
module.exports = {
  age: '6 a 7 años',
  slug: '6-7-anos',
  mode: 'basic',
  lecturas: [
    {
      title: 'El cumpleaños de Rocío', skill: '¿Quién? ¿Qué? ¿Cuándo?', art: '🎂',
      text: ['Hoy es el cumpleaños de Rocío. ¡Cumple siete años! Su abuela Rosa preparó una torta de chocolate y su hermano Diego infló globos de colores.', 'Sus amigos llegaron a las cuatro de la tarde. Todos cantaron «Feliz cumpleaños» y Rocío sopló sus siete velitas. Después jugaron a las sillas musicales.'],
      qs: [
        { t: 'choice', q: '¿Cuántos años cumple Rocío?', o: ['seis', 'siete', 'ocho'], a: 1 },
        { t: 'choice', q: '¿Quién preparó la torta?', o: ['Diego', 'su mamá', 'la abuela Rosa'], a: 2 },
        { t: 'tf', q: 'Marca V (verdadero) o F (falso).', items: [['Diego infló globos de colores.', true], ['Los amigos llegaron en la mañana.', false], ['Jugaron a las sillas musicales.', true]] },
        { t: 'open', q: '¿Qué te gustaría hacer en tu cumpleaños?', lines: 1, a: 'Respuesta libre.' },
      ],
    },
    {
      title: 'Sábado de mercado', skill: '¿Dónde pasa?', art: '🥭',
      text: ['Los sábados, Mateo acompaña a su papá al mercado. Primero van al puesto de frutas, donde la señora Juana vende mangos y plátanos.', 'Después pasan por el puesto de pescado. Al final, Mateo siempre pide un jugo de papaya en la juguería. ¡Es su parte favorita!'],
      qs: [
        { t: 'choice', q: '¿A dónde van Mateo y su papá los sábados?', o: ['al parque', 'al mercado', 'a la playa'], a: 1 },
        { t: 'choice', q: '¿Qué vende la señora Juana?', o: ['mangos y plátanos', 'pescado', 'pan'], a: 0 },
        { t: 'order', q: 'Escribe 1, 2 y 3 según el orden en que pasó.', o: ['Pasan por el puesto de pescado.', 'Mateo toma su jugo de papaya.', 'Van al puesto de frutas.'], a: [2, 3, 1] },
        { t: 'open', q: '¿Cuál es la parte favorita de Mateo?', lines: 1, a: 'Tomar un jugo de papaya en la juguería.' },
      ],
    },
    {
      title: 'La pelota voladora', skill: '¿Qué pasó?', img: 'escena-pelota.jpg', wide: true,
      text: ['Coco y Tito jugaban fútbol en el bosque. Coco pateó tan fuerte que la pelota pasó por encima de un arbusto y cayó en el jardín de Lu.', 'Los dos amigos tocaron la puerta del árbol. Lu salió sonriendo con la pelota en sus alas. —La próxima vez, patea más suave —le dijo a Coco.'],
      qs: [
        { t: 'choice', q: '¿Qué pasó con la pelota?', o: ['se reventó', 'cayó en el jardín de Lu', 'se fue al río'], a: 1 },
        { t: 'choice', q: '¿Quién les devolvió la pelota?', o: ['Pipa', 'Lu', 'Tito'], a: 1 },
        { t: 'tf', q: 'Marca V o F.', items: [['Coco y Tito jugaban fútbol.', true], ['Lu se enojó mucho.', false]] },
        { t: 'open', q: '¿Qué consejo le dio Lu a Coco?', lines: 1, a: 'Que la próxima vez patee más suave.' },
      ],
    },
    {
      title: 'Limonada fresquita', skill: 'Primero, después y al final', art: '🍋',
      text: ['Para hacer limonada necesitas 3 limones, una jarra con agua y azúcar.', 'Primero, pide a un adulto que corte los limones. Luego, exprime los limones en la jarra. Después, agrega dos cucharadas de azúcar y mueve bien. Al final, sírvela con hielo. ¡Lista para compartir!'],
      qs: [
        { t: 'order', q: 'Escribe 1, 2, 3 y 4 en el orden correcto.', o: ['Agrega azúcar y mueve.', 'Pide a un adulto que corte los limones.', 'Sírvela con hielo.', 'Exprime los limones en la jarra.'], a: [3, 1, 4, 2] },
        { t: 'choice', q: '¿Cuántos limones necesitas?', o: ['dos', 'tres', 'cinco'], a: 1 },
        { t: 'open', q: '¿Por qué un adulto debe cortar los limones?', lines: 1, a: 'Porque el cuchillo corta y puede ser peligroso.' },
      ],
    },
    {
      title: 'El colibrí', skill: 'Palabras nuevas', art: '🐦',
      text: ['El colibrí es un ave diminuta. Es tan pequeña que pesa menos que una moneda. Mueve sus alas muy rápido, ¡casi no se ven!', 'Con su pico largo toma el néctar, que es el juguito dulce de las flores. En el Perú viven muchas clases de colibríes.'],
      qs: [
        { t: 'choice', q: '«Diminuta» quiere decir…', o: ['muy grande', 'muy pequeña', 'muy rápida'], a: 1 },
        { t: 'choice', q: '¿Qué es el néctar?', o: ['el juguito dulce de las flores', 'una semilla', 'una hoja'], a: 0 },
        { t: 'tf', q: 'Marca V o F.', items: [['El colibrí pesa más que una moneda.', false], ['Mueve sus alas muy rápido.', true]] },
        { t: 'open', q: 'Escribe otra palabra que signifique «pequeño».', lines: 1, a: 'Chiquito, pequeñito, chico, menudo…' },
      ],
    },
    {
      title: 'Las plantas de Nico', skill: '¿Por qué pasó?', art: '🪴',
      text: ['Nico puso dos plantas iguales en su casa. Una la dejó junto a la ventana, donde le daba el sol. La otra la guardó dentro de un armario oscuro. Las dos recibieron agua.', 'Después de una semana, la planta de la ventana estaba verde y grande. La del armario estaba amarilla y débil.'],
      qs: [
        { t: 'choice', q: '¿Por qué la planta del armario se puso amarilla?', o: ['porque no tuvo agua', 'porque no recibió sol', 'porque era más pequeña'], a: 1 },
        { t: 'tf', q: 'Marca V o F.', items: [['Solo una planta recibió agua.', false], ['La planta de la ventana creció verde y grande.', true]] },
        { t: 'open', q: '¿Qué necesitan las plantas para crecer sanas?', lines: 1, a: 'Sol y agua (luz, agua y tierra).' },
      ],
    },
    {
      title: 'El primer día de Inés', skill: '¿Cómo se siente?', art: '🎒',
      text: ['Era el primer día de Inés en su nuevo colegio. Le sudaban las manos y apretaba fuerte su mochila. No conocía a nadie.', 'En el recreo, una niña de trenzas se acercó y le dijo: —¿Quieres jugar con nosotras? Inés sonrió de oreja a oreja. En casa, le contó a su mamá que ya tenía una amiga.'],
      qs: [
        { t: 'choice', q: 'Al inicio, ¿cómo se sentía Inés?', o: ['nerviosa', 'aburrida', 'enojada'], a: 0 },
        { t: 'open', q: '¿Qué pistas del texto te lo dicen?', lines: 1, a: 'Le sudaban las manos, apretaba su mochila, no conocía a nadie.' },
        { t: 'choice', q: 'Al final, ¿cómo se sentía?', o: ['triste', 'feliz', 'con miedo'], a: 1 },
        { t: 'open', q: '¿Qué puedes hacer tú si ves a un niño nuevo solito?', lines: 1, a: 'Respuesta libre (invitarlo a jugar, saludarlo…).' },
      ],
    },
    {
      title: 'Nubes negras', skill: '¿Qué pasará?', art: '⛈️',
      text: ['La familia Quispe salió de paseo al campo. Llevaron una manta, sánguches y una pelota.', 'Mientras comían, el cielo se llenó de nubes negras y empezó a soplar un viento frío. A lo lejos se escuchó un trueno. Papá miró hacia arriba y dijo: —Niños, guarden las cosas rápido.'],
      qs: [
        { t: 'choice', q: '¿Qué crees que pasará?', o: ['saldrá un arcoíris enseguida', 'va a llover', 'va a hacer mucho calor'], a: 1 },
        { t: 'open', q: '¿Qué pistas te ayudaron a adivinar?', lines: 1, a: 'Las nubes negras, el viento frío y el trueno.' },
        { t: 'open', q: '¿Qué debería hacer la familia?', lines: 1, a: 'Guardar las cosas y buscar dónde protegerse de la lluvia.' },
      ],
    },
    {
      title: 'El oso de anteojos', skill: '¿De qué trata?', art: '🐻',
      text: ['El oso de anteojos es el único oso de Sudamérica, y vive en el Perú. Se llama así porque tiene manchas claras alrededor de los ojos, ¡como si usara lentes!', 'Le gusta trepar árboles y comer frutas, hojas y miel. Hoy quedan pocos osos de anteojos. Por eso es importante cuidar los bosques donde viven.'],
      qs: [
        { t: 'choice', q: '¿De qué trata principalmente el texto?', o: ['de cómo hacer miel', 'del oso de anteojos', 'de los árboles'], a: 1 },
        { t: 'open', q: '¿Por qué se llama «de anteojos»?', lines: 1, a: 'Porque tiene manchas claras alrededor de los ojos, como lentes.' },
        { t: 'tf', q: 'Marca V o F.', items: [['Le gusta comer frutas y miel.', true], ['Hay muchísimos osos de anteojos.', false]] },
      ],
    },
    {
      title: '¿Tablet o pelota?', skill: '¿Qué opino yo?', art: '⚽',
      text: ['Simón quería jugar con la tablet toda la tarde. Su hermana Ale le propuso salir a jugar con la pelota.', 'Al principio Simón no quería, pero salió un ratito. Corrieron, saltaron y se rieron mucho. Cuando entraron, Simón dijo: —¡Mañana salimos otra vez!'],
      qs: [
        { t: 'choice', q: '¿Qué quería hacer Simón al principio?', o: ['jugar con la tablet', 'dormir', 'leer un cuento'], a: 0 },
        { t: 'open', q: '¿Por qué crees que Simón quiso salir otra vez?', lines: 1, a: 'Porque se divirtió mucho jugando con su hermana.' },
        { t: 'open', q: '¿Qué prefieres tú: pantalla o jugar afuera? ¿Por qué?', lines: 2, a: 'Respuesta libre (que dé una razón).' },
      ],
    },
  ],
};
