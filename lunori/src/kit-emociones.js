// Kit de Emociones y Rutinas · 3 a 10 años.
// Complementa la guía "Rutina Día y Noche": aquí van las emociones (rabietas, calma, vocabulario emocional)
// y las rutinas en formato visual para que el niño las use solo (tableros y tarjetas para recortar).
const { C, img, spark, star, emptyStars, footer, face, doc, partPage } = require('./base');

const LABEL = 'Kit de Emociones y Rutinas';

const EMOCIONES = [
  ['alegria', 'Alegría', C.amarillo, 'Ganas de saltar, sonreír y abrazar. El cuerpo se siente liviano.', 'juego con mis amigos, me abrazan o algo me sale bien.', 'compartirla, contarla, bailar, dar las gracias.'],
  ['tristeza', 'Tristeza', C.celeste, 'Ojos con lágrimas, el pecho apretado, pocas ganas de jugar.', 'pierdo algo, extraño a alguien o algo no salió como quería.', 'llorar, pedir un abrazo, contar qué pasó, dibujarlo.'],
  ['enojo', 'Enojo', C.rosa, 'Calor en la cara, puños apretados, ganas de gritar o empujar.', 'algo me parece injusto, me dicen que no o me molestan.', 'alejarme un ratito, respirar, apretar un cojín, decir «estoy enojado».'],
  ['miedo', 'Miedo', C.lila, 'El corazón late rápido, tiemblan las piernas, quiero esconderme.', 'hay oscuridad, algo es nuevo o escucho un ruido fuerte.', 'pedir ayuda, abrazar mi peluche, respirar despacio, preguntar.'],
  ['sorpresa', 'Sorpresa', C.durazno, 'Ojos grandes, boca abierta, un saltito en el cuerpo.', 'pasa algo que no esperaba, bueno o malo.', 'parar, mirar bien y preguntar qué está pasando.'],
  ['calma', 'Calma', C.verde, 'El cuerpo suave, la respiración lenta, la cabeza tranquila.', 'descanso, me abrazan, leo un cuento o estoy en mi rincón.', 'disfrutarla, leer, dibujar, ayudar a otros a calmarse.'],
  ['frustracion', 'Frustración', '#FFE5D3', 'Ganas de tirar las cosas, de llorar y de decir «¡no puedo!».', 'algo me cuesta mucho o no me sale a la primera.', 'hacer una pausa, pedir ayuda, intentarlo de otra forma.'],
  ['verguenza', 'Vergüenza', '#FCE4EC', 'La cara se pone roja, miro al piso, quiero desaparecer.', 'me equivoco delante de otros o se ríen de mí.', 'recordar que a todos nos pasa y hablarlo con alguien de confianza.'],
];

const RUTINAS = {
  manana: { title: 'Mi rutina de la mañana', emoji: '☀️', color: C.durazno, ink: C.naranjaOsc, steps: [['🛏️', 'Me levanto'], ['🚽', 'Voy al baño'], ['🧼', 'Me lavo la cara'], ['👕', 'Me visto'], ['🥣', 'Desayuno'], ['🪥', 'Me lavo los dientes'], ['🎒', 'Reviso mi mochila'], ['👟', 'Zapatos y ¡al cole!']] },
  tarde: { title: 'Mi rutina de la tarde', emoji: '🏠', color: C.verde, ink: '#2F7D4E', steps: [['🧼', 'Llego y me lavo las manos'], ['🍎', 'Lonche'], ['😌', 'Descanso un ratito'], ['📚', 'Hago mi tarea'], ['🧸', 'Juego libre'], ['🧹', 'Ordeno mis cosas'], ['🎒', 'Alisto la mochila de mañana'], ['💬', 'Le cuento mi día a alguien']] },
  noche: { title: 'Mi rutina de la noche', emoji: '🌙', color: C.celeste, ink: '#3A5BB0', steps: [['🍽️', 'Ceno en familia'], ['📵', 'Se apagan las pantallas'], ['🛁', 'Me baño'], ['🧸', 'Me pongo el pijama'], ['🪥', 'Me lavo los dientes'], ['📖', 'Leemos un cuento'], ['💛', 'Tres cosas buenas de hoy'], ['😴', 'Luz apagada']] },
};

const PREGUNTAS = ['¿Qué fue lo mejor de tu día?', '¿Algo te hizo reír hoy?', '¿Quién te ayudó hoy? ¿A quién ayudaste tú?', '¿Qué haces cuando estás muy enojado?', '¿Qué cosa te pone triste?', '¿De qué te sientes orgulloso?', '¿Cuándo te sentiste valiente?', '¿Qué te da un poquito de miedo?', '¿Qué harías si un amigo está triste?', '¿Qué te preocupa a veces?', '¿Qué te cuesta y lo sigues intentando?', '¿Qué hiciste hoy que antes no podías?', 'Si tuvieras un superpoder, ¿cuál sería?', '¿Qué animal serías y por qué?', '¿Cuál es tu recuerdo favorito en familia?', '¿Qué te gustaría aprender este año?', '¿Qué es lo que más te gusta de ti?', '¿Qué te gustaría hacer juntos este fin de semana?', '¿Qué te hace sentir tranquilo?', '¿Hay algo que quieras contarme y no me has contado?'];

const pageHead = (kick, title, lead) => `<div class="spark">${spark(14)}</div><div class="kick">${kick}</div><h2>${title}</h2>${lead ? `<p class="lead">${lead}</p>` : ''}`;

