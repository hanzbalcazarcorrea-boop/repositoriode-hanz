// Súper Lector · Comprensión ("Leo y entiendo"): 4 ediciones por edad, mismas franjas que Súper Lector en 21 días.
const fs = require('fs');
const path = require('path');
const { C, img, spark, star, emptyStars, footer, doc, esc } = require('../base');

// Tres niveles por edad, con los mismos nombres que Súper Lector en 21 días.
// Nivel 1 = data-<edad>.js · Niveles 2 y 3 = data-<edad>-n2.js / data-<edad>-n3.js
const LEVELS = [null, 'Despegue', 'Vuelo', 'Súper lector'];
const LEVEL_DESC = [null,
  'Para empezar: textos cortos y preguntas sobre lo que dice el texto, con las primeras preguntas para pensar.',
  'Textos más largos y variados, más preguntas de inferencia y vocabulario. Ideal si terminó el Nivel 1 o si ya responde bien lo que dice el texto.',
  'Textos más exigentes y preguntas para pensar, opinar y justificar. Ideal si terminó el Nivel 2 o si ya lee y comprende muy bien para su edad.'];
const EDITIONS = [];
for (const a of ['5', '67', '89', '1012']) {
  for (const lv of [1, 2, 3]) {
    const f = path.join(__dirname, lv === 1 ? `data-${a}.js` : `data-${a}-n${lv}.js`);
    if (fs.existsSync(f)) EDITIONS.push({ ...require(f), level: lv, levelName: LEVELS[lv] });
  }
}

const PASTEL = [
  { bg: C.durazno, ink: C.naranjaOsc },
  { bg: C.celeste, ink: C.azulMed },
  { bg: C.verde, ink: '#3E8E5C' },
  { bg: C.lilaMed, ink: '#6B55B8' },
  { bg: C.rosa, ink: '#C8524A' },
];

// Tamaño del texto de lectura según la edad.
const TXT = {
  pre: { size: '19pt', lh: 1.55, font: 'Fredoka', weight: 500 },
  basic: { size: '13.5pt', lh: 1.6, font: 'Nunito', weight: 600 },
  mid: { size: '11.6pt', lh: 1.55, font: 'Nunito', weight: 400 },
  adv: { size: '10.6pt', lh: 1.5, font: 'Nunito', weight: 400 },
};

// En los niveles 2 y 3 los textos son más largos: la letra baja un poco.
const TXT_LEVEL = { pre: ['19pt', '16.5pt', '15pt'], basic: ['13.5pt', '12.8pt', '12pt'], mid: ['11.6pt', '11.2pt', '10.8pt'], adv: ['10.6pt', '10.4pt', '10.2pt'] };

