// Prueba de nivel Lunori · ¿Qué nivel le toca? Una por edad (4 páginas): instrucciones, lectura, matemática y resultados.
const { C, img, spark, star, footer, doc } = require('./base');
const { renderQ, answer, PASTEL } = require('./comprension').helpers;
const { renderMQ, answerM } = require('./matematica').helpers;
const AGES = require('./prueba-data');

const label = (ed) => `Prueba de nivel · ${ed.age}`;
const stars = (d, size = 11) => `<span style="display:inline-flex;gap:.6mm;margin-left:2mm;vertical-align:-.4mm">${Array.from({ length: d }, () => star(size, C.naranja)).join('')}</span>`;
const withStars = (q) => ({ ...q, q: `${q.q}${stars(q.d)}` });
const LV = [['Nivel 1', 'Despegue', C.durazno], ['Nivel 2', 'Vuelo', C.celeste], ['Nivel 3', 'Súper lector · Súper mate', C.verde]];

function scoreBox(area) {
  return `<div style="margin-top:auto;display:flex;gap:4mm;align-items:center;padding-top:3mm">
    <div class="note" style="flex:1;font-size:9pt;padding:2.6mm 4mm"><b>Para mamá:</b> revisa con la página 4. Cuenta las respuestas correctas de ${area}, sin importar las estrellas.</div>
    <div style="width:58mm;flex:none;border:1.8px solid ${C.naranja};border-radius:4mm;padding:2.4mm 3mm;text-align:center;background:#fff"><div class="f" style="font-size:9.5pt">Respuestas correctas</div><div class="f" style="font-size:16pt;margin-top:1mm">____ de 6</div></div>
  </div>`;
}

function header(kick, title, art, bg, ink) {
  return `<div style="background:${bg};border-radius:5mm;padding:3.5mm 5mm;display:flex;align-items:center;gap:4mm">
    <div style="flex:1"><div class="kick" style="color:${ink};margin-bottom:.5mm">${kick}</div><h2 style="margin:0;font-size:20pt">${title}</h2></div>
    ${art}
  </div>`;
}
// Para 5 años: alternativas con dibujo más compactas, en dos columnas.
function picSmall(q, i) {
  return `<div><div style="display:flex;align-items:flex-start;font-weight:700;color:${C.azul};margin-bottom:1.5mm;font-size:11pt"><span class="num" style="width:6mm;height:6mm;font-size:9.5pt;margin-right:2mm;flex:none">${i + 1}</span><span>${q.q}</span></div>
    ${q.t === 'pic' ? `<div style="padding-left:8mm;display:flex;gap:2.5mm">${q.o.map(([e, l]) => `<div style="width:25mm;border:1.6px solid ${C.linea};border-radius:3.5mm;padding:1.6mm 1mm;text-align:center;background:#fff"><div class="emoji" style="font-size:21pt">${e}</div><div class="f" style="font-size:8.6pt;color:${C.pizarra};font-weight:500;line-height:1.15">${l}</div></div>`).join('')}</div>` : `<div style="padding-left:8mm"><span class="tag" style="background:${C.celeste};color:${C.azul}">🗣️ Respóndela en voz alta</span><div style="border-bottom:1.2px solid ${C.linea};height:9mm"></div></div>`}
  </div>`;
}
const circle = (inner) => `<div style="width:22mm;height:22mm;border-radius:50%;background:#fff;display:flex;align-items:center;justify-content:center;overflow:hidden;flex:none">${inner}</div>`;