function cover() {
  return `<section class="page cream" style="padding:0">
  <div style="position:absolute;top:14mm;left:0;right:0;text-align:center">${img('lunori-logo.png', 'height:11mm')}</div>
  <div style="position:absolute;top:32mm;left:0;right:0;text-align:center">
    <span class="tag" style="background:${C.naranja};color:#fff;letter-spacing:.6mm;font-size:8.5pt">KIT IMPRIMIBLE PARA LA FAMILIA</span>
    <div class="f" style="font-size:46pt;font-weight:700;color:${C.naranja};line-height:1;margin-top:5mm">Emociones</div>
    <div class="f" style="font-size:34pt;font-weight:700;color:${C.azul};line-height:1.05">+ Rutinas</div>
    <p style="font-size:12.5pt;color:${C.pizarra};margin:4mm auto 0;max-width:150mm">Para que tu hijo entienda lo que siente, aprenda a calmarse y sepa qué viene después. Menos rabietas, más tranquilidad en casa.</p>
    <div style="margin-top:4mm"><span class="tag" style="border:1.6px solid ${C.azul};color:${C.azul};background:#fff;font-size:11pt;padding:1.2mm 5mm">3 a 10 años</span></div>
  </div>
  <div style="position:absolute;left:0;right:0;top:128mm;display:flex;justify-content:center;gap:10mm 4mm;flex-wrap:wrap;padding:0 14mm">
    ${['alegria', 'tristeza', 'enojo', 'miedo', 'calma', 'sorpresa', 'frustracion', 'verguenza'].map((e, i) => `<div style="transform:rotate(${[-6, 4, -3, 6, -5, 3, -4, 5][i]}deg)">${face(e, 145)}</div>`).join('')}
  </div>
  <div style="position:absolute;left:18mm;right:18mm;bottom:14mm;background:#fff;border-radius:6mm;padding:4.5mm 7mm;box-shadow:0 2mm 6mm rgba(30,42,90,.08);display:flex;justify-content:space-around;text-align:center">
    ${[['🧡', 'Método C.A.L.M.A.', 'para las rabietas'], ['🃏', '8 láminas', 'de emociones'], ['🌡️', 'Termómetro', 'y rincón de calma'], ['🗓️', '3 tableros', 'de rutinas + tarjetas']].map(([e, a, b]) => `<div><div class="emoji" style="font-size:15pt">${e}</div><div class="f" style="font-size:10.5pt;margin-top:1mm">${a}</div><div class="tiny muted">${b}</div></div>`).join('')}
  </div>
</section>`;
}

function hola(p) {
  return `<section class="page">
  ${pageHead('Hola, mamá. Hola, papá', 'Detrás de cada rabieta hay<br>una emoción <em>que no sabe manejar</em>', 'Un niño que grita, llora o tira las cosas no está «portándose mal a propósito»: está sintiendo algo muy grande y todavía no sabe qué hacer con eso. La buena noticia es que manejar emociones se aprende, y en casa es donde mejor se enseña.')}
  <div class="grid2">
    <div class="card" style="background:${C.crema}"><h3>¿Por qué emociones y rutinas juntas?</h3><p class="small" style="margin:0">Porque se ayudan entre sí. Muchas rabietas aparecen en los cambios: dejar de jugar, salir de casa, ir a bañarse, apagar la tele. Cuando el niño <b>sabe qué viene después</b>, se siente seguro y hay menos peleas. Y cuando aun así se desborda, ya sabe cómo volver a la calma.</p></div>
    <div class="card" style="background:${C.celeste}"><h3>Qué incluye este kit</h3><ul class="clean small">
      <li><b>Parte 1 · Emociones:</b> qué pasa en una rabieta, el método C.A.L.M.A., frases que sí funcionan, 8 láminas, termómetro, rincón de la calma, diario y tarjetas para conversar.</li>
      <li><b>Parte 2 · Rutinas:</b> tableros visuales de mañana, tarde y noche, tarjetas para recortar, tabla semanal y planificador de la semana.</li></ul></div>
  </div>
  <h3 style="margin-top:5mm">Cómo usar este kit</h3>
  <div class="grid3">
    ${[['Léelo tú primero', 'La Parte 1 es para ti: 15 minutos para entender qué hacer en el momento difícil. Lo que más cambia una rabieta es cómo reacciona el adulto.'], ['Imprime y pega', 'Láminas, termómetro y tableros van a la altura de sus ojos: en su cuarto, en la refri o en el rincón de la calma.'], ['Practica en calma', 'Las técnicas se enseñan cuando el niño está tranquilo, como un juego. Así, en el momento difícil, ya las conoce.']].map(([a, b], i) => `<div class="card" style="background:${[C.durazno, C.verde, C.lila][i]}"><span class="num">${i + 1}</span><h4 style="margin-top:2mm">${a}</h4><p class="small" style="margin:0">${b}</p></div>`).join('')}
  </div>
  <div class="card" style="background:${C.durazno};margin-top:5mm;display:flex;gap:5mm;align-items:center">
    ${img('lu-saluda.jpg', 'height:30mm', 'mult')}
    <div><h3>Funciona mejor con «Rutina Día y Noche»</h3><p class="small" style="margin:0">Si recibiste la guía <b>Rutina Día y Noche</b> de Lunori, úsalas juntas: allí tienes los hábitos de la mañana, la tarea y la hora de dormir explicados para ti; aquí, los tableros para que tu hijo los siga solito y las herramientas para los momentos de emociones grandes.</p></div>
  </div>
  ${footer(LABEL, p)}
</section>`;
}

