// Súper Mate · Leo, entiendo y resuelvo: comprensión de problemas matemáticos, 4 ediciones por edad.
const { C, img, spark, star, emptyStars, footer, doc } = require('../base');
const { renderQ, answer: baseAnswer, writeLines, PASTEL } = require('../comprension').helpers;

const fs = require('fs');
const path = require('path');

// Tres niveles por edad. Nivel 1 = data-<edad>.js · Niveles 2 y 3 = data-<edad>-n2.js / data-<edad>-n3.js
const LEVELS = [null, 'Despegue', 'Vuelo', 'Súper mate'];
const LEVEL_DESC = [null,
  'Para empezar: problemas de un paso, con muchos apoyos para ordenar los datos y la pregunta.',
  'Números más grandes, más problemas de dos pasos y datos que sobran. Ideal si terminó el Nivel 1 o si ya resuelve bien los problemas sencillos.',
  'Problemas de varios pasos, retos de lógica y preguntas para explicar cómo lo pensó. Ideal si terminó el Nivel 2 o si los problemas le resultan fáciles.'];
const EDITIONS = [];
for (const a of ['5', '67', '89', '1012']) {
  for (const lv of [1, 2, 3]) {
    const f = path.join(__dirname, lv === 1 ? `data-${a}.js` : `data-${a}-n${lv}.js`);
    if (fs.existsSync(f)) EDITIONS.push({ ...require(f), level: lv, levelName: LEVELS[lv] });
  }
}
const label = (ed) => `Súper Mate · Problemas · ${ed.age} · Nivel ${ed.level}`;

const PASOS = [
  ['👀', 'Leo', 'Leo el problema dos veces. La segunda, despacito.', C.durazno, C.naranjaOsc],
  ['🔍', 'Entiendo', 'Subrayo los datos en azul y la pregunta en rojo. ¿Qué me cuentan? ¿Qué me preguntan?', C.celeste, '#3A5BB0'],
  ['✏️', 'Resuelvo', 'Dibujo el problema, elijo la operación y hago la cuenta.', C.verde, '#2F7D4E'],
  ['✅', 'Reviso', '¿Mi respuesta tiene sentido? La escribo con una oración completa.', C.lilaMed, '#5E49AE'],
];
const PASOS_PRE = [
  ['👂', 'Escucho', 'Mamá me lee el problema dos veces.', C.durazno, C.naranjaOsc],
  ['🔍', 'Miro', 'Miro bien el dibujo y busco qué me preguntan.', C.celeste, '#3A5BB0'],
  ['👆', 'Cuento', 'Toco y cuento con mi dedo, uno por uno.', C.verde, '#2F7D4E'],
  ['✅', 'Respondo', 'Encierro, dibujo o lo digo en voz alta.', C.lilaMed, '#5E49AE'],
];

const PROB_FS = { basic: '13pt', mid: '11.5pt', adv: '10.8pt' };
const box = (title, inner, extra = '') => `<div style="border:1.5px solid ${C.linea};border-radius:3mm;padding:1.6mm 3mm 2mm;background:#fff;display:flex;flex-direction:column;${extra}"><div class="f" style="font-size:8.8pt;color:${C.naranjaOsc}">${title}</div>${inner}</div>`;

// Fila de emojis o de números (los números van en Fredoka, sin separar las cifras).
const rowSpan = (r, size) => (/\d/.test(r)
  ? `<span class="f" style="font-size:${size}pt;word-spacing:3mm;font-weight:600;color:${C.azul}">${r}</span>`
  : `<span class="emoji" style="font-size:${size}pt;letter-spacing:1.5mm">${r}</span>`);