const TIPS = {
  '¿Quién es?': 'Antes de leer, pregúntale: «¿quién crees que aparece en este cuento?». Así su cabeza ya va buscando la respuesta.',
  '¿Dónde está?': 'Juega a «¿dónde estamos?» durante el día: en el mercado, en el carro, en la cocina. Ubicar lugares también es comprender.',
  '¿Qué pasó?': 'Pídele que te cuente el cuento con sus palabras, usando sus manos o un juguete. Si lo puede contar, lo entendió.',
  'Primero, después y al final': 'Usa las palabras «primero, después, al final» cuando cocinen o se vistan. Es la misma habilidad que usa al leer.',
  'Palabras nuevas': 'Cuando aparezca una palabra nueva, no se la expliques de inmediato: pregúntale qué cree que significa según el cuento.',
  '¿Por qué pasó?': 'Las preguntas «¿por qué?» son las que más hacen pensar. Celebra cualquier respuesta con lógica, aunque no sea la del cuento.',
  '¿Cómo se siente?': 'Nombrar emociones de los personajes le ayuda a reconocer las suyas. Pregunta: «¿a ti te ha pasado algo así?».',
  '¿Qué pasará?': 'Detente antes del final y pregunta «¿qué crees que va a pasar?». Adivinar mantiene su atención en la lectura.',
  '¿De qué trata?': 'Pídele que diga «de qué trata» en una sola frase, como si fuera el título. Es el primer paso para resumir.',
  '¿Qué opino yo?': 'No hay respuesta incorrecta en la opinión, pero sí pide un «porque…». Dar razones es pensar en voz alta.',
  '¿Quién? ¿Qué? ¿Cuándo?': 'Si no recuerda un dato, no se lo digas: «busquemos la pista juntos». Volver al texto es una habilidad que vale oro.',
  '¿Dónde pasa?': 'Pregúntale qué cosas del texto le hicieron imaginar el lugar: así descubre que las palabras «pintan» escenas.',
  'Datos y detalles': 'Que subraye con color las respuestas en el texto antes de escribirlas. Aprende a buscar en vez de adivinar.',
  'Leer entre líneas': 'Inferir es descubrir lo que el texto no dice directamente. Pregunta: «¿cómo lo sabes?, ¿qué pista te lo dijo?».',
  'Palabras por el contexto': 'Enséñale el truco: tapa la palabra difícil y piensa qué otra palabra cabría ahí. Casi siempre acierta el sentido.',
  'Causa y consecuencia': 'Practiquen con la vida diaria: «si no riegas la planta… ¿qué pasa?». Causa y consecuencia aparecen en todas las materias.',
  'Emociones de los personajes': 'Comenten qué hizo el personaje para calmarse. Es una buena ocasión para acordar la estrategia de calma de la familia.',
  'La idea principal': 'Pregunta: «si tuvieras que contarlo en un mensaje de WhatsApp, ¿qué escribirías?». Esa es la idea principal.',
  'Leer un poema': 'Lean el poema en voz alta juntos, con ritmo, como una canción. Los poemas entrenan la fluidez y el oído para las rimas.',
  'Seguir instrucciones': '¡Hagan la receta de verdad! Leer para hacer algo es la mejor prueba de comprensión, y además es un plan sin pantallas.',
  'Opiniones y razones': 'Jueguen a defender la opinión contraria a la suya. Es difícil… y es exactamente lo que entrena el pensamiento crítico.',
  'Hecho u opinión': 'Pregunta: «¿esto se puede comprobar?». Si sí, es un hecho; si depende de lo que cada uno piensa, es una opinión.',
  'Inferir con pistas': 'Este es un texto para resolver como detectives. Pídele que subraye cada pista antes de responder.',
  'Idea principal y detalles': 'Que lea primero las preguntas y luego el texto: así sabe qué buscar. Es una estrategia útil para sus exámenes.',
  'El propósito del autor': 'Miren juntos un anuncio real (de TV o redes) y pregunten: «¿qué quiere que hagamos?, ¿qué exagera?».',
  'Vocabulario en contexto': 'Si no conoce una palabra, que primero intente deducirla y después la verifique en un diccionario. Las dos cosas suman.',
  'Leer tablas': 'Las tablas aparecen en ciencias, matemática y en la vida real. Pídele que te «lea» una fila en voz alta, como una oración.',
  'Punto de vista': 'Pregunta: «¿cómo contaría esta historia el otro personaje?». Ver desde otro lugar es la base de la empatía.',
  'Argumentos a favor y en contra': 'Es un buen texto para conversar los acuerdos de pantallas en casa. Escucha sus razones antes de dar las tuyas.',
  'Resumir': 'Un buen resumen responde: ¿de qué trata?, ¿qué es lo más importante? Deja fuera los detalles pequeños.',
  'El mensaje del texto': 'Pregúntale qué aprendió el personaje y qué aprendió él. El mensaje de un cuento no siempre está escrito.',
};

const LETTERS = ['a', 'b', 'c', 'd'];
const writeLines = (n) => `<span style="flex:1;min-height:8.5mm;max-height:12mm;border-bottom:1.2px solid ${C.linea};display:block"></span>`.repeat(n);

function label(ed) { return `Súper Lector · Comprensión · ${ed.age} · Nivel ${ed.level}`; }