function rabietas(p) {
  const ages = [
    ['3 a 5 años', C.durazno, 'Son frecuentes y muy intensas: llanto, gritos, tirarse al piso. La parte del cerebro que frena los impulsos recién se está construyendo.', 'Anticipar los cambios («en 5 minutos guardamos»), dar dos opciones («¿pijama azul o rojo?»), nombrar lo que siente y mantener la calma.'],
    ['6 a 8 años', C.verde, 'Son menos frecuentes y más «con palabras»: portazos, «¡no te quiero!», «¡es injusto!». Son muy sensibles a lo que les parece justo.', 'Acuerdos claros y anticipados, el rincón de la calma y conversar <b>después</b>, cuando ya están tranquilos.'],
    ['9 a 10 años', C.lila, 'Se vuelven más internas: se encierran, contestan mal o se quedan callados. Les importa mucho lo que piensen sus amigos.', 'Respetar su espacio, nunca corregir delante de otros y conversar en momentos relajados: en el carro, caminando, cocinando.'],
  ];
  return `<section class="page">
  ${pageHead('Parte 1 · Para mamá', '¿Qué pasa en una <em>rabieta</em>?', null)}
  <div style="display:grid;grid-template-columns:1fr 62mm;gap:5mm;align-items:center">
    <div>
      <p>Imagina que el cerebro tiene dos pisos. En el <b>piso de abajo</b> viven las emociones fuertes y las reacciones rápidas: gritar, correr, pegar. En el <b>piso de arriba</b> vive la parte que piensa, se frena y resuelve problemas.</p>
      <p>En los niños, la escalera entre los dos pisos todavía se está construyendo (y no termina hasta pasada la adolescencia). Cuando la emoción es muy grande, el piso de arriba «se desconecta»: por eso en plena rabieta <b>no sirve explicar, razonar ni castigar</b>. Primero hay que ayudarlo a volver a la calma. Después, se conversa.</p>
      <div class="note"><b>La clave:</b> primero conectar, después corregir. Un niño tranquilo sí puede escuchar, aprender y reparar lo que hizo.</div>
    </div>
    <div style="background:${C.crema};border-radius:5mm;padding:4mm;text-align:center">
      <div style="background:${C.celeste};border-radius:3mm;padding:3mm;margin-bottom:2mm"><div class="emoji" style="font-size:18pt">🧠</div><div class="f" style="font-size:10pt">Piso de arriba</div><div class="tiny muted">piensa, se frena, resuelve</div></div>
      <div class="f" style="font-size:9pt;color:${C.naranja}">↕ la escalera se está construyendo</div>
      <div style="background:${C.rosa};border-radius:3mm;padding:3mm;margin-top:2mm"><div class="emoji" style="font-size:18pt">🌋</div><div class="f" style="font-size:10pt">Piso de abajo</div><div class="tiny muted">emociones fuertes y reacciones rápidas</div></div>
    </div>
  </div>
  <h3 style="margin-top:4mm">Qué esperar según su edad</h3>
  <div style="display:flex;flex-direction:column;gap:2.5mm">
    ${ages.map(([a, bg, b, c]) => `<div style="display:grid;grid-template-columns:27mm 1fr 1fr;gap:4mm;background:${bg};border-radius:4mm;padding:3mm 4mm;align-items:start"><div class="f" style="font-size:12pt">${a}</div><div class="small"><b style="color:${C.azul}">Cómo son:</b> ${b}</div><div class="small"><b style="color:${C.azul}">Qué ayuda:</b> ${c}</div></div>`).join('')}
  </div>
  <h3 style="margin-top:4mm">Los 5 «encendedores» de rabietas</h3>
  <div class="grid4" style="grid-template-columns:repeat(5,1fr)">${[['😴', 'Sueño'], ['🍪', 'Hambre'], ['🔄', 'Cambios sin aviso'], ['📱', 'Apagar la pantalla'], ['🧩', 'Algo muy difícil']].map(([e, t]) => `<div style="text-align:center;border:1.5px solid ${C.linea};border-radius:4mm;padding:2.5mm 1mm"><div class="emoji" style="font-size:16pt">${e}</div><div class="f" style="font-size:9.5pt;margin-top:1mm">${t}</div></div>`).join('')}</div>
  <p class="tiny muted" style="margin-top:2mm">Si ves venir uno de estos, adelántate: un snack, un aviso de 5 minutos o ayuda con la tarea pueden evitar la tormenta.</p>
  ${footer(LABEL, p)}
</section>`;
}

function calma(p) {
  const steps = [
    ['C', 'Cuídate tú primero', 'Antes de hablar, respira hondo. Si tú gritas, su emoción crece. Tu calma es el ancla que lo ayuda a volver. Si lo necesitas: «mamá necesita un minuto».'],
    ['A', 'Acompaña y protege', 'Acércate y ponte a su altura. Cuida que no se lastime ni lastime a otros. En este momento, pocas palabras y voz suave: tu presencia dice más que un sermón.'],
    ['L', 'Le pones nombre', '«Estás muy enojado porque querías seguir jugando». Nombrar la emoción le ayuda a entender lo que siente, y el piso de arriba empieza a reconectarse.'],
    ['M', 'Muévete hacia la calma', 'Respiren juntos, vayan al rincón de la calma, aprieten un cojín o denle un abrazo si lo acepta. Usen la técnica que practicaron cuando estaba tranquilo.'],
    ['A', 'Arreglen juntos, después', 'Cuando ya está tranquilo (a veces una hora después), conversen: ¿qué pasó?, ¿qué sentiste?, ¿qué puedes hacer la próxima vez?, ¿cómo lo arreglamos?'],
  ];
  return `<section class="page">
  ${pageHead('Parte 1 · Para mamá', 'El método <em>C.A.L.M.A.</em>', 'Cinco pasos para acompañar una rabieta sin gritos y sin ceder. Pégalo en la refri: en el momento difícil, nadie se acuerda de nada.')}
  <div style="display:flex;flex-direction:column;gap:3mm">
    ${steps.map(([l, a, b], i) => `<div style="display:flex;gap:5mm;align-items:center;background:${[C.durazno, C.celeste, C.verde, C.lila, C.rosa][i]};border-radius:5mm;padding:4mm 5mm"><div class="f" style="width:17mm;height:17mm;border-radius:50%;background:#fff;display:flex;align-items:center;justify-content:center;font-size:26pt;font-weight:700;color:${C.naranja};flex:none">${l}</div><div><h3 style="margin-bottom:.6mm">${a}</h3><p class="small" style="margin:0">${b}</p></div></div>`).join('')}
  </div>
  <div class="grid2" style="margin-top:5mm">
    <div class="card" style="border:1.5px solid ${C.linea}"><h3>Validar no es ceder</h3><p class="small" style="margin:0">Puedes aceptar la emoción y mantener el límite al mismo tiempo: «Puedes estar enojado, y la tablet igual se apaga». La emoción siempre está permitida; algunas conductas, no.</p></div>
    <div class="card" style="border:1.5px solid ${C.linea}"><h3>Si tú también exploté…</h3><p class="small" style="margin:0">Pasa en todas las familias. Repara: «Ayer grité y no estuvo bien. Estaba muy cansada. Lo siento». Así le enseñas, con el ejemplo, a pedir perdón y a volver a empezar.</p></div>
  </div>
  <div class="note" style="margin-top:4mm"><b>Cuándo consultar:</b> si las rabietas son muy frecuentes o muy intensas, si se lastima o lastima a otros, si no disminuyen después de los 5 años o si afectan su vida en el colegio, conversa con su pediatra o con un psicólogo infantil. Pedir ayuda a tiempo hace una gran diferencia.</div>
  ${footer(LABEL, p)}
</section>`;
}