function renderMQ(q, i, ed) {
  const n = `<span class="num" style="width:6mm;height:6mm;font-size:9.5pt;margin-right:2mm">${i + 1}</span>`;
  const headFs = ed.mode === 'pre' ? '12.5pt' : ed.mode === 'adv' ? '10.3pt' : '11pt';
  const head = (txt) => `<div style="display:flex;align-items:flex-start;font-weight:700;color:${C.azul};margin-bottom:1.8mm;font-size:${headFs}">${n}<span>${txt}</span></div>`;
  switch (q.t) {
    case 'count':
      return `<div class="qq">${head(q.q)}<div style="padding-left:8mm;display:flex;align-items:center;gap:6mm;flex-wrap:wrap">
        <div style="display:flex;align-items:center;gap:4mm;background:${C.crema};border-radius:4mm;padding:2.5mm 5mm">${q.rows.map((r) => rowSpan(r, 30)).join(`<span class="f" style="font-size:26pt;color:${C.naranja}">${q.op || ''}</span>`)}</div>
        <div style="display:flex;gap:3mm;align-items:center"><span class="tiny muted">Encierra:</span>${q.o.map((v) => `<span class="f" style="width:14mm;height:14mm;border:2px solid ${C.celesteMed};border-radius:50%;display:inline-flex;align-items:center;justify-content:center;font-size:20pt;background:#fff">${v}</span>`).join('')}</div>
      </div></div>`;
    case 'seq':
      return `<div class="qq">${head(q.q)}<div style="padding-left:8mm;display:flex;align-items:center;gap:4mm 6mm;flex-wrap:wrap">
        <div style="background:${C.crema};border-radius:4mm;padding:2.5mm 5mm">${rowSpan(q.row, 23)}</div>
        <div style="display:flex;gap:3mm">${q.o.map(([e, l]) => `<div style="width:24mm;border:1.6px solid ${C.linea};border-radius:4mm;padding:1.8mm 1mm;text-align:center;background:#fff"><div class="emoji" style="font-size:20pt">${e}</div><div class="f" style="font-size:9.5pt;color:${C.pizarra};font-weight:500">${l}</div></div>`).join('')}</div>
      </div></div>`;
    case 'prob': {
      const fs = PROB_FS[ed.mode] || '11pt';
      const text = `<div style="background:${C.crema};border-left:1.6mm solid ${C.naranja};border-radius:2mm 4mm 4mm 2mm;padding:2.6mm 4mm;font-size:${fs};line-height:1.45;color:${C.azul};font-weight:600;margin-bottom:2mm">${q.q}</div>`;
      const answerLine = `<div style="display:flex;align-items:flex-end;gap:2mm;margin-top:2mm;font-size:10pt"><b style="color:${C.azul}">✅ Respuesta:</b><span style="flex:1;border-bottom:1.2px solid ${C.linea};height:6mm"></span></div>`;
      if (!q.scaffold) {
        return `<div class="qq" style="flex:2 1 auto;display:flex;flex-direction:column"><div style="display:flex;align-items:flex-start">${n}<div style="flex:1">${text}</div></div><div style="margin-left:8mm;flex:1;display:flex;flex-direction:column">${box('✏️ Dibujo u operación', '', 'flex:1;min-height:16mm')}${answerLine}</div></div>`;
      }
      return `<div class="qq" style="flex:3 1 auto;display:flex;flex-direction:column"><div style="display:flex;align-items:flex-start">${n}<div style="flex:1">${text}</div></div>
        <div style="margin-left:8mm;flex:1;display:flex;flex-direction:column;gap:2mm">
          <div class="grid2" style="gap:2mm">${box('🔍 Los datos (subráyalos en azul)', `<div style="display:flex;flex-direction:column">${writeLines(2)}</div>`)}${box('❓ ¿Qué me preguntan? (en rojo)', `<div style="display:flex;flex-direction:column">${writeLines(2)}</div>`)}</div>
          ${box('✏️ Lo dibujo y hago la operación', '', 'flex:1;min-height:24mm')}
          <div style="display:flex;align-items:flex-end;gap:4mm;font-size:10pt"><b style="color:${C.azul}">✅ Respuesta:</b><span style="flex:1;border-bottom:1.2px solid ${C.linea};height:6mm"></span><span class="tiny muted" style="display:flex;align-items:center;gap:1.5mm">¿Tiene sentido? <span class="chk" style="margin:0"></span> sí <span class="chk" style="margin:0"></span> no</span></div>
        </div></div>`;
    }
    default:
      return renderQ(q, i, ed);
  }
}

function answerM(q) {
  const ex = q.ex ? ` <i>(${q.ex})</i>` : '';
  switch (q.t) {
    case 'count': return String(q.a) + ex;
    case 'seq': return q.o[q.a][1] + ex;
    case 'prob': return q.a + ex;
    default: return baseAnswer(q);
  }
}