function renderQ(q, i, ed) {
  const n = `<span class="num" style="width:6mm;height:6mm;font-size:9.5pt;margin-right:2mm">${i + 1}</span>`;
  const head = `<div style="display:flex;align-items:flex-start;font-weight:700;color:${C.azul};margin-bottom:1.8mm;font-size:${ed.mode === 'pre' ? '12.5pt' : ed.mode === 'adv' ? '10.3pt' : '11pt'}">${n}<span>${q.q}</span></div>`;
  const pad = 'padding-left:8mm;';
  switch (q.t) {
    case 'pic':
      return `<div class="qq">${head}<div style="${pad}display:flex;gap:5mm">${q.o.map(([e, l]) => `<div style="width:31mm;border:1.6px solid ${C.linea};border-radius:4mm;padding:2.2mm 1mm 1.8mm;text-align:center;background:#fff"><div class="emoji" style="font-size:27pt">${e}</div><div class="f" style="font-size:10.5pt;margin-top:1mm;color:${C.pizarra};font-weight:500">${l}</div></div>`).join('')}</div></div>`;
    case 'choice': {
      const fs = q.big ? '15pt' : ed.mode === 'adv' ? '9.8pt' : '10.5pt';
      const stack = q.o.some((o) => o.length > 28);
      return `<div class="qq">${head}<div style="${pad}display:flex;${stack ? 'flex-direction:column;gap:1.6mm' : 'flex-wrap:wrap;gap:2.5mm 6mm'}">${q.o.map((o, k) => `<div style="display:flex;align-items:center;gap:2mm;font-size:${fs}"><span style="display:inline-flex;align-items:center;justify-content:center;width:5.5mm;height:5.5mm;border-radius:50%;background:${C.durazno};color:${C.naranjaOsc};font-family:Fredoka;font-weight:600;font-size:9pt;flex:none">${LETTERS[k]}</span><span>${o}</span></div>`).join('')}</div></div>`;
    }
    case 'tf':
    case 'ho': {
      const L = q.t === 'tf' ? ['V', 'F'] : ['H', 'O'];
      return `<div class="qq">${head}<div style="${pad}display:flex;flex-direction:column;gap:1.5mm">${q.items.map(([s]) => `<div style="display:flex;align-items:center;justify-content:space-between;gap:4mm;background:${C.crema};border-radius:2.5mm;padding:1.4mm 3mm;font-size:${ed.mode === 'adv' ? '9.8pt' : '10.5pt'}"><span>${s}</span><span style="display:flex;gap:2mm;flex:none">${L.map((x) => `<span style="display:inline-flex;align-items:center;justify-content:center;width:7mm;height:7mm;border:1.5px solid ${C.pizarra};border-radius:1.8mm;font-family:Fredoka;font-size:9pt;color:${C.gris};background:#fff">${x}</span>`).join('')}</span></div>`).join('')}</div></div>`;
    }
    case 'order':
      return `<div class="qq">${head}<div style="${pad}display:flex;flex-direction:column;gap:1.6mm">${q.o.map((s) => `<div style="display:flex;align-items:center;gap:3mm;font-size:${ed.mode === 'pre' ? '13pt' : '10.5pt'}"><span style="width:8mm;height:8mm;border:1.8px solid ${C.naranja};border-radius:2mm;background:#fff;flex:none"></span><span>${s}</span></div>`).join('')}</div></div>`;
    case 'open':
      return `<div class="qq" style="flex:${q.lines || 1} 1 auto;display:flex;flex-direction:column">${head}<div style="${pad}flex:1;display:flex;flex-direction:column">${writeLines(q.lines || 1)}</div></div>`;
    case 'say':
      return `<div class="qq" style="${q.lines ? `flex:${q.lines} 1 auto;` : ''}display:flex;flex-direction:column">${head}<div style="${pad}flex:1;display:flex;flex-direction:column"><div><span class="tag" style="background:${C.celeste};color:${C.azul}">🗣️ Respóndela en voz alta</span></div>${q.lines ? writeLines(q.lines) : ''}</div></div>`;
    case 'draw':
      return `<div class="qq" style="flex:1;display:flex;flex-direction:column">${head}<div style="margin-left:8mm;flex:1;min-height:${Math.min(q.h || 45, 34)}mm;border:1.8px dashed ${C.celesteMed};border-radius:4mm;background:#fff"></div></div>`;
    case 'match':
      return `<div class="qq">${head}<div style="${pad}display:grid;grid-template-columns:1fr 1.7fr;column-gap:18mm;row-gap:2mm;font-size:10pt">${q.left.map((l, k) => `<div style="display:flex;justify-content:space-between;align-items:center;font-weight:700;color:${C.azul}">${l}<span style="color:${C.naranja}">●</span></div><div style="display:flex;align-items:center;gap:2mm"><span style="color:${C.naranja}">●</span>${q.right[k]}</div>`).join('')}</div></div>`;
    case 'boxes':
      return `<div class="qq">${head}<div style="${pad}display:grid;grid-template-columns:repeat(${q.labels.length > 3 ? 2 : q.labels.length},1fr);gap:2.5mm">${q.labels.map((l) => `<div style="border:1.5px solid ${C.linea};border-radius:3mm;padding:1.8mm 3mm 2.5mm;background:#fff"><div class="f" style="font-size:9pt;color:${C.naranjaOsc}">${l}</div><div class="lines" style="gap:6.5mm;margin-top:1mm"><span></span><span></span></div></div>`).join('')}</div></div>`;
  }
  throw new Error('Tipo de pregunta desconocido: ' + q.t);
}

function answer(q) {
  const r = answerCore(q);
  return q.ex ? `${r} <i>(${q.ex})</i>` : r;
}

function answerCore(q) {
  switch (q.t) {
    case 'pic': return q.o[q.a][1];
    case 'choice': return `${LETTERS[q.a]}) ${q.o[q.a]}`;
    case 'tf': return q.items.map(([, v]) => (v ? 'V' : 'F')).join(' · ');
    case 'ho': return q.items.map(([, v]) => v).join(' · ');
    case 'order': return q.o.map((s, k) => [q.a[k], s]).sort((x, y) => x[0] - y[0]).map(([, s]) => s.replace(/^[^\p{L}\p{N}¡¿«]+\s/u, '')).join(' → ');
    case 'match': return q.left.map((l, k) => `${l} → ${q.right[q.a[k] - 1]}`).join(' · ');
    case 'draw': return q.a || 'Dibujo libre.';
    case 'say': return q.a || 'Respuesta libre, en voz alta.';
    default: return q.a;
  }
}

