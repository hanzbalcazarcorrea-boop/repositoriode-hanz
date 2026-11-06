// 100 planes sin pantallas · 3 a 12 años.
const { C, img, spark, footer, doc } = require('./base');
const CATS = require('./actividades-data');

const LABEL = '100 planes sin pantallas';
const COL = {
  durazno: { bg: C.durazno, soft: C.crema2, ink: C.naranjaOsc },
  verde: { bg: '#D3EEDC', soft: C.verde, ink: '#2F7D4E' },
  lila: { bg: C.lilaMed, soft: C.lila, ink: '#5E49AE' },
  amarillo: { bg: '#FFEBA8', soft: C.amarillo, ink: '#9A6A00' },
  celeste: { bg: C.celesteMed, soft: C.celeste, ink: '#3A5BB0' },
  rosa: { bg: '#FAD3CF', soft: C.rosa, ink: '#B5463D' },
};
const ENERGY = { 1: ['🟢', 'Tranquilo'], 2: ['🟡', 'Medio'], 3: ['🔴', 'Movido'] };

let n = 0;
CATS.forEach((c) => c.items.forEach((it) => { it.n = ++n; }));
const ALL = CATS.flatMap((c) => c.items.map((it) => ({ it, c })));

function card(it, c) {
  const col = COL[c.color];
  const [name, emo, age, time, en, mat, how] = it;
  return `<div style="background:#fff;border:1.5px solid ${col.bg};border-radius:4mm;padding:2.8mm 3.8mm 2.4mm;display:flex;flex-direction:column;gap:1.3mm;overflow:hidden" data-fit>
    <div style="display:flex;align-items:center;gap:2.2mm">
      <span style="display:inline-flex;align-items:center;justify-content:center;min-width:7.4mm;height:7.4mm;border-radius:50%;background:${col.bg};color:${col.ink};font-family:Fredoka;font-weight:600;font-size:9.5pt;flex:none">${it.n}</span>
      <span class="f" style="font-size:12pt;flex:1;line-height:1.1">${name}</span>
      <span class="emoji" style="font-size:15pt">${emo}</span>
    </div>
    <div style="display:flex;gap:1.6mm;flex-wrap:wrap;font-size:7.6pt;font-weight:700;color:${C.pizarra}">
      <span style="background:${col.soft};border-radius:10mm;padding:.3mm 2mm">👧 ${age}+ años</span>
      <span style="background:${col.soft};border-radius:10mm;padding:.3mm 2mm">⏱ ${time}</span>
      <span style="background:${col.soft};border-radius:10mm;padding:.3mm 2mm">${ENERGY[en][0]} ${ENERGY[en][1]}</span>
    </div>
    <div style="font-size:9pt;line-height:1.35;color:${C.pizarra}"><b style="color:${col.ink}">Necesitas:</b> ${mat}.</div>
    <div style="font-size:9.8pt;line-height:1.4">${how}</div>
  </div>`;
}

function catPage(c, idx, pageNo) {
  const col = COL[c.color];
  const from = c.items[0].n, to = c.items[c.items.length - 1].n;
  return `<section class="page" style="padding-top:12mm">
  <div style="background:${col.bg};border-radius:5mm;padding:3.5mm 5mm;display:flex;align-items:center;gap:4mm;margin-bottom:3.5mm">
    <div style="width:15mm;height:15mm;border-radius:50%;background:#fff;display:flex;align-items:center;justify-content:center;flex:none"><span class="emoji" style="font-size:20pt">${c.emoji}</span></div>
    <div style="flex:1"><div class="kick" style="color:${col.ink};margin-bottom:.4mm">Categoría ${idx + 1} · planes ${from} al ${to}</div><h2 style="margin:0;font-size:19pt">${c.title}</h2><div class="small" style="color:${C.pizarra};margin-top:.6mm">${c.desc}</div></div>
  </div>
  <div style="display:grid;grid-template-columns:1fr 1fr;grid-template-rows:repeat(5,1fr);gap:2.8mm;height:calc(297mm - 12mm - 20mm - 31mm)">${c.items.map((it) => card(it, c)).join('')}</div>
  ${footer(LABEL, pageNo)}
</section>`;
}