function instrucciones(ed) {
  const pre = ed.mode === 'pre';
  return `<section class="page cream">
  <div style="display:flex;justify-content:space-between;align-items:center">${img('lunori-logo.png', 'height:10mm')}<span class="tag" style="background:${C.naranja};color:#fff;letter-spacing:.6mm;font-size:8.5pt">PRUEBA DE NIVEL GRATIS</span></div>
  <div style="display:flex;align-items:center;gap:6mm;margin-top:6mm">
    <div style="flex:1">
      <div class="f" style="font-size:36pt;font-weight:700;color:${C.naranja};line-height:1.02">¿Qué nivel<br>le toca?</div>
      <p style="font-size:12.5pt;color:${C.pizarra};margin-top:3mm">Una prueba corta de <b style="color:${C.azul}">lectura</b> y <b style="color:${C.azul}">matemática</b> para saber con qué cuaderno empezar.</p>
      <span class="tag" style="border:1.6px solid ${C.azul};color:${C.azul};background:#fff;font-size:11pt;padding:1.2mm 5mm">${ed.age}</span>
    </div>
    ${img(ed.mode === 'adv' ? 'club.jpg' : 'lu-lupa.jpg', ed.mode === 'adv' ? 'height:58mm' : 'height:62mm', 'mult')}
  </div>
  <h3 style="margin-top:5mm">Cómo tomar la prueba</h3>
  <div style="display:flex;flex-direction:column;gap:2.4mm">
    ${[['Imprime las páginas 2 y 3', 'O ábrelas en la tablet. Ten a mano un lápiz y un lugar tranquilo, sin tele.'], ['Lectura · unos 10 minutos', pre ? 'Lee el cuento en voz alta dos veces y después cada pregunta. Tu hijo responde señalando o encerrando.' : 'Que lea el texto solo y responda. Puede volver al texto todas las veces que quiera.'], ['Matemática · unos 10 minutos', pre ? 'Lee cada problema en voz alta. Puede contar con el dedo o con objetos.' : 'Que resuelva cada problema en su recuadro. Si quiere, puede dibujar.'], ['Revisa con la página 4', 'Cuenta las respuestas correctas de cada prueba y busca su nivel en la tabla.']].map(([a, b], i) => `<div style="display:flex;gap:4mm;align-items:flex-start;background:#fff;border-radius:4mm;padding:2.8mm 4mm"><span class="num">${i + 1}</span><div><h4 style="margin:0">${a}</h4><p class="small" style="margin:0">${b}</p></div></div>`).join('')}
  </div>
  <div class="grid2" style="margin-top:4mm">
    <div class="card"><h4>Las estrellas indican la dificultad</h4><p class="small" style="margin:0">${stars(1)} fácil · ${stars(2)} medio · ${stars(3)} desafío. Es normal que las de tres estrellas le cuesten: justamente sirven para saber hasta dónde llega.</p></div>
    <div class="card"><h4>Una sola regla: no ayudar</h4><p class="small" style="margin:0">${pre ? 'Puedes leerle todo las veces que quiera, pero no le des pistas.' : 'Puedes leerle una instrucción si no la entiende, pero no le digas la respuesta.'} Si se cansa, hagan una pausa y sigan después. ¡Celébrale el esfuerzo!</p></div>
  </div>
  <h3 style="margin-top:4mm">Los 3 niveles de nuestros cuadernos</h3>
  <div class="grid3">${LV.map(([n, name, bg], i) => `<div class="card" style="background:${bg};padding:3mm 4mm"><div class="f" style="font-size:9pt;color:${C.naranjaOsc};letter-spacing:.5mm">${n.toUpperCase()}</div><h4 style="margin:.5mm 0 1mm">${name}</h4><p class="tiny" style="margin:0">${['Para empezar: textos cortos y problemas de un paso, con mucho apoyo.', 'Textos más largos, más inferencia y problemas de dos pasos.', 'Para pensar, justificar y resolver problemas de varios pasos.'][i]}</p></div>`).join('')}</div>
  ${footer(label(ed), 1)}
</section>`;
}

