// Edición 8-9 años · Nivel 2 (Vuelo): textos de 150-190 palabras, más inferencia y más tipos de texto.
module.exports = {
  age: '8 a 9 años',
  slug: '8-9-anos',
  mode: 'mid',
  lecturas: [
    {
      title: 'Mi semana con Canela', skill: 'Secuencia de hechos', type: 'Diario', art: '🐶',
      text: ['<i>El diario de Thiago</i>', '<b>Lunes.</b> ¡Hoy llegó Canela! La adoptamos en un albergue de animales. Es una perrita marrón, con una oreja parada y la otra caída. En el carro tembló todo el camino, así que la envolví en su mantita y le hablé bajito.', '<b>Martes.</b> Canela se escondió debajo de mi cama y no quiso salir en todo el día. Mamá dice que todavía tiene miedo porque todo es nuevo para ella. Le dejé agua y un poquito de comida cerca, y no la molesté.', '<b>Miércoles.</b> ¡Salió solita! Me olió los pies y movió la cola. Después mordió mi zapatilla nueva… Papá le compró un hueso de goma para que muerda eso y no mis cosas.', '<b>Jueves.</b> Le enseñé a sentarse. Lo hizo dos veces seguidas y le di un trocito de galleta para perros como premio. ¡Es muy inteligente!', '<b>Viernes.</b> Hoy Canela durmió a mis pies mientras yo hacía la tarea. Creo que ya sabe que esta es su casa.'],
      qs: [
        { t: 'order', q: 'Ordena lo que pasó del 1 al 4.', o: ['Canela muerde una zapatilla.', 'Canela duerme a los pies de Thiago.', 'Canela se esconde debajo de la cama.', 'Canela aprende a sentarse.'], a: [2, 4, 1, 3] },
        { t: 'choice', q: '¿Qué palabras del diario te ayudan a saber cuándo pasó cada cosa?', o: ['los días de la semana', 'los nombres de la familia', 'los colores de Canela'], a: 0 },
        { t: 'open', q: '¿Por qué Canela se escondió el martes?', lines: 1, a: 'Porque tenía miedo: todo era nuevo para ella.' },
        { t: 'open', q: '¿Cómo cambió Canela del lunes al viernes? ¿Qué pistas lo muestran?', lines: 2, a: 'Al principio tenía miedo (temblaba y se escondía) y al final estaba tranquila y en confianza (salió, movió la cola y durmió a sus pies).' },
      ],
      tip: 'Pídele que te cuente su propio día con «primero, luego, después y al final». Si se salta algo, pregúntale: «¿y qué pasó justo antes de eso?».',
    },
    {
      title: 'El loro que lo contaba todo', skill: 'Problema y solución', type: 'Fábula', art: '🦜',
      text: ['En un bosque vivía un loro que hablaba sin parar. Todo lo que oía, lo repetía a gritos desde la rama más alta: —¡La ardilla esconde nueces en el tronco hueco! ¡El sapo le tiene miedo a la oscuridad!', 'Al principio, a todos les hacía gracia. Pero, poco a poco, los animales dejaron de contarle cosas. Cuando el loro se acercaba, se quedaban callados y se iban. El loro se sentía muy solo y no entendía por qué.', 'Un día fue a ver a la vieja tortuga, la más sabia del bosque. —Tus amigos te contaban sus secretos porque confiaban en ti —le dijo ella con calma—. Y tú los gritaste para que los oyera todo el bosque.', 'El loro bajó la cabeza. Esa misma tarde fue a pedirles disculpas a la ardilla y al sapo. Desde entonces aprendió a escuchar más y a guardar lo que le confiaban. Y, poco a poco, sus amigos volvieron a conversar con él.'],
      qs: [
        { t: 'open', q: '¿Cuál era el problema del loro?', lines: 1, a: 'Se quedó solo: sus amigos ya no le contaban nada porque él gritaba sus secretos.' },
        { t: 'choice', q: '¿Por qué los animales dejaron de hablarle?', o: ['porque el loro hablaba muy bajito', 'porque ya no confiaban en él', 'porque se fueron de viaje'], a: 1 },
        { t: 'open', q: '¿Qué hizo el loro para solucionar su problema?', lines: 2, a: 'Pidió disculpas a la ardilla y al sapo, y aprendió a escuchar y a guardar los secretos.' },
        { t: 'open', q: 'Escribe la moraleja con tus palabras.', lines: 1, a: 'Si alguien te cuenta un secreto, guárdalo: así cuidas la confianza de tus amigos.' },
      ],
      tip: 'Pregúntale: «¿qué problema tenía el personaje?, ¿qué hizo para resolverlo?, ¿funcionó?». Usen las mismas tres preguntas para pensar juntos en un problema real de la casa.',
    },
    {
      title: 'La llama y la alpaca', skill: 'Parecidos y diferencias', type: 'Texto informativo', art: '🦙',
      text: ['En las alturas de los Andes viven dos animales que muchas personas confunden: la llama y la alpaca. Las dos son camélidos sudamericanos, comen pasto y viven en grupos cuidados por pastores. Además, ambas son animales domésticos, a diferencia de sus parientes salvajes, la vicuña y el guanaco.', 'Pero también tienen diferencias. La llama es más grande y más alta. Sus orejas son largas y curvas, como dos plátanos, y su lana es más gruesa y áspera. Desde hace siglos, los pastores la usan para <b>transportar</b> carga por los caminos de la sierra.', 'La alpaca es más pequeña y tiene las orejas cortas y en punta. Su cabeza está cubierta de lana, como si llevara un flequillo. Su fibra es muy fina y suave, y con ella se tejen chompas, chalinas y mantas abrigadoras.', 'El Perú es el país con más alpacas del mundo.'],
      qs: [
        { t: 'tf', q: 'Marca V o F.', items: [['La alpaca es más grande que la llama.', false], ['La llama tiene las orejas largas y curvas.', true], ['Las dos comen pasto.', true]] },
        { t: 'boxes', q: 'Escribe una cosa en que se parecen y una en que se diferencian.', labels: ['Se parecen en…', 'Se diferencian en…'], a: 'Se parecen: son camélidos, son domésticas, comen pasto o viven en los Andes. Se diferencian: el tamaño, las orejas, el tipo de lana o para qué se usan.' },
        { t: 'choice', q: 'En el texto, «transportar» significa…', o: ['llevar algo de un lugar a otro', 'tejer una manta', 'comer pasto'], a: 0 },
        { t: 'open', q: 'Quieres una chompa muy suave. ¿De qué animal debería ser la fibra? ¿Por qué?', lines: 1, a: 'De alpaca, porque su fibra es muy fina y suave.' },
      ],
      tip: 'Dibujen juntos un cuadro de dos columnas (llama | alpaca) y anoten en qué se diferencian. Ordenar la información en un cuadro es una gran técnica para estudiar.',
    },
    {
      title: '¡Cometas en el cielo del bosque!', skill: 'Las preguntas de la noticia', type: 'Noticia · El Periódico del Bosque', img: 'tito.jpg',
      text: ['<b>Por Tito, reportero.</b> El sábado por la tarde, más de cuarenta animales llenaron la Loma de los Vientos para el primer Concurso de Cometas del Bosque de las Letras. Lu lo organizó en agosto porque es el mes en que sopla más viento.', 'Cada participante armó su cometa con carrizo, papel de colores y pita. Hubo cometas con forma de pez, de estrella y hasta de queso, que era la de Coco, claro.', 'La ganadora fue Pipa. Su cometa verde se cayó tres veces, pero ella la arregló con cinta y volvió a intentarlo. Al final, subió más alto que todas. «Si se cae, se levanta. Como yo», dijo la tortuga, riendo.', 'El premio fue un libro de aventuras y un gran aplauso. Los demás participantes recibieron una medalla de cartón dorado. Lu ya anunció que el concurso se repetirá el próximo año.'],
      qs: [
        { t: 'boxes', q: 'Completa los datos de la noticia.', labels: ['¿Qué pasó?', '¿Quién ganó?', '¿Cuándo?', '¿Dónde?'], a: 'Qué: el primer concurso de cometas del bosque · Quién ganó: Pipa · Cuándo: el sábado por la tarde, en agosto · Dónde: en la Loma de los Vientos.' },
        { t: 'open', q: '¿Por qué Lu organizó el concurso en agosto?', lines: 1, a: 'Porque es el mes en que sopla más viento.' },
        { t: 'choice', q: 'La cometa de Coco tenía forma de queso porque…', o: ['a Coco le encanta el queso', 'el queso vuela muy alto', 'no había papel de colores'], a: 0 },
        { t: 'open', q: '¿Qué quiso decir Pipa con «Si se cae, se levanta. Como yo»?', lines: 1, a: 'Que ella tampoco se rinde: cuando algo le sale mal, lo vuelve a intentar.' },
      ],
      tip: 'Al leer una noticia, jueguen a ser periodistas: ¿qué pasó?, ¿quién?, ¿cuándo?, ¿dónde? y ¿por qué? Pídele que subraye cada respuesta con un color distinto.',
    },
    {
      title: 'El trompo de Mateo', skill: 'Cómo es el personaje', type: 'Cuento', art: '🌀',
      text: ['El abuelo de Mateo era el mejor bailando trompo de todo el barrio. Lo enrollaba con la pita, lo lanzaba con un movimiento rápido y el trompo giraba y giraba, hasta en la palma de su mano.', 'Un día le regaló uno a Mateo. Era de madera, pintado de rojo y azul. Mateo lo lanzó con todas sus fuerzas, pero el trompo cayó de lado y rodó debajo del sillón. Lo intentó otra vez, y otra, y otra. Nada.', 'Su primo Lucas, de seis años, se reía cada vez que el trompo se caía. Mateo no se enojó. —Ya verás —le dijo con una sonrisa—. Mañana lo intento de nuevo.', 'Practicó todas las tardes de la semana, después de hacer la tarea. El sábado, por fin, el trompo bailó sobre el piso del patio. El abuelo aplaudió. Entonces Mateo se volteó hacia Lucas: —Ven, te enseño. Al principio cuesta, pero se aprende.'],
      qs: [
        { t: 'open', q: 'Escribe dos palabras que describan cómo es Mateo.', lines: 1, a: 'Perseverante (no se rinde), paciente, tranquilo o generoso (dos de ellas).' },
        { t: 'open', q: '¿Qué hizo Mateo que demuestra que no se rinde?', lines: 1, a: 'Practicó todas las tardes de la semana hasta lograrlo.' },
        { t: 'choice', q: 'Cuando Lucas se reía, Mateo…', o: ['se enojó y le gritó', 'sonrió y dijo que lo intentaría otra vez', 'dejó de jugar para siempre'], a: 1 },
        { t: 'open', q: '¿Por qué crees que Mateo quiso enseñarle a Lucas?', lines: 2, a: 'Porque es generoso y sabe que al principio cuesta; quiere compartir lo que aprendió (cualquier respuesta con sentido).' },
      ],
      tip: 'Cuando lean un cuento, pregúntale «¿cómo es este personaje?» y luego «¿qué hizo que te lo demuestra?». Las acciones de un personaje dicen más que las descripciones.',
    },
    {
      title: 'Aguacero en la selva', skill: 'Comparaciones', type: 'Poema', art: '🌧️', poem: true,
      text: ['Se oscurece la mañana,<br>suena el trueno allá a lo lejos,<br>los loritos se acurrucan<br>bajo las hojas, en silencio,<br>y las gotas, como canicas,<br>saltan en el techo del abuelo.', 'El río corre apurado<br>como un caballo sin freno,<br>las hojas, como espejos,<br>brillan bajo el aguacero,<br>y el viento silba en las ramas<br>como un flautista travieso.', 'Por fin, la lluvia se cansa<br>y el sol se asoma sin prisa,<br>lento, como un gato dormido<br>que despierta y se estira.<br>La selva, recién bañada,<br>huele a tierra y huele a vida.'],
      qs: [
        { t: 'open', q: 'Copia una comparación del poema. Pista: busca la palabra «como».', lines: 1, a: 'Por ejemplo: «las gotas, como canicas» o «el río corre como un caballo sin freno».' },
        { t: 'match', q: 'Une cada cosa con aquello con lo que se compara en el poema.', left: ['las gotas', 'el río', 'el viento', 'el sol'], right: ['un flautista travieso', 'canicas', 'un gato dormido', 'un caballo sin freno'], a: [2, 4, 1, 3] },
        { t: 'choice', q: '¿Por qué el poema compara el río con un caballo sin freno?', o: ['porque el río es marrón', 'porque el río corre muy rápido y con fuerza', 'porque en el río hay caballos'], a: 1 },
        { t: 'open', q: 'Inventa tu propia comparación: «La lluvia es como…».', lines: 1, a: 'Respuesta libre.' },
      ],
      tip: 'Jueguen a comparar durante el día: «este pan está duro como…», «corres rápido como…». Así descubre que comparar es una forma de pintar imágenes con palabras.',
    },
    {
      title: '¡Gran Feria de Ciencias!', skill: 'Leer un afiche', type: 'Afiche', art: '🔬',
      text: ['<b style="font-size:1.2em">¡GRAN FERIA DE CIENCIAS!</b><br>Los alumnos de 3.º y 4.º grado te invitan a descubrir los experimentos que prepararon durante dos meses con su profesora. ¡Ven con toda tu familia!', '<b>Cuándo:</b> este viernes, de 9:00 a. m. a 12:30 p. m.<br><b>Dónde:</b> en el patio principal del colegio<br><b>Entrada:</b> libre', '<b>Podrás ver:</b> un volcán que hace erupción con espuma, frejoles que germinan sin tierra, un arcoíris dentro de un vaso y un robot hecho con material reciclado.', '<b>Actividades especiales:</b><br>10:00 a. m. · Taller de burbujas gigantes (para niños de 6 a 10 años, con un adulto)<br>11:30 a. m. · Premiación del mejor experimento', '<b>Importante:</b> el taller tiene solo 30 cupos. Inscríbete en la dirección del colegio hasta el jueves. Habrá venta de jugos y queques a S/ 2,50 para juntar fondos para el paseo de fin de año.', '¡Trae tu curiosidad y todas tus preguntas!'],
      qs: [
        { t: 'choice', q: '¿Para qué se escribió este afiche?', o: ['para invitar a la feria y dar sus datos', 'para enseñar a hacer un volcán', 'para contar cómo fue la feria del año pasado'], a: 0 },
        { t: 'open', q: '¿A qué hora debes estar en la feria si quieres ver la premiación?', lines: 1, a: 'A las 11:30 a. m. (mejor un poquito antes).' },
        { t: 'open', q: 'Tu hermano tiene 4 años. ¿Puede participar en el taller de burbujas? ¿Por qué?', lines: 1, a: 'No, porque el taller es para niños de 6 a 10 años.' },
        { t: 'tf', q: 'Marca V o F.', items: [['Hay que pagar para entrar a la feria.', false], ['Para el taller hay que inscribirse antes.', true], ['Lo que se junte con los jugos es para el paseo.', true]] },
      ],
      tip: 'Cuando vean un afiche o un aviso en la calle, pídele que encuentre qué es, cuándo, dónde y cuánto cuesta. Es leer para resolver algo de la vida real.',
    },
    {
      title: 'La reseña de Valentina', skill: 'Hecho u opinión', type: 'Reseña', art: '📚',
      text: ['<b>Libro:</b> <i>El secreto del árbol de lúcuma</i>, escrito por la lechuza Lu<br><b>Reseña de:</b> Valentina, 4.º grado', 'Este libro cuenta la historia de Wayra, una niña que pasa sus vacaciones en la casa de su abuela, en Ayacucho. En el jardín hay un árbol de lúcuma muy viejo. Una noche, Wayra descubre una cajita escondida entre sus raíces y tendrá que averiguar quién la guardó allí y por qué.', 'El libro tiene 12 capítulos y dibujos a color en cada página. Yo lo leí en cuatro días. Creo que es el libro más emocionante que he leído este año. Los dibujos son preciosos, sobre todo el de la abuela contando cuentos junto al fogón.', 'Lo que menos me gustó fue el final, porque terminó demasiado rápido. ¡Me quedé con ganas de saber más!', 'Se lo recomiendo a todos los niños de mi edad que disfrutan de los misterios. Lo encuentras en la biblioteca del colegio. Le pongo cuatro estrellas de cinco.'],
      qs: [
        { t: 'ho', q: 'Marca H si es un hecho u O si es una opinión.', items: [['El libro tiene 12 capítulos.', 'H'], ['Es el libro más emocionante del año.', 'O'], ['Los dibujos son preciosos.', 'O'], ['El libro está en la biblioteca del colegio.', 'H']] },
        { t: 'open', q: '¿Valentina recomienda el libro? ¿Cómo lo sabes?', lines: 1, a: 'Sí: dice que se lo recomienda a los niños que disfrutan de los misterios y le pone cuatro estrellas.' },
        { t: 'open', q: '¿Por qué crees que no le puso cinco estrellas?', lines: 1, a: 'Porque no le gustó que el final terminara tan rápido.' },
        { t: 'choice', q: '¿Para qué sirve una reseña?', o: ['para opinar sobre un libro y ayudar a otros a elegir', 'para contar un chiste', 'para dar instrucciones'], a: 0 },
      ],
      tip: 'Pregúntale: «¿esto se puede comprobar?». Contar los capítulos es un hecho; decir que un libro es emocionante es una opinión. Después, pídele su opinión del último libro que leyeron juntos.',
    },
    {
      title: 'Del árbol al chocolate', skill: 'Resumir', type: 'Texto informativo', art: '🍫',
      text: ['¿Sabías que el chocolate nace en un árbol? Se llama cacao y crece en lugares cálidos y húmedos, como la selva peruana. En regiones como San Martín, Junín y Cusco, muchas familias lo cultivan en sus chacras.', 'Sus frutos se llaman mazorcas y, aunque parezca raro, crecen pegados al tronco y a las ramas gruesas. Cuando están maduras, los agricultores las abren y sacan las semillas, que están cubiertas por una pulpa blanca y dulce.', 'Luego, dejan las semillas varios días en cajones de madera tapados con hojas de plátano para que se fermenten. Así ganan su sabor. Después, las secan al sol.', 'Las semillas secas viajan a una fábrica, donde las tuestan y las muelen hasta formar una pasta espesa. A esa pasta se le agrega azúcar y, a veces, leche. ¡Así se obtiene el chocolate! La próxima vez que comas uno, piensa en todo el camino que recorrió.'],
      qs: [
        { t: 'order', q: 'Ordena los pasos del 1 al 4.', o: ['Se secan las semillas al sol.', 'Se abren las mazorcas y se sacan las semillas.', 'Se tuestan y se muelen las semillas.', 'Se fermentan las semillas en cajones.'], a: [3, 1, 4, 2] },
        { t: 'choice', q: '¿Qué título resume mejor el texto?', o: ['Las hojas de plátano', 'Cómo se hace el chocolate desde el cacao', 'Los dulces más ricos del mundo'], a: 1 },
        { t: 'open', q: 'Resume el texto en una o dos oraciones.', lines: 2, a: 'El chocolate se hace con las semillas del cacao: se sacan de las mazorcas, se fermentan, se secan, se tuestan y se muelen.' },
        { t: 'open', q: '¿Crees que el cacao podría crecer en una puna muy fría? ¿Por qué?', lines: 1, a: 'No, porque necesita lugares cálidos y húmedos.' },
      ],
      tip: 'Para resumir, pídele que te lo cuente «en un mensaje cortito», como si solo tuviera dos líneas. Lo importante se queda y los detalles se van.',
    },
    {
      title: 'Una carta al alcalde', skill: 'El propósito del autor', type: 'Carta', art: '📮',
      text: ['<i>Lima, 3 de octubre</i><br>Señor alcalde del distrito:', 'Le escribimos los alumnos de cuarto grado del colegio Los Andes. Todas las tardes jugamos en el parque que está frente al colegio, y muchas familias del barrio también lo usan los fines de semana. Pero el parque tiene varios problemas.', 'Dos columpios están rotos y uno tiene un fierro suelto que puede lastimar a alguien. La semana pasada, nuestra compañera Ariana se raspó la mano con él. Además, casi no hay árboles, y en verano el sol quema tanto que no podemos jugar. Tampoco hay tachos, por eso la basura queda en el pasto.', 'Por estas razones, le pedimos que arregle los columpios, que coloque tachos y que siembre árboles. Nosotros nos comprometemos a regarlos y a cuidar el parque.', 'Lo invitamos a visitarlo para que vea cómo está. Esperamos su respuesta.<br>Atentamente,<br><b>Los alumnos de 4.º grado</b>'],
      qs: [
        { t: 'choice', q: '¿Para qué escribieron esta carta los alumnos?', o: ['para contar un cuento', 'para pedir que arreglen y mejoren el parque', 'para invitar al alcalde a una fiesta'], a: 1 },
        { t: 'open', q: 'Escribe dos razones que dan los niños para que el alcalde los ayude.', lines: 2, a: 'Los columpios están rotos y uno es peligroso; no hay árboles y el sol quema; no hay tachos y la basura queda en el pasto (dos de ellas).' },
        { t: 'open', q: '¿Qué prometen hacer los niños? ¿Por qué crees que lo escribieron?', lines: 2, a: 'Regar los árboles y cuidar el parque. Para mostrar que también harán su parte y así convencer al alcalde.' },
        { t: 'tf', q: 'Marca V o F.', items: [['La carta tiene fecha y despedida.', true], ['La carta la escribió un solo niño.', false]] },
      ],
      tip: 'Antes de leer cualquier texto, pregúntale: «¿para qué lo escribió el autor: para contar, para informar, para pedir o para convencer?». Si se animan, escriban juntos una carta de verdad a alguien del barrio.',
    },
  ],
};