function cover() {
  return `<section class="page cream" style="padding:0">
  <div style="position:absolute;top:14mm;left:0;right:0;text-align:center">${img('lunori-logo.png', 'height:11mm')}</div>
  <div style="position:absolute;top:33mm;left:0;right:0;text-align:center">
    <span class="tag" style="background:${C.naranja};color:#fff;letter-spacing:.6mm;font-size:8.5pt">GUÍA PRÁCTICA PARA MAMÁS Y PAPÁS</span>
    <div class="f" style="font-size:88pt;font-weight:700;color:${C.naranja};line-height:.95;margin-top:5mm">100</div>
    <div class="f" style="font-size:34pt;font-weight:700;color:${C.azul};line-height:1.05">planes sin pantallas</div>
    <p style="font-size:13pt;color:${C.pizarra};margin:4mm auto 0;max-width:150mm">Ideas fáciles para jugar, crear y conectar en familia, con lo que ya tienes en casa.</p>
    <div style="margin-top:4mm"><span class="tag" style="border:1.6px solid ${C.azul};color:${C.azul};background:#fff;font-size:11pt;padding:1.2mm 5mm">3 a 12 años</span></div>
  </div>
  <div style="position:absolute;left:0;right:0;top:128mm;display:flex;justify-content:center">${img('escena-fogata.jpg', 'width:178mm;border-radius:8mm', 'mult')}</div>
  <div style="position:absolute;left:18mm;right:18mm;bottom:14mm;background:#fff;border-radius:6mm;padding:4.5mm 7mm;box-shadow:0 2mm 6mm rgba(30,42,90,.08);display:flex;justify-content:space-around;text-align:center">
    ${[['🏠', '10 categorías', 'casa, arte, ciencia…'], ['🗓️', 'Reto de 30 días', 'para crear el hábito'], ['🫙', 'Frasco de planes', 'para recortar'], ['🤝', 'Acuerdo familiar', 'de pantallas']].map(([e, a, b]) => `<div><div class="emoji" style="font-size:15pt">${e}</div><div class="f" style="font-size:10.5pt;margin-top:1mm">${a}</div><div class="tiny muted">${b}</div></div>`).join('')}
  </div>
</section>`;
}

function hola() {
  return `<section class="page">
  <div class="spark">${spark(14)}</div>
  <div class="kick">Hola, mamá. Hola, papá</div>
  <h2>«Mamá, me aburro»<br>es <em>el comienzo</em> de algo bueno</h2>
  <p class="lead">Si apenas se apaga la tele o el celular tu hijo dice que se aburre, no es un problema tuyo ni de él: las pantallas acostumbran al cerebro a estímulos rápidos, y volver al juego «lento» cuesta un poquito al principio.</p>
  <div class="grid2">
    <div class="card" style="background:${C.crema}"><h3>El aburrimiento es bueno</h3><p class="small" style="margin:0">Cuando un niño se aburre, su cabeza empieza a inventar. De ahí salen los fuertes de sábanas, los cuentos y los juegos nuevos. Esta guía no es para llenarle cada minuto, sino para darle ideas cuando no sabe por dónde empezar.</p></div>
    <div class="card" style="background:${C.celeste}"><h3>No se trata de prohibir</h3><p class="small" style="margin:0">Las pantallas no son el enemigo, pero ocupan el espacio de otras cosas que también necesita: moverse, crear, aburrirse, conversar y dormir bien. Cada plan de esta guía le devuelve un poquito de ese espacio.</p></div>
  </div>
  <h3 style="margin-top:5mm">Cómo leer cada plan</h3>
  <div style="display:grid;grid-template-columns:1fr 1.25fr;gap:5mm;align-items:center">
    ${card(ALL[0].it, ALL[0].c)}
    <div style="display:flex;flex-direction:column;gap:2mm" class="small">
      <div><b style="color:${C.azul}">👧 Edad:</b> desde qué edad lo puede disfrutar. Los grandes también se divierten con los planes «pequeños», sobre todo si les toca dirigirlos.</div>
      <div><b style="color:${C.azul}">⏱ Tiempo:</b> lo que dura, más o menos.</div>
      <div><b style="color:${C.azul}">Energía:</b> 🟢 tranquilo (antes de la tarea o de dormir) · 🟡 medio · 🔴 movido (para cuando están eléctricos).</div>
      <div><b style="color:${C.azul}">Necesitas:</b> casi siempre son cosas que ya tienes en casa.</div>
    </div>
  </div>
  <h3 style="margin-top:5mm">4 formas de usar esta guía</h3>
  <div class="grid4">
    ${[['🫙', 'El frasco de planes', 'Recorta las tiras de las págs. 16 y 17, guárdalas en un frasco y que saque una cuando diga «me aburro».'], ['🗓️', 'El reto de 30 días', 'Un plan al día durante un mes, con la tabla de la pág. 14. Así se vuelve costumbre.'], ['🎯', 'Por momento del día', 'Planes 🟢 antes de la tarea o de dormir, planes 🔴 cuando sobra energía.'], ['✅', 'Marca los que hicieron', 'En la pág. 3 pinten cada plan que ya probaron. ¿Llegan a los 100?']].map(([e, a, b], i) => `<div class="card" style="background:${[C.durazno, C.verde, C.lila, C.rosa][i]};padding:3.5mm"><div class="emoji" style="font-size:16pt">${e}</div><h4 style="margin-top:1.5mm">${a}</h4><p class="tiny" style="margin:0">${b}</p></div>`).join('')}
  </div>
  <div class="note" style="margin-top:4mm"><b>Importante:</b> los planes con cuchillo, horno, fuego o agua caliente siempre los hace un adulto. Los niños miden, mezclan, decoran y prueban. Y en los planes con agua, nunca los dejes solos.</div>
  ${footer(LABEL, 2)}
</section>`;
}

