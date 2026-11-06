// Edición 5 años: mamá lee en voz alta (o el peque lee con ayuda) y el niño marca, colorea o dibuja.
module.exports = {
  age: '5 años',
  slug: '5-anos',
  mode: 'pre',
  lecturas: [
    {
      title: 'La gata Mimi', skill: '¿Quién es?', art: '🐱',
      text: ['Mimi es una gata.', 'Mimi es gris.', 'Mimi toma leche.'],
      qs: [
        { t: 'pic', q: 'Encierra a Mimi.', o: [['🐶', 'perro'], ['🐱', 'gata'], ['🐰', 'conejo']], a: 1 },
        { t: 'pic', q: '¿Qué toma Mimi?', o: [['🥛', 'leche'], ['🧃', 'jugo'], ['🍉', 'sandía']], a: 0 },
        { t: 'draw', q: 'Dibuja a Mimi y píntala de color gris.', h: 52 },
      ],
    },
    {
      title: 'Tito en el parque', skill: '¿Dónde está?', img: 'tito.jpg',
      text: ['Tito va al parque.', 'En el parque hay una resbaladera.', 'Tito sube y baja. ¡Qué divertido!'],
      qs: [
        { t: 'pic', q: '¿Dónde está Tito?', o: [['🏠', 'casa'], ['🌳', 'parque'], ['🏫', 'colegio']], a: 1 },
        { t: 'pic', q: '¿A qué se sube Tito?', o: [['🛝', 'resbaladera'], ['🚲', 'bicicleta'], ['🚗', 'carro']], a: 0 },
        { t: 'pic', q: '¿Cómo está Tito?', o: [['😄', 'feliz'], ['😢', 'triste'], ['😴', 'con sueño']], a: 0 },
      ],
    },
    {
      title: '¡Splash!', skill: '¿Qué pasó?', art: '☔',
      text: ['Llueve mucho.', 'Ana saca su paraguas.', 'Ana salta en los charcos. ¡Splash!'],
      qs: [
        { t: 'pic', q: '¿Qué saca Ana?', o: [['☂️', 'paraguas'], ['🎈', 'globo'], ['⚽', 'pelota']], a: 0 },
        { t: 'pic', q: '¿Qué hace Ana en los charcos?', o: [['🦘', 'salta'], ['😴', 'duerme'], ['🍽️', 'come']], a: 0 },
        { t: 'draw', q: 'Dibuja a Ana saltando en un charco grande.', h: 52 },
      ],
    },
    {
      title: 'El pan de Leo', skill: 'Primero, después y al final', art: '🥪',
      text: ['Leo tiene hambre.', 'Leo saca un pan.', 'Leo le pone palta.', '¡Leo come su pan!'],
      qs: [
        { t: 'order', q: 'Escribe 1, 2 y 3 en el orden en que pasó.', o: ['🥑 Le pone palta.', '😋 Come su pan.', '🍞 Saca un pan.'], a: [2, 3, 1] },
        { t: 'pic', q: '¿Qué le pone Leo a su pan?', o: [['🥑', 'palta'], ['🧀', 'queso'], ['🍓', 'fresa']], a: 0 },
        { t: 'draw', q: 'Dibuja tu pan favorito.', h: 44 },
      ],
    },
    {
      title: 'La llama Lupe', skill: 'Palabras nuevas', art: '🦙',
      text: ['Lupe es una llama.', 'Vive en la sierra, donde hace frío.', 'Lupe tiene lana suave y calientita.'],
      qs: [
        { t: 'pic', q: '¿Dónde vive Lupe?', o: [['🏖️', 'playa'], ['⛰️', 'sierra'], ['🏙️', 'ciudad']], a: 1 },
        { t: 'pic', q: '“Calientita” quiere decir que da…', o: [['🥶', 'frío'], ['☀️', 'calor'], ['💧', 'agua']], a: 1 },
        { t: 'draw', q: 'Dibuja la lana de Lupe con muchas bolitas.', h: 44 },
      ],
    },
    {
      title: 'El helado de Sofi', skill: '¿Por qué pasó?', art: '🍦',
      text: ['Hace mucho sol.', 'Sofi tiene un helado.', 'El helado se derrite.', '¡Sofi come rápido!'],
      qs: [
        { t: 'pic', q: '¿Por qué se derrite el helado?', o: [['☀️', 'hace sol'], ['🌧️', 'llueve'], ['🌙', 'es de noche']], a: 0 },
        { t: 'pic', q: '¿Qué hace Sofi?', o: [['😋', 'come rápido'], ['🗑️', 'lo bota'], ['😴', 'se duerme']], a: 0 },
        { t: 'say', q: 'Cuéntale a mamá: ¿cuál es tu helado favorito?' },
      ],
    },
    {
      title: 'El globo de Martín', skill: '¿Cómo se siente?', art: '🎈',
      text: ['Martín tiene un globo rojo.', 'Sopla el viento.', '¡El globo se va volando!', 'Martín llora.'],
      qs: [
        { t: 'pic', q: '¿Cómo se siente Martín?', o: [['😄', 'feliz'], ['😢', 'triste'], ['😠', 'enojado']], a: 1 },
        { t: 'pic', q: '¿Qué se llevó el viento?', o: [['🎈', 'globo'], ['🧢', 'gorra'], ['🧸', 'osito']], a: 0 },
        { t: 'say', q: '¿Qué le dirías a Martín para que se sienta mejor? (Mamá lo escribe.)', lines: 1 },
      ],
    },
    {
      title: 'La semilla de Pipa', skill: '¿Qué pasará?', img: 'pipa.jpg',
      text: ['Pipa pone una semilla en la tierra.', 'Le echa agua todos los días.', 'Sale el sol.'],
      qs: [
        { t: 'pic', q: '¿Qué pasará con la semilla?', o: [['🌻', 'crece una planta'], ['🍪', 'sale una galleta'], ['🚀', 'sale volando']], a: 0 },
        { t: 'pic', q: '¿Qué le echa Pipa a la semilla?', o: [['💧', 'agua'], ['🥤', 'gaseosa'], ['🧂', 'sal']], a: 0 },
        { t: 'draw', q: 'Dibuja la planta de Pipa cuando crezca.', h: 44 },
      ],
    },
    {
      title: 'Los dientes de Thiago', skill: '¿De qué trata?', art: '🪥',
      text: ['Después de comer, Thiago se lava los dientes.', 'Usa su cepillo y su pasta.', 'Así sus dientes están limpios y fuertes.'],
      qs: [
        { t: 'pic', q: '¿De qué trata el cuento?', o: [['🪥', 'lavarse los dientes'], ['🛁', 'bañarse'], ['👟', 'ponerse zapatos']], a: 0 },
        { t: 'pic', q: '¿Cuándo se lava los dientes Thiago?', o: [['🍽️', 'después de comer'], ['⚽', 'al jugar'], ['🚌', 'en el bus']], a: 0 },
        { t: 'draw', q: 'Dibuja tu cepillo de dientes.', h: 40 },
      ],
    },
    {
      title: 'El queso de Coco', skill: '¿Qué opino yo?', img: 'coco.jpg',
      text: ['Coco tiene un queso.', 'Tito tiene hambre.', 'Coco parte su queso en dos.', '¡Coco y Tito comen juntos!'],
      qs: [
        { t: 'pic', q: '¿Qué tiene Coco?', o: [['🧀', 'queso'], ['🍌', 'plátano'], ['🍞', 'pan']], a: 0 },
        { t: 'pic', q: '¿Con quién comparte Coco?', o: [['🐭', 'Tito'], ['🐢', 'Pipa'], ['🦉', 'Lu']], a: 0 },
        { t: 'say', q: '¿Hizo bien Coco? ¿Tú con quién compartes? (Mamá lo escribe.)', lines: 1 },
      ],
    },
  ],
};
