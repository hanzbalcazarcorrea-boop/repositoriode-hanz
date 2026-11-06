// Edición 10-12 años: textos de 170-240 palabras; inferencia, hecho/opinión, propósito, argumentación y resumen.
module.exports = {
  age: '10 a 12 años',
  slug: '10-12-anos',
  mode: 'adv',
  lecturas: [
    {
      title: 'Machu Picchu', skill: 'Hecho u opinión', type: 'Texto informativo', img: 'escena-machupicchu.jpg',
      text: ['Machu Picchu fue construida por los incas en el siglo XV, en lo alto de una montaña entre los Andes y la selva del Cusco. Se cree que fue una residencia del inca Pachacútec, aunque los historiadores todavía estudian para qué se usaba cada recinto.', 'Durante siglos, el mundo casi no supo de ella: estaba cubierta por la vegetación. En 1911, el explorador Hiram Bingham la dio a conocer internacionalmente, guiado por campesinos de la zona que ya conocían el lugar. En 2007 fue elegida una de las Nuevas Siete Maravillas del Mundo.', 'Sus muros de piedra encajan sin necesidad de cemento y sus terrazas permitían cultivar en las laderas. Para muchos visitantes, es el lugar más impresionante que han visto en su vida. Como recibe a miles de turistas cada día, el gobierno limita el número de entradas para protegerla.'],
      qs: [
        { t: 'ho', q: 'Escribe H si es un hecho (se puede comprobar) u O si es una opinión.', items: [['Fue elegida una de las Nuevas Siete Maravillas en 2007.', 'H'], ['Es el lugar más impresionante del mundo.', 'O'], ['Sus muros encajan sin cemento.', 'H'], ['Visitarla es la mejor experiencia de un turista.', 'O']] },
        { t: 'open', q: '¿Quiénes conocían Machu Picchu antes de 1911?', lines: 1, a: 'Los campesinos de la zona.' },
        { t: 'open', q: '¿Por qué el gobierno limita el número de entradas?', lines: 1, a: 'Para protegerla, porque recibe miles de turistas al día.' },
        { t: 'choice', q: '¿Para qué servían las terrazas?', o: ['para que los turistas descansen', 'para cultivar en las laderas', 'para vigilar la selva'], a: 1 },
      ],
    },
    {
      title: 'El misterio de los alfajores', skill: 'Inferir con pistas', type: 'Cuento de misterio', art: '🔎',
      text: ['El domingo, la tía Marisol dejó una bandeja con doce alfajores sobre la mesa del comedor para el lonche familiar. A las cinco de la tarde solo quedaban ocho. —¿Quién se comió los alfajores? —preguntó.', 'Joaquín, que armaba un rompecabezas en el piso de la sala, levantó los hombros: —Yo no me he movido de aquí en toda la tarde. Valeria, con la boca cerrada y las mejillas infladas, negó con la cabeza. Bastián estaba en el patio bañando a Rocky, el perro, con las manos llenas de espuma.', 'La tía observó con atención. En la blusa de Valeria brillaban puntitos blancos de azúcar en polvo, y sobre la alfombra había un camino de migas que iba desde el comedor hasta el rompecabezas de Joaquín. Rocky, mojado y feliz, movía la cola con el hocico completamente limpio. La tía Marisol sonrió: ya sabía lo que había pasado.'],
      qs: [
        { t: 'open', q: '¿Cuántos alfajores faltaban?', lines: 1, a: 'Cuatro.' },
        { t: 'open', q: '¿Quiénes se comieron los alfajores? Explica con las pistas.', lines: 3, a: 'Valeria (azúcar en la blusa, mejillas infladas) y Joaquín (camino de migas hasta su rompecabezas: mintió al decir que no se movió).' },
        { t: 'open', q: '¿Por qué se descarta a Bastián y a Rocky?', lines: 1, a: 'Bastián estaba en el patio bañando al perro; Rocky tenía el hocico limpio.' },
        { t: 'choice', q: 'Por el contexto, el «lonche» es…', o: ['el desayuno', 'una comida ligera de la tarde', 'la cena de Navidad'], a: 1 },
      ],
    },
    {
      title: 'El Fenómeno El Niño', skill: 'Idea principal y detalles', type: 'Texto expositivo', art: '🌊',
      text: ['Normalmente, el mar frente a la costa del Perú es frío. Esas aguas frías están llenas de plancton y alimentan a millones de anchovetas. Pero cada cierto número de años, el océano Pacífico se calienta más de lo normal. Ese cambio se llama Fenómeno El Niño.', 'El nombre lo pusieron hace siglos los pescadores del norte, porque el agua caliente solía llegar cerca de la Navidad, cuando se celebra el nacimiento del Niño Jesús.', 'Cuando el mar se calienta, se evapora más agua y se forman más nubes. Por eso, en la costa norte, en regiones como Tumbes y Piura, caen lluvias muy fuertes. Los ríos crecen, hay inundaciones y bajan huaicos: avalanchas de lodo y piedras desde los cerros. Además, las anchovetas se alejan buscando aguas frías, y la pesca disminuye.', 'Por eso los científicos vigilan la temperatura del mar todo el año: si avisan a tiempo, las ciudades pueden prepararse.'],
      qs: [
        { t: 'choice', q: '¿Cuál es la idea principal?', o: ['El Niño es un calentamiento del mar que causa lluvias, huaicos y menos pesca.', 'Las anchovetas viven en aguas frías.', 'Los pescadores celebran la Navidad.'], a: 0 },
        { t: 'boxes', q: 'Completa: causa y consecuencias.', labels: ['Causa', 'Consecuencia 1', 'Consecuencia 2', 'Consecuencia 3'], a: 'Causa: el mar se calienta. Consecuencias: lluvias fuertes, inundaciones y huaicos, menos pesca de anchoveta.' },
        { t: 'open', q: '¿Por qué se llama «El Niño»?', lines: 1, a: 'Porque el agua caliente llegaba cerca de Navidad (nacimiento del Niño Jesús).' },
        { t: 'open', q: 'Según el texto, ¿qué es un huaico?', lines: 1, a: 'Una avalancha de lodo y piedras que baja de los cerros.' },
      ],
    },
    {
      title: 'Dos textos, dos intenciones', skill: 'El propósito del autor', type: 'Anuncio y texto informativo', art: '👟',
      text: ['<b>Texto A</b> — ¡LLEGARON LAS ZAPATILLAS RAYO X! 🔥 Las más rápidas del planeta. Con ellas vas a ganar todas las carreras y todos van a querer ser como tú. ¡Solo por esta semana, 2×1! No te quedes sin las tuyas: ¡corre a la tienda antes de que se agoten!', '<b>Texto B</b> — ¿Cómo elegir unas zapatillas deportivas? Primero, pruébatelas por la tarde, cuando los pies están un poco más hinchados. Deja un espacio del ancho de un dedo entre el dedo gordo y la punta. Revisa que la suela sea flexible y que no te aprieten a los costados. Una zapatilla cómoda previene ampollas y lesiones, aunque no te hará correr más rápido por sí sola: eso depende del entrenamiento.'],
      qs: [
        { t: 'open', q: '¿Cuál es el propósito del Texto A? ¿Y el del Texto B?', lines: 2, a: 'A: convencer de comprar (publicidad). B: informar o enseñar a elegir zapatillas.' },
        { t: 'open', q: 'Copia dos frases del Texto A que intentan convencerte.', lines: 2, a: '«Las más rápidas del planeta», «vas a ganar todas las carreras», «todos van a querer ser como tú», «antes de que se agoten».' },
        { t: 'choice', q: '¿Qué texto dice algo que el otro exagera?', o: ['El B aclara que la zapatilla no te hace correr más rápido por sí sola.', 'El A explica cómo probarse las zapatillas.', 'Ninguno.'], a: 0 },
        { t: 'open', q: '¿Por qué conviene leer con cuidado los anuncios?', lines: 1, a: 'Porque buscan vender y pueden exagerar o prometer cosas que no son ciertas.' },
      ],
    },
    {
      title: 'El violín de Elena', skill: 'Vocabulario en contexto', type: 'Cuento', art: '🎻',
      text: ['Elena llevaba seis meses practicando violín. Todos los días, después de la tarea, ensayaba la misma pieza para el concierto de fin de año. Algunas tardes las cuerdas chillaban tanto que su hermano se tapaba los oídos.', 'La noche del concierto, el auditorio estaba lleno. Cuando la presentaron, Elena <b>titubeó</b> antes de subir al escenario: dio un paso, se detuvo y miró a su mamá. Su mamá levantó el pulgar.', 'Elena empezó a tocar. A la mitad, una nota salió desafinada y sintió que el corazón se le salía del pecho. Pero no se detuvo. Respiró, siguió y terminó la pieza con una nota larga y limpia.', 'Hubo un segundo de silencio. Luego, el público se puso de pie y le dio una <b>ovación</b>. Su hermano, <b>atónito</b>, no podía creer que fuera la misma niña de las cuerdas chillonas. La profesora le dijo al oído: —Eso se llama <b>perseverancia</b>.'],
      qs: [
        { t: 'match', q: 'Une cada palabra con su significado.', left: ['titubeó', 'ovación', 'atónito', 'perseverancia'], right: ['muy sorprendido', 'dudó antes de actuar', 'seguir esforzándose aunque sea difícil', 'aplauso fuerte y largo del público'], a: [2, 4, 1, 3] },
        { t: 'open', q: '¿Qué pasó a la mitad de la pieza y qué hizo Elena?', lines: 1, a: 'Una nota salió desafinada; ella no se detuvo, respiró y siguió.' },
        { t: 'open', q: '¿Por qué la profesora habla de perseverancia?', lines: 2, a: 'Porque Elena practicó seis meses y no se rindió, ni siquiera cuando se equivocó en el concierto.' },
      ],
    },
    {
      title: 'La encuesta de Nina', skill: 'Leer tablas', type: 'Texto con tabla', img: 'club.jpg',
      text: ['Nina, la alpaca científica del Club de Exploradores, quiso averiguar cuánto tiempo pasan sus amigos frente a las pantallas. Durante una semana, cada uno anotó sus horas en un cuaderno. Estos son los resultados (horas en toda la semana):', `<table class="t" style="margin:2mm 0 1mm"><tr><th>Explorador</th><th>Pantallas</th><th>Lectura</th><th>Deporte / juego afuera</th></tr><tr><td>Zara</td><td>9 h</td><td>3 h</td><td>8 h</td></tr><tr><td>Bruno</td><td>16 h</td><td>2 h</td><td>3 h</td></tr><tr><td>Nina</td><td>5 h</td><td>7 h</td><td>6 h</td></tr><tr><td>Lu</td><td>3 h</td><td>10 h</td><td>4 h</td></tr></table>`, 'Al ver la tabla, Bruno se rascó la cabeza: —Creo que mi tablet y yo necesitamos unas vacaciones.'],
      qs: [
        { t: 'open', q: '¿Quién pasó más horas frente a las pantallas? ¿Cuántas?', lines: 1, a: 'Bruno, 16 horas.' },
        { t: 'open', q: '¿Cuántas horas leyeron entre todos?', lines: 1, a: '3 + 2 + 7 + 10 = 22 horas.' },
        { t: 'open', q: '¿Qué quiso decir Bruno con «mi tablet y yo necesitamos unas vacaciones»?', lines: 1, a: 'Que debería usar menos la tablet.' },
        { t: 'open', q: 'Haz tu propia cuenta de esta semana: ¿cuántas horas de pantalla, lectura y juego afuera?', lines: 1, a: 'Respuesta libre.' },
      ],
    },
    {
      title: 'Un partido, dos miradas', skill: 'Punto de vista', type: 'Dos narradores', art: '⚽',
      text: ['<b>Lo cuenta Andrés, el arquero:</b> Faltaba un minuto y estábamos empatados. Vi venir el balón y me lancé con todas mis fuerzas, pero rozó mis guantes y entró. Me quedé tirado en el pasto. Sentí que había decepcionado a todo el equipo. No quería mirar a nadie.', '<b>Lo cuenta Fernanda, la delantera del otro equipo:</b> ¡Faltaba un minuto! Vi un espacio pequeñito en la esquina del arco y pateé sin pensarlo. Cuando la pelota entró, grité tanto que me dolió la garganta. Pero después vi al arquero en el suelo y me acerqué a darle la mano. Había atajado tres tiros míos antes. Era el mejor arquero contra el que había jugado.'],
      qs: [
        { t: 'open', q: '¿Cómo se sintió Andrés después del gol? ¿Y Fernanda?', lines: 2, a: 'Andrés: triste, con culpa, decepcionado. Fernanda: muy feliz, y luego empática con el arquero.' },
        { t: 'open', q: '¿Qué sabe Fernanda que Andrés no dice de sí mismo?', lines: 1, a: 'Que atajó tres tiros antes y fue el mejor arquero contra el que jugó.' },
        { t: 'choice', q: '¿Por qué el mismo hecho se cuenta tan distinto?', o: ['porque uno de los dos miente', 'porque cada uno lo vive desde su lugar y sus emociones', 'porque fueron partidos diferentes'], a: 1 },
        { t: 'open', q: 'Si fueras compañero de Andrés, ¿qué le dirías?', lines: 1, a: 'Respuesta libre.' },
      ],
    },
    {
      title: '¿Celular propio antes de los 12?', skill: 'Argumentos a favor y en contra', type: 'Texto argumentativo', art: '📱',
      text: ['Cada vez más niños piden un celular propio, y muchas familias se preguntan cuándo es el momento adecuado. Hay razones a favor y en contra.', '<b>A favor:</b> algunas familias dicen que un celular ayuda a mantenerse en contacto, por ejemplo, para avisar que ya salieron del colegio. También puede servir para buscar información, hacer tareas o hablar con familiares que viven lejos.', '<b>En contra:</b> otros señalan que los celulares pueden quitar horas de sueño, de juego y de lectura. Además, en internet hay contenidos que no son para niños, y las redes sociales pueden generar comparaciones, burlas o presión por tener «me gusta». Muchos especialistas recomiendan esperar, y que mientras tanto se usen equipos compartidos con reglas claras.', 'Al final, no hay una respuesta única: lo importante es que la familia converse, ponga acuerdos y que el uso sea acompañado.'],
      qs: [
        { t: 'open', q: 'Escribe un argumento a favor y uno en contra.', lines: 2, a: 'A favor: contacto con la familia, tareas, información. En contra: quita sueño y juego, contenidos no aptos, presión en redes.' },
        { t: 'choice', q: '¿Cuál es la conclusión del autor?', o: ['Todos los niños deben tener celular.', 'Ningún niño debe usar celular jamás.', 'No hay una respuesta única: hay que conversar, poner acuerdos y acompañar.'], a: 2 },
        { t: 'open', q: '¿Cuál es tu opinión? Defiéndela con dos razones.', lines: 3, a: 'Respuesta libre (opinión + dos razones).' },
      ],
    },
    {
      title: 'Las islas flotantes de los uros', skill: 'Resumir', type: 'Texto informativo', art: '🛶',
      text: ['En el lago Titicaca, en Puno, a más de 3800 metros de altura, vive el pueblo uro. Lo sorprendente es que muchas de sus familias viven sobre islas que flotan. ¡Y las construyen con sus propias manos!', 'Para hacerlas, cortan bloques de raíces de totora, una planta que crece en el lago, y los amarran entre sí. Encima colocan capas y capas de totora seca. Como la totora de abajo se va pudriendo con el agua, tienen que añadir capas nuevas cada pocas semanas.', 'La totora lo es todo para los uros: con ella construyen sus casas y sus botes, y la parte blanca del tallo hasta se puede comer. Hoy, además de pescar y criar aves, muchas familias reciben a turistas y les enseñan su forma de vida.'],
      qs: [
        { t: 'boxes', q: 'Escribe un título corto para cada párrafo.', labels: ['Párrafo 1', 'Párrafo 2', 'Párrafo 3'], a: 'P1: Un pueblo que vive sobre el lago. P2: Cómo construyen las islas. P3: La totora en su vida diaria.' },
        { t: 'open', q: '¿Por qué deben añadir totora nueva cada pocas semanas?', lines: 1, a: 'Porque la totora de abajo se pudre con el agua.' },
        { t: 'open', q: 'Resume el texto en 2 o 3 oraciones.', lines: 3, a: 'Los uros viven en el lago Titicaca sobre islas flotantes que construyen con totora y renuevan con frecuencia. La totora les sirve para casas, botes y alimento; hoy también reciben turistas.' },
      ],
    },
    {
      title: 'El último puesto', skill: 'El mensaje del texto', type: 'Cuento', art: '🏃',
      text: ['Era la carrera final de los juegos deportivos. Sofía había entrenado todo el año y sabía que podía ganar. Al sonar el silbato salió disparada y, en la última vuelta, iba segunda, a pocos metros de la primera.', 'Entonces escuchó un grito detrás de ella. Martina, una niña de otro colegio, se había caído y se agarraba el tobillo. Los demás corredores la esquivaron y siguieron. Sofía dudó un segundo. Luego dio media vuelta, la ayudó a levantarse y, con su brazo sobre los hombros, caminaron juntas hasta la meta.', 'Llegaron últimas. Pero cuando cruzaron la línea, todo el estadio estaba de pie aplaudiendo. Esa tarde, Sofía no se llevó una medalla. Se llevó algo que no cabía en ninguna vitrina.'],
      qs: [
        { t: 'open', q: '¿Qué decisión difícil tomó Sofía?', lines: 1, a: 'Dejar de competir para ayudar a Martina, que se había caído.' },
        { t: 'open', q: '¿Qué significa «se llevó algo que no cabía en ninguna vitrina»?', lines: 2, a: 'Algo más valioso que una medalla: el reconocimiento, el orgullo de haber hecho lo correcto, una amiga.' },
        { t: 'choice', q: '¿Cuál es el mensaje principal?', o: ['Siempre hay que ganar.', 'Ayudar a otros puede valer más que un premio.', 'No hay que correr en las competencias.'], a: 1 },
        { t: 'open', q: '¿Tú qué habrías hecho? ¿Por qué?', lines: 2, a: 'Respuesta libre.' },
      ],
    },
  ],
};