function lecturaPage(ed, L, idx, pageNo) {
  const p = PASTEL[idx % PASTEL.length];
  const t = TXT[ed.mode];
  const isPre = ed.mode === 'pre';
  const art = L.img && L.wide
    ? ''
    : L.img
      ? `<div style="width:24mm;height:24mm;border-radius:50%;background:#fff;display:flex;align-items:center;justify-content:center;overflow:hidden;flex:none">${img(L.img, 'height:22mm', 'mult')}</div>`
      : `<div style="width:24mm;height:24mm;border-radius:50%;background:#fff;display:flex;align-items:center;justify-content:center;flex:none"><span class="emoji" style="font-size:30pt">${L.art}</span></div>`;
  const banner = L.img && L.wide
    ? `<div style="display:flex;justify-content:center;margin:${ed.mode === 'adv' ? '-1mm 0 0' : '0'}">${img(L.img, `height:${ed.mode === 'adv' ? 30 : ed.mode === 'mid' ? 36 : 44}mm;border-radius:6mm`, 'mult')}</div>`
    : '';
  const instr = isPre
    ? `Mamá lee ${L.type && !/cuento/i.test(L.type) ? 'el texto' : 'el cuento'} en voz alta dos veces, con el dedo debajo de cada línea. Luego tú respondes.`
    : ed.mode === 'basic'
      ? 'Lee el texto en voz alta. Si quieres, léelo dos veces. Luego responde.'
      : 'Lee el texto con atención. Puedes volver a él para buscar las respuestas.';
  const textHtml = L.text.map((s) => `<p style="margin-bottom:${isPre ? '1mm' : '2mm'}">${s}</p>`).join('');
  const tip = L.tip || TIPS[L.skill];
  return `<section class="page">
  <div style="background:${p.bg};border-radius:5mm;padding:3.5mm 5mm;display:flex;align-items:center;gap:4mm;">
    <div style="width:15mm;height:15mm;border-radius:50%;background:#fff;display:flex;flex-direction:column;align-items:center;justify-content:center;flex:none"><span class="f" style="font-size:6.5pt;color:${p.ink};letter-spacing:.3mm">LECTURA</span><span class="f" style="font-size:16pt;color:${p.ink};line-height:1">${idx + 1}</span></div>
    <div style="flex:1">
      <div class="kick" style="color:${p.ink};margin-bottom:.5mm;${((L.type || '') + L.skill).length > 38 ? 'font-size:7.3pt;letter-spacing:.5mm' : ''}">${L.type ? L.type + ' · ' : ''}Hoy: ${L.skill}</div>
      <h2 style="margin:0;font-size:${ed.mode === 'adv' ? '18pt' : '20pt'}">${L.title}</h2>
    </div>
    ${art}
  </div>
  <div style="display:flex;flex-direction:column;height:calc(297mm - 15mm - 20mm - 24mm)">
  <div style="display:flex;align-items:center;gap:2mm;margin:3.2mm 0 2mm;font-size:9.3pt;color:${C.pizarra}">${spark(9)}<i>${instr}</i></div>
  ${banner}
  <div style="background:${C.crema};border-radius:5mm;padding:${isPre ? '5mm 7mm' : '4mm 6mm'};font-family:${t.font};font-weight:${t.weight};font-size:${TXT_LEVEL[ed.mode][ed.level - 1]};line-height:${t.lh};color:${C.azul};${L.poem ? 'columns:3;column-gap:6mm;font-size:11.4pt' : ''}">${textHtml}</div>
  <div class="f" style="margin:${isPre ? '4.5mm' : '3.5mm'} 0 2.5mm;font-size:12.5pt;display:flex;align-items:center;gap:2mm">${spark(11)} Ahora responde</div>
  <div style="display:flex;flex-direction:column;flex:1;gap:${isPre ? '4.5mm' : ed.mode === 'adv' ? '2.6mm' : '3.2mm'}">${L.qs.map((q, i) => renderQ(q, i, ed)).join('')}</div>
  <div style="margin-top:auto;display:flex;gap:4mm;align-items:stretch;padding-top:3mm">
    ${tip ? `<div class="note" style="flex:1;font-size:8.8pt;padding:2.6mm 4mm"><b>Para mamá:</b> ${tip}</div>` : ''}
    <div style="width:46mm;flex:none;border:1.5px solid ${C.linea};border-radius:4mm;padding:2mm 3mm;text-align:center"><div class="f" style="font-size:9pt;margin-bottom:1mm">¿Cómo me fue hoy?</div>${emptyStars(3, 17)}<div class="tiny muted" style="margin-top:.6mm">Pinta tus estrellas</div></div>
  </div>
  </div>
  ${footer(label(ed), pageNo)}
</section>`;
}

