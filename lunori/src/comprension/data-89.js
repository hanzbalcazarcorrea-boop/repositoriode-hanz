// Edición 8-9 años: textos de 110-170 palabras y distintos tipos de texto.
module.exports = {
  age: '8 a 9 años',
  slug: '8-9-anos',
  mode: 'mid',
  lecturas: [
    {
      title: 'Una carta desde Cusco', skill: 'Datos y detalles', type: 'Carta', art: '✉️',
      text: ['<i>Cusco, 12 de mayo</i><br>Querida prima Antonella:', '¿Cómo estás? Aquí en Cusco hace tanto frío en las mañanas que sale vapor cuando hablo. La semana pasada fuimos con mi papá a Sacsayhuamán. Las piedras son enormes, ¡algunas más altas que mi papá! El guía nos contó que encajan tan bien que ni una hoja de papel pasa entre ellas.', 'También ayudé a mi abuela a pastear sus alpacas. Una de ellas, la Blanquita, me escupió porque la jalé de la oreja. ¡Aprendí la lección!', 'En julio vienes de vacaciones, ¿verdad? Te voy a enseñar a hacer chicha morada como la prepara mi abuela. Un abrazo grande, <b>Yaku</b>'],
      qs: [
        { t: 'open', q: '¿Quién escribe la carta y para quién es?', lines: 1, a: 'La escribe Yaku para su prima Antonella.' },
        { t: 'choice', q: '¿Qué contó el guía sobre las piedras?', o: ['que son de plástico', 'que encajan tan bien que no pasa ni una hoja de papel', 'que las movieron las alpacas'], a: 1 },
        { t: 'choice', q: '¿Qué quiere decir Yaku con «¡Aprendí la lección!»?', o: ['que fue al colegio', 'que ya no jalará a las alpacas de la oreja', 'que estudió para un examen'], a: 1 },
        { t: 'tf', q: 'Marca V o F.', items: [['Yaku visitará a Antonella en julio.', false], ['La abuela de Yaku tiene alpacas.', true]] },
      ],
    },
    {
      title: 'La vicuña y el zorro', skill: 'Leer entre líneas', type: 'Fábula', art: '🦊',
      text: ['Un zorro andino vio a una vicuña comiendo pasto junto a un riachuelo. —Amiga vicuña —le dijo con voz dulce—, detrás de aquel cerro crece el pasto más verde y jugoso del mundo. Sígueme y te lo enseño.', 'La vicuña levantó la cabeza. Recordó que su mamá siempre le decía que no se alejara de la manada. —Gracias, zorro —respondió—, pero mejor voy con mis hermanas. Si el pasto es tan bueno, iremos todas juntas.', 'El zorro, que no quería encontrarse con toda la manada, se marchó refunfuñando. Esa noche, la vicuña durmió tranquila entre los suyos.'],
      qs: [
        { t: 'choice', q: '¿Qué quería de verdad el zorro?', o: ['ser amigo de la vicuña', 'atrapar a la vicuña cuando estuviera sola', 'enseñarle el mejor pasto'], a: 1 },
        { t: 'open', q: '¿Por qué el zorro se fue refunfuñando?', lines: 1, a: 'Porque su plan falló: no quería enfrentarse a toda la manada.' },
        { t: 'order', q: 'Ordena los hechos del 1 al 4.', o: ['La vicuña recuerda el consejo de su mamá.', 'El zorro se va refunfuñando.', 'El zorro invita a la vicuña detrás del cerro.', 'La vicuña duerme tranquila con su manada.'], a: [2, 3, 1, 4] },
        { t: 'open', q: 'Escribe la moraleja de la fábula con tus palabras.', lines: 2, a: 'No hay que confiar en quien quiere alejarte de los tuyos; juntos estamos más seguros.' },
      ],
    },
    {
      title: 'La quinua, un tesoro andino', skill: 'Palabras por el contexto', type: 'Texto informativo', art: '🌾',
      text: ['La quinua es una semilla que se cultiva desde hace miles de años en los Andes. Los antiguos peruanos la llamaban «grano madre» porque era muy importante en su alimentación.', 'La quinua es <b>nutritiva</b>: tiene proteínas, que ayudan a formar los músculos, y hierro, que nos da energía. Además, puede crecer en lugares muy altos y fríos, donde otras plantas no sobreviven. Por eso decimos que es una planta <b>resistente</b>.', 'Hoy se come en muchos países del mundo: en sopas, ensaladas, guisos y hasta postres.'],
      qs: [
        { t: 'choice', q: 'En el texto, «nutritiva» significa…', o: ['que alimenta y hace bien al cuerpo', 'que tiene mal sabor', 'que es muy cara'], a: 0 },
        { t: 'choice', q: 'En el texto, «resistente» significa…', o: ['que se rompe fácil', 'que aguanta condiciones difíciles', 'que crece muy rápido'], a: 1 },
        { t: 'open', q: '¿Por qué los antiguos peruanos la llamaban «grano madre»?', lines: 1, a: 'Porque era muy importante en su alimentación.' },
        { t: 'open', q: 'Escribe dos formas de comer quinua.', lines: 1, a: 'En sopa, ensalada, guiso o postre (dos de ellas).' },
      ],
    },
    {
      title: '¡El río vuelve a brillar!', skill: 'Causa y consecuencia', type: 'Noticia · El Periódico del Bosque', img: 'tito.jpg',
      text: ['<b>Por Tito, reportero.</b> Los vecinos del Bosque de las Letras sacaron más de 300 botellas de plástico del río en solo dos semanas.', 'Todo empezó cuando Pipa encontró a un pececito enredado en una bolsa. «Me dio mucha pena. Pensé: esto no puede volver a pasar», contó la tortuga.', 'Lu organizó grupos de limpieza todas las mañanas. Coco preparó jugos para los voluntarios y Tito pintó carteles para avisar a todos. Gracias a este trabajo, el agua está más limpia y los peces volvieron a nadar cerca de la orilla.', 'Ahora el bosque tiene tachos de colores para separar la basura, y todos los animales aprendieron a usarlos.'],
      qs: [
        { t: 'open', q: '¿Qué hizo que empezara la limpieza del río? (la causa)', lines: 1, a: 'Que Pipa encontró a un pececito enredado en una bolsa.' },
        { t: 'choice', q: '¿Qué consecuencia tuvo la limpieza?', o: ['el agua está más limpia y volvieron los peces', 'el río se secó', 'Tito se fue de viaje'], a: 0 },
        { t: 'tf', q: 'Marca V o F.', items: [['Sacaron 300 botellas en un año.', false], ['Coco preparó jugos para los voluntarios.', true]] },
        { t: 'open', q: 'Inventa otro título para esta noticia.', lines: 1, a: 'Respuesta libre (que resuma la noticia).' },
      ],
    },
    {
      title: 'El dibujo mojado', skill: 'Emociones de los personajes', type: 'Cuento', art: '🎨',
      text: ['Gael pasó toda la semana haciendo un dibujo para el concurso del colegio. Usó sus mejores colores y hasta le puso brillantina.', 'El viernes, su hermanito Adrián, de tres años, entró al cuarto y, sin querer, derramó jugo sobre el dibujo. Gael sintió que la cara le ardía y apretó los puños. Tenía ganas de gritar.', 'Respiró hondo tres veces, como le había enseñado su mamá. Luego miró a Adrián, que tenía los ojos llenos de lágrimas. —No llores —le dijo—. Lo hiciste sin querer. ¿Me ayudas a hacer otro?'],
      qs: [
        { t: 'open', q: '¿Qué sintió Gael al ver el dibujo mojado? ¿Qué pistas lo muestran?', lines: 2, a: 'Enojo/rabia: le ardía la cara, apretó los puños, tenía ganas de gritar.' },
        { t: 'open', q: '¿Qué hizo Gael para calmarse?', lines: 1, a: 'Respiró hondo tres veces.' },
        { t: 'choice', q: '¿Cómo se sentía Adrián?', o: ['contento', 'triste y arrepentido', 'aburrido'], a: 1 },
        { t: 'open', q: '¿Qué hubieras hecho tú en el lugar de Gael?', lines: 1, a: 'Respuesta libre.' },
      ],
    },
    {
      title: '¿Por qué dormimos?', skill: 'La idea principal', type: 'Texto informativo', art: '😴',
      text: ['Aunque parezca que no pasa nada, mientras dormimos nuestro cuerpo trabaja mucho. El cerebro ordena todo lo que aprendimos en el día, como si guardara archivos en cajones.', 'Mientras dormimos, el cuerpo también se repara y crece. Además, dormir bien nos pone de buen humor y nos ayuda a prestar atención en clase.', 'Los niños de tu edad necesitan entre 9 y 12 horas de sueño cada noche. Por eso conviene apagar las pantallas una hora antes de dormir y seguir siempre la misma rutina.'],
      qs: [
        { t: 'choice', q: '¿Cuál es la idea principal del texto?', o: ['Dormir es importante porque el cuerpo y el cerebro trabajan y se recuperan.', 'Las pantallas son divertidas.', 'Los cajones sirven para guardar archivos.'], a: 0 },
        { t: 'open', q: '¿Qué hace el cerebro mientras dormimos?', lines: 1, a: 'Ordena lo que aprendimos en el día.' },
        { t: 'open', q: '¿Cuántas horas necesita dormir un niño de tu edad?', lines: 1, a: 'Entre 9 y 12 horas.' },
        { t: 'open', q: '¿A qué hora te duermes y a qué hora te levantas? ¿Duermes lo suficiente?', lines: 1, a: 'Respuesta libre (calcular las horas juntos).' },
      ],
    },
    {
      title: 'Mi abuelo y la luna', skill: 'Leer un poema', type: 'Poema', art: '🌙', poem: true,
      text: ['Mi abuelo dice que la luna<br>es un queso redondito,<br>que los ratones de la noche<br>le comen un pedacito.', 'Por eso a veces está entera<br>y otras veces, un trocito;<br>y cuando ya no queda nada,<br>la vuelven a hacer despacito.', 'Yo sé que no es un queso,<br>lo leí en un libro bonito,<br>pero cuando miro el cielo<br>le guiño un ojo al abuelito.'],
      qs: [
        { t: 'open', q: 'Según el abuelo, ¿por qué la luna cambia de forma?', lines: 1, a: 'Porque los ratones de la noche le comen pedacitos.' },
        { t: 'choice', q: '¿Cuántas estrofas tiene el poema?', o: ['dos', 'tres', 'cuatro'], a: 1 },
        { t: 'open', q: 'Escribe tres palabras del poema que rimen con «redondito».', lines: 1, a: 'Pedacito, trocito, despacito, bonito, abuelito.' },
        { t: 'open', q: '¿El niño cree que la luna es un queso? ¿Cómo lo sabes?', lines: 1, a: 'No; dice que leyó en un libro que no es un queso.' },
      ],
    },
    {
      title: 'El mapa de la botella', skill: '¿Qué pasará?', type: 'Cuento', img: 'escena-playa.jpg', wide: true,
      text: ['Durante sus vacaciones en Máncora, Renata encontró una botella atascada entre las rocas. Adentro había un papel enrollado, <b>amarillento</b> y con los bordes rotos.', 'Con cuidado, lo sacó y lo extendió sobre la arena. Era un mapa dibujado a mano: mostraba la playa, una palmera torcida y una gran X junto a unas rocas con forma de tortuga.', 'Renata levantó la vista. A unos cien metros había una palmera torcida… y detrás de ella, unas rocas muy, muy curiosas.'],
      qs: [
        { t: 'open', q: '¿Qué crees que hará Renata ahora?', lines: 1, a: 'Irá a buscar la X junto a las rocas con forma de tortuga.' },
        { t: 'open', q: '¿Qué pistas del texto te ayudaron a predecirlo?', lines: 1, a: 'El mapa con la X, la palmera torcida y las rocas curiosas que ve cerca.' },
        { t: 'choice', q: '«Amarillento» quiere decir…', o: ['amarillo brillante', 'que tomó un color amarillo por ser viejo', 'que huele a limón'], a: 1 },
        { t: 'open', q: 'Escribe un final para el cuento.', lines: 3, a: 'Respuesta libre (que siga la historia).' },
      ],
    },
    {
      title: 'Las bolitas sin horno de Coco', skill: 'Seguir instrucciones', type: 'Receta', img: 'coco.jpg',
      text: ['<b>Ingredientes:</b> 2 plátanos maduros, 1 taza de avena, 2 cucharadas de pasas y una pizca de canela.', '<b>Preparación:</b><br>1. Lávate bien las manos.<br>2. Aplasta los plátanos con un tenedor hasta que queden como puré.<br>3. Agrega la avena, las pasas y la canela. Mezcla bien.<br>4. Forma bolitas del tamaño de una canica grande.<br>5. Guárdalas en la refrigeradora 20 minutos para que estén firmes.', '<b>Consejo de Coco:</b> si la mezcla está muy aguada, añade un poquito más de avena.'],
      qs: [
        { t: 'choice', q: '¿Para qué sirve este texto?', o: ['para contar una aventura', 'para enseñar a preparar algo', 'para dar una noticia'], a: 1 },
        { t: 'open', q: '¿Qué debes hacer justo después de aplastar los plátanos?', lines: 1, a: 'Agregar la avena, las pasas y la canela y mezclar.' },
        { t: 'open', q: '¿Qué haces si la mezcla está muy aguada?', lines: 1, a: 'Añadir un poquito más de avena.' },
        { t: 'open', q: '¿Por qué crees que el primer paso es lavarse las manos?', lines: 1, a: 'Para no ensuciar la comida con microbios.' },
      ],
    },
    {
      title: '¿Uniforme o ropa libre?', skill: 'Opiniones y razones', type: 'Diálogo', art: '👕',
      text: ['En el aula de cuarto grado, la profesora preguntó: —¿Deberíamos venir con ropa libre los viernes?', 'Sebastián levantó la mano: —Yo creo que sí. Con ropa libre estamos más cómodos y cada uno muestra su estilo.', 'Majo no estaba de acuerdo: —Yo prefiero el uniforme. Así nadie se burla de la ropa de nadie, y en las mañanas no pierdo tiempo eligiendo qué ponerme.', 'La profesora sonrió: —Los dos dieron buenas razones. Ahora, votemos.'],
      qs: [
        { t: 'open', q: '¿Qué opina Sebastián? ¿Qué razón da?', lines: 1, a: 'Quiere ropa libre: están más cómodos y muestran su estilo.' },
        { t: 'open', q: '¿Qué opina Majo? ¿Qué razones da?', lines: 1, a: 'Prefiere uniforme: nadie se burla y no pierde tiempo eligiendo ropa.' },
        { t: 'choice', q: 'Un «argumento» es…', o: ['una pelea', 'una razón para defender una opinión', 'un tipo de cuento'], a: 1 },
        { t: 'open', q: '¿Con quién estás de acuerdo? Da una razón.', lines: 2, a: 'Respuesta libre (con una razón).' },
      ],
    },
  ],
};