function lectura(ed) {
  const L = ed.lectura;
  const pre = ed.mode === 'pre';
  const art = circle(L.img ? img(L.img, 'height:20mm', 'mult') : `<span class="emoji" style="font-size:26pt">${L.art}</span>`);
  const fs = { pre: '15pt', basic: '12.5pt', mid: '11pt', adv: '10pt' }[ed.mode];
  return `<section class="page">
  ${header('Prueba 1 · Lectura', L.title, art, PASTEL[0].bg, PASTEL[0].ink)}
  <div style="display:flex;flex-direction:column;height:calc(297mm - 15mm - 20mm - 22mm)">
  <div style="display:flex;align-items:center;gap:2mm;margin:3mm 0 2mm;font-size:9.3pt;color:${C.pizarra}">${spark(9)}<i>${pre ? 'Mamá lee el cuento en voz alta dos veces. Después lee cada pregunta y tú encierras la respuesta.' : 'Lee el texto con atención. Después responde. Puedes volver al texto cuando quieras.'}</i></div>
  <div style="background:${C.crema};border-radius:5mm;padding:${pre ? '4mm 6mm' : '3.5mm 5.5mm'};font-size:${fs};line-height:1.5;color:${C.azul};font-family:${pre ? 'Fredoka' : 'Nunito'};font-weight:${pre ? 500 : ed.mode === 'basic' ? 600 : 400}">${L.text.map((p) => `<p style="margin-bottom:1.6mm">${p}</p>`).join('')}</div>
  <div class="f" style="margin:3mm 0 2mm;font-size:12.5pt;display:flex;align-items:center;gap:2mm">${spark(11)} Ahora responde</div>
  ${pre
    ? `<div style="display:grid;grid-template-columns:1fr 1fr;gap:4mm 5mm;align-content:space-evenly;flex:1">${L.qs.map((q, i) => picSmall(withStars(q), i)).join('')}</div>`
    : `<div style="display:flex;flex-direction:column;flex:1;gap:${ed.mode === 'adv' ? '2.2mm' : '3mm'}">${L.qs.map((q, i) => renderQ(withStars(q), i, ed)).join('')}</div>`}
  ${scoreBox('lectura')}
  </div>
  ${footer(label(ed), 2)}
</section>`;
}

function mateCell(q, i) {
  return `<div style="border:1.5px solid ${C.linea};border-radius:4mm;padding:3mm 3.5mm;display:flex;flex-direction:column;background:#fff">
    <div style="display:flex;align-items:flex-start;gap:2mm"><span class="num" style="width:6mm;height:6mm;font-size:9.5pt">${i + 1}</span><div style="font-weight:700;color:${C.azul};font-size:10.3pt;line-height:1.35">${q.q}${stars(q.d, 10)}</div></div>
    <div style="flex:1;margin:2mm 0;border:1.3px dashed ${C.celesteMed};border-radius:3mm;position:relative"><span class="tiny muted" style="position:absolute;left:2mm;top:1mm">✏️ Dibujo u operación</span></div>
    <div style="display:flex;align-items:flex-end;gap:2mm;font-size:9.5pt"><b style="color:${C.azul}">Respuesta:</b><span style="flex:1;border-bottom:1.2px solid ${C.linea};height:5mm"></span></div>
  </div>`;
}

function matematica(ed) {
  const pre = ed.mode === 'pre';
  const body = pre
    ? `<div style="display:flex;flex-direction:column;flex:1;gap:3mm;justify-content:space-evenly">${ed.mate.map((q, i) => renderMQ(withStars(q), i, ed)).join('')}</div>`
    : `<div style="display:grid;grid-template-columns:1fr 1fr;grid-template-rows:repeat(3,1fr);gap:3.5mm;flex:1">${ed.mate.map((q, i) => mateCell(q, i)).join('')}</div>`;
  return `<section class="page">
  ${header('Prueba 2 · Matemática', 'Leo, entiendo y resuelvo', circle(img('lu-reloj.jpg', 'height:20mm', 'mult')), PASTEL[1].bg, PASTEL[1].ink)}
  <div style="display:flex;flex-direction:column;height:calc(297mm - 15mm - 20mm - 22mm)">
  <div style="display:flex;align-items:center;gap:2mm;margin:3mm 0 3mm;font-size:9.3pt;color:${C.pizarra}">${spark(9)}<i>${pre ? 'Mamá lee cada problema en voz alta. Tú cuentas con tu dedo y encierras el número.' : 'Lee cada problema dos veces: ¿qué datos tengo?, ¿qué me preguntan? Luego resuelve.'}</i></div>
  ${body}
  ${scoreBox('matemática')}
  </div>
  ${footer(label(ed), 3)}
</section>`;
}

