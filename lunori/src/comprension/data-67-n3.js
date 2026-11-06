// Edición 6-7 años · Nivel 3 (Súper lector): textos de 100-130 palabras y preguntas para pensar y justificar.
module.exports = {
  age: '6 a 7 años',
  slug: '6-7-anos',
  mode: 'basic',
  lecturas: [
    {
      title: 'Lu, la detective', skill: 'Inferir con pistas', type: 'Cuento', img: 'lu-lupa.jpg',
      text: ['Coco dejó su sánguche de queso sobre una piedra y se fue a jugar con la pelota. Cuando volvió, ¡solo quedaban unas migas!', '—¡Fue Tito! —gritó Coco—. A los ratones les encanta el queso.', 'Lu sacó su lupa y miró con atención. Tito estaba lejos, junto al lago, pintando un cuadro desde la mañana. Tenía las patitas manchadas de pintura azul, pero ni una miga en los bigotes.', 'Luego, Lu miró la piedra. Una fila larguísima de hormigas bajaba por ella. Cada una cargaba un pedacito de pan o de queso hasta un huequito en la tierra.', '—Caso resuelto —dijo Lu—. Y recuerda, Coco: antes de acusar a alguien, hay que buscar pistas.'],
      tip: 'Pídele que subraye con un color cada pista que encuentra Lu. Luego pregúntale: «¿cuál de estas pistas resuelve el caso?, ¿cómo lo sabes?».',
      qs: [
        { t: 'choice', q: '¿Quiénes se llevaron el sánguche de Coco?', o: ['Tito', 'las hormigas', 'Lu'], a: 1 },
        { t: 'open', q: '¿Qué pista lo demuestra?', lines: 1, a: 'La fila de hormigas que cargaba pedacitos de pan y queso.' },
        { t: 'open', q: '¿Cómo sabe Lu que Tito no fue? Escribe dos razones.', lines: 2, a: 'Estaba lejos, pintando junto al lago, y no tenía migas en los bigotes.' },
        { t: 'say', q: '¿Por qué Coco acusó a Tito? ¿Estuvo bien? ¿Por qué?', a: 'Creyó que a los ratones les encanta el queso. No estuvo bien: no buscó pistas.' },
      ],
    },
    {
      title: 'El rincón de los libros', skill: 'Problema y solución', type: 'Cuento', art: '📚',
      text: ['El estante del aula de segundo grado tenía solo cuatro cuentos. Todos los niños ya los habían leído muchas veces.', '—Ya me los sé de memoria —se quejó Lucas.', 'Entonces Valentina levantó la mano: —¿Y si cada uno trae de su casa un libro que ya leyó? Así podemos intercambiarlos.', 'A la profesora Maribel le encantó la idea. Al día siguiente, el estante amaneció lleno: había cuentos de dinosaurios, de piratas, de princesas y hasta un libro de chistes. Entre todos hicieron un cartel que decía: «Rincón de los libros: trae uno, llévate otro».', 'Desde ese día, en el recreo siempre hay alguien leyendo en el rincón, y Lucas ya no se aburre.'],
      tip: 'En cada cuento, ayúdale a encontrar «el problema» y «la solución». Luego pregúntale: «¿qué otra solución habrías probado tú?». Así aprende a pensar en más de una salida.',
      qs: [
        { t: 'open', q: '¿Cuál era el problema en el aula?', lines: 1, a: 'Solo había cuatro cuentos, y ya los habían leído.' },
        { t: 'open', q: '¿Qué solución propuso Valentina?', lines: 1, a: 'Que cada uno trajera un libro que ya leyó, para intercambiarlos.' },
        { t: 'open', q: '¿Funcionó la solución? ¿Cómo lo sabes?', lines: 2, a: 'Sí: el estante se llenó y Lucas ya no se aburre.' },
        { t: 'say', q: '¿Qué otra solución se te ocurre para ese problema?', a: 'Respuesta libre (ir a la biblioteca, escribir sus propios cuentos…).' },
      ],
    },
    {
      title: 'Dos niños, dos lugares', skill: 'Parecidos y diferencias', type: 'Texto informativo', art: '🗺️',
      text: ['Killa vive en Puno, junto al lago Titicaca, en la sierra. Allí las noches son muy frías y a veces cae helada. Por eso Killa usa chompa de lana de alpaca y un chullo de colores. Su casa tiene paredes gruesas de adobe, que guardan el calor.', 'Thiago vive en Iquitos, en la selva. Allí hace calor todo el año y llueve muchísimo. Thiago usa polo y short, y su casa tiene ventanas grandes para que entre el aire. Ninguna carretera llega a Iquitos desde otras ciudades: se llega en avión o en barco.', 'Killa y Thiago viven muy lejos, pero tienen algo en común: a los dos les encanta jugar fútbol después del colegio.'],
      tip: 'Comparen dos cosas de la casa (dos frutas, dos juguetes) con la pregunta «¿en qué se parecen y en qué son diferentes?». Es la misma forma de pensar que usará en ciencias.',
      qs: [
        { t: 'match', q: 'Une cada niño con lo que le corresponde.', left: ['Killa', 'Thiago', 'Los dos'], right: ['usa polo y short', 'les encanta jugar fútbol', 'usa chompa y chullo'], a: [3, 1, 2] },
        { t: 'boxes', q: 'Compara a Killa y a Thiago.', labels: ['Se parecen en…', 'Son diferentes en…'], a: 'Se parecen: a los dos les encanta el fútbol. Son diferentes: el clima, la ropa y la casa.' },
        { t: 'open', q: '¿Por qué la casa de Killa tiene paredes gruesas y la de Thiago, ventanas grandes?', lines: 2, a: 'En Puno hace frío y las paredes guardan el calor; en Iquitos hace calor y entra el aire.' },
        { t: 'say', q: '¿En qué te pareces tú a Killa o a Thiago?', a: 'Respuesta libre.' },
      ],
    },
    {
      title: 'El chullo de Sami', skill: 'Contar con mis palabras', type: 'Cuento', art: '🚌',
      text: ['Sami vive en Huancayo. Su abuela le tejió un chullo rojo con dibujos de llamas, y ella lo usa todas las mañanas cuando va al colegio en combi con su mamá.', 'Un día, al bajar de la combi, Sami sintió frío en las orejas. ¡Había dejado su chullo en el asiento! Pero la combi ya se alejaba por la avenida. Sami se puso muy triste: ese chullo era el regalo más bonito que tenía.', 'Al día siguiente, esperaron la misma combi en el paradero. Cuando subieron, el cobrador sonrió y sacó algo de una bolsa: ¡era el chullo rojo! —Lo guardé para ti —le dijo.', 'Sami le dio las gracias y, esa tarde, le contó todo a su abuela.'],
      tip: 'Pídele que te cuente el cuento en solo tres oraciones: inicio, problema y final. Si se alarga, pregúntale: «¿eso es importante o es un detalle?».',
      qs: [
        { t: 'boxes', q: 'Cuenta el cuento en tres partes, con tus palabras.', labels: ['Al inicio…', 'El problema…', 'Al final…'], a: 'Inicio: Sami usa su chullo. Problema: lo olvida en la combi. Final: el cobrador se lo devuelve.' },
        { t: 'choice', q: '¿Cuál es el mejor resumen del cuento?', o: ['Sami olvidó su chullo en la combi y el cobrador se lo devolvió.', 'La abuela de Sami sabe tejer chullos.', 'En Huancayo hace frío en las mañanas.'], a: 0 },
        { t: 'open', q: '¿Por qué el chullo era tan importante para Sami?', lines: 1, a: 'Se lo tejió su abuela: era su regalo más bonito.' },
        { t: 'say', q: '¿Cómo crees que se sintió el cobrador al devolverle el chullo? ¿Por qué?', a: 'Respuesta libre (contento por ayudar…).' },
      ],
    },
    {
      title: 'Mi hermanito', skill: 'Comparaciones', type: 'Poema', art: '👶', poem: true,
      text: ['Mi hermanito tiene un año,<br>es chiquito como un frejol,<br>sus cachetes son redondos<br>y calientitos como el sol.<br>Y sus ojos brillan tanto<br>como la luz de un farol.', 'Cuando ríe, su risa suena<br>como un cascabel de cristal;<br>si llora, ¡qué escándalo!,<br>parece un gallo en el corral.<br>Mamá le canta bajito<br>y vuelve a reír, ¡qué genial!', 'Duerme como un gatito<br>enroscado en su colchón,<br>con sus manitos cerradas<br>como bolitas de algodón.<br>Y cuando me abraza fuerte<br>me crece el corazón.'],
      tip: 'Busquen comparaciones en la vida diaria: «esa nube parece un…», «corres como un…». Pregúntale siempre «¿en qué se parecen?» para que explique su comparación.',
      qs: [
        { t: 'choice', q: '«Es chiquito como un frejol» quiere decir que el hermanito…', o: ['es muy pequeño', 'es verde', 'come mucho frejol'], a: 0 },
        { t: 'match', q: 'Une cada parte del hermanito con su comparación.', left: ['su risa', 'sus cachetes', 'sus manitos'], right: ['como el sol', 'como bolitas de algodón', 'como un cascabel de cristal'], a: [3, 1, 2] },
        { t: 'open', q: '¿Por qué crees que el poema dice que su llanto «parece un gallo en el corral»?', lines: 1, a: 'Porque llora muy fuerte, como un gallo cuando canta.' },
        { t: 'open', q: 'Inventa tu propia comparación: «Mi ______ es ______ como ______».', lines: 1, a: 'Respuesta libre (por ejemplo: «Mi perro es rápido como el viento»).' },
      ],
    },
    {
      title: 'La rana del lago', skill: 'La moraleja', type: 'Fábula', art: '🐸',
      text: ['En el lago Titicaca vivía una rana grande, con la piel llena de arrugas. Los patos se burlaban de ella: —¡Pareces una chompa vieja! —le decían, y se reían.', 'La rana no respondía. Se iba nadando al fondo del lago, donde podía quedarse mucho tiempo gracias a su piel arrugada.', 'Un día, el patito más pequeño jugaba con su piedrita favorita, verde y brillante, y se le cayó al agua. La piedra se hundió hasta el fondo. Los patos se zambulleron una y otra vez, pero el lago era muy hondo y salían sin nada.', 'Entonces la rana bajó despacito y volvió con la piedra. Los patos bajaron la cabeza.', '—Perdónanos, amiga. Tus arrugas son un tesoro.'],
      tip: 'Al terminar una fábula, pregúntale: «¿qué aprendieron los patos?» y «¿qué aprendiste tú?». La moraleja no siempre está escrita: hay que descubrirla.',
      qs: [
        { t: 'choice', q: '¿Por qué se burlaban los patos de la rana?', o: ['porque era muy lenta', 'porque tenía la piel llena de arrugas', 'porque cantaba mal'], a: 1 },
        { t: 'open', q: '¿Por qué la rana pudo traer la piedra y los patos no?', lines: 1, a: 'Su piel arrugada le permite quedarse mucho tiempo bajo el agua.' },
        { t: 'choice', q: '¿Cuál es la moraleja de esta fábula?', o: ['No te burles de nadie: lo que te parece raro puede ser algo especial.', 'Hay que nadar todos los días.', 'Las piedras verdes son las más bonitas.'], a: 0 },
        { t: 'open', q: '¿Qué quieren decir los patos con «tus arrugas son un tesoro»?', lines: 1, a: 'Que lo que les parecía feo es valioso.' },
      ],
    },
    {
      title: '¡Pingüinos en el Perú!', skill: 'Sacar conclusiones', type: 'Texto informativo', art: '🐧',
      text: ['Mucha gente cree que los pingüinos solo viven entre el hielo y la nieve. ¡Pero en el Perú también hay pingüinos!', 'El pingüino de Humboldt vive en la costa del Perú y de Chile. Allí no hay hielo, pero el mar es frío, porque una corriente de agua fría llega desde el sur. Esa corriente se llama corriente de Humboldt, igual que el pingüino.', 'Tiene el pecho blanco con una franja negra, como si llevara un collar. Este pingüino no puede volar, pero nada muy rápido. Come peces pequeños, como la anchoveta. Hace su nido en islas y playas con rocas, por ejemplo, en las islas Ballestas, en Paracas.'],
      tip: 'Ante un dato sorprendente, pregúntale: «¿qué aprendimos que no sabíamos?». Sacar conclusiones es unir lo que leyó con lo que ya sabía.',
      qs: [
        { t: 'tf', q: 'Marca V o F.', items: [['Todos los pingüinos viven en el hielo.', false], ['El mar de la costa del Perú es frío.', true], ['El pingüino de Humboldt come anchoveta.', true]] },
        { t: 'open', q: 'Lucía dice: «En el Perú no hay pingüinos, porque no hay hielo». ¿Tiene razón? ¿Cómo lo sabes?', lines: 2, a: 'No: el pingüino de Humboldt vive en la costa del Perú, porque el mar es frío.' },
        { t: 'choice', q: '¿Qué conclusión puedes sacar del texto?', o: ['Algunos pingüinos viven sin hielo, si tienen agua fría y peces.', 'Los pingüinos viven en la selva.', 'Los pingüinos pueden volar.'], a: 0 },
        { t: 'open', q: '¿Por qué crees que el pingüino hace su nido cerca del mar?', lines: 1, a: 'Porque del mar saca su comida (peces) y nada muy bien.' },
      ],
    },
    {
      title: 'Un cachorro en casa', skill: 'Dos puntos de vista', type: 'Cuento', art: '🐕',
      text: ['<b>Lo cuenta Joaquín:</b> ¡Hoy llegó Rocky, nuestro cachorro! Es pequeño, juguetón y tiene las orejas caídas. Corrió por toda la casa, mordió mi zapatilla y movió la cola sin parar. Todos queríamos cargarlo. En la noche, durmió en una canasta junto a mi cama. ¡Es el mejor día de mi vida!', '<b>Lo cuenta Misha, la gata:</b> Hoy llegó un animal ruidoso a MI casa. Corre por todas partes, ladra y quiere oler mi plato de comida. Todos lo miran a él y nadie me hace cariño a mí. Así que me subí al ropero y no pienso bajar. Bueno… quizá baje si Joaquín me llama.'],
      tip: 'Pregúntale: «¿cómo contaría este día Rocky, el cachorro?». Imaginar lo que piensa otro personaje es el primer paso para ponerse en su lugar.',
      qs: [
        { t: 'choice', q: '¿Quién cuenta la segunda parte?', o: ['Joaquín', 'Rocky', 'Misha, la gata'], a: 2 },
        { t: 'match', q: 'Une a cada uno con cómo se siente.', left: ['Joaquín', 'Misha'], right: ['celosa y molesta', 'feliz y emocionado'], a: [2, 1] },
        { t: 'open', q: '¿Por qué Misha se siente así? ¿Qué pista te lo dice?', lines: 2, a: 'Nadie le hace cariño a ella, solo al cachorro; se subió al ropero.' },
        { t: 'say', q: '¿Qué podría hacer Joaquín para que Misha se sienta mejor?', a: 'Respuesta libre (llamarla, hacerle cariño…).' },
      ],
    },
    {
      title: 'Dos textos sobre el mango', skill: '¿Para qué se escribió?', type: 'Dos textos', art: '🏷️',
      text: ['<b>Texto 1</b><br><b>¡Llegó el mango piurano a la frutería Doña Chela!</b> Dulce como la miel y jugoso como ninguno. ¡Es el mango más rico del mundo! Ven hoy y lleva 3 mangos por solo S/ 5. ¡No te lo pierdas!', '<b>Texto 2</b><br>El mango es una fruta que crece en árboles grandes, en lugares donde hace calor. Por fuera tiene una cáscara verde, amarilla o roja, y por dentro, una pulpa amarilla con una pepa grande. El mango tiene vitaminas que ayudan a cuidar nuestro cuerpo, y se puede comer solo o en jugos, helados y postres. En el Perú, la región que produce más mangos es Piura.'],
      tip: 'Miren juntos un aviso de verdad (en la calle, en una bolsa o en la radio) y pregúntale: «¿qué quiere que hagamos?». Así descubre que no todos los textos se escriben para informar.',
      qs: [
        { t: 'match', q: 'Une cada texto con para qué se escribió.', left: ['Texto 1', 'Texto 2'], right: ['para enseñarnos cómo es el mango', 'para que compremos mangos'], a: [2, 1] },
        { t: 'choice', q: '¿Qué frase del texto 1 exagera?', o: ['Ven hoy y lleva 3 mangos por S/ 5.', '¡Es el mango más rico del mundo!', 'Llegó el mango piurano.'], a: 1 },
        { t: 'open', q: '¿Cómo sabes que el texto 2 quiere enseñarnos y no vendernos?', lines: 2, a: 'Da datos que se pueden comprobar y no da precios ni pide comprar.' },
        { t: 'open', q: 'Si compras 6 mangos en la frutería de Doña Chela, ¿cuánto pagas?', lines: 1, a: 'S/ 10 (S/ 5 + S/ 5 = S/ 10).' },
      ],
    },
    {
      title: 'Carta a la alcaldesa', skill: 'Convencer con razones', type: 'Carta', art: '✉️',
      text: ['<i>Arequipa, 3 de junio</i><br>Señora alcaldesa:', 'Me llamo Renata, tengo 7 años y vivo frente al parque Las Palmeras. Le escribo porque los columpios del parque están rotos y no hay tachos de basura. Antes íbamos todas las tardes, pero ahora el parque está triste y sucio.', 'Le pido que arreglen los columpios, porque los niños del barrio no tenemos otro lugar para jugar. También le pido que pongan tachos, porque así el parque estará limpio y los perritos no comerán basura.', 'Mis amigos y yo prometemos ayudar a cuidarlo: podemos regar las plantas y recoger los papeles los sábados.', 'Muchas gracias. Espero su respuesta.<br><b>Renata</b>'],
      tip: 'Escriban juntos una nota de verdad para pedir algo en casa o en el colegio, con un «porque…». Si su razón convence, ¡cumplan el pedido!',
      qs: [
        { t: 'choice', q: '¿Para qué escribió Renata esta carta?', o: ['para contar un cuento', 'para pedir que arreglen el parque', 'para invitar a una fiesta'], a: 1 },
        { t: 'open', q: 'Escribe una razón que da Renata para convencer a la alcaldesa.', lines: 1, a: 'Los niños no tienen dónde jugar, o con tachos el parque estará limpio.' },
        { t: 'open', q: '¿Por qué crees que Renata promete ayudar a cuidar el parque?', lines: 1, a: 'Para convencer: muestra que los niños también harán su parte.' },
        { t: 'open', q: '¿Qué le pedirías tú a la alcaldesa para tu barrio? Da una razón.', lines: 2, a: 'Respuesta libre (un pedido con «porque…»).' },
      ],
    },
  ],
};