function retoPage(ed, R, idx, pageNo) {
  const p = PASTEL[idx % PASTEL.length];
  const isPre = ed.mode === 'pre';
  const art = R.img
    ? `<div style="width:24mm;height:24mm;border-radius:50%;background:#fff;display:flex;align-items:center;justify-content:center;overflow:hidden;flex:none">${img(R.img, 'height:22mm', 'mult')}</div>`
    : `<div style="width:24mm;height:24mm;border-radius:50%;background:#fff;display:flex;align-items:center;justify-content:center;flex:none"><span class="emoji" style="font-size:30pt">${R.art}</span></div>`;
  const instr = isPre
    ? 'Mamá lee cada problema en voz alta dos veces. Tú cuentas, encierras o dibujas.'
    : 'Usa los 4 pasos: leo, entiendo, resuelvo y reviso.';
  return `<section class="page">
  <div style="background:${p.bg};border-radius:5mm;padding:3.5mm 5mm;display:flex;align-items:center;gap:4mm;">
    <div style="width:15mm;height:15mm;border-radius:50%;background:#fff;display:flex;flex-direction:column;align-items:center;justify-content:center;flex:none"><span class="f" style="font-size:6.5pt;color:${p.ink};letter-spacing:.3mm">RETO</span><span class="f" style="font-size:16pt;color:${p.ink};line-height:1">${idx + 1}</span></div>
    <div style="flex:1"><div class="kick" style="color:${p.ink};margin-bottom:.5mm">Hoy: ${R.skill}</div><h2 style="margin:0;font-size:${ed.mode === 'adv' ? '18pt' : '20pt'}">${R.title}</h2></div>
    ${art}
  </div>
  <div style="display:flex;flex-direction:column;height:calc(297mm - 15mm - 20mm - 24mm)">
  <div style="display:flex;gap:3mm;align-items:center;margin:3mm 0 2.5mm">
    <div style="width:13mm;height:13mm;border-radius:50%;overflow:hidden;background:#fff;border:1.5px solid ${C.durazno};flex:none;display:flex;align-items:center;justify-content:center">${img('lu.jpg', 'height:12mm', 'mult')}</div>
    <div style="flex:1;background:${C.amarillo};border-radius:3mm 4mm 4mm 3mm;padding:2mm 4mm;font-size:${isPre ? '10.5pt' : '9.8pt'}"><b style="color:${C.naranjaOsc}">Lu te enseña:</b> ${R.lu}</div>
  </div>
  <div style="display:flex;align-items:center;gap:2mm;margin-bottom:2.5mm;font-size:9.3pt;color:${C.pizarra}">${spark(9)}<i>${instr}</i></div>
  ${R.intro ? `<div style="background:${C.crema};border-radius:4mm;padding:3mm 5mm;margin-bottom:3mm;font-size:10pt">${R.intro}</div>` : ''}
  <div style="display:flex;flex-direction:column;flex:1;gap:${isPre ? '5mm' : '3.4mm'};${isPre ? 'justify-content:space-evenly' : ''}">${R.qs.map((q, i) => renderMQ(q, i, ed)).join('')}</div>
  <div style="margin-top:auto;display:flex;gap:4mm;align-items:stretch;padding-top:3mm">
    <div class="note" style="flex:1;font-size:8.8pt;padding:2.6mm 4mm"><b>Para mamá:</b> ${R.tip}</div>
    <div style="width:46mm;flex:none;border:1.5px solid ${C.linea};border-radius:4mm;padding:2mm 3mm;text-align:center"><div class="f" style="font-size:9pt;margin-bottom:1mm">¿Cómo me fue hoy?</div>${emptyStars(3, 17)}<div class="tiny muted" style="margin-top:.6mm">Pinta tus estrellas</div></div>
  </div>
  </div>
  ${footer(label(ed), pageNo)}
</section>`;
}