function frases(p) {
  const rows = [['«¡Ya basta de llorar!»', '«Está bien llorar. Aquí estoy contigo».'], ['«No es para tanto».', '«Para ti es importante. Cuéntame qué pasó».'], ['«¡Cálmate ya!»', '«Respiremos juntos. Yo te ayudo».'], ['«Los niños grandes no lloran».', '«Todos lloramos a veces, hasta los adultos».'], ['«Si sigues así, te quedas sin…»', '«Primero nos calmamos. Después vemos qué hacer».'], ['«¡Eres malo con tu hermano!»', '«No te dejo pegar. ¿Qué te molestó?»'], ['«No tengas miedo, no pasa nada».', '«Entiendo que te da miedo. ¿Qué te ayudaría?»'], ['«¡Me tienes harta!»', '«Necesito un minuto para calmarme y vuelvo».'], ['«Siempre haces lo mismo».', '«Hoy fue difícil. Mañana lo intentamos otra vez».'], ['«Si no paras, me voy».', '«Me quedo cerca hasta que estés listo».'], ['«¡Deja de quejarte!»', '«Veo que estás frustrado. ¿Qué parte es la más difícil?»'], ['«Pide perdón ahora mismo».', '«Cuando estés tranquilo, pensamos cómo arreglarlo».']];
  return `<section class="page">
  ${pageHead('Parte 1 · Para mamá', 'Qué decir en el <em>momento difícil</em>', 'Las frases que nos salen solas son las que escuchamos de niños. Cambiarlas cuesta, pero vale la pena: elige dos o tres y practícalas esta semana.')}
  <table class="t" style="font-size:11.3pt">
    <tr><th style="width:44%">En vez de decir…</th><th>Prueba decir…</th></tr>
    ${rows.map(([a, b], i) => `<tr><td style="color:${C.gris};background:${i % 2 ? C.crema : '#fff'};padding:2.8mm 3mm">${a}</td><td style="font-weight:700;color:${C.azul};background:${i % 2 ? C.crema : '#fff'};padding:2.8mm 3mm">${b}</td></tr>`).join('')}
  </table>
  <div class="grid2" style="margin-top:5mm">
    <div class="card" style="background:${C.verde}"><h3>Las 3 palabras mágicas</h3><p class="small" style="margin:0"><b>«Te entiendo, y…»</b> te permite validar y poner el límite en la misma frase: «Te entiendo, querías seguir jugando, y ahora toca bañarse».</p></div>
    <div class="card" style="background:${C.lila}"><h3>Menos palabras, más presencia</h3><p class="small" style="margin:0">En plena rabieta, cuantas menos palabras, mejor. Agáchate, mírale a los ojos y usa frases cortas. La explicación larga, para después.</p></div>
  </div>
  ${footer(LABEL, p)}
</section>`;
}

function laminas(part, p) {
  const ems = EMOCIONES.slice(part * 4, part * 4 + 4);
  return `<section class="page cream" style="padding-top:12mm">
  <div style="text-align:center;margin-bottom:3mm"><div class="kick">Para recortar y pegar · ${part + 1} de 2</div><h2 style="margin:0">Mis láminas de <em>emociones</em></h2></div>
  <div class="grid2" style="grid-template-rows:1fr 1fr;height:calc(297mm - 12mm - 20mm - 22mm);gap:4mm">
    ${ems.map(([k, name, bg, cuerpo, cuando, puedo]) => `<div class="cut" style="border-radius:5mm;background:#fff;padding:4mm 5mm;display:flex;flex-direction:column;align-items:center;text-align:center">
      <div style="background:${bg};border-radius:4mm;width:100%;padding:4mm 0 3mm;display:flex;flex-direction:column;align-items:center">${face(k, 150)}<div class="f" style="font-size:22pt;font-weight:700;margin-top:1.5mm">${name}</div></div>
      <div style="text-align:left;font-size:11pt;line-height:1.4;margin-top:4mm;display:flex;flex-direction:column;justify-content:space-evenly;flex:1;width:100%">
        <div><b style="color:${C.naranjaOsc}">En mi cuerpo:</b> ${cuerpo}</div>
        <div><b style="color:${C.naranjaOsc}">Me pasa cuando</b> ${cuando}</div>
        <div><b style="color:${C.naranjaOsc}">Puedo:</b> ${puedo}</div>
      </div>
    </div>`).join('')}
  </div>
  ${footer(LABEL, p)}
</section>`;
}