function coverPage(ed) {
  return `<section class="page cream" style="padding:0">
  <div style="position:absolute;left:0;right:0;top:0;height:150mm;background:linear-gradient(180deg,#FFF1DC 0%,#FFF8EE 100%)"></div>
  <div style="position:absolute;top:14mm;left:0;right:0;text-align:center">${img('lunori-logo.png', 'height:11mm')}</div>
  <div style="position:absolute;top:33mm;left:0;right:0;text-align:center">
    <span class="tag" style="background:${C.naranja};color:#fff;letter-spacing:.6mm;font-size:8.5pt">CUADERNO DE COMPRENSIÓN LECTORA</span>
    <div class="f" style="font-size:50pt;font-weight:700;color:${C.naranja};margin-top:4mm;line-height:1">Súper Lector</div>
    <div class="f" style="font-size:30pt;font-weight:600;color:${C.azul};margin-top:1mm">Leo y entiendo</div>
    <div style="margin-top:4mm"><span class="tag" style="border:1.6px solid ${C.azul};color:${C.azul};background:#fff;font-size:11pt;padding:1.2mm 5mm">Nivel ${ed.level} · ${ed.levelName} · ${ed.age}</span></div>
  </div>
  <div style="position:absolute;left:0;right:0;top:100mm;display:flex;justify-content:center">${img(ed.mode === 'adv' ? 'club.jpg' : 'lu-lee.jpg', ed.mode === 'adv' ? 'width:165mm' : 'width:132mm', 'mult')}</div>
  <div style="position:absolute;left:18mm;right:18mm;bottom:16mm;background:#fff;border-radius:6mm;padding:5mm 7mm;box-shadow:0 2mm 6mm rgba(30,42,90,.08)">
    <div style="display:flex;justify-content:space-around;text-align:center">
      ${[['📖', '10 lecturas', 'originales'], ['⏱️', '15 minutos', 'por lectura'], ['🧠', '10 habilidades', 'de comprensión'], ['🏆', 'Diploma', 'al terminar']].map(([e, a, b]) => `<div><div class="emoji" style="font-size:15pt">${e}</div><div class="f" style="font-size:11pt;margin-top:1mm">${a}</div><div class="tiny muted">${b}</div></div>`).join('')}
    </div>
    <div style="border-top:1px solid ${C.linea};margin-top:4mm;padding-top:3mm;font-size:10pt;color:${C.pizarra};display:flex;gap:2mm">Este cuaderno es de: <span style="flex:1;border-bottom:1.2px solid ${C.linea}"></span></div>
  </div>
</section>`;
}

function holaPage(ed) {
  const pre = ed.mode === 'pre';
  return `<section class="page">
  <div class="spark">${spark(14)}</div>
  <div class="kick">Hola, mamá</div>
  <h2>Leer rápido está genial.<br><em>Entender lo que lee</em>, es el superpoder.</h2>
  <p class="lead">Un niño puede leer todas las palabras de un texto y, al terminar, no saber de qué trataba. Pasa muchísimo y no es su culpa: entender también se aprende, y se entrena con práctica, igual que la fluidez.</p>
  <div class="grid2" style="margin-top:2mm">
    <div class="card" style="background:${C.crema}">
      <h3>¿Qué es la comprensión lectora?</h3>
      <p class="small">Es poder contar lo que leyó, encontrar datos, entender palabras nuevas, descubrir lo que el texto no dice directamente y dar su propia opinión. Es la habilidad que más pesa en todas las materias: también en matemática, cuando hay que entender un problema.</p>
      <h3 style="margin-top:3mm">¿Para quién es?</h3>
      <p class="small">${pre ? 'Para niños de 5 años que todavía están aprendiendo a leer. Tú lees el cuento en voz alta y él responde señalando, encerrando o dibujando. Se entrena la comprensión <b>antes</b> de leer solo.' : `Para niños de ${ed.age.replace(' años', '')} años. Las lecturas están pensadas para su edad: cuentos, textos informativos y otros tipos de texto que verá en el colegio.`}</p>
      <p class="small" style="margin:0"><b style="color:${C.naranjaOsc}">Nivel ${ed.level} · ${ed.levelName}:</b> ${LEVEL_DESC[ed.level]}</p>
    </div>
    <div class="card" style="background:${C.celeste}">
      <h3>Qué incluye</h3>
      <ul class="clean small">
        <li>10 lecturas originales, una por día de práctica</li>
        <li>10 habilidades de comprensión, una por lectura</li>
        <li>Preguntas variadas: ${pre ? 'encerrar, ordenar, dibujar y conversar' : 'alternativas, verdadero o falso, ordenar, unir y respuestas con sus palabras'}</li>
        <li>Un consejo para ti en cada página</li>
        <li>Tabla de progreso con estrellas y diploma</li>
        <li>Respuestas al final, para que revises tranquila</li>
      </ul>
    </div>
  </div>
  <div class="card" style="background:${C.durazno};margin-top:4mm;display:flex;gap:5mm;align-items:center">
    ${img('lu-saluda.jpg', 'height:30mm', 'mult')}
    <div><h3>El compañero de Súper Lector en 21 días</h3><p class="small" style="margin:0">Súper Lector entrena la <b>fluidez</b>: leer sin trabarse y a buen ritmo. Este cuaderno entrena la <b>comprensión</b>: entender, pensar y opinar sobre lo que lee. Puedes usarlos a la vez (en días alternados) o hacer este al terminar. Juntos forman un lector completo.</p></div>
  </div>
  <h3 style="margin-top:5mm">Antes de empezar, ten a mano</h3>
  <div class="grid4" style="grid-template-columns:repeat(5,1fr)">
    ${[['🖨️', 'El cuaderno', 'impreso o en la tablet'], ['✏️', 'Lápiz', 'y colores'], ['⏰', '15 minutos', 'sin interrupciones'], ['🛋️', 'Un lugar', 'tranquilo, sin tele'], ['🎉', 'Ganas', 'de celebrar']].map(([e, a, b]) => `<div style="text-align:center;border:1.5px solid ${C.linea};border-radius:4mm;padding:3mm 1mm"><div class="emoji" style="font-size:16pt">${e}</div><div class="f" style="font-size:10pt;margin-top:1mm">${a}</div><div class="tiny muted">${b}</div></div>`).join('')}
  </div>
  ${footer(label(ed), 2)}
</section>`;
}