function coverPage(ed) {
  const adv = ed.mode === 'adv';
  return `<section class="page cream" style="padding:0">
  <div style="position:absolute;left:0;right:0;top:0;height:150mm;background:linear-gradient(180deg,#E6EBFA 0%,#FFF8EE 100%)"></div>
  <div style="position:absolute;top:14mm;left:0;right:0;text-align:center">${img('lunori-logo.png', 'height:11mm')}</div>
  <div style="position:absolute;top:33mm;left:0;right:0;text-align:center">
    <span class="tag" style="background:${C.azul};color:#fff;letter-spacing:.6mm;font-size:8.5pt">CUADERNO DE PROBLEMAS MATEMÁTICOS</span>
    <div class="f" style="font-size:54pt;font-weight:700;color:${C.naranja};margin-top:4mm;line-height:1">Súper Mate</div>
    <div class="f" style="font-size:24pt;font-weight:600;color:${C.azul};margin-top:1.5mm">Leo, entiendo y resuelvo</div>
    <div style="margin-top:4mm"><span class="tag" style="border:1.6px solid ${C.azul};color:${C.azul};background:#fff;font-size:11pt;padding:1.2mm 5mm">Nivel ${ed.level} · ${ed.levelName} · ${ed.age}</span></div>
  </div>
  <div style="position:absolute;left:0;right:0;top:${adv ? 104 : 100}mm;display:flex;justify-content:center">${img(adv ? 'club.jpg' : 'lu-reloj.jpg', adv ? 'width:165mm' : 'width:130mm', 'mult')}</div>
  ${adv ? '' : ['➕', '➖', '✖️', '➗'].map((s, i) => `<div class="emoji" style="position:absolute;font-size:22pt;${['left:22mm;top:112mm', 'right:24mm;top:118mm', 'left:30mm;top:170mm', 'right:28mm;top:178mm'][i]};opacity:.85">${s}</div>`).join('')}
  <div style="position:absolute;left:18mm;right:18mm;bottom:16mm;background:#fff;border-radius:6mm;padding:5mm 7mm;box-shadow:0 2mm 6mm rgba(30,42,90,.08)">
    <div style="display:flex;justify-content:space-around;text-align:center">
      ${[['🧩', '10 retos', 'con problemas reales'], ['🪜', '4 pasos', 'para entender'], ['🇵🇪', 'Situaciones', 'de su día a día'], ['🏆', 'Diploma', 'al terminar']].map(([e, a, b]) => `<div><div class="emoji" style="font-size:15pt">${e}</div><div class="f" style="font-size:11pt;margin-top:1mm">${a}</div><div class="tiny muted">${b}</div></div>`).join('')}
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
  <h2>Sabe sumar… pero se traba<br>en los <em>problemas</em>. ¿Te suena?</h2>
  <p class="lead">Es una de las quejas más comunes de las familias, y tiene una explicación: un problema matemático es, antes que nada, <b>un texto que hay que comprender</b>. Si no entiende qué le cuentan y qué le preguntan, no sabe qué operación hacer, aunque las cuentas le salgan perfectas.</p>
  <div class="grid2">
    <div class="card" style="background:${C.crema}"><h3>Por qué se bloquean</h3><ul class="clean small">
      <li>Leen rápido y se saltan palabras importantes («más que», «cada uno», «el resto»).</li>
      <li>Usan todos los números que ven, aunque algunos no sirvan.</li>
      <li>Adivinan la operación: «si hay números grandes, resto».</li>
      <li>No revisan si su respuesta tiene sentido.</li></ul></div>
    <div class="card" style="background:${C.celeste}"><h3>Qué incluye este cuaderno</h3><ul class="clean small">
      <li>Un método de 4 pasos, igual en todos los problemas</li>
      <li>10 retos, cada uno con una habilidad distinta</li>
      <li>${pre ? 'Problemas con dibujos para contar, encerrar y dibujar' : 'Problemas guiados (con apoyo para ordenar los datos) y problemas para resolver solo'}</li>
      <li>Situaciones reales: el mercado, el quiosco, el bus, la chacra</li>
      <li>Un consejo para ti en cada página</li>
      <li>Tabla de progreso, diploma y respuestas explicadas</li></ul></div>
  </div>
  <div class="note" style="margin-top:3mm"><b>Nivel ${ed.level} · ${ed.levelName}:</b> ${LEVEL_DESC[ed.level]}</div>
  <div class="card" style="background:${C.durazno};margin-top:4mm;display:flex;gap:5mm;align-items:center">
    ${img('lu-saluda.jpg', 'height:30mm', 'mult')}
    <div><h3>De la familia Súper Lector</h3><p class="small" style="margin:0">Súper Lector entrena la fluidez; <b>Súper Lector · Comprensión</b>, a entender lo que lee. <b>Súper Mate</b> lleva esa comprensión a la matemática: leer con atención, separar datos de preguntas y pensar antes de calcular. Pueden alternarlos durante la semana.</p></div>
  </div>
  <h3 style="margin-top:4mm">La rutina de 15 minutos</h3>
  <div class="grid4">${[['Repasen', '2 min', 'Lean juntos los 4 pasos del póster.'], ['Lu te enseña', '2 min', 'Lean el consejo del día y conversen qué significa.'], ['Retos', '9 min', pre ? 'Tú lees cada problema; él cuenta, encierra o dibuja.' : 'Resuelve los problemas. El primero viene guiado.'], ['Revisen', '2 min', 'Comparen con las respuestas y pinten las estrellas.']].map(([a, m, b], i) => `<div class="card" style="background:${PASTEL[i].bg};padding:3.5mm 4mm"><div style="display:flex;justify-content:space-between;align-items:center"><span class="num">${i + 1}</span><span class="tiny" style="color:${PASTEL[i].ink};font-weight:800">${m}</span></div><h4 style="margin-top:2mm">${a}</h4><p class="small" style="margin:0">${b}</p></div>`).join('')}</div>
  ${footer(label(ed), 2)}
</section>`;
}