function termometro(p) {
  const zones = [
    ['Rojo', '¡Exploto!', 'enojo', '#F7B7AE', 'No puedo pensar. Quiero gritar, pegar o tirar cosas.', 'Voy a mi lugar seguro. Un adulto me acompaña. Espero a que baje. Hablamos después.'],
    ['Naranja', 'Muy, muy molesto', 'frustracion', '#FFD3A8', 'Me cuesta pensar. Siento calor y ganas de llorar o gritar.', 'Hago una pausa. Voy al rincón de la calma. Uso una técnica. Pido ayuda.'],
    ['Amarillo', 'Inquieto', 'sorpresa', '#FFEBA8', 'Algo me molesta o me preocupa. Estoy nervioso.', 'Lo digo con palabras: «me siento…». Respiro despacio.'],
    ['Verde', 'Tranquilo', 'calma', '#CDEBD7', 'Puedo pensar, jugar, aprender y escuchar.', '¡Sigo así! Es un buen momento para hablar y para hacer la tarea.'],
  ];
  return `<section class="page">
  <div style="text-align:center"><div class="kick">Para pegar en su cuarto o en el rincón de la calma</div><h2>Mi termómetro de <em>emociones</em></h2><p class="lead">¿En qué color estoy ahora? Señala tu color y mira qué puedes hacer.</p></div>
  <div style="display:grid;grid-template-columns:30mm 1fr;gap:5mm">
    <div style="display:flex;flex-direction:column;align-items:center">
      <div style="width:16mm;flex:1;border-radius:8mm 8mm 0 0;border:2px solid ${C.azul};border-bottom:none;background:linear-gradient(180deg,#F2785F 0%,#FFB15C 35%,#FFD966 62%,#7CC596 100%)"></div>
      <div style="width:26mm;height:26mm;border-radius:50%;border:2px solid ${C.azul};background:#7CC596;margin-top:-3mm"></div>
    </div>
    <div style="display:flex;flex-direction:column;gap:3.5mm">
      ${zones.map(([z, t, f, bg, siento, hago]) => `<div style="display:flex;gap:4mm;align-items:center;background:${bg};border-radius:5mm;padding:4mm 5mm">${face(f, 66)}<div style="flex:1"><div class="f" style="font-size:15pt">${z} · ${t}</div><div class="small" style="margin-top:1mm"><b>Así me siento:</b> ${siento}</div><div class="small" style="margin-top:1mm"><b>Esto puedo hacer:</b> ${hago}</div></div></div>`).join('')}
    </div>
  </div>
  <div class="note" style="margin-top:5mm"><b>Para mamá:</b> usen el termómetro en momentos tranquilos, como un juego: «¿en qué color estás ahora?», «¿y cuando perdiste el partido?». Al nombrar su color varias veces al día, aprende a darse cuenta <b>antes</b> de llegar al rojo. Tú también puedes decir el tuyo: «hoy estoy en amarillo, necesito respirar».</div>
  ${footer(LABEL, p)}
</section>`;
}

function rincon(p) {
  const tools = [
    ['🎈', 'Respiración del globo', 'Pon las manos en la barriga. Al tomar aire, la barriga se infla como un globo. Al soltarlo, se desinfla despacito. 5 veces.'],
    ['🐍', 'La serpiente', 'Toma aire por la nariz y suéltalo muy despacio haciendo «sssss», como una serpiente. ¿Cuánto dura tu «sss»?'],
    ['🦋', 'Abrazo de mariposa', 'Cruza los brazos sobre el pecho, como alas. Da golpecitos suaves, una mano y luego la otra, mientras respiras.'],
    ['🖐️', '5-4-3-2-1', 'Nombra 5 cosas que ves, 4 que puedes tocar, 3 que escuchas, 2 que hueles y 1 que te gusta. La mente vuelve al presente.'],
    ['🧱', 'Empujo la pared', 'Empuja una pared con las dos manos, con toda tu fuerza, contando hasta 10. Suelta y siente cómo se relajan los brazos.'],
    ['🍋', 'Exprimo limones', 'Imagina un limón en cada mano. Apriétalos fuerte, fuerte… y suéltalos. Repite 3 veces. El enojo se va con el jugo.'],
  ];
  return `<section class="page">
  ${pageHead('Parte 1 · Emociones', 'El <em>rincón de la calma</em>', 'Un lugar de la casa donde tu hijo puede ir cuando una emoción es muy grande. No es un castigo ni un «ve a pensar»: es un refugio que él elige.')}
  <div class="grid2" style="grid-template-columns:1fr 1fr">
    <div class="card" style="background:${C.crema}"><h3>Cómo armarlo</h3><ul class="clean small">
      <li>Un rincón tranquilo: una esquina del cuarto o detrás del sofá.</li>
      <li>Un cojín o una manta suave y su peluche favorito.</li>
      <li>Una botella de la calma (plan 61 de «100 planes sin pantallas»).</li>
      <li>Las láminas de emociones y el termómetro, a la altura de sus ojos.</li>
      <li>Hojas y colores para dibujar lo que siente.</li>
      <li>Las tarjetas de calma de esta página, recortadas.</li></ul></div>
    <div class="card" style="background:${C.celeste}"><h3>Las reglas del rincón</h3><ul class="clean small">
      <li>Lo arman juntos y él lo decora: es <b>suyo</b>.</li>
      <li>Se puede ir cuando quiera, sin pedir permiso.</li>
      <li>No hay tiempo mínimo: sale cuando se siente listo.</li>
      <li>Un adulto puede acompañarlo si él quiere.</li>
      <li>Nunca se usa como castigo («¡ándate a tu rincón!»).</li>
      <li>Los adultos también pueden usarlo. ¡Dar el ejemplo funciona!</li></ul></div>
  </div>
  <div class="f" style="font-size:13pt;margin:5mm 0 2.5mm;display:flex;align-items:center;gap:2mm">${spark(11)} Mis tarjetas de calma <span class="small muted" style="font-family:Nunito">· recórtalas y practícalas cuando estés tranquilo</span></div>
  <div class="grid3" style="gap:0;border-top:1.4px dashed ${C.gris};border-left:1.4px dashed ${C.gris}">
    ${tools.map(([e, a, b], i) => `<div style="border-right:1.4px dashed ${C.gris};border-bottom:1.4px dashed ${C.gris};padding:3.5mm 4mm;background:${[C.durazno, C.verde, C.lila, C.celeste, C.rosa, C.amarillo][i]};height:56mm"><div class="emoji" style="font-size:20pt">${e}</div><div class="f" style="font-size:11.5pt;margin:1mm 0">${a}</div><div class="small">${b}</div></div>`).join('')}
  </div>
  ${footer(LABEL, p)}
</section>`;
}