function comoPage(ed) {
  const pre = ed.mode === 'pre';
  const steps = pre
    ? [['Antes', '2 min', 'Miren juntos el título y el dibujo. Pregunta: «¿de qué crees que tratará?».'], ['Lectura', '4 min', 'Lee el cuento en voz alta dos veces, despacio y con emoción, con el dedo debajo.'], ['Preguntas', '6 min', 'Lee cada pregunta. Él responde encerrando, ordenando o dibujando.'], ['Conversamos', '3 min', 'Pregunta qué le gustó. Que pinte sus estrellas.']]
    : [['Antes', '2 min', 'Lean el título y miren el dibujo. ¿De qué tratará? ¿Qué sabe del tema?'], ['Lectura', '5 min', 'Lee el texto en voz alta. Si se traba mucho, léanlo una vez juntos y otra vez solo.'], ['Preguntas', '6 min', 'Responde por escrito. Puede volver al texto: buscar la pista no es trampa, es estrategia.'], ['Conversamos', '2 min', 'Revisen juntos con las respuestas del final y pinten las estrellas.']];
  const skills = ed.lecturas.map((l, i) => `<div style="display:flex;gap:2mm;align-items:center;font-size:9.5pt;padding:1.2mm 0;border-bottom:1px solid ${C.linea}"><span class="num" style="width:5.5mm;height:5.5mm;font-size:8.5pt">${i + 1}</span><b style="color:${C.azul}">${l.skill}</b><span class="muted" style="margin-left:auto">${l.type || ''}</span></div>`).join('');
  return `<section class="page">
  <div class="spark">${spark(14)}</div>
  <div class="kick">Cómo usar este cuaderno</div>
  <h2>La rutina de <em>15 minutos</em></h2>
  <p class="lead">Siempre los mismos 4 pasos. Cuando la rutina es igual cada día, tu hijo ya sabe qué viene y se concentra en pensar.</p>
  <div class="grid4">${steps.map(([a, m, b], i) => `<div class="card" style="background:${PASTEL[i].bg};padding:3.5mm 4mm"><div style="display:flex;justify-content:space-between;align-items:center"><span class="num">${i + 1}</span><span class="tiny" style="color:${PASTEL[i].ink};font-weight:800">${m}</span></div><h4 style="margin-top:2mm">${a}</h4><p class="small" style="margin:0">${b}</p></div>`).join('')}</div>
  <div class="grid2" style="margin-top:5mm;grid-template-columns:1.05fr 1fr">
    <div>
      <h3>El plan: 3 lecturas por semana</h3>
      <p class="small">Lunes, miércoles y viernes, a la misma hora (por ejemplo, después del lonche). En poco más de 3 semanas terminan el cuaderno. Si quieren ir más rápido, una lectura diaria también funciona.</p>
      <h3 style="margin-top:3mm">Las 10 habilidades que va a entrenar</h3>
      ${skills}
    </div>
    <div style="display:flex;flex-direction:column;gap:3mm">
      ${[['Si no sabe una respuesta', 'No se la digas. Dile «busquemos la pista» y vuelvan juntos al texto. Aprender a buscar es la habilidad más útil para sus exámenes.'], ['Si responde algo distinto', 'Pregunta «¿por qué piensas eso?». Si su respuesta tiene lógica, celébrala aunque no sea la del solucionario.'], ['Si se frustra', 'Hagan las preguntas en voz alta y tú escribes. Lo importante es que piense, no que escriba perfecto.'], ['Si le cuesta escribir', `${pre ? 'A esta edad todo es oral o con dibujos. Tú puedes escribir lo que dice.' : 'Acepta respuestas cortas. Con el tiempo, pídele que responda «con oración completa».'}`], ['Celebra el esfuerzo', 'Di qué hizo bien: «encontraste la pista tú solito». Eso motiva más que cualquier premio.']].map(([a, b]) => `<div class="card" style="background:${C.crema};padding:3mm 4.5mm"><h4>${a}</h4><p class="small" style="margin:0">${b}</p></div>`).join('')}
    </div>
  </div>
  ${footer(label(ed), 3)}
</section>`;
}

