// Edición 6-7 años · Nivel 2 (Vuelo): textos de 80-110 palabras, más tipos de texto y más inferencia.
module.exports = {
  age: '6 a 7 años',
  slug: '6-7-anos',
  mode: 'basic',
  lecturas: [
    {
      title: '¡Se busca a Pelusa!', skill: 'Datos y detalles', type: 'Aviso', art: '🐈',
      text: ['<b>¡SE BUSCA!</b> Se perdió nuestra gatita Pelusa.', 'Pelusa es blanca y tiene una mancha negra en la cola. Lleva un collar rojo con un cascabel, así que a veces la puedes escuchar antes de verla.', 'Se perdió el lunes en la tarde, cerca del parque Los Olivos. Es muy cariñosa, pero se asusta con los ruidos fuertes y se esconde debajo de los carros.', 'Si la ves, no la persigas. Avísanos tocando el timbre de la casa 12 de la calle Las Flores. ¡La extrañamos mucho!<br><b>Camila y su familia</b>'],
      tip: 'Busquen juntos un aviso de verdad (en la bodega, el mercado o el colegio) y pregúntale: «¿qué quiere esta persona?, ¿qué datos nos da?».',
      qs: [
        { t: 'choice', q: '¿Para qué escribió Camila este aviso?', o: ['para vender una gatita', 'para encontrar a su gatita perdida', 'para invitar a una fiesta'], a: 1 },
        { t: 'choice', q: '¿Cómo es Pelusa?', o: ['blanca, con una mancha negra en la cola y collar rojo', 'negra, con una mancha blanca y collar azul', 'gris, sin collar y sin cascabel'], a: 0 },
        { t: 'tf', q: 'Marca V (verdadero) o F (falso).', items: [['Pelusa se perdió el lunes en la tarde.', true], ['Pelusa se perdió en la playa.', false], ['Si la ves, debes perseguirla.', false]] },
        { t: 'open', q: '¿Por qué crees que Camila pide que no la persigan?', lines: 1, a: 'Porque Pelusa se asusta y podría escaparse o esconderse más.' },
      ],
    },
    {
      title: 'Los lentes de la abuela', skill: 'Leer entre líneas', type: 'Cuento', art: '👓',
      text: ['La abuela Carmen quería leerle un cuento a Renata, pero no encontraba sus lentes. Los buscó en la cocina, junto a la olla del arroz. Los buscó debajo de los cojines del sofá. ¡Hasta revisó el bolsillo de su mandil!', '—¡Qué cabeza la mía! —dijo la abuela, rascándose la frente.', 'Renata se tapó la boca para no reírse. Luego se acercó, se puso de puntitas y tocó suavemente el pelo de su abuela. La abuela se llevó la mano a la cabeza y soltó una carcajada.', '—¡Ay, Renata! ¿Qué haría yo sin ti?'],
      tip: 'Cuando el texto no dice algo directamente, pregunta: «¿qué pista te lo dijo?». Si te señala una frase del cuento, ¡está leyendo entre líneas!',
      qs: [
        { t: 'choice', q: '¿Dónde estaban los lentes de la abuela?', o: ['en la cocina', 'en el bolsillo del mandil', 'sobre su cabeza'], a: 2 },
        { t: 'open', q: '¿Qué pistas del cuento te ayudaron a descubrirlo?', lines: 2, a: 'Renata tocó el pelo de la abuela; la abuela se llevó la mano a la cabeza y se rió.' },
        { t: 'choice', q: '¿Por qué Renata se tapó la boca?', o: ['porque tenía frío', 'porque sabía dónde estaban los lentes y le dio risa', 'porque estaba enojada'], a: 1 },
        { t: 'open', q: 'Al final, ¿cómo se sintió la abuela con Renata?', lines: 1, a: 'Contenta y agradecida («¿Qué haría yo sin ti?»).' },
      ],
    },
    {
      title: 'La puerta del corral', skill: 'Causa y consecuencia', type: 'Cuento', art: '🐔',
      text: ['Yaku vive con su familia en una chacra de la sierra. Cada mañana, su tarea es dar de comer a las gallinas y cerrar bien la puerta del corral.', 'Un día, Yaku tenía tanto apuro por ir a jugar fútbol que dejó la puerta abierta. Las gallinas salieron y caminaron hasta el huerto de la abuela. ¡Picotearon todas las lechugas!', 'Cuando Yaku volvió, vio a su abuela muy triste. Él le pidió disculpas y, esa tarde, la ayudó a sembrar lechugas nuevas. Desde entonces, Yaku revisa la puerta dos veces.'],
      tip: 'Usen la frase «por eso…» en casa: «llovió, por eso el patio está mojado». Pídele que invente una con lo que pasó en el cuento.',
      qs: [
        { t: 'choice', q: '¿Por qué Yaku dejó la puerta abierta?', o: ['porque tenía apuro por ir a jugar', 'porque las gallinas tenían calor', 'porque su abuela se lo pidió'], a: 0 },
        { t: 'match', q: 'Une cada causa con su consecuencia.', left: ['Yaku deja la puerta abierta.', 'Las gallinas comen las lechugas.', 'Yaku aprende la lección.'], right: ['La abuela se pone triste.', 'Ahora revisa la puerta dos veces.', 'Las gallinas salen del corral.'], a: [3, 1, 2] },
        { t: 'open', q: '¿Qué hizo Yaku para arreglar su error?', lines: 2, a: 'Pidió disculpas y ayudó a su abuela a sembrar lechugas nuevas.' },
        { t: 'say', q: '¿Qué pasaría si dejas abierta la puerta de la refrigeradora?', a: 'Respuesta libre (se sale el frío, la comida se malogra…).' },
      ],
    },
    {
      title: 'El gallito de las rocas', skill: 'Palabras por el contexto', type: 'Texto informativo', art: '🪶',
      text: ['El gallito de las rocas es el ave nacional del Perú. Vive en los bosques húmedos de la selva alta, cerca de los ríos.', 'El macho tiene un <b>plumaje</b> anaranjado muy brillante: todas sus plumas parecen de fuego. En la cabeza lleva una <b>cresta</b>, unas plumas paradas en forma de abanico que casi le tapan el pico. La hembra es de color marrón y menos llamativa.', 'Este pájaro come sobre todo frutas y arma su nido con barro, pegado a las paredes de roca. ¡Por eso se llama «de las rocas»!'],
      tip: 'Ante una palabra en negrita, pídele que lea la oración completa antes de adivinar qué significa. La pista casi siempre está en las palabras de al lado.',
      qs: [
        { t: 'choice', q: 'En el texto, «plumaje» quiere decir…', o: ['todas las plumas de un ave', 'el pico de un ave', 'el nido de un ave'], a: 0 },
        { t: 'choice', q: 'Una «cresta» es…', o: ['una pata larga', 'unas plumas paradas en la cabeza', 'un tipo de fruta'], a: 1 },
        { t: 'tf', q: 'Marca V o F.', items: [['La hembra es anaranjada y muy brillante.', false], ['El gallito de las rocas come frutas.', true], ['Vive en la selva alta, cerca de los ríos.', true]] },
        { t: 'open', q: '¿Por qué se llama «de las rocas»?', lines: 1, a: 'Porque arma su nido de barro pegado a las paredes de roca.' },
      ],
    },
    {
      title: 'Pipa llega a la cima', skill: 'Las emociones cambian', type: 'Cuento', img: 'pipa.jpg',
      text: ['Pipa quería ver el amanecer desde lo alto del cerro. Salió muy temprano, con su mochila y su linterna.', 'El camino era empinado y lleno de piedras. Pipa caminaba despacito y, a mitad de la subida, se sentó en una roca. —Soy muy lenta —suspiró—. Nunca voy a llegar.', 'Entonces escuchó a Lu desde una rama: —No importa si vas lenta, Pipa. Importa que sigas.', 'Pipa respiró hondo y continuó, paso a paso. Cuando llegó a la cima, el cielo se pintó de naranja. Pipa levantó sus patitas y gritó: —¡Lo logré!'],
      tip: 'Pregúntale: «¿cómo se sentía Pipa al principio, cómo al final y qué pasó en el medio?». Notar que las emociones cambian le ayuda a saber que las suyas también pasan.',
      qs: [
        { t: 'choice', q: 'A mitad de la subida, ¿cómo se sentía Pipa?', o: ['cansada y desanimada', 'feliz y orgullosa', 'aburrida'], a: 0 },
        { t: 'open', q: '¿Qué palabras de Pipa te lo dicen?', lines: 1, a: '«Soy muy lenta. Nunca voy a llegar» (además, se sentó y suspiró).' },
        { t: 'open', q: '¿Qué ayudó a Pipa a seguir subiendo?', lines: 2, a: 'Las palabras de Lu: «No importa si vas lenta. Importa que sigas».' },
        { t: 'say', q: '¿Cómo se sintió Pipa al final? ¿Cuándo te has sentido tú así?', a: 'Orgullosa y feliz («¡Lo logré!»). La segunda parte es respuesta libre.' },
      ],
    },
    {
      title: 'Masa para modelar', skill: 'Seguir instrucciones', type: 'Instrucciones', art: '🎨',
      text: ['<b>Necesitas:</b> 2 tazas de harina, 1 taza de sal, 1 taza de agua, un tazón grande y colorante de comida (si quieres).', '<b>Pasos:</b><br>1. Pide a un adulto que te acompañe.<br>2. Mezcla la harina y la sal en el tazón.<br>3. Echa el agua poco a poco y amasa con las manos.<br>4. Si la masa se pega en tus dedos, agrega un poquito más de harina.<br>5. Echa unas gotas de colorante y vuelve a amasar.<br>6. ¡Forma animales, frutas o lo que imagines!', '<b>¡Cuidado!</b> Esta masa no se come: tiene muchísima sal.'],
      tip: '¡Prepárenla de verdad! Que él lea cada paso en voz alta antes de hacerlo: leer para hacer algo es la mejor prueba de comprensión.',
      qs: [
        { t: 'order', q: 'Escribe 1, 2, 3 y 4 en el orden correcto.', o: ['Echa el agua poco a poco y amasa.', 'Forma animales o frutas.', 'Mezcla la harina y la sal.', 'Echa unas gotas de colorante.'], a: [2, 4, 1, 3] },
        { t: 'choice', q: '¿Qué haces si la masa se pega en tus dedos?', o: ['le echas más agua', 'le agregas más harina', 'la botas'], a: 1 },
        { t: 'open', q: '¿Por qué no debes comer esta masa?', lines: 1, a: 'Porque tiene muchísima sal: no es comida.' },
        { t: 'say', q: '¿Qué te gustaría modelar con tu masa? ¿Por qué?', a: 'Respuesta libre.' },
      ],
    },
    {
      title: 'El viento travieso', skill: 'Leer un poema', type: 'Poema', art: '🪁', poem: true,
      text: ['El viento llegó a mi barrio<br>silbando una canción,<br>le quitó el sombrero a papá<br>y lo dejó en el balcón.<br>Papá miraba hacia arriba<br>con cara de confusión.', 'Jugó con la ropa tendida,<br>hizo bailar las cortinas,<br>y las hojas secas del parque<br>corrieron por las esquinas.<br>Mamá cerró la ventana<br>y se rieron las vecinas.', 'Yo salí con mi cometa<br>y le grité: —¡Ven a jugar!<br>El viento, mi buen amigo,<br>la hizo subir y bailar.<br>Tan alto voló mi cometa<br>¡que tocó una nube al pasar!'],
      tip: 'Lean el poema dos veces en voz alta, una tú y otra él, marcando el ritmo con palmadas. Luego busquen juntos las palabras que suenan parecido al final.',
      qs: [
        { t: 'choice', q: '¿Quién hace las travesuras en el poema?', o: ['papá', 'el viento', 'las vecinas'], a: 1 },
        { t: 'match', q: 'Une cada cosa con lo que le pasó.', left: ['el sombrero de papá', 'las hojas secas', 'la cometa'], right: ['corrieron por las esquinas', 'subió hasta tocar una nube', 'quedó en el balcón'], a: [3, 1, 2] },
        { t: 'open', q: 'Escribe dos palabras del poema que rimen con «cortinas».', lines: 1, a: 'Esquinas y vecinas.' },
        { t: 'open', q: '¿Por qué crees que el poema llama «travieso» al viento?', lines: 2, a: 'Porque hace bromas: le quita el sombrero a papá y mueve la ropa, las cortinas y las hojas.' },
      ],
    },
    {
      title: 'El delfín rosado', skill: 'La idea principal', type: 'Texto informativo', art: '🐬',
      text: ['En los ríos de la selva del Perú vive un animal sorprendente: el delfín rosado. También lo llaman bufeo colorado.', 'Cuando es bebé, es de color gris. Al crecer, su piel se va volviendo rosada. Como todos los delfines, respira aire, así que sale del agua a cada rato para tomarlo.', 'El agua de esos ríos es oscura y con barro, y casi no se ve nada. Por eso, el delfín usa sonidos para encontrar a los peces que come. Además, puede doblar el cuello para mirar a los lados, algo que la mayoría de delfines no puede hacer.'],
      tip: 'Después de leer, pídele que diga en una sola frase «de qué habla todo el texto». Lo que aparece en todos los párrafos suele ser la idea principal.',
      qs: [
        { t: 'choice', q: '¿Cuál es la idea principal del texto?', o: ['El delfín rosado es un animal especial que vive en los ríos de la selva.', 'El agua de los ríos es oscura.', 'Los peces viven en el barro.'], a: 0 },
        { t: 'choice', q: '¿Cómo encuentra a los peces en el agua oscura?', o: ['con sus ojos', 'con sonidos', 'con su cola'], a: 1 },
        { t: 'tf', q: 'Marca V o F.', items: [['El delfín rosado nace de color rosado.', false], ['Sale del agua para respirar.', true], ['Puede doblar el cuello para mirar a los lados.', true]] },
        { t: 'open', q: 'Escribe un dato del texto que te sorprendió.', lines: 1, a: 'Respuesta libre (cambia de color, usa sonidos, dobla el cuello…).' },
      ],
    },
    {
      title: '¡Pum, pum, cajón!', skill: 'Hecho u opinión', type: 'Exposición', art: '🥁',
      text: ['¡Hola! Soy Thiago y hoy les voy a hablar del cajón peruano.', 'El cajón es un instrumento musical hecho de madera. Nació en la costa del Perú hace mucho tiempo. Para tocarlo, te sientas encima y golpeas el frente con las manos. Atrás tiene un agujero redondo por donde sale el sonido.', 'Mi tío Lucho toca el cajón en las fiestas de la familia. Yo creo que es el instrumento más divertido del mundo. ¡Y suena mucho mejor que la flauta! Cuando sea grande, quiero tocar como mi tío.'],
      tip: 'Jueguen a «¿se puede comprobar?» con frases de la casa: «la mesa es de madera» es un hecho; «el arroz con pollo es lo más rico» es una opinión.',
      qs: [
        { t: 'ho', q: 'Marca H si es un hecho (se puede comprobar) u O si es una opinión (es lo que alguien piensa).', items: [['El cajón está hecho de madera.', 'H'], ['El cajón es el instrumento más divertido del mundo.', 'O'], ['Atrás tiene un agujero redondo.', 'H'], ['El cajón suena mucho mejor que la flauta.', 'O']] },
        { t: 'choice', q: '¿Cómo se toca el cajón?', o: ['soplando', 'sentado encima y golpeando con las manos', 'con un arco, como el violín'], a: 1 },
        { t: 'open', q: '¿Por qué crees que Thiago quiere tocar como su tío?', lines: 1, a: 'Porque admira a su tío y le gusta cómo toca en las fiestas.' },
        { t: 'open', q: 'Ahora escribe tú una opinión sobre la música.', lines: 1, a: 'Respuesta libre (por ejemplo: «La música criolla es la más alegre»).' },
      ],
    },
    {
      title: '¿Pollo a la brasa o ceviche?', skill: 'Opiniones y razones', type: 'Diálogo', art: '🍗',
      text: ['Era domingo y la familia de Camila no se ponía de acuerdo sobre el almuerzo.', '—¡Pollo a la brasa! —pidió Camila—. Viene con papas fritas, y las papas fritas son lo que más me gusta.', '—Yo prefiero ceviche —dijo su hermano Matías—. Es fresquito, y con este calor no hay nada mejor. Además, me encanta el limón.', 'Papá se rascó la cabeza: —Los dos dieron buenas razones.', '—Tengo una idea —dijo mamá—. Hoy, ceviche, porque hace calor. Y el próximo domingo, pollo a la brasa. ¿Trato hecho?', '—¡Trato hecho! —respondieron los dos.'],
      tip: 'Cuando en casa tengan que decidir algo (qué cenar, a dónde pasear), pidan a cada uno una razón que empiece con «porque…». Así practica opinar y escuchar.',
      qs: [
        { t: 'open', q: '¿Qué quería Camila? ¿Qué razón dio?', lines: 1, a: 'Pollo a la brasa, porque viene con papas fritas, que es lo que más le gusta.' },
        { t: 'open', q: '¿Qué quería Matías? ¿Qué razón dio?', lines: 1, a: 'Ceviche, porque es fresquito, hace calor y le encanta el limón.' },
        { t: 'choice', q: '¿Qué decidió mamá?', o: ['comer solo pollo a la brasa', 'ceviche hoy y pollo a la brasa el próximo domingo', 'no almorzar'], a: 1 },
        { t: 'open', q: '¿Te parece justa la idea de mamá? ¿Por qué?', lines: 2, a: 'Respuesta libre (que dé una razón).' },
      ],
    },
  ],
};