function indice() {
  return `<section class="page cream">
  <div class="kick">Índice y registro</div>
  <h2>Nuestros <em>100 planes</em></h2>
  <p class="lead">Pinten el círculo de cada plan que ya hicieron. Cuando completen una fila, ¡celebren!</p>
  <div style="display:flex;flex-direction:column;gap:2.5mm">
  ${CATS.map((c, i) => { const col = COL[c.color]; return `<div style="background:#fff;border-radius:4mm;padding:2.6mm 4mm;display:flex;align-items:center;gap:3mm">
      <span class="emoji" style="font-size:15pt;width:9mm;text-align:center">${c.emoji}</span>
      <div style="width:52mm"><div class="f" style="font-size:11pt">${c.title}</div><div class="tiny muted">Planes ${c.items[0].n} al ${c.items[9].n} · pág. ${i + 4}</div></div>
      <div style="display:flex;gap:1.6mm;flex:1;justify-content:flex-end">${c.items.map((it) => `<span style="width:8.6mm;height:8.6mm;border-radius:50%;border:1.6px solid ${col.ink};display:inline-flex;align-items:center;justify-content:center;font-family:Fredoka;font-size:8.5pt;color:${col.ink};background:#fff">${it.n}</span>`).join('')}</div>
    </div>`; }).join('')}
  </div>
  <div style="display:flex;gap:5mm;align-items:center;margin-top:5mm">
    ${img('bosque-amigos.jpg', 'height:38mm', 'mult')}
    <div class="card" style="flex:1;background:${C.durazno}"><h3>Nuestro plan favorito es el número <span style="display:inline-block;width:16mm;border-bottom:1.5px solid ${C.naranja}"></span></h3><p class="small" style="margin:0">Y el que más risa nos dio: <span style="display:inline-block;width:70mm;border-bottom:1.2px solid ${C.naranja}"></span></p></div>
  </div>
  ${footer(LABEL, 3)}
</section>`;
}

// Reto de 30 días: mezcla categorías y energías.
const RETO = [1, 11, 21, 31, 41, 51, 98, 2, 12, 22, 61, 42, 52, 71, 81, 32, 43, 91, 13, 23, 33, 53, 62, 82, 44, 72, 92, 14, 24, 100];
function reto(pageNo) {
  const byN = Object.fromEntries(ALL.map(({ it, c }) => [it.n, { it, c }]));
  return `<section class="page">
  <div class="spark">${spark(14)}</div>
  <div class="kick">Para imprimir y pegar en la refri</div>
  <h2>El reto de <em>30 días</em> sin pantallas</h2>
  <p class="lead">No es «cero pantallas»: es <b>un plan sin pantallas al día</b>. Al terminar cada uno, márquenlo con un check o una pegatina. Si un día no pueden, no pasa nada: sigan al día siguiente.</p>
  <div style="display:grid;grid-template-columns:repeat(5,1fr);gap:2.4mm">
  ${RETO.map((num, i) => { const { it, c } = byN[num]; const col = COL[c.color]; return `<div style="border:1.5px solid ${col.bg};border-radius:3.5mm;padding:2mm 2.4mm;height:31.5mm;display:flex;flex-direction:column;background:${i % 7 === 6 ? col.soft : '#fff'}">
      <div style="display:flex;justify-content:space-between;align-items:center"><span class="f" style="font-size:8.5pt;color:${col.ink}">DÍA ${i + 1}</span><span class="emoji" style="font-size:11pt">${it[1]}</span></div>
      <div class="f" style="font-size:9.6pt;line-height:1.12;margin-top:1mm">${it[0]}</div>
      <div class="tiny muted">Plan ${num}</div>
      <div style="margin-top:auto;display:flex;justify-content:flex-end"><span style="width:7mm;height:7mm;border-radius:50%;border:1.5px dashed ${C.gris}"></span></div>
    </div>`; }).join('')}
  </div>
  <div class="note" style="margin-top:4mm;display:flex;gap:4mm;align-items:center"><span class="emoji" style="font-size:16pt">🏆</span><span><b>Al terminar los 30 días:</b> elijan juntos un premio que sea una experiencia (un paseo, una noche de campamento en la sala, cocinar su comida favorita) y anoten aquí cómo cambió la casa: <span style="display:inline-block;width:62mm;border-bottom:1.2px solid ${C.naranja}"></span></span></div>
  ${footer(LABEL, pageNo)}
</section>`;
}