function progresoPage(ed) {
  return `<section class="page cream">
  <div style="text-align:center"><h2 style="color:${C.naranja}">Mi tabla de súper lector</h2><p class="lead" style="margin-bottom:3mm">Cada vez que termines una lectura, escribe la fecha y pinta tus estrellas.</p></div>
  <div style="display:flex;flex-direction:column;gap:2.4mm">
  ${ed.lecturas.map((l, i) => `<div style="display:flex;align-items:center;gap:4mm;background:#fff;border-radius:4mm;padding:2.4mm 4mm"><span class="num" style="background:${[C.naranja, C.azulMed, C.verdeMed, C.lilaFuerte, C.rosaMed][i % 5]}">${i + 1}</span><div style="flex:1"><div class="f" style="font-size:11.5pt">${l.title}</div><div class="tiny muted">${l.skill}</div></div><div class="small muted" style="width:32mm">Fecha: ______</div><div>${emptyStars(3, 16)}</div></div>`).join('')}
  </div>
  <div style="display:flex;align-items:center;gap:5mm;margin-top:5mm">
    ${img(ed.mode === 'adv' ? 'zara.jpg' : 'bosque-amigos.jpg', ed.mode === 'adv' ? 'height:44mm' : 'height:42mm', 'mult')}
    <div class="card" style="flex:1;background:${C.durazno}"><h3>Mi meta</h3><p class="small" style="margin:0">Cuando termine las 10 lecturas, lo vamos a celebrar con: <span style="display:inline-block;width:60mm;border-bottom:1.2px solid ${C.naranja}"></span></p><p class="tiny muted" style="margin:2mm 0 0">Elíjanlo juntos: un paseo, un libro nuevo, una tarde de juegos de mesa. Mejor experiencias que dulces.</p></div>
  </div>
  ${footer(label(ed), 4)}
</section>`;
}

function diplomaPage(ed, pageNo) {
  return `<section class="page" style="padding:12mm">
  <div style="height:100%;border:2.2mm solid ${C.durazno};border-radius:8mm;outline:1px solid ${C.naranja};outline-offset:-4mm;background:${C.crema};position:relative;text-align:center;padding:16mm 14mm">
    ${img('lunori-logo.png', 'height:10mm')}
    <div class="kick" style="margin-top:8mm">Diploma</div>
    <div class="f" style="font-size:40pt;font-weight:700;color:${C.naranja};line-height:1.05">Súper Lector<br><span style="color:${C.azul};font-size:28pt">de Comprensión</span></div>
    <div style="margin-top:2mm"><span class="tag" style="background:${C.azul};color:#fff;font-size:10pt">Nivel ${ed.level} · ${ed.levelName} · ${ed.age}</span></div>
    <div style="display:flex;justify-content:center;margin:4mm 0">${img('lu-trofeo.jpg', 'height:70mm', 'mult')}</div>
    <p style="font-size:12pt;color:${C.pizarra}">Se otorga con mucho orgullo a</p>
    <div style="margin:5mm auto 2mm;width:130mm;border-bottom:1.5px solid ${C.azul};height:10mm"></div>
    <p style="font-size:11.5pt;color:${C.pizarra};max-width:140mm;margin:5mm auto 0">por terminar las 10 lecturas, buscar pistas, pensar, opinar y demostrar que <b style="color:${C.azul}">entiende todo lo que lee</b>.</p>
    <div style="display:flex;justify-content:space-around;margin-top:18mm;font-size:10pt;color:${C.pizarra}">
      <div><div style="width:55mm;border-bottom:1.2px solid ${C.pizarra};height:8mm"></div>Fecha</div>
      <div><div style="width:55mm;border-bottom:1.2px solid ${C.pizarra};height:8mm"></div>Firma de mamá o papá</div>
    </div>
    <div style="position:absolute;left:0;right:0;bottom:10mm;display:flex;justify-content:center;gap:3mm">${[1, 2, 3, 4, 5].map(() => star(14, C.amarilloMed)).join('')}</div>
  </div>
</section>`;
}

function respuestasPages(ed, startPage) {
  const blocks = ed.lecturas.map((l, i) => `<div style="break-inside:avoid;margin-bottom:3mm;background:${C.crema};border-radius:3.5mm;padding:2.6mm 4mm"><div class="f" style="font-size:10.5pt;margin-bottom:.8mm"><span style="color:${C.naranja}">${i + 1}.</span> ${l.title}</div>${l.qs.map((q, k) => `<div class="small" style="margin-bottom:.4mm"><b style="color:${C.azul}">${k + 1})</b> ${answer(q)}</div>`).join('')}</div>`);
  const per = ed.mode === 'adv' || ed.mode === 'mid' ? 5 : 10;
  const pages = [];
  for (let s = 0; s < blocks.length; s += per) {
    const first = s === 0;
    pages.push(`<section class="page">
    ${first ? `<div class="kick">Para mamá</div><h2>Respuestas</h2><p class="lead">En las preguntas de opinión, de dibujo o «con tus palabras» no hay una única respuesta correcta: acepta cualquier respuesta que tenga sentido con el texto. Aquí tienes una referencia.</p>` : `<h2>Respuestas <span class="muted" style="font-size:12pt">(continuación)</span></h2>`}
    <div style="columns:${per === 10 ? 2 : 1};column-gap:5mm">${blocks.slice(s, s + per).join('')}</div>
    ${footer(label(ed), startPage + pages.length)}
  </section>`);
  }
  return pages;
}

