// Edición 5 años · Nivel 2 (Vuelo): mamá lee en voz alta; textos un poco más largos, más pistas y más tipos de texto.
module.exports = {
  age: '5 años',
  slug: '5-anos',
  mode: 'pre',
  lecturas: [
    {
      title: 'El abuelo de Renata', skill: '¿Cómo es?', art: '👴',
      text: ['El abuelo de Renata tiene bigote blanco y un sombrero grande.', 'Es muy alegre: siempre canta mientras cocina.', 'Hoy prepara picarones con miel para Renata.', '¡Mmm, qué ricos!'],
      qs: [
        { t: 'pic', q: '¿Qué lleva el abuelo en la cabeza?', o: [['🤠', 'un sombrero grande'], ['🧢', 'una gorra'], ['👑', 'una corona']], a: 0 },
        { t: 'pic', q: '¿Cómo sabemos que el abuelo es alegre? Porque siempre…', o: [['🎵', 'canta'], ['😴', 'duerme'], ['😭', 'llora']], a: 0 },
        { t: 'draw', q: 'Dibuja al abuelo de Renata. ¡No te olvides de su bigote blanco!', h: 44 },
      ],
      tip: 'Jueguen a describir a alguien de la familia: «¿cómo es por fuera?, ¿cómo es por dentro?». Así aprende a fijarse en cómo son los personajes.',
    },
    {
      title: '¿Quién toca la puerta?', skill: 'Descubrir con pistas', img: 'pipa.jpg',
      text: ['Toc, toc. Alguien toca la puerta de Pipa.', 'Pipa escucha: «¡Guau, guau!».', 'Por la ventana ve una cola que se mueve.', 'Y algo huele a queso… ¿Quién será?'],
      qs: [
        { t: 'pic', q: '¿Quién toca la puerta de Pipa?', o: [['🐭', 'Tito'], ['🐶', 'Coco'], ['🦉', 'Lu']], a: 1 },
        { t: 'say', q: '¿Cómo supiste que era Coco? Dile a mamá dos pistas.', a: 'Hace «guau, guau», tiene cola y huele a queso (a Coco le encanta el queso).' },
        { t: 'draw', q: 'Dibuja a Coco tocando la puerta de Pipa.', h: 44 },
      ],
      tip: 'Cuando adivine, pregúntale siempre «¿cómo lo supiste?». Nombrar la pista (el «guau», el queso) le enseña que las respuestas están escondidas en el cuento.',
    },
    {
      title: 'Diego en la chacra', skill: '¿Qué quiere decir?', art: '🥔',
      text: ['Diego visita la chacra de su tía.', 'En la chacra crecen papas y habas, y vive un burrito.', 'Diego camina y camina por la chacra.', 'Al final está agotado: se sienta bajo un árbol y descansa.'],
      qs: [
        { t: 'pic', q: '¿Qué es una chacra? Piensa en lo que crece allí.', o: [['🌱', 'un campo para sembrar'], ['🏖️', 'una playa'], ['🏪', 'una tienda']], a: 0 },
        { t: 'pic', q: '«Agotado» quiere decir…', o: [['🥱', 'muy cansado'], ['😋', 'con hambre'], ['🥶', 'con frío']], a: 0 },
        { t: 'draw', q: 'Dibuja la chacra de la tía de Diego, con sus papas y su burrito.', h: 44 },
      ],
      tip: 'Antes de explicarle qué es «agotado», pregúntale: «¿cómo estaría Diego después de caminar tanto?». Que descubra el significado con las pistas del cuento.',
    },
    {
      title: 'Camila va al colegio', skill: 'Ordenar la historia', art: '🎒',
      text: ['Camila se despierta temprano.', 'Primero se lava la cara.', 'Después se pone el uniforme.', 'Luego toma su desayuno: pan con huevo.', 'Al final sube a la combi con mamá. ¡Al colegio!'],
      qs: [
        { t: 'order', q: 'Escribe 1, 2, 3 y 4 en el orden en que pasó.', o: ['👕 Se pone el uniforme.', '🚐 Sube a la combi.', '💧 Se lava la cara.', '🍳 Toma su desayuno.'], a: [2, 4, 1, 3] },
        { t: 'pic', q: '¿Cuándo pasa este cuento?', o: [['🌅', 'en la mañana'], ['🌙', 'en la noche']], a: 0 },
        { t: 'say', q: 'Y tú, ¿qué haces primero cuando te despiertas? Cuéntaselo a mamá.' },
      ],
      tip: 'Pídele que te cuente su mañana con «primero, después, luego y al final». Si se salta un paso, pregúntale: «¿y antes de eso qué pasó?».',
    },
    {
      title: 'Yaku y su bicicleta', skill: '¿Qué siente y por qué?', art: '🚲',
      text: ['Yaku aprende a montar bicicleta.', 'Se cae una vez… y otra vez.', 'Yaku se pone triste, pero no se rinde.', 'Papá lo ayuda a intentarlo de nuevo.', '¡Al final Yaku pedalea solito! Grita: «¡Lo logré!».'],
      qs: [
        { t: 'pic', q: '¿Cómo se siente Yaku al final?', o: [['😢', 'triste'], ['🤩', 'orgulloso y feliz'], ['😠', 'enojado']], a: 1 },
        { t: 'pic', q: '¿Por qué se siente así?', o: [['🚲', 'pedaleó solito'], ['🍬', 'le dieron un dulce'], ['🎁', 'le dieron un regalo']], a: 0 },
        { t: 'say', q: '¿Qué cosa te costó aprender a ti? ¿Cómo te sentiste cuando lo lograste? (Mamá lo escribe.)', lines: 2 },
      ],
      tip: 'Además de nombrar la emoción, pregúntale «¿por qué se siente así?». Unir lo que siente un personaje con lo que le pasó es un gran paso en la comprensión.',
    },
    {
      title: 'Ensalada de frutas', skill: 'Seguir una receta', type: 'Receta', art: '🍌',
      text: ['<b>Necesitas:</b> un plátano, una mandarina y un pedazo de papaya.', '<b>1.</b> Mamá pela y corta las frutas en pedacitos.', '<b>2.</b> Pon todo en un plato hondo.', '<b>3.</b> Mezcla con una cuchara. ¡A comer!'],
      qs: [
        { t: 'pic', q: '¿Qué fruta va en esta ensalada?', o: [['🍇', 'uvas'], ['🍌', 'plátano'], ['🍓', 'fresas']], a: 1 },
        { t: 'order', q: 'Escribe 1, 2 y 3: ¿qué se hace primero?', o: ['🥄 Mezcla con una cuchara.', '🍊 Mamá pela y corta las frutas.', '🍽️ Pon todo en un plato hondo.'], a: [3, 1, 2] },
        { t: 'say', q: '¿Por qué crees que mamá corta las frutas y no tú? (Mamá lo escribe.)', lines: 2, a: 'Porque el cuchillo puede cortar los dedos: lo usa un adulto.' },
      ],
      tip: '¡Prepárenla de verdad! Antes de cada paso, que te diga qué toca hacer mirando el número. Leer para hacer algo también es comprender.',
    },
    {
      title: 'El sapito saltarín', skill: 'Leer una rima', type: 'Rima', art: '🐸',
      text: ['Un sapito verde salta en el jardín.<br>Salta que salta, ¡salta sin fin!', 'Ve una mosca y abre la boca…<br>¡Ay, se le escapa la mosca loca!'],
      qs: [
        { t: 'pic', q: '¿El sapito atrapa la mosca?', o: [['😋', 'sí, se la come'], ['💨', 'no, se le escapa']], a: 1 },
        { t: 'pic', q: '«Jardín» rima con «fin». ¿Qué otra palabra rima con «jardín»?', o: [['🦁', 'león'], ['🐬', 'delfín'], ['🐻', 'oso']], a: 1 },
        { t: 'draw', q: 'Dibuja al sapito verde y a la mosca loca.', h: 44 },
      ],
      tip: 'Lean la rima dos veces y, la segunda, haz una pausa para que él diga la última palabra de cada línea. Las rimas entrenan el oído y la memoria.',
    },
    {
      title: 'El colibrí', skill: 'Aprender datos', type: 'Texto informativo', art: '🌺',
      text: ['El colibrí es un pájaro muy pequeño.', 'Mueve sus alas tan rápido que zumban: ¡zzzz!', 'Con su pico largo toma el jugo dulce de las flores.', '¡Y puede volar hacia atrás!', 'En el Perú hay muchos colibríes.'],
      qs: [
        { t: 'pic', q: '¿Qué toma el colibrí?', o: [['🌺', 'jugo de flores'], ['🥛', 'leche'], ['☕', 'café']], a: 0 },
        { t: 'pic', q: '¿Qué cosa especial puede hacer el colibrí?', o: [['⏪', 'volar hacia atrás'], ['🏊', 'nadar en el mar'], ['🗣️', 'hablar']], a: 0 },
        { t: 'draw', q: 'Dibuja un colibrí tomando el jugo de una flor.', h: 44 },
      ],
      tip: 'Este texto enseña cosas reales, no es un cuento. Pregúntale: «¿qué aprendiste del colibrí?» y deja que te lo cuente con sus palabras.',
    },
    {
      title: 'El castillo de arena', skill: '¿Qué pasará después?', art: '🏰',
      text: ['Valentina hace un castillo de arena en la playa.', 'Le pone conchitas y una banderita.', 'Pero el mar está cada vez más cerca…', '¡Y viene una ola grande!'],
      qs: [
        { t: 'pic', q: '¿Qué le pone Valentina a su castillo?', o: [['🐚', 'conchitas'], ['🍬', 'caramelos'], ['🌸', 'flores']], a: 0 },
        { t: 'pic', q: '¿Qué crees que pasará con el castillo?', o: [['🌊', 'la ola lo deshace'], ['🚀', 'sale volando'], ['🏰', 'crece más']], a: 0 },
        { t: 'draw', q: '¿Qué pasa después? Dibújalo y cuéntaselo a mamá.', h: 44 },
      ],
      tip: 'Detente en «una ola grande» y pregunta: «¿qué crees que va a pasar?». Luego pídele una razón: «¿por qué crees eso?».',
    },
    {
      title: 'Killa y Mateo', skill: '¿En qué se parecen?', art: '👫',
      text: ['Killa y Mateo son hermanos.', 'Killa es alta y tiene el pelo largo.', 'Mateo es bajito y tiene el pelo corto.', 'Pero se parecen en algo: ¡a los dos les encanta bailar marinera!'],
      qs: [
        { t: 'pic', q: '¿Quién tiene el pelo largo?', o: [['👧', 'Killa'], ['👦', 'Mateo']], a: 0 },
        { t: 'pic', q: '¿En qué se parecen Killa y Mateo?', o: [['💃', 'les encanta bailar'], ['🍦', 'comen helado'], ['⚽', 'juegan fútbol']], a: 0 },
        { t: 'draw', q: 'Dibuja a Killa y a Mateo bailando marinera.', h: 44 },
      ],
      tip: 'Jueguen a «se parecen y son diferentes» con cosas de la casa: una taza y un vaso, un gato y un perro. Comparar ordena el pensamiento.',
    },
  ],
};