function metodoPage(ed) {
  const pasos = ed.mode === 'pre' ? PASOS_PRE : PASOS;
  return `<section class="page cream">
  <div style="text-align:center"><div class="kick">Para recortar y pegar donde hace la tarea</div><h2 style="font-size:24pt">Los <em>4 pasos</em> del Súper Mate</h2><p class="lead" style="margin-bottom:4mm">Úsalos en todos los problemas, también en los del colegio.</p></div>
  <div style="display:flex;flex-direction:column;gap:3.5mm">
    ${pasos.map(([e, t, d, bg, ink], i) => `<div style="display:flex;align-items:center;gap:5mm;background:${bg};border-radius:6mm;padding:4.5mm 6mm">
      <div style="width:20mm;height:20mm;border-radius:50%;background:#fff;display:flex;align-items:center;justify-content:center;flex:none"><span class="emoji" style="font-size:26pt">${e}</span></div>
      <div style="flex:1"><div class="f" style="font-size:9pt;color:${ink};letter-spacing:.6mm">PASO ${i + 1}</div><div class="f" style="font-size:22pt;font-weight:700">${t}</div><div style="font-size:11.5pt;margin-top:.5mm">${d}</div></div>
    </div>`).join('')}
  </div>
  <div class="grid2" style="margin-top:5mm">
    <div class="card"><h4>Si no sabe por dónde empezar</h4><p class="small" style="margin:0">${ed.mode === 'pre' ? 'Usen objetos de verdad: frejoles, carritos o tapitas. Que mueva y cuente con las manos lo que pasa en el problema.' : 'Pregunta «¿qué está pasando en esta historia?». Que lo cuente sin números. Después, que haga un dibujo con bolitas y palitos.'}</p></div>
    <div class="card"><h4>Si se equivoca</h4><p class="small" style="margin:0">No digas «está mal». Pregunta: «¿tiene sentido tu respuesta?, ¿puede quedarle más de lo que tenía?». Que encuentre el error él mismo es lo que más aprende.</p></div>
  </div>
  ${footer(label(ed), 3)}
</section>`;
}