function acuerdo(pageNo) {
  const row = (t) => `<div style="display:flex;gap:3mm;align-items:center;padding:2.3mm 0;border-bottom:1px solid ${C.linea};font-size:10.5pt"><span class="chk"></span><span>${t}</span></div>`;
  const blank = `<div style="display:flex;gap:3mm;align-items:center;padding:2.3mm 0;border-bottom:1px solid ${C.linea}"><span class="chk"></span><span style="flex:1;height:5mm"></span></div>`;
  return `<section class="page cream">
  <div class="kick">Para conversar y firmar juntos</div>
  <h2>Nuestro <em>acuerdo familiar</em> de pantallas</h2>
  <p class="lead">Las reglas que se conversan y se firman juntos se cumplen mucho más que las que solo se ordenan. Marquen las que elijan y escriban las suyas.</p>
  <div class="grid2" style="grid-template-columns:1.15fr 1fr">
    <div class="card">
      <h3>En nuestra casa acordamos que…</h3>
      ${row('Primero tareas y responsabilidades, después pantallas.')}
      ${row('No hay pantallas en la mesa a la hora de comer (tampoco los adultos).')}
      ${row('Las pantallas se apagan una hora antes de dormir.')}
      ${row('Celulares y tablets duermen fuera del cuarto, cargando en la sala.')}
      ${row('Avisamos 5 minutos antes de que se termine el tiempo de pantalla.')}
      ${row('Los fines de semana hacemos al menos un plan juntos sin pantallas.')}
      ${blank}${blank}
    </div>
    <div style="display:flex;flex-direction:column;gap:3.5mm">
      <div class="card"><h3>Nuestro tiempo de pantalla</h3>
        <div class="small" style="display:flex;flex-direction:column;gap:3mm;margin-top:2mm">
          <div>De lunes a viernes: <span style="display:inline-block;width:28mm;border-bottom:1.2px solid ${C.linea}"></span> al día</div>
          <div>Sábados y domingos: <span style="display:inline-block;width:28mm;border-bottom:1.2px solid ${C.linea}"></span> al día</div>
          <div>Horario permitido: de <span style="display:inline-block;width:14mm;border-bottom:1.2px solid ${C.linea}"></span> a <span style="display:inline-block;width:14mm;border-bottom:1.2px solid ${C.linea}"></span></div>
        </div>
      </div>
      <div class="card"><h3>Si no cumplimos el acuerdo…</h3><div class="lines" style="gap:7mm"><span></span><span></span></div></div>
      <div class="card" style="background:${C.durazno}"><h4>Una referencia útil</h4><p class="tiny" style="margin:0">La Academia Americana de Pediatría sugiere, para niños de 2 a 5 años, como máximo 1 hora al día de contenido de calidad y acompañado. Desde los 6 años recomienda límites claros y constantes, que no le quiten tiempo al sueño, al movimiento ni a la familia.</p></div>
    </div>
  </div>
  <div class="card" style="margin-top:4mm">
    <h3>Firmamos este acuerdo</h3>
    <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:6mm;margin-top:9mm">${['', '', '', ''].map(() => `<div style="border-bottom:1.2px solid ${C.pizarra};height:6mm"></div>`).join('')}</div>
    <div class="tiny muted" style="margin-top:1.5mm;display:flex;justify-content:space-between"><span>Fecha: ____ / ____ / ______</span><span>Lo revisamos de nuevo el: ____ / ____ / ______</span></div>
  </div>
  ${footer(LABEL, pageNo)}
</section>`;
}