function resultados(ed) {
  const key = (qs, fn) => qs.map((q, i) => `<div class="small" style="display:flex;gap:2mm;padding:1.3mm 0;border-bottom:1px solid ${C.linea}"><b style="color:${C.azul};width:4mm">${i + 1}</b><span style="width:13mm;flex:none">${stars(q.d, 9).replace('margin-left:2mm', 'margin-left:0')}</span><span>${fn(q)}</span></div>`).join('');
  const row = (r, a, b, bg) => `<tr><td style="background:${bg};font-weight:800;color:${C.azul}">${r}</td><td style="background:${bg}">${a}</td><td style="background:${bg}">${b}</td></tr>`;
  return `<section class="page">
  <div class="kick">Para mamá</div><h2>Respuestas y <em>resultado</em></h2>
  <div class="grid2" style="gap:5mm">
    <div class="card" style="background:${C.crema};padding:3.5mm 4.5mm"><h4>📖 Lectura</h4>${key(ed.lectura.qs, answer)}</div>
    <div class="card" style="background:${C.crema};padding:3.5mm 4.5mm"><h4>🔢 Matemática</h4>${key(ed.mate, answerM)}</div>
  </div>
  <p class="tiny muted" style="margin-top:2mm">En las preguntas abiertas, acepta cualquier respuesta que tenga sentido con el texto o con el problema, aunque la diga con otras palabras.</p>
  <h3 style="margin-top:3mm">¿Con qué nivel empezamos?</h3>
  <table class="t" style="font-size:10.3pt">
    <tr><th>Respuestas correctas</th><th>📖 Súper Lector · Comprensión</th><th>🔢 Súper Mate</th></tr>
    ${row('0 a 2', '<b>Nivel 1 · Despegue</b>', '<b>Nivel 1 · Despegue</b>', C.durazno)}
    ${row('3 a 4', '<b>Nivel 2 · Vuelo</b>', '<b>Nivel 2 · Vuelo</b>', C.celeste)}
    ${row('5 a 6', '<b>Nivel 3 · Súper lector</b>', '<b>Nivel 3 · Súper mate</b>', C.verde)}
  </table>
  <div class="grid2" style="margin-top:3mm;gap:3mm">
    <div class="note" style="font-size:9pt"><b>Si falló las dos preguntas de una estrella</b>, empiecen por el Nivel 1 aunque haya acertado otras: así gana confianza desde la base.</div>
    <div class="note" style="font-size:9pt;background:${C.verde}"><b style="color:#2F7D4E">Si acertó las 6 con facilidad</b>, el Nivel 3 es para él. Si quiere aún más reto, prueben la edad siguiente.</div>
  </div>
  <div class="card" style="margin-top:3mm;border:1.5px solid ${C.linea};display:flex;gap:6mm;align-items:center;padding:3mm 5mm">
    <h4 style="margin:0;flex:none">Nuestro resultado</h4>
    <div class="small" style="flex:1;display:flex;gap:6mm">📖 Lectura: Nivel <span style="display:inline-block;width:12mm;border-bottom:1.5px solid ${C.naranja}"></span> 🔢 Matemática: Nivel <span style="display:inline-block;width:12mm;border-bottom:1.5px solid ${C.naranja}"></span></div>
  </div>
  <div class="card" style="margin-top:3mm;background:${C.celeste};display:flex;gap:4mm;align-items:center;padding:3mm 5mm">
    <span class="emoji" style="font-size:18pt">🐢</span><p class="small" style="margin:0"><b style="color:${C.azul}">¿Lee lento o se traba?</b> Antes de la comprensión, trabaja la fluidez con <b>Súper Lector en 21 días</b>: su prueba del Día 0 te dice el nivel de lectura en voz alta.</p>
  </div>
  <div style="margin-top:3mm;background:${C.azul};border-radius:5mm;padding:4mm 6mm;display:flex;gap:5mm;align-items:center;color:#fff">
    ${img('lu-trofeo.jpg', 'height:24mm;border-radius:3mm;background:#fff')}
    <div><div class="f" style="font-size:14pt;color:${C.amarilloMed}">¿Ya sabes su nivel?</div><p class="small" style="margin:0;color:#E8EBF7">Escríbenos por Instagram, Facebook o TikTok con <b>su edad y su nivel</b>, o entra a <b>lunoriperu.com</b>, y te contamos cómo recibir el cuaderno que le toca.</p></div>
  </div>
  <p class="tiny muted" style="margin-top:2mm">Esta prueba es una referencia para elegir el cuaderno, no un diagnóstico. Si notas dificultades persistentes, conversa con su profesora o con un especialista.</p>
  ${footer(label(ed), 4)}
</section>`;
}

module.exports = AGES.map((ed) => ({
  file: `Prueba-de-Nivel-Lunori-${ed.slug}`,
  html: () => doc(`Prueba de nivel Lunori · ${ed.age}`, [instrucciones(ed), lectura(ed), matematica(ed), resultados(ed)]),
}));