function diario(p) {
  const days = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];
  const fs = ['alegria', 'calma', 'tristeza', 'enojo', 'miedo'];
  return `<section class="page cream">
  <div style="text-align:center"><div class="kick">Para imprimir cada semana</div><h2>Mi diario de <em>emociones</em></h2><p class="lead" style="margin-bottom:3mm">Cada noche, encierra cómo te sentiste hoy y escribe o dibuja por qué.</p></div>
  <div style="display:flex;flex-direction:column;gap:2.2mm">
    ${days.map((d) => `<div style="background:#fff;border-radius:4mm;padding:2.2mm 4mm;display:grid;grid-template-columns:22mm auto 1fr;gap:4mm;align-items:center"><div class="f" style="font-size:11.5pt">${d}</div><div style="display:flex;gap:1.5mm">${fs.map((f) => face(f, 34, { outline: false })).join('')}</div><div><div class="tiny muted">Me sentí así porque…</div><div style="border-bottom:1.2px solid ${C.linea};height:7mm"></div></div></div>`).join('')}
  </div>
  <div class="grid2" style="margin-top:4mm">
    <div class="card"><h4>Lo mejor de mi semana fue…</h4><div class="lines" style="gap:7mm;margin-top:2mm"><span></span><span></span></div></div>
    <div class="card"><h4>Una emoción difícil y cómo la manejé…</h4><div class="lines" style="gap:7mm;margin-top:2mm"><span></span><span></span></div></div>
  </div>
  <p class="tiny muted" style="margin-top:2.5mm;text-align:center">Para los más pequeños: que señale la carita y mamá escribe lo que cuenta. Para los grandes: que escriba solo y, si quiere, que te lo lea.</p>
  ${footer(LABEL, p)}
</section>`;
}

function preguntas(p) {
  const bgs = [C.durazno, C.verde, C.lila, C.celeste, C.rosa];
  return `<section class="page">
  ${pageHead('Parte 1 · Para jugar en la cena', '20 preguntas para <em>conversar</em>', 'Recorta las tarjetas y guárdalas en un frasco o una cajita. En la cena o en el carro, cada uno saca una y responde. ¡Mamá y papá también!')}
  <div class="grid4" style="gap:0;border-top:1.4px dashed ${C.gris};border-left:1.4px dashed ${C.gris}">
    ${PREGUNTAS.map((q, i) => `<div style="border-right:1.4px dashed ${C.gris};border-bottom:1.4px dashed ${C.gris};height:40mm;padding:3mm;display:flex;flex-direction:column;justify-content:center;align-items:center;text-align:center;background:${bgs[i % 5]}"><div style="margin-bottom:1.5mm">${spark(10)}</div><div class="f" style="font-size:11pt;line-height:1.2;font-weight:500">${q}</div></div>`).join('')}
  </div>
  <p class="tiny muted" style="margin-top:3mm">Consejo: escucha sin corregir ni dar lecciones. Si te cuenta algo difícil, solo di «gracias por contármelo» y pregunta «¿qué te ayudaría?».</p>
  ${footer(LABEL, p)}
</section>`;
}

function rutinasIntro(p) {
  return `<section class="page">
  ${pageHead('Parte 2 · Para mamá', 'Rutinas que tu hijo <em>sigue solito</em>', 'Decir «¡apúrate!» veinte veces cada mañana agota a cualquiera. Con un tablero visual, el que «manda» es el tablero, no tú: tu hijo mira qué sigue y lo hace. Menos órdenes, menos peleas, más autonomía.')}
  <div class="grid3">
    ${[['🧠', 'Dan seguridad', 'Saber qué viene después tranquiliza. Muchas rabietas aparecen en los cambios; la rutina los vuelve previsibles.'], ['🦸', 'Dan autonomía', 'Cuando el niño marca sus pasos, se siente capaz. Esa sensación de «yo puedo» se nota en todo.'], ['🕊️', 'Te dan paz', 'En lugar de repetir, preguntas: «¿qué dice tu tablero que sigue?». Y él mismo se responde.']].map(([e, a, b], i) => `<div class="card" style="background:${[C.durazno, C.verde, C.lila][i]}"><div class="emoji" style="font-size:18pt">${e}</div><h4 style="margin-top:2mm">${a}</h4><p class="small" style="margin:0">${b}</p></div>`).join('')}
  </div>
  <h3 style="margin-top:5mm">Cómo usar los tableros</h3>
  <div style="display:flex;flex-direction:column;gap:2.5mm">
    ${[['Elijan juntos los pasos', 'Los tableros traen pasos sugeridos, pero cada familia es distinta. Con las tarjetas para recortar (pág. 18) pueden armar su propia rutina.'], ['Péguenlos donde se usan', 'El de la mañana, cerca de su cama o del baño. El de la tarde, donde hace la tarea. El de la noche, en su cuarto.'], ['Que marque cada paso', 'Plastifica el tablero (o ponle cinta transparente encima) y usa un plumón de pizarra para marcar y borrar cada día. También sirven ganchos de ropa que se mueven al «¡listo!».'], ['Celebra el esfuerzo, no la perfección', 'Al principio olvidará pasos. Pregunta «¿qué sigue?» en lugar de darle la orden. A las 2 o 3 semanas, la rutina sale casi sola.'], ['Usa la tabla semanal', 'En la pág. 19, cada día que cumpla su rutina pinta una estrella. Al final de la semana, revisen juntos cuántas juntó.']].map(([a, b], i) => `<div style="display:flex;gap:4mm;align-items:flex-start"><span class="num">${i + 1}</span><div><h4 style="margin-bottom:.4mm">${a}</h4><p class="small" style="margin:0">${b}</p></div></div>`).join('')}
  </div>
  <div class="note" style="margin-top:5mm"><b>Para los más pequeños (3 a 5 años):</b> empieza con solo 4 pasos y agrega uno cada semana. <b>Para los grandes (8 a 10 años):</b> que ellos escriban su propia rutina y la hora de cada paso. Les encanta sentir que la diseñaron ellos.</div>
  ${footer(LABEL, p)}
</section>`;
}