function progresoPage(ed) {
  return `<section class="page cream">
  <div style="text-align:center"><h2 style="color:${C.naranja}">Mi tabla de Súper Mate</h2><p class="lead" style="margin-bottom:3mm">Cada vez que termines un reto, escribe la fecha y pinta tus estrellas.</p></div>
  <div style="display:flex;flex-direction:column;gap:2.4mm">
  ${ed.retos.map((r, i) => `<div style="display:flex;align-items:center;gap:4mm;background:#fff;border-radius:4mm;padding:2.4mm 4mm"><span class="num" style="background:${[C.naranja, C.azulMed, C.verdeMed, C.lilaFuerte, C.rosaMed][i % 5]}">${i + 1}</span><div style="flex:1"><div class="f" style="font-size:11.5pt">${r.title}</div><div class="tiny muted">${r.skill}</div></div><div class="small muted" style="width:32mm">Fecha: ______</div><div>${emptyStars(3, 16)}</div></div>`).join('')}
  </div>
  <div style="display:flex;align-items:center;gap:5mm;margin-top:5mm">
    ${img(ed.mode === 'adv' ? 'zara.jpg' : 'bosque-amigos.jpg', ed.mode === 'adv' ? 'height:44mm' : 'height:42mm', 'mult')}
    <div class="card" style="flex:1;background:${C.durazno}"><h3>Mi meta</h3><p class="small" style="margin:0">Cuando termine los 10 retos, lo vamos a celebrar con: <span style="display:inline-block;width:60mm;border-bottom:1.2px solid ${C.naranja}"></span></p><p class="tiny muted" style="margin:2mm 0 0">Ideas: cocinar juntos una receta midiendo los ingredientes, un juego de mesa nuevo o un paseo.</p></div>
  </div>
  ${footer(label(ed), 4)}
</section>`;
}

function diplomaPage(ed) {
  return `<section class="page" style="padding:12mm">
  <div style="height:100%;border:2.2mm solid ${C.celeste};border-radius:8mm;outline:1px solid ${C.azulMed};outline-offset:-4mm;background:${C.crema};position:relative;text-align:center;padding:16mm 14mm">
    ${img('lunori-logo.png', 'height:10mm')}
    <div class="kick" style="margin-top:8mm">Diploma</div>
    <div class="f" style="font-size:44pt;font-weight:700;color:${C.naranja};line-height:1.05">Súper Mate</div>
    <div class="f" style="font-size:20pt;color:${C.azul}">Resolvedor de problemas</div>
    <div style="margin-top:2mm"><span class="tag" style="background:${C.azul};color:#fff;font-size:10pt">Nivel ${ed.level} · ${ed.levelName} · ${ed.age}</span></div>
    <div style="display:flex;justify-content:center;margin:4mm 0">${img('lu-trofeo.jpg', 'height:70mm', 'mult')}</div>
    <p style="font-size:12pt;color:${C.pizarra}">Se otorga con mucho orgullo a</p>
    <div style="margin:5mm auto 2mm;width:130mm;border-bottom:1.5px solid ${C.azul};height:10mm"></div>
    <p style="font-size:11.5pt;color:${C.pizarra};max-width:140mm;margin:5mm auto 0">por completar los 10 retos: leer con atención, encontrar los datos, pensar antes de calcular y <b style="color:${C.azul}">revisar que todo tenga sentido</b>.</p>
    <div style="display:flex;justify-content:space-around;margin-top:16mm;font-size:10pt;color:${C.pizarra}">
      <div><div style="width:55mm;border-bottom:1.2px solid ${C.pizarra};height:8mm"></div>Fecha</div>
      <div><div style="width:55mm;border-bottom:1.2px solid ${C.pizarra};height:8mm"></div>Firma de mamá o papá</div>
    </div>
    <div style="position:absolute;left:0;right:0;bottom:10mm;display:flex;justify-content:center;gap:3mm">${['➕', '➖', '✖️', '➗'].map((s) => `<span class="emoji" style="font-size:13pt">${s}</span>`).join('')}</div>
  </div>
</section>`;
}

function respuestasPages(ed, startPage) {
  const blocks = ed.retos.map((r, i) => `<div style="break-inside:avoid;margin-bottom:3mm;background:${C.crema};border-radius:3.5mm;padding:2.6mm 4mm"><div class="f" style="font-size:10.5pt;margin-bottom:.8mm"><span style="color:${C.naranja}">${i + 1}.</span> ${r.title}</div>${r.qs.map((q, k) => `<div class="small" style="margin-bottom:.4mm"><b style="color:${C.azul}">${k + 1})</b> ${answerM(q)}</div>`).join('')}</div>`);
  const per = ed.mode === 'pre' ? 10 : 5;
  const pages = [];
  for (let s = 0; s < blocks.length; s += per) {
    pages.push(`<section class="page">
    ${s === 0 ? `<div class="kick">Para mamá</div><h2>Respuestas</h2><p class="lead">Lo importante no es solo el número final, sino que entienda cómo llegó. Si su camino es distinto pero tiene lógica, ¡celébralo!${ed.retos.some((r) => /invent/i.test(r.skill)) ? ' En los problemas para inventar, cualquier problema bien armado vale.' : ''}</p>` : `<h2>Respuestas <span class="muted" style="font-size:12pt">(continuación)</span></h2>`}
    <div style="columns:${per === 10 ? 2 : 1};column-gap:5mm">${blocks.slice(s, s + per).join('')}</div>
    ${footer(label(ed), startPage + pages.length)}
  </section>`);
  }
  return pages;
}