function sigueePage(ed, pageNo) {
  return `<section class="page" style="background:${C.azul};color:#fff;padding:18mm 16mm">
  ${img('lunori-logo.png', 'height:10mm;filter:brightness(0) invert(1)')}
  <h2 style="color:#fff;font-size:26pt;margin-top:10mm">¡Lo lograron! ¿Y ahora?</h2>
  <p style="color:#D9DEF2;font-size:11.5pt;max-width:160mm">Leer bien es un hábito: lo que se practica un poquito cada día, se queda. Estas son tres ideas para seguir el camino.</p>
  <div style="display:flex;flex-direction:column;gap:5mm;margin-top:7mm">
    ${[ed.level < 3 ? ['🚀', `Pasen al Nivel ${ed.level + 1} · ${LEVELS[ed.level + 1]}`, `El siguiente cuaderno de comprensión para ${ed.age} trae textos más largos y preguntas más desafiantes. Y si aún no lo hicieron, alternen con Súper Lector en 21 días, el cuaderno de fluidez de su edad.`] : ['🏆', '¡Completaron los 3 niveles!', 'Ya es un lector que comprende, piensa y opina. Sigan leyendo juntos libros de verdad, y cuando cumpla años, pasen a la siguiente edad de Súper Lector · Comprensión.'], ['🌙', 'Un cuento cada noche', 'Lean juntos 10 minutos antes de dormir y hagan una sola pregunta: «¿qué fue lo que más te gustó?». Es la rutina de lectura más poderosa que existe.'], ['🔁', 'Repitan sus lecturas favoritas', 'Releer un texto que ya entiende le da seguridad y mejora su fluidez. Elijan una lectura de este cuaderno y léanla de nuevo en un mes: verán cuánto avanzó.']].map(([e, a, b]) => `<div style="display:flex;gap:5mm;background:rgba(255,255,255,.08);border:1px solid rgba(255,255,255,.18);border-radius:5mm;padding:5mm 6mm"><div class="emoji" style="font-size:22pt">${e}</div><div><h3 style="color:${C.amarilloMed}">${a}</h3><p style="margin:0;color:#E8EBF7;font-size:10.5pt">${b}</p></div></div>`).join('')}
  </div>
  <div style="position:absolute;left:16mm;right:16mm;bottom:30mm;background:#fff;border-radius:6mm;padding:5mm 6mm;display:flex;gap:5mm;align-items:center;color:${C.texto}">
    ${img('frasco-enfokids.jpg', 'height:36mm;border-radius:4mm')}
    ${img('frasco-buenas-noches.jpg', 'height:36mm;border-radius:4mm')}
    <div><div class="kick">Rutina Lunori · de día y de noche</div><h3>Enfoque de día, calma de noche</h3><p class="small" style="margin:0">Una rutina con horarios fijos, buen descanso y tareas en bloques cortos ayuda a que la lectura avance. Conoce EnfoKIDS, Buenas Noches y el Combo Día y Noche en <b>lunoriperu.com</b>.</p></div>
  </div>
  <p class="tiny" style="position:absolute;left:16mm;right:16mm;bottom:12mm;color:#AEB6D6">Los productos Lunori son suplementos nutricionales y no reemplazan una alimentación balanceada ni un tratamiento médico. Este cuaderno es material educativo y no constituye un diagnóstico. Si notas dificultades persistentes para leer o comprender, consulta con su profesora o con un especialista.</p>
</section>`;
}

module.exports = EDITIONS.map((ed) => ({
  file: `Super-Lector-Comprension-${ed.slug}-Nivel-${ed.level}`,
  html: () => {
    const pages = [coverPage(ed), holaPage(ed), comoPage(ed), progresoPage(ed)];
    ed.lecturas.forEach((l, i) => pages.push(lecturaPage(ed, l, i, pages.length + 1)));
    pages.push(diplomaPage(ed, pages.length + 1));
    pages.push(...respuestasPages(ed, pages.length + 1));
    pages.push(sigueePage(ed, pages.length + 1));
    return doc(`Súper Lector · Comprensión · ${ed.age} · Nivel ${ed.level}`, pages);
  },
}));

// Piezas reutilizadas por el cuaderno de problemas matemáticos (Súper Mate).
module.exports.helpers = { renderQ, answer, writeLines, PASTEL, LETTERS };