function tablero(key, p) {
  const r = RUTINAS[key];
  return `<section class="page" style="background:${r.color};padding-top:13mm">
  <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:4mm">
    <div><div class="kick" style="color:${r.ink}">Para imprimir y pegar</div><h2 style="margin:0;font-size:26pt">${r.title} <span class="emoji" style="font-size:22pt">${r.emoji}</span></h2></div>
    <div class="card" style="padding:2.5mm 4mm;text-align:center"><div class="tiny muted">Empiezo a las</div><div style="width:26mm;border-bottom:1.5px solid ${C.pizarra};height:7mm"></div></div>
  </div>
  <div style="background:#fff;border-radius:4mm;padding:2.5mm 5mm;margin-bottom:4mm;display:flex;align-items:center;gap:3mm;font-size:10.5pt">Este tablero es de: <span style="flex:1;border-bottom:1.2px solid ${C.linea};height:5mm"></span></div>
  <div style="display:grid;grid-template-columns:1fr 1fr;grid-template-rows:repeat(4,1fr);gap:3.5mm;height:calc(297mm - 13mm - 20mm - 50mm)">
    ${r.steps.map(([e, t], i) => `<div style="background:#fff;border-radius:5mm;display:flex;align-items:center;gap:4mm;padding:3mm 5mm">
      <span class="num" style="width:9mm;height:9mm;font-size:13pt;background:${r.ink}">${i + 1}</span>
      <span class="emoji" style="font-size:34pt">${e}</span>
      <span class="f" style="font-size:15pt;flex:1;line-height:1.15">${t}</span>
      <span style="width:11mm;height:11mm;border:2px solid ${r.ink};border-radius:3mm;flex:none"></span>
    </div>`).join('')}
  </div>
  ${footer(LABEL, p)}
</section>`;
}

function tarjetas(p) {
  const picks = [['🛏️', 'Me levanto'], ['🚽', 'Baño'], ['🧼', 'Me lavo'], ['👕', 'Me visto'], ['🥣', 'Desayuno'], ['🪥', 'Dientes'], ['🎒', 'Mochila'], ['👟', 'Zapatos'], ['🍎', 'Lonche'], ['📚', 'Tarea'], ['🧸', 'Juego'], ['🧹', 'Ordeno'], ['🛁', 'Me baño'], ['🧦', 'Pijama'], ['📖', 'Cuento'], ['😴', 'A dormir'], ['🍽️', 'Comer'], ['🚌', 'Movilidad'], ['🏫', 'Colegio'], ['⚽', 'Deporte'], ['🎨', 'Taller'], ['👵', 'Abuelos'], ['🛒', 'Mercado'], ['💧', 'Tomo agua'], ['🐶', 'Mascota'], ['🌳', 'Parque'], ['📵', 'Sin pantallas'], ['✏️', '']];
  return `<section class="page" style="padding:12mm 12mm 18mm">
  <div class="kick">Para recortar</div><h2 style="font-size:19pt">Mis tarjetas de <em>rutina</em></h2>
  <p class="small" style="color:${C.pizarra};margin-bottom:3mm">Recorta las tarjetas y arma tu propia rutina en una cartulina, en el orden que elijan. La última está en blanco: dibuja la tuya. Si las plastificas y les pegas velcro o un imán, ¡duran todo el año!</p>
  <div style="display:grid;grid-template-columns:repeat(4,1fr);border-top:1.4px dashed ${C.gris};border-left:1.4px dashed ${C.gris}">
    ${picks.map(([e, t], i) => `<div style="border-right:1.4px dashed ${C.gris};border-bottom:1.4px dashed ${C.gris};height:33mm;display:flex;flex-direction:column;align-items:center;justify-content:center;background:${[C.durazno, C.verde, C.celeste, C.lila][Math.floor(i / 8) % 4]}"><span class="emoji" style="font-size:30pt">${e}</span><span class="f" style="font-size:12pt;margin-top:1.5mm">${t || '<span style="display:inline-block;width:28mm;border-bottom:1.2px solid #999">&nbsp;</span>'}</span></div>`).join('')}
  </div>
  ${footer(LABEL, p)}
</section>`;
}

function semanal(p) {
  const days = ['L', 'M', 'M', 'J', 'V', 'S', 'D'];
  const rows = [['☀️', 'Rutina de la mañana'], ['🏠', 'Rutina de la tarde'], ['🌙', 'Rutina de la noche'], ['🧡', 'Usé una técnica de calma'], ['💬', 'Dije cómo me sentía'], ['🤝', 'Ayudé a alguien']];
  return `<section class="page cream">
  <div style="text-align:center"><div class="kick">Para imprimir cada semana</div><h2>Mis <em>superpoderes</em> de la semana</h2><p class="lead" style="margin-bottom:4mm">Cada vez que lo logres, pinta una estrella. ¡Mira cómo se llena!</p></div>
  <div style="background:#fff;border-radius:5mm;padding:4mm 5mm">
    <div style="display:grid;grid-template-columns:62mm repeat(7,1fr);gap:1.5mm;align-items:center">
      <div class="small muted">Semana del ____ al ____</div>${days.map((d) => `<div class="f" style="text-align:center;font-size:12pt;background:${C.azul};color:#fff;border-radius:2mm;padding:1mm 0">${d}</div>`).join('')}
      ${rows.map(([e, t], i) => `<div style="display:flex;gap:2.5mm;align-items:center;padding:3mm 0;${i ? `border-top:1px solid ${C.linea}` : ''}"><span class="emoji" style="font-size:16pt">${e}</span><span class="f" style="font-size:11pt;line-height:1.15">${t}</span></div>${days.map(() => `<div style="text-align:center;${i ? `border-top:1px solid ${C.linea}` : ''};padding:3mm 0">${star(24, '#fff', C.naranja)}</div>`).join('')}`).join('')}
    </div>
  </div>
  <div class="grid2" style="margin-top:5mm;grid-template-columns:1fr 1fr">
    <div class="card" style="background:${C.durazno}"><h3>Esta semana junté <span style="display:inline-block;width:16mm;border-bottom:1.5px solid ${C.naranja}"></span> estrellas</h3><p class="small" style="margin:0">Lo celebramos con: <span style="display:inline-block;width:55mm;border-bottom:1.2px solid ${C.naranja}"></span></p></div>
    <div class="card" style="background:${C.verde}"><h3>Para mamá</h3><p class="small" style="margin:0">Las estrellas no son para comparar con hermanos ni para castigar. Son para mostrarle su avance. Celebra con experiencias: elegir la cena, un paseo, un plan de los «100 planes».</p></div>
  </div>
  <div style="display:flex;justify-content:center;margin-top:3mm">${img('lu-trofeo.jpg', 'height:44mm', 'mult')}</div>
  ${footer(LABEL, p)}
</section>`;
}

