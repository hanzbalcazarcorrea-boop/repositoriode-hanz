// Edición 8-9 años · Nivel 3 (Súper lector): textos de 170-210 palabras y preguntas para pensar, justificar y explicar.
module.exports = {
  age: '8 a 9 años',
  slug: '8-9-anos',
  mode: 'mid',
  lecturas: [
    {
      title: 'El misterio del balcón', skill: 'Inferir con pistas', type: 'Cuento de misterio', art: '🔍',
      text: ['Camila guardaba en el balcón un platito con pepitas de girasol. Quería sembrarlas el domingo con su abuela. Pero el lunes en la mañana encontró solo la mitad. El martes, apenas quedaban diez.', '—¡Diego, te comiste mis pepitas! —le dijo a su hermano. —Yo no fui —respondió él—. Ni siquiera me gustan. Además, nunca salgo al balcón: ¡me dan miedo las alturas!', 'Camila decidió investigar como una detective. Junto al platito encontró una plumita gris y, en el polvo de la baranda, unas huellas finitas con forma de tenedor. También notó algo curioso: en la tarde, las pepitas estaban completas; siempre desaparecían de madrugada.', 'Esa noche dejó el platito en su lugar y puso la alarma muy temprano. Al amanecer, se escondió detrás de la cortina y esperó en silencio. De pronto, escuchó un suave «pío, pío»…', 'Camila sonrió. Ya sabía quiénes eran los ladrones. Desde ese día guarda sus pepitas en un frasco bien cerrado… y deja un puñadito en la baranda para sus visitantes.'],
      qs: [
        { t: 'open', q: '¿Quiénes se comían las pepitas? Escribe dos pistas que te ayudaron a descubrirlo.', lines: 2, a: 'Unos pajaritos. Pistas: la plumita gris, las huellas con forma de tenedor, que pasaba de madrugada y el «pío, pío» (dos de ellas).' },
        { t: 'open', q: '¿Qué razones da Diego para demostrar que él no fue?', lines: 1, a: 'Que no le gustan las pepitas y que nunca sale al balcón porque le dan miedo las alturas.' },
        { t: 'choice', q: '¿Por qué Camila puso la alarma muy temprano?', o: ['porque tenía que ir al colegio', 'porque las pepitas desaparecían de madrugada', 'porque quería ver el amanecer'], a: 1 },
        { t: 'open', q: '¿Qué nos dice el final sobre cómo es Camila? ¿Cómo lo sabes?', lines: 1, a: 'Que es cariñosa y generosa con los animales: no se enoja con los pajaritos y les deja un puñadito de pepitas.' },
      ],
      tip: 'Pídele que subraye cada pista con un color antes de responder. Luego pregúntale «¿cómo lo sabes?» y que te muestre en el texto la pista que lo prueba.',
    },
    {
      title: 'Si no hubiera abejas', skill: 'Cadena de causas', type: 'Texto informativo', art: '🐝',
      text: ['Cuando una abeja visita una flor, busca su néctar, un jugo dulce con el que luego hace miel. Pero, sin darse cuenta, también hace otro trabajo muy importante.', 'Al meterse en la flor, se le pega en el cuerpo el polen, un polvito que suele ser amarillo. Luego, la abeja vuela a otra flor de la misma clase y deja allí parte de ese polen. A esto se le llama <b>polinización</b>. Gracias a ella, la flor puede convertirse en un fruto con semillas.', 'Muchos alimentos que comemos, como la palta, la manzana, el zapallo y el maracuyá, necesitan la ayuda de las abejas y de otros insectos para dar frutos.', 'Por eso, si hubiera menos abejas, habría menos flores polinizadas, menos frutos y menos semillas para nuevas plantas. Y eso también significaría menos comida para los animales y para nosotros.', 'Hoy hay menos abejas que antes, sobre todo por los venenos contra insectos y porque se pierden las plantas con flores. Puedes ayudar sembrando flores… ¡y sin molestar nunca un panal!'],
      qs: [
        { t: 'order', q: 'Ordena la cadena del 1 al 4.', o: ['La flor se convierte en fruto.', 'El polen se pega en el cuerpo de la abeja.', 'La abeja visita una flor buscando néctar.', 'La abeja deja polen en otra flor.'], a: [4, 2, 1, 3] },
        { t: 'open', q: 'Si hubiera menos abejas, ¿qué pasaría con nuestra comida? Explica la cadena.', lines: 2, a: 'Habría menos flores polinizadas; por eso, menos frutos y semillas, y menos comida para los animales y las personas.' },
        { t: 'choice', q: '«Polinización» es…', o: ['cuando la abeja hace miel', 'llevar polen entre flores', 'cuando una flor se seca'], a: 1 },
        { t: 'open', q: '¿Por qué el texto dice que la abeja hace este trabajo «sin darse cuenta»?', lines: 1, a: 'Porque ella solo busca néctar; el polen se le pega y lo lleva a otra flor sin querer.' },
      ],
      tip: 'Dibujen la cadena con flechas: abeja → polen → flor → fruto → comida. Luego tapen una flecha y pregúntale: «si falta este paso, ¿qué pasa con los demás?».',
    },
    {
      title: 'Mariposas en la panza', skill: 'Lenguaje figurado', type: 'Cuento', art: '🦋',
      text: ['Faltaba una hora para la actuación del colegio y Killa tenía mariposas en la panza. Iba a recitar un poema delante de todas las familias, y era la primera vez que lo hacía.', 'Durante el almuerzo estuvo en las nubes. Su papá le habló tres veces y ella ni lo escuchó, porque repetía el poema en su cabeza. —Tranquila —le dijo su hermana mayor—. Te lo sabes de memoria. Para ti, eso es pan comido.', 'En el patio del colegio había sillas por todas partes. Cuando llegó su turno, Killa subió al escenario. Las piernas le temblaban como gelatina. Entonces vio a su abuelita en la primera fila, que le guiñó un ojo. Killa respiró hondo.', 'Empezó despacito, pero luego su voz salió fuerte y clara. Al terminar, todos aplaudieron. Su profesora se quedó con la boca abierta: ¡Killa había recitado sin equivocarse ni una vez!', '—¿Y las mariposas? —le preguntó después su hermana. —Se fueron volando —respondió Killa, riendo.'],
      qs: [
        { t: 'match', q: 'Une cada expresión con lo que significa.', left: ['«mariposas en la panza»', '«estar en las nubes»', '«pan comido»', '«con la boca abierta»'], right: ['distraído', 'muy sorprendido', 'nervioso', 'muy fácil'], a: [3, 1, 4, 2] },
        { t: 'open', q: '¿Por qué Killa estuvo «en las nubes» durante el almuerzo?', lines: 1, a: 'Porque estaba repitiendo el poema en su cabeza.' },
        { t: 'open', q: 'Al final, Killa dice que las mariposas «se fueron volando». ¿Qué quiere decir?', lines: 1, a: 'Que ya no estaba nerviosa: los nervios se le pasaron.' },
        { t: 'open', q: '¿Qué ayudó a Killa a calmarse? ¿Cómo lo sabes?', lines: 2, a: 'Ver a su abuelita, que le guiñó un ojo, y respirar hondo: justo después empezó a recitar.' },
      ],
      tip: 'Cuando alguien diga «me muero de hambre» o «llueve a cántaros», pregúntale: «¿es de verdad o es una forma de decir?». Hagan juntos una lista de las expresiones que usa la familia.',
    },
    {
      title: 'Tito entrevista a Pipa', skill: 'Sacar conclusiones', type: 'Entrevista · El Periódico del Bosque', img: 'pipa.jpg',
      text: ['<b>Por Tito, reportero.</b> Pipa acaba de volver de su viaje más largo: cruzó todo el bosque hasta la Laguna Escondida. Conversamos con ella.', '<b>Tito:</b> Pipa, ¿cuánto demoraste en llegar?<br><b>Pipa:</b> ¡Veinte días! Soy lenta, ya lo sabes. Pero camino un poquito todos los días, aunque llueva.', '<b>Tito:</b> ¿Qué fue lo más difícil?<br><b>Pipa:</b> Cruzar el Cerro de las Piedras. Me resbalé dos veces y tuve que empezar la subida de nuevo. No te voy a mentir: me dieron ganas de volver a casa.', '<b>Tito:</b> ¿Y por qué no volviste?<br><b>Pipa:</b> Me senté a descansar y miré el mapa que me dibujó Lu. ¡Ya había hecho más de la mitad del camino! Entonces pensé: «si llegué hasta aquí, puedo llegar hasta allá».', '<b>Tito:</b> ¿Qué encontraste en la laguna?<br><b>Pipa:</b> Agua tan clara que se veían los peces, y unas flores moradas que nunca había visto. Le traje semillas a Coco para su huerta.', '<b>Tito:</b> ¿Qué consejo les das a nuestros lectores?<br><b>Pipa:</b> Que no importa ir despacio. Lo importante es no detenerse… y llevar siempre un buen mapa.'],
      qs: [
        { t: 'open', q: '¿Cómo es Pipa? Escribe una cualidad y la parte de la entrevista que lo demuestra.', lines: 2, a: 'Perseverante: aunque se resbaló y quiso volver, siguió hasta llegar. También generosa: le trajo semillas a Coco.' },
        { t: 'open', q: '¿Qué quiere decir Pipa con «si llegué hasta aquí, puedo llegar hasta allá»?', lines: 1, a: 'Que si ya hizo la parte más difícil, también podrá terminar el camino.' },
        { t: 'open', q: '¿Por qué el mapa de Lu fue tan importante en el viaje? ¿Cómo lo sabes?', lines: 2, a: 'Porque al mirarlo vio que ya había hecho más de la mitad del camino y decidió no rendirse.' },
      ],
      tip: 'Sacar conclusiones es unir lo que dice el texto con lo que ya sabemos. Pregúntale: «¿qué nos dice esta respuesta sobre cómo es Pipa?» y pídele que lo explique con sus palabras.',
    },
    {
      title: 'El cóndor, en dos textos', skill: 'Comparar dos textos', type: 'Poema y texto informativo', art: '🦅',
      text: ['<b>Texto 1 · Poema</b><br><span style="display:inline-block;width:48%;vertical-align:top">Abre sus alas el cóndor,<br>gigante señor del viento,<br>y sin moverlas se eleva<br>como una cometa al cielo.</span><span style="display:inline-block;width:48%;vertical-align:top">Desde arriba mira el Ande:<br>los ríos, la nieve, el silencio.<br>Yo lo saludo desde abajo<br>y vuelo con él en mi sueño.</span>', '<b>Texto 2 · Texto informativo</b><br>El cóndor andino es una de las aves voladoras más grandes del mundo. Con las alas abiertas puede medir unos tres metros: ¡más que el largo de una cama! Vive en la cordillera de los Andes y hace su nido en acantilados muy altos.', 'Casi no mueve las alas: aprovecha el aire caliente que sube desde la tierra para elevarse y planear durante horas. Se alimenta de animales muertos, y así ayuda a mantener limpio el ambiente.', 'Para los antiguos pueblos andinos era un ave sagrada. Hoy quedan pocos cóndores, por eso es importante protegerlos. En el Perú, muchos visitantes viajan al Cañón del Colca, en Arequipa, para verlos volar.'],
      qs: [
        { t: 'choice', q: '¿Qué texto da datos exactos, como la medida de sus alas?', o: ['el poema', 'el texto informativo', 'los dos'], a: 1 },
        { t: 'tf', q: 'Marca V o F.', items: [['Los dos textos dicen que el cóndor casi no mueve las alas para subir.', true], ['El poema explica de qué se alimenta el cóndor.', false]] },
        { t: 'boxes', q: '¿Para qué crees que se escribió cada texto?', labels: ['El poema, para…', 'El texto informativo, para…'], a: 'El poema: expresar lo que siente quien lo escribe y hacernos imaginar el vuelo. El texto informativo: darnos datos reales sobre el cóndor.' },
        { t: 'open', q: 'Para una tarea de ciencias sobre el cóndor, ¿cuál de los dos textos usarías? ¿Por qué?', lines: 1, a: 'El texto informativo, porque tiene datos reales: su tamaño, qué come y dónde vive.' },
      ],
      tip: 'Busquen dos textos sobre un mismo tema (una canción y una noticia, por ejemplo) y pregúntale: «¿cuál informa?, ¿cuál emociona?». Comparar textos es algo que le pedirán mucho en el colegio.',
    },
    {
      title: 'El mono apurado', skill: 'El mensaje del texto', type: 'Fábula', art: '🐒',
      text: ['En un árbol de la selva vivían un mono y un perezoso. Una mañana, el árbol de al lado amaneció cargado de frutos, todavía verdes.', '—¡Son míos! —gritó el mono, y en un dos por tres arrancó un montón. Mordió uno: estaba duro y amargo. Lo tiró y mordió otro, y otro más. Todos sabían igual de feos. Al final, le dolió la barriga y el suelo quedó lleno de frutos desperdiciados.', 'El perezoso lo miraba, colgado de su rama. —¿Y tú no vas a comer? —le preguntó el mono, de mal humor. —Todavía no —respondió el perezoso con calma—. Un fruto verde no se vuelve dulce porque lo arranques rápido.', 'Pasaron dos semanas. Los frutos que quedaban se pusieron amarillos y suaves, y su olor dulce llenó la selva. Entonces el perezoso estiró el brazo, despacito, y arrancó el más maduro. Era jugoso y delicioso.', 'El mono se acercó, un poco avergonzado. —&#8288;¿Me invitas uno? —&#8288;preguntó. El perezoso le alcanzó un fruto: —&#8288;Claro. Hay para los dos… si sabemos esperar.'],
      qs: [
        { t: 'open', q: '¿Qué le pasó al mono por apurarse?', lines: 1, a: 'Arrancó frutos verdes, duros y amargos; le dolió la barriga y los desperdició.' },
        { t: 'open', q: '¿Qué quiso decir el perezoso con «un fruto verde no se vuelve dulce»?', lines: 2, a: 'Que hay cosas que necesitan su tiempo: apurarse no las hace llegar antes ni mejores.' },
        { t: 'choice', q: '¿Cuál es el mensaje de la fábula?', o: ['Los monos son más rápidos.', 'Hay que saber esperar.', 'Hay que comer frutas.'], a: 1 },
        { t: 'open', q: 'Cuenta una vez en que tuviste que esperar para conseguir algo. ¿Valió la pena?', lines: 2, a: 'Respuesta libre.' },
      ],
      tip: 'El mensaje de una fábula no siempre está escrito. Pregúntale: «¿qué aprendió el mono?, ¿y qué aprendiste tú?», y busquen juntos un momento de su vida en que esperar valió la pena.',
    },
    {
      title: 'Amanecer en la chacra', skill: 'Imágenes de los sentidos', type: 'Texto descriptivo', art: '🌄',
      text: ['<b>Por Luciana, 4.º grado.</b> En la chacra de mis abuelos, en el valle del Mantaro, el día empieza muy temprano. Lo primero que escucho es el «quiquiriquí» del gallo y el mugido de la vaca Pinta, que pide su desayuno. A lo lejos, el agua de la acequia corre entre las piedras.', 'Me pongo mi chompa más gruesa y salgo al patio. El cielo pasa de morado a naranja detrás de los cerros, y el maizal brilla, mojado por el rocío. Las hojas largas del maíz me hacen cosquillas en los brazos cuando camino entre ellas.', 'En la cocina, mi abuela ya prendió el fogón. Huele a leña, a pan calientito y a mate de muña. Me sirve un tazón de leche caliente y un pan con queso fresco, tan suave que se deshace en la boca.', 'Después del desayuno, ayudo a mi abuelo a darles alfalfa a los cuyes. Chillan «cui, cui» cuando nos ven llegar, y sus naricitas se mueven sin parar. Para mí, no hay mejor despertador que este. Cuando vuelvo a la ciudad, cierro los ojos y todavía puedo oler el pan de mi abuela.'],
      qs: [
        { t: 'boxes', q: 'Escribe algo del texto para cada sentido.', labels: ['Veo', 'Escucho', 'Huelo', 'Toco o saboreo'], a: 'Veo: el cielo morado y naranja, el maizal brillante. Escucho: el gallo, la vaca, la acequia, los cuyes. Huelo: leña, pan, mate de muña. Toco o saboreo: las hojas que hacen cosquillas, la leche caliente, el pan con queso.' },
        { t: 'open', q: '¿Qué quiere decir Luciana con «no hay mejor despertador que este»?', lines: 1, a: 'Que le encanta despertar con los sonidos de la chacra; los prefiere a cualquier alarma.' },
        { t: 'open', q: '¿Cómo se siente Luciana en la chacra? ¿Qué frase del texto te lo muestra?', lines: 1, a: 'Feliz y tranquila. Por ejemplo: «no hay mejor despertador que este» o «todavía puedo oler el pan de mi abuela».' },
        { t: 'open', q: 'Piensa en un lugar que te guste. ¿Qué escuchas y qué hueles allí?', lines: 2, a: 'Respuesta libre (con detalles de los sentidos).' },
      ],
      tip: 'Lean el texto por turnos con los ojos cerrados: uno lee y el otro imagina. Luego pregúntale qué «vio», qué «oyó» y qué «olió» mientras escuchaba.',
    },
    {
      title: 'La huancaína de Coco', skill: 'Instrucciones y razones', type: 'Receta', img: 'coco.jpg',
      text: ['<b>Papa a la huancaína (para 4 personas)</b><br><b>Ingredientes:</b> 6 papas amarillas, 3 ajíes amarillos, 200 gramos de queso fresco, ½ taza de leche evaporada, 4 galletas de soda, 3 cucharadas de aceite, sal, hojas de lechuga y 2 huevos duros.', '<b>Preparación (con ayuda de un adulto):</b><br>1. Lávate las manos y lava bien las papas.<br>2. El adulto sancocha las papas. Cuando se enfríen, pélalas y córtalas en rodajas.<br>3. Con guantes, quita las venas y las pepas de los ajíes. Así la crema no picará tanto.<br>4. Licúa los ajíes con el queso, la leche, las galletas y el aceite hasta que quede una crema suave. Agrega sal al gusto.<br>5. Coloca las papas sobre las hojas de lechuga, cúbrelas con la crema y decora con rodajas de huevo duro.', '<b>Consejo de Coco:</b> si la crema queda muy espesa, agrega un chorrito de leche; si queda muy líquida, agrega una galleta más. ¡Y no te toques los ojos después de tocar el ají!'],
      qs: [
        { t: 'open', q: '¿Por qué crees que hay que usar guantes para tocar el ají?', lines: 1, a: 'Porque el ají pica y puede irritar la piel y los ojos (por eso Coco dice que no te toques los ojos).' },
        { t: 'choice', q: '¿Por qué el paso 2 lo hace un adulto?', o: ['porque se usa fuego y agua hirviendo', 'porque las papas pesan mucho', 'porque es el paso más aburrido'], a: 0 },
        { t: 'open', q: 'Tu crema quedó muy líquida. ¿Qué haces? ¿En qué parte del texto encontraste la respuesta?', lines: 1, a: 'Le agrego una galleta más; lo dice el consejo de Coco.' },
        { t: 'open', q: 'Quieres preparar la receta para 8 personas. ¿Cuántas papas y cuántos huevos necesitas? ¿Cómo lo pensaste?', lines: 2, a: '12 papas y 4 huevos: 8 personas es el doble de 4, así que uso el doble de todo (6 × 2 = 12; 2 × 2 = 4).' },
      ],
      tip: '¡Prepárenla juntos de verdad! Antes de cada paso, pregúntale «¿por qué crees que se hace así?». Entender el porqué de cada instrucción le ayuda a no equivocarse.',
    },
    {
      title: 'Un paseo, dos miradas', skill: 'Punto de vista', type: 'Dos narradores', art: '🚌',
      text: ['Los alumnos de 4.º grado fueron de paseo a las lomas, unos cerros cerca de Lima que en invierno se cubren de neblina y de plantas verdes. Al día siguiente, Micaela y Santiago escribieron sobre ese día.', '<b>Lo cuenta Micaela:</b> ¡El paseo fue el mejor día del año! En el bus cantamos todo el camino. Cuando empezamos a subir, la neblina lo cubría todo y parecía que caminábamos dentro de una nube. Encontré unas flores amarillas diminutas y un caracol enorme. En el almuerzo, se me cayó el pan a la tierra, pero Santiago me convidó la mitad del suyo y nos reímos muchísimo. ¡Quiero volver!', '<b>Lo cuenta Santiago:</b> El paseo fue… largo. En el bus todos gritaban canciones y a mí me dolía la cabeza. La subida era empinada y la neblina me mojó toda la ropa. Micaela se detenía a mirar cada flor y cada caracol. Lo mejor fue el almuerzo: compartí mi pan con ella y nos reímos un montón. La próxima vez llevaré una casaca impermeable… y tapones para los oídos.'],
      qs: [
        { t: 'choice', q: '¿Qué momento del paseo les gustó a los dos?', o: ['el viaje en bus', 'la subida con neblina', 'el almuerzo'], a: 2 },
        { t: 'boxes', q: '¿Cómo vivió cada uno el viaje en bus?', labels: ['Micaela', 'Santiago'], a: 'Micaela: lo disfrutó, cantaron todo el camino. Santiago: le molestó el ruido y le dolía la cabeza.' },
        { t: 'open', q: 'La neblina fue la misma para los dos. ¿Por qué la cuentan de forma tan distinta?', lines: 2, a: 'Porque cada uno la vivió distinto: a Micaela le pareció mágica (como caminar dentro de una nube) y a Santiago le molestó porque lo mojó. Cada uno cuenta según lo que sintió.' },
        { t: 'open', q: '¿Cómo contaría el paseo la profesora? Escribe una oración como si fueras ella.', lines: 2, a: 'Respuesta libre, desde el punto de vista de la profesora.' },
      ],
      tip: 'Pregúntale: «¿cómo contaría lo mismo otro personaje?». Pueden practicarlo con algo que vivieron juntos: cada uno cuenta su versión del mismo día y luego comparan.',
    },
    {
      title: '¿Recreo más largo?', skill: 'A favor y en contra', type: 'Texto argumentativo', art: '🔔',
      text: ['En el periódico mural del colegio, dos alumnos de cuarto grado respondieron esta pregunta: ¿el recreo debería durar 30 minutos en lugar de 15?', '<b>Renata opina que sí.</b> «Quince minutos no alcanzan para todo: hacer la cola del quiosco, tomar el lonche y jugar. Cuando suena el timbre, recién estamos empezando el partido. Además, después de correr un buen rato, volvemos al aula más tranquilos y atendemos mejor. Nuestro cuerpo necesita moverse para aprender».', '<b>Joaquín opina que no.</b> «A mí también me encanta jugar, pero si el recreo es más largo, tendríamos que salir del colegio más tarde, y muchos hacemos tareas o vamos a natación en la tarde. Además, en los recreos largos algunos se aburren o se pelean por la cancha. Mejor sería tener dos recreos cortos: uno a media mañana y otro antes de salir».', 'La directora leyó las dos opiniones y dijo que lo conversarán en la próxima reunión de padres. ¿Y tú qué opinas?'],
      qs: [
        { t: 'boxes', q: 'Escribe una razón de cada uno.', labels: ['Renata (a favor)', 'Joaquín (en contra)'], a: 'Renata: 15 minutos no alcanzan; después de correr atienden mejor. Joaquín: saldrían más tarde; algunos se aburren o se pelean por la cancha.' },
        { t: 'open', q: '¿Qué propone Joaquín en lugar de un recreo largo?', lines: 1, a: 'Dos recreos cortos: uno a media mañana y otro antes de salir.' },
        { t: 'open', q: '¿Qué razón del texto te parece la más fuerte? ¿Por qué?', lines: 2, a: 'Respuesta libre, explicando por qué esa razón convence.' },
        { t: 'open', q: '¿Y tú qué opinas? Escribe tu opinión con dos razones.', lines: 2, a: 'Respuesta libre (una opinión con dos razones).' },
      ],
      tip: 'Antes de que dé su opinión, pídele que explique con sus palabras la opinión contraria. Luego pregúntale qué razón le pareció más fuerte y por qué.',
    },
  ],
};
