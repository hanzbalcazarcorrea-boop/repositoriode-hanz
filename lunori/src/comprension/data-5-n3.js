// Edición 5 años · Nivel 3 (Súper lector): mamá lee en voz alta; textos más largos y preguntas para pensar y explicar «¿cómo lo sabes?».
module.exports = {
  age: '5 años',
  slug: '5-anos',
  mode: 'pre',
  lecturas: [
    {
      title: 'Dos adivinanzas', skill: '¿Cómo lo sabes?', type: 'Adivinanzas', img: 'lu-piensa.jpg',
      text: ['<b>Adivinanza 1.</b> Tengo pelitos arriba y un vestido verde de hojas. Por dentro tengo muchos granitos en fila. Me comes sancochado, con queso. ¿Quién soy?', '<b>Adivinanza 2.</b> Llevo mi casa en la espalda. Camino muy despacio, pero nunca me rindo. Vivo en el Bosque de las Letras. ¿Quién soy?'],
      qs: [
        { t: 'pic', q: 'Adivinanza 1: ¿quién es?', o: [['🥔', 'la papa'], ['🌽', 'el choclo'], ['🥕', 'la zanahoria']], a: 1 },
        { t: 'pic', q: 'Adivinanza 2: ¿quién es?', o: [['🐌', 'un caracol'], ['🐢', 'Pipa'], ['🐭', 'Tito']], a: 1 },
        { t: 'say', q: 'Un caracol también lleva su casa en la espalda. ¿Cómo sabes que la adivinanza 2 es Pipa? (Mamá lo escribe.)', lines: 1, a: 'Porque vive en el Bosque de las Letras y nunca se rinde, como Pipa.' },
      ],
      tip: 'Después de cada respuesta, pregunta «¿cómo lo sabes?» y que te diga la pista. Si contesta «porque sí», vuelvan a leer juntos y busquen la pista con el dedo.',
    },
    {
      title: 'La bolsa rota', skill: 'Problema y solución', art: '🍊',
      text: ['Lucía y su mamá compran en el mercado: papas, naranjas y un zapallo.', 'De pronto, ¡crac! La bolsa se rompe y las naranjas ruedan por el piso.', 'Lucía tiene una idea: abre su mochila.', 'Juntas recogen las naranjas y las guardan allí.', '¡Problema resuelto!'],
      qs: [
        { t: 'pic', q: '¿Cuál es el problema?', o: [['🛍️', 'se rompe la bolsa'], ['🌧️', 'empieza a llover'], ['🥱', 'Lucía tiene sueño']], a: 0 },
        { t: 'pic', q: '¿Cómo lo solucionan?', o: [['🎒', 'usan la mochila'], ['🗑️', 'botan las naranjas'], ['🏃', 'se van corriendo']], a: 0 },
        { t: 'draw', q: '¿Qué otra solución se te ocurre? Dibújala y explícasela a mamá.', h: 44 },
      ],
      tip: 'Pregúntale «¿cuál fue el problema?» y «¿cómo lo arreglaron?». Luego busquen juntos otra solución: pensar en varias salidas también lo ayuda cuando algo le sale mal a él.',
    },
    {
      title: 'La manta de la abuela', skill: '¿Por qué lo hizo?', art: '👵',
      text: ['Es de noche y hace frío.', 'Inti ve que su abuela se frota las manos.', 'Sin decir nada, Inti corre a su cuarto.', 'Regresa con su manta favorita y se la pone a la abuela sobre los hombros.', 'La abuela sonríe: «¡Gracias, mi amor!».'],
      qs: [
        { t: 'pic', q: '¿Por qué Inti trae la manta?', o: [['🥶', 'la abuela tiene frío'], ['😴', 'Inti quiere dormir'], ['🎂', 'es un cumpleaños']], a: 0 },
        { t: 'pic', q: '¿Cómo es Inti?', o: [['🤗', 'atento y cariñoso'], ['😠', 'gruñón'], ['😴', 'dormilón']], a: 0 },
        { t: 'say', q: 'La abuela no dijo «tengo frío». ¿Cómo lo supo Inti? (Mamá lo escribe.)', lines: 1, a: 'Porque vio que su abuela se frotaba las manos, y era de noche y hacía frío.' },
      ],
      tip: 'Pregunta «¿por qué crees que lo hizo?» aunque el cuento no lo diga. Descubrir lo que piensa un personaje por lo que hace es una de las pistas más importantes al leer.',
    },
    {
      title: 'Dos pingüinos', skill: 'Real o fantasía', type: 'Informativo y cuento', art: '🐧',
      text: ['<b>Texto 1.</b> El pingüino de Humboldt vive en la costa del Perú. No puede volar, pero nada muy rápido y atrapa peces.', '<b>Texto 2.</b> El pingüino Pancho se pone su sombrero, arma su maleta y sube a un avión. ¡Quiere ir a la selva a conocer a los monos!'],
      qs: [
        { t: 'pic', q: '¿Dónde vive el pingüino de Humboldt?', o: [['🏖️', 'en la costa del Perú'], ['❄️', 'en la nieve'], ['🌴', 'en la selva']], a: 0 },
        { t: 'pic', q: '¿Qué puede hacer un pingüino de verdad?', o: [['🐟', 'nadar y atrapar peces'], ['✈️', 'viajar en avión'], ['🧳', 'armar su maleta']], a: 0 },
        { t: 'say', q: 'El texto 2 es de fantasía: es inventado. ¿Cómo lo sabes? (Mamá lo escribe.)', lines: 1, a: 'Porque un pingüino de verdad no usa sombrero, no arma maletas ni sube a un avión.' },
      ],
      tip: 'En los cuentos de la noche, pregunta: «¿esto puede pasar de verdad?». Separar lo real de lo inventado lo ayuda a saber qué tipo de texto está escuchando.',
    },
    {
      title: 'La maceta rota', skill: 'El mensaje del cuento', type: 'Cuento', img: 'coco.jpg',
      text: ['Coco juega a la pelota cerca de la casa de Lu.', '¡Pum! La pelota rompe una maceta.', 'Coco se asusta y quiere esconderse.', 'Pero lo piensa bien y va donde Lu: «Fui yo, Lu. Lo siento mucho».', 'Lu le sonríe: «Gracias por decir la verdad. Vamos a arreglarlo juntos».'],
      qs: [
        { t: 'pic', q: '¿Qué rompe la pelota de Coco?', o: [['🪴', 'una maceta'], ['🥚', 'un huevo'], ['🍽️', 'un plato']], a: 0 },
        { t: 'pic', q: '¿Qué nos enseña este cuento?', o: [['🗣️', 'decir la verdad aunque cueste'], ['🙈', 'esconderse si algo sale mal'], ['🚫', 'no jugar nunca']], a: 0 },
        { t: 'say', q: '¿Por qué crees que Lu le dio las gracias a Coco? (Mamá lo escribe.)', lines: 1, a: 'Porque Coco dijo la verdad, aunque tenía miedo.' },
      ],
      tip: 'El mensaje casi nunca está escrito: pregúntale «¿qué aprendió Coco?» y después «¿qué aprendiste tú?». Si te cuenta algo parecido que le pasó, escúchalo sin regañar.',
    },
    {
      title: 'La sorpresa de Sami', skill: 'Contar con mis palabras', art: '🎁',
      text: ['Mañana es el cumpleaños de mamá y Sami quiere darle una sorpresa.', 'Sami dibuja un corazón grande en una hoja.', 'Lo pinta de rojo y le pega papelitos brillantes.', 'Su tía la ayuda a escribir: «Te quiero, mamá».', 'Al día siguiente, mamá abre la sorpresa. Sonríe, abraza fuerte a Sami… ¡y le caen unas lagrimitas!'],
      qs: [
        { t: 'order', q: 'Escribe 1, 2, 3 y 4 en el orden en que pasó.', o: ['🖍️ Pinta el corazón de rojo.', '🎁 Mamá abre la sorpresa.', '❤️ Dibuja un corazón grande.', '✏️ Escriben «Te quiero, mamá».'], a: [2, 4, 1, 3] },
        { t: 'pic', q: '¿Por qué le caen lagrimitas a mamá?', o: [['😢', 'está triste'], ['🥰', 'está muy feliz'], ['🤕', 'se golpeó']], a: 1 },
        { t: 'say', q: 'Ahora cuéntale el cuento a mamá con tus palabras: ¿qué pasó al principio, en el medio y al final?', a: 'Más o menos: Sami quiere sorprender a mamá; hace un corazón y lo decora; mamá lo recibe muy feliz.' },
      ],
      tip: 'Pídele que le cuente el cuento a otra persona de la familia (o a un peluche) sin mirar el cuaderno. Si se salta una parte, ayúdalo con «¿y qué pasó después?».',
    },
    {
      title: 'Canelo en el mercado', skill: 'Inventar otro final', type: 'Cuento', art: '🐕',
      text: ['Thiago encuentra un perrito en la puerta del mercado.', 'Tiene un collar azul que dice «Canelo».', 'Thiago y su papá preguntan puesto por puesto: «¿Es suyo este perrito?».', 'Por fin, una señora que vende frutas grita: «¡Canelo!».', 'El perrito mueve la cola y corre hacia ella.'],
      qs: [
        { t: 'pic', q: '¿Cómo supieron que el perrito se llamaba Canelo?', o: [['🏷️', 'lo dice su collar'], ['🗣️', 'el perrito habló'], ['✉️', 'por una carta']], a: 0 },
        { t: 'pic', q: '¿Cómo sabes que Canelo está feliz de ver a la señora?', o: [['🐕', 'mueve la cola'], ['💤', 'se duerme'], ['🦴', 'come un hueso']], a: 0 },
        { t: 'draw', q: 'Inventa otro final: ¿y si nadie conociera a Canelo? Dibújalo y cuéntaselo a mamá.', h: 44 },
      ],
      tip: 'Al terminar, pregúntale: «¿y si el cuento terminara distinto?». Para inventar otro final tiene que entender bien el cuento, y además despierta su creatividad.',
    },
    {
      title: '¡Te invito a mi fiesta!', skill: '¿Para qué sirve?', type: 'Invitación', img: 'tito.jpg',
      text: ['Hola, Pipa:', 'El sábado es mi cumpleaños y haré una fiesta en mi casa del árbol. Empieza a las 4 de la tarde.', 'Ven disfrazada de tu animal favorito. ¡Habrá torta de chocolate y chicha morada!', 'Te espero con mucha alegría.', '<span style="display:block;text-align:right">Tu amigo, Tito</span>'],
      qs: [
        { t: 'pic', q: '¿Para qué escribió Tito este texto?', o: [['🎉', 'para invitar a Pipa'], ['📖', 'para contar un cuento'], ['🍰', 'para dar una receta']], a: 0 },
        { t: 'pic', q: '¿Cómo debe ir Pipa a la fiesta?', o: [['🦁', 'disfrazada de animal'], ['🎒', 'con su mochila'], ['☂️', 'con paraguas']], a: 0 },
        { t: 'say', q: '¿Cómo sabes que es una invitación y no un cuento? Pista: mira cómo empieza y cómo termina.', a: 'Empieza con «Hola, Pipa», dice cuándo y dónde es la fiesta, y termina con la firma «Tu amigo, Tito».' },
      ],
      tip: 'Muéstrale otros textos de la casa: una invitación, la lista del mercado, una receta. Pregunta: «¿para qué sirve este papel?». Cada texto tiene un propósito.',
    },
    {
      title: '¿Dónde está Pelusa?', skill: 'Causa y consecuencia', art: '🐹',
      text: ['Nayra tiene un cuy llamado Pelusa.', 'Una tarde, le da alfalfa y se olvida de cerrar la jaula.', 'Al rato, ¡la jaula está vacía!', 'Toda la familia busca a Pelusa. La encuentran debajo de la cama, mordiendo una media.', 'Desde ese día, Nayra siempre cierra la jaula.'],
      qs: [
        { t: 'pic', q: '¿Por qué se escapó Pelusa?', o: [['🔓', 'la jaula quedó abierta'], ['🐱', 'un gato la sacó'], ['🌧️', 'empezó a llover']], a: 0 },
        { t: 'pic', q: '¿Dónde encontraron a Pelusa?', o: [['🛏️', 'debajo de la cama'], ['🌳', 'en el jardín'], ['🚿', 'en la ducha']], a: 0 },
        { t: 'say', q: '¿Por qué crees que ahora Nayra siempre cierra la jaula? (Mamá lo escribe.)', lines: 1, a: 'Porque aprendió que, si la jaula queda abierta, Pelusa se escapa.' },
      ],
      tip: 'Usen la frase «por eso»: «Nayra se olvidó de cerrar la jaula, por eso…». Que él la complete. Así une lo que pasó con lo que vino después.',
    },
    {
      title: '¿Río o cerro?', skill: 'Mi opinión y mi porqué', img: 'bosque-amigos.jpg',
      text: ['El domingo hay paseo en el Bosque de las Letras.', 'Lu pregunta: «¿Vamos al río o al cerro?».', 'Tito quiere ir al río, porque le encanta buscar piedritas de colores.', 'Pipa prefiere el cerro, porque desde arriba se ve todo el bosque.', 'Coco solo dice: «¡Yo voy donde haya queso!».'],
      qs: [
        { t: 'pic', q: '¿A dónde quiere ir Tito?', o: [['🏞️', 'al río'], ['⛰️', 'al cerro'], ['🏖️', 'a la playa']], a: 0 },
        { t: 'pic', q: '¿Por qué Pipa prefiere el cerro?', o: [['👀', 'se ve todo el bosque'], ['💧', 'hay mucha agua'], ['🧀', 'hay queso']], a: 0 },
        { t: 'say', q: 'Y tú, ¿a dónde irías: al río o al cerro? ¿Por qué? (Mamá lo escribe.)', lines: 1, a: 'Respuesta libre, pero con una razón: «Yo iría al… porque…».' },
      ],
      tip: 'Cuando dé su opinión, pídele siempre un «porque…». Si dice «porque sí», ayúdalo: «¿qué hay en el río que te gusta?». Dar razones es aprender a pensar.',
    },
  ],
};