function miSemana(p) {
  const days = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];
  return `<section class="page">
  ${pageHead('Parte 2 · Para pegar en la refri', 'Así es <em>mi semana</em>', 'Los niños se sienten más seguros cuando saben qué pasará cada día. El domingo en la noche, completen juntos la semana con dibujos o con las tarjetas de rutina.')}
  <div style="display:grid;grid-template-columns:repeat(7,1fr);gap:2mm;height:150mm">
    ${days.map((d, i) => `<div style="border-radius:4mm;background:${i > 4 ? C.durazno : C.celeste};display:flex;flex-direction:column;padding:2mm"><div class="f" style="text-align:center;font-size:10.5pt;margin-bottom:2mm">${d}</div>${['Mañana', 'Tarde', 'Noche'].map((m) => `<div style="flex:1;background:#fff;border-radius:2.5mm;margin-bottom:1.5mm;padding:1mm 1.5mm"><div class="tiny muted">${m}</div></div>`).join('')}</div>`).join('')}
  </div>
  <div class="grid2" style="margin-top:4mm">
    <div class="card" style="background:${C.crema}"><h4>Algo especial esta semana</h4><p class="tiny muted" style="margin:0 0 2mm">Una visita, un cumpleaños, una vacuna, un examen…</p><div class="lines" style="gap:7mm"><span></span><span></span></div></div>
    <div class="card" style="background:${C.crema}"><h4>Algo que me da curiosidad o nervios</h4><p class="tiny muted" style="margin:0 0 2mm">Conversarlo antes le quita la mitad del miedo.</p><div class="lines" style="gap:7mm"><span></span><span></span></div></div>
  </div>
  ${footer(LABEL, p)}
</section>`;
}

function back(p) {
  return `<section class="page" style="background:${C.azul};color:#fff;padding:18mm 16mm">
  ${img('lunori-logo.png', 'height:10mm;filter:brightness(0) invert(1)')}
  <h2 style="color:#fff;font-size:26pt;margin-top:10mm">Emociones que se entienden,<br>días que fluyen 💛</h2>
  <p style="color:#D9DEF2;font-size:11.5pt;max-width:160mm">No esperes que todo cambie en una semana. Cada vez que acompañas una emoción con calma y sostienes una rutina con cariño, tu hijo aprende algo que le servirá toda la vida.</p>
  <div style="display:flex;justify-content:center;gap:6mm;margin-top:8mm">${['alegria', 'calma', 'orgullo'].map((f) => face(f, 120)).join('')}</div>
  <div style="position:absolute;left:16mm;right:16mm;bottom:30mm;background:#fff;border-radius:6mm;padding:5mm 6mm;display:flex;gap:5mm;align-items:center;color:${C.texto}">
    ${img('frasco-enfokids.jpg', 'height:34mm;border-radius:4mm')}
    ${img('frasco-buenas-noches.jpg', 'height:34mm;border-radius:4mm')}
    <div><div class="kick">La familia Lunori</div><h3>Enfoque de día, calma de noche</h3><p class="small" style="margin:0">EnfoKIDS y Buenas Noches acompañan la rutina de tu familia, de la mañana a la noche. Conoce el Combo Día y Noche en <b>lunoriperu.com</b>.</p></div>
  </div>
  <p class="tiny" style="position:absolute;left:16mm;right:16mm;bottom:12mm;color:#AEB6D6">Los productos Lunori son suplementos nutricionales y no reemplazan una alimentación balanceada ni un tratamiento médico. Este kit es material educativo para familias y no reemplaza la evaluación de un profesional de la salud.</p>
</section>`;
}

module.exports = {
  file: 'Kit-Emociones-y-Rutinas',
  html: () => {
    const pages = [];
    const add = (fn) => pages.push(fn(pages.length + 1));
    pages.push(cover());
    add(hola);
    add((p) => partPage({ part: 'Parte 1', title: 'Emociones<br>que se entienden', subtitle: 'Qué hacer en una rabieta, qué decir, cómo volver a la calma y cómo ayudarlo a ponerle nombre a lo que siente.', bg: C.naranja, art: `<div style="position:absolute;left:0;right:0;top:26mm;display:flex;justify-content:center">${img('bosque-amigos.jpg', 'width:170mm', 'mult')}</div>`, label: LABEL, pageNo: p }));
    add(rabietas);
    add(calma);
    add(frases);
    add((p) => laminas(0, p));
    add((p) => laminas(1, p));
    add(termometro);
    add(rincon);
    add(diario);
    add(preguntas);
    add((p) => partPage({ part: 'Parte 2', title: 'Rutinas<br>que dan calma', subtitle: 'Tableros visuales para la mañana, la tarde y la noche, para que tu hijo sepa qué viene después y lo haga solito.', bg: C.azul, art: `<div style="position:absolute;left:0;right:0;top:22mm;display:flex;justify-content:center">${img('luna-osito.jpg', 'height:120mm;border-radius:10mm')}</div>`, label: LABEL, pageNo: p }));
    add(rutinasIntro);
    add((p) => tablero('manana', p));
    add((p) => tablero('tarde', p));
    add((p) => tablero('noche', p));
    add(tarjetas);
    add(semanal);
    add(miSemana);
    add(back);
    return doc('Kit de Emociones y Rutinas · Lunori', pages);
  },
};