function frasco(part, pageNo) {
  const items = ALL.slice(part * 50, part * 50 + 50);
  return `<section class="page" style="padding:11mm 12mm 18mm">
  <div style="display:flex;align-items:center;gap:4mm;margin-bottom:3mm">
    ${part === 0 ? img('frasco-enfokids.jpg', 'height:22mm;border-radius:3mm') : ''}
    <div style="flex:1"><div class="kick" style="margin:0">Para recortar · ${part === 0 ? 'planes 1 al 50' : 'planes 51 al 100'}</div><h2 style="margin:0;font-size:18pt">El frasco de planes ${part === 0 ? '<span class="emoji" style="font-size:16pt">🫙</span>' : '(continuación)'}</h2>
    ${part === 0 ? `<div class="small" style="color:${C.pizarra}">Recorta por la línea punteada, dobla cada tira y guárdalas en un frasco. ¿Tienes un frasco de Lunori vacío? ¡Es perfecto! Cuando diga «me aburro», que saque una tira.</div>` : ''}</div>
  </div>
  <div style="display:grid;grid-template-columns:repeat(5,1fr);border-top:1.4px dashed ${C.gris};border-left:1.4px dashed ${C.gris}">
    ${items.map(({ it, c }) => { const col = COL[c.color]; return `<div style="border-right:1.4px dashed ${C.gris};border-bottom:1.4px dashed ${C.gris};height:${part === 0 ? 21.2 : 23.4}mm;padding:2mm 2.2mm;display:flex;flex-direction:column;justify-content:center;align-items:center;text-align:center;gap:.6mm;background:${col.soft}">
      <div style="display:flex;align-items:center;gap:1.4mm"><span class="f" style="font-size:9pt;color:${col.ink}">#${it.n}</span><span class="emoji" style="font-size:11pt">${it[1]}</span></div>
      <div class="f" style="font-size:9pt;line-height:1.1">${it[0]}</div>
    </div>`; }).join('')}
  </div>
  ${footer(LABEL, pageNo)}
</section>`;
}

function back(pageNo) {
  return `<section class="page" style="background:${C.azul};color:#fff;padding:18mm 16mm">
  ${img('lunori-logo.png', 'height:10mm;filter:brightness(0) invert(1)')}
  <h2 style="color:#fff;font-size:26pt;margin-top:10mm">Menos pantallas,<br>más momentos juntos 💛</h2>
  <p style="color:#D9DEF2;font-size:11.5pt;max-width:160mm">No hace falta hacer los 100 planes. Con uno al día, cuando se vuelve costumbre, la casa cambia: más risas, más conversación y noches más tranquilas.</p>
  <div style="display:flex;justify-content:center;margin-top:6mm">${img('luna-osito.jpg', 'height:78mm;border-radius:8mm')}</div>
  <div style="position:absolute;left:16mm;right:16mm;bottom:30mm;background:#fff;border-radius:6mm;padding:5mm 6mm;display:flex;gap:5mm;align-items:center;color:${C.texto}">
    ${img('frasco-enfokids.jpg', 'height:34mm;border-radius:4mm')}
    ${img('frasco-buenas-noches.jpg', 'height:34mm;border-radius:4mm')}
    <div><div class="kick">La familia Lunori</div><h3>Enfoque de día, calma de noche</h3><p class="small" style="margin:0">Conoce EnfoKIDS, Buenas Noches y el Combo Día y Noche en <b>lunoriperu.com</b>. Envío gratis a todo el Perú y pago contra entrega en Lima y Callao.</p></div>
  </div>
  <p class="tiny" style="position:absolute;left:16mm;right:16mm;bottom:12mm;color:#AEB6D6">Los productos Lunori son suplementos nutricionales y no reemplazan una alimentación balanceada ni un tratamiento médico. Las actividades de esta guía deben realizarse siempre con la supervisión de un adulto.</p>
</section>`;
}

module.exports = {
  file: '100-Planes-sin-Pantallas',
  html: () => {
    const pages = [cover(), hola(), indice()];
    CATS.forEach((c, i) => pages.push(catPage(c, i, pages.length + 1)));
    pages.push(reto(pages.length + 1));
    pages.push(acuerdo(pages.length + 1));
    pages.push(frasco(0, pages.length + 1));
    pages.push(frasco(1, pages.length + 1));
    pages.push(back(pages.length + 1));
    return doc('100 planes sin pantallas · Lunori', pages);
  },
};