function backPage(ed) {
  return `<section class="page" style="background:${C.azul};color:#fff;padding:18mm 16mm">
  ${img('lunori-logo.png', 'height:10mm;filter:brightness(0) invert(1)')}
  <h2 style="color:#fff;font-size:26pt;margin-top:10mm">La matemática está<br>en todas partes 💛</h2>
  <p style="color:#D9DEF2;font-size:11.5pt;max-width:160mm">${ed.level < 3 ? `Cuando terminen, sigan con el <b style="color:${C.amarilloMed}">Nivel ${ed.level + 1} · ${LEVELS[ed.level + 1]}</b> de Súper Mate para ${ed.age}.` : `<b style="color:${C.amarilloMed}">¡Completaron los 3 niveles de Súper Mate para ${ed.age}!</b>`} Y el mejor cuaderno de problemas es el día a día. Tres ideas para seguir practicando sin que se sienta como tarea:</p>
  <div style="display:flex;flex-direction:column;gap:5mm;margin-top:7mm">
    ${[['🛒', 'En el mercado', 'Dale un presupuesto y que calcule cuánto llevan gastado y cuánto sobra. Pesen la fruta y comparen precios.'], ['🍳', 'En la cocina', 'Dupliquen o reduzcan a la mitad una receta. Medir, repartir y contar porciones es matemática real.'], ['🚌', 'En el camino', 'Jueguen a «¿cuánto falta?»: si salimos a las 7:40 y tardamos 25 minutos, ¿a qué hora llegamos?']].map(([e, a, b]) => `<div style="display:flex;gap:5mm;background:rgba(255,255,255,.08);border:1px solid rgba(255,255,255,.18);border-radius:5mm;padding:5mm 6mm"><div class="emoji" style="font-size:22pt">${e}</div><div><h3 style="color:${C.amarilloMed}">${a}</h3><p style="margin:0;color:#E8EBF7;font-size:10.5pt">${b}</p></div></div>`).join('')}
  </div>
  <div style="position:absolute;left:16mm;right:16mm;bottom:30mm;background:#fff;border-radius:6mm;padding:5mm 6mm;display:flex;gap:5mm;align-items:center;color:${C.texto}">
    ${img('frasco-enfokids.jpg', 'height:36mm;border-radius:4mm')}
    ${img('frasco-buenas-noches.jpg', 'height:36mm;border-radius:4mm')}
    <div><div class="kick">Rutina Lunori · de día y de noche</div><h3>Enfoque de día, calma de noche</h3><p class="small" style="margin:0">Los problemas piden atención y una cabeza descansada. Conoce EnfoKIDS, Buenas Noches y el Combo Día y Noche en <b>lunoriperu.com</b>.</p></div>
  </div>
  <p class="tiny" style="position:absolute;left:16mm;right:16mm;bottom:12mm;color:#AEB6D6">Los productos Lunori son suplementos nutricionales y no reemplazan una alimentación balanceada ni un tratamiento médico. Este cuaderno es material educativo y no constituye un diagnóstico. Si notas dificultades persistentes con los números, conversa con su profesora o con un especialista.</p>
</section>`;
}

module.exports = EDITIONS.map((ed) => ({
  file: `Super-Mate-Problemas-${ed.slug}-Nivel-${ed.level}`,
  html: () => {
    const pages = [coverPage(ed), holaPage(ed), metodoPage(ed), progresoPage(ed)];
    ed.retos.forEach((r, i) => pages.push(retoPage(ed, r, i, pages.length + 1)));
    pages.push(diplomaPage(ed));
    pages.push(...respuestasPages(ed, pages.length + 1));
    pages.push(backPage(ed));
    return doc(`Súper Mate · Problemas · ${ed.age} · Nivel ${ed.level}`, pages);
  },
}));

// Piezas reutilizadas por la prueba de nivel.
module.exports.helpers = { renderMQ, answerM };
