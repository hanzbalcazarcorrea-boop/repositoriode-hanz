// Estilos, piezas gráficas y utilidades compartidas por todos los productos Lunori.
// Paleta y tipografías tomadas de lunoriperu.com (Fredoka + Nunito, azul #1E2A5A, naranja #F28C28, crema #FFF8EE).
const path = require('path');

const ROOT = path.join(__dirname, '..');
const FONT_DIR = path.join(ROOT, 'assets', 'fonts');
const IMG_DIR = path.join(ROOT, 'assets', 'img');
const font = (family, file, weight, style = 'normal') =>
  `@font-face{font-family:'${family}';src:url('file://${FONT_DIR}/${file}') format('woff2');font-weight:${weight};font-style:${style};}`;

const C = {
  azul: '#1E2A5A',
  pizarra: '#4A5578',
  naranja: '#F28C28',
  naranjaOsc: '#C2620A',
  crema: '#FFF8EE',
  crema2: '#FFF1DC',
  durazno: '#FFE7B8',
  celeste: '#E6EBFA',
  celesteMed: '#C9D2F0',
  lila: '#EEE9FF',
  lilaMed: '#E3DCFF',
  verde: '#E3F4E8',
  verdeMed: '#7CC596',
  rosa: '#FDE6E4',
  rosaMed: '#F59A92',
  amarillo: '#FFF4C9',
  amarilloMed: '#FFCC4D',
  azulMed: '#6F8FD8',
  lilaFuerte: '#9B86E0',
  tinta: '#1E2A5A',
  texto: '#2E3557',
  gris: '#7A819C',
  linea: '#DCD6CB',
};

const CSS = `
${font('Fredoka', 'fredoka-latin-500-normal.woff2', 500)}
${font('Fredoka', 'fredoka-latin-600-normal.woff2', 600)}
${font('Fredoka', 'fredoka-latin-700-normal.woff2', 700)}
${font('Nunito', 'nunito-latin-400-normal.woff2', 400)}
${font('Nunito', 'nunito-latin-400-italic.woff2', 400, 'italic')}
${font('Nunito', 'nunito-latin-600-normal.woff2', 600)}
${font('Nunito', 'nunito-latin-700-normal.woff2', 700)}
${font('Nunito', 'nunito-latin-800-normal.woff2', 800)}
@page{size:A4;margin:0;}
*{box-sizing:border-box;margin:0;padding:0;}
html,body{background:#fff;}
body{font-family:'Nunito','Noto Color Emoji',sans-serif;color:${C.texto};font-size:11pt;line-height:1.45;-webkit-print-color-adjust:exact;print-color-adjust:exact;}
.page{width:210mm;height:297mm;position:relative;overflow:hidden;page-break-after:always;break-after:page;padding:15mm 15mm 20mm;background:#fff;}
.page.cream{background:${C.crema};}
.page:last-child{page-break-after:auto;break-after:auto;}
h1,h2,h3,h4,.f{font-family:'Fredoka','Noto Color Emoji',sans-serif;font-weight:600;line-height:1.15;color:${C.azul};}
h1{font-size:30pt;} h2{font-size:21pt;margin-bottom:2.5mm;} h3{font-size:13.5pt;margin-bottom:1.5mm;} h4{font-size:11.5pt;margin-bottom:1mm;}
h2 em{font-style:normal;color:${C.naranja};}
p{margin-bottom:2.2mm;}
.kick{font-family:'Fredoka';font-weight:600;font-size:8.5pt;letter-spacing:.9mm;text-transform:uppercase;color:${C.naranja};margin-bottom:1.5mm;}
.lead{color:${C.pizarra};font-size:10.5pt;margin-bottom:4mm;}
.muted{color:${C.gris};}
.small{font-size:9.5pt;} .tiny{font-size:8.3pt;}
.emoji{font-family:'Noto Color Emoji';line-height:1;}
.foot{position:absolute;left:15mm;right:15mm;bottom:8mm;display:flex;justify-content:space-between;align-items:center;font-size:8.3pt;color:${C.gris};}
.foot img{height:4.2mm;}
.spark{position:absolute;right:15mm;top:13mm;}
.tag{display:inline-block;font-family:'Fredoka';font-weight:600;font-size:9pt;padding:.9mm 3.2mm;border-radius:20mm;}
.card{border-radius:4.5mm;padding:4.5mm 5mm;background:#fff;}
.lines{display:flex;flex-direction:column;gap:7.2mm;margin-top:3mm;}
.lines span{display:block;border-bottom:1.2px solid ${C.linea};height:0;}
.grid2{display:grid;grid-template-columns:1fr 1fr;gap:4mm;}
.grid3{display:grid;grid-template-columns:1fr 1fr 1fr;gap:3.5mm;}
.grid4{display:grid;grid-template-columns:repeat(4,1fr);gap:3mm;}
.num{display:inline-flex;align-items:center;justify-content:center;width:7mm;height:7mm;border-radius:50%;background:${C.naranja};color:#fff;font-family:'Fredoka';font-weight:600;font-size:10.5pt;flex:none;}
.chk{display:inline-block;width:4.8mm;height:4.8mm;border:1.5px solid ${C.pizarra};border-radius:1.3mm;vertical-align:-1mm;margin-right:2mm;background:#fff;flex:none;}
.cut{border:1.5px dashed ${C.gris};}
ul.clean{list-style:none;} ul.clean li{margin-bottom:1.5mm;padding-left:5mm;position:relative;}
ul.clean li:before{content:'';position:absolute;left:.3mm;top:2.1mm;width:2.1mm;height:2.1mm;border-radius:50%;background:${C.naranja};}
.mult{mix-blend-mode:multiply;}
.note{border-radius:4mm;padding:3.5mm 5mm;background:${C.durazno};font-size:9.8pt;}
.note b{color:${C.naranjaOsc};}
table.t{width:100%;border-collapse:separate;border-spacing:0;font-size:9.8pt;}
table.t th{font-family:'Fredoka';font-weight:600;color:#fff;background:${C.azul};padding:2mm 3mm;text-align:left;}
table.t th:first-child{border-top-left-radius:3mm;} table.t th:last-child{border-top-right-radius:3mm;}
table.t td{padding:2mm 3mm;border-bottom:1px solid ${C.linea};background:#fff;vertical-align:top;}
`;

const img = (name, style = '', cls = '') => `<img src="file://${IMG_DIR}/${name}" class="${cls}" style="${style}">`;

// Destello de 4 puntas del logo Lunori.
function spark(size = 12, color = C.naranja) {
  return `<svg width="${size}" height="${size}" viewBox="0 0 24 24"><path d="M12 0C13 7 17 11 24 12C17 13 13 17 12 24C11 17 7 13 0 12C7 11 11 7 12 0Z" fill="${color}"/></svg>`;
}
function star(size = 10, color = C.amarilloMed, stroke) {
  return `<svg width="${size}" height="${size}" viewBox="0 0 24 24"><path d="M12 1.8l3 6.3 6.9.9-5 4.8 1.3 6.8L12 17.3l-6.2 3.3 1.3-6.8-5-4.8 6.9-.9z" fill="${color}" ${stroke ? `stroke="${stroke}" stroke-width="1.5"` : ''}/></svg>`;
}
const emptyStars = (n, size = 15) => Array.from({ length: n }, () => star(size, '#fff', C.naranja)).join('<span style="display:inline-block;width:1mm"></span>');

function footer(label, pageNo) {
  return `<div class="foot">${img('lunori-logo.png')}<span>${label}${pageNo ? ` · ${pageNo}` : ''}</span></div>`;
}

// Caritas de emociones en SVG.
const FACE = {
  alegria: { fill: C.amarilloMed, eyes: 'happy', brows: 'none', mouth: 'smile', extra: 'cheeks' },
  tristeza: { fill: '#8FB3EC', eyes: 'dot', brows: 'sad', mouth: 'frown', extra: 'tear' },
  enojo: { fill: '#F2785F', eyes: 'dot', brows: 'angry', mouth: 'angry', extra: '' },
  miedo: { fill: '#B7A5EC', eyes: 'wide', brows: 'raised', mouth: 'wobble', extra: 'sweat' },
  sorpresa: { fill: '#FFB15C', eyes: 'wide', brows: 'raised', mouth: 'o', extra: '' },
  calma: { fill: C.verdeMed, eyes: 'closed', brows: 'none', mouth: 'soft', extra: 'cheeks' },
  frustracion: { fill: '#F59E6B', eyes: 'squint', brows: 'angry', mouth: 'zigzag', extra: '' },
  verguenza: { fill: '#F5A3BD', eyes: 'side', brows: 'sad', mouth: 'wobble', extra: 'blush' },
  celos: { fill: '#A8D46F', eyes: 'side', brows: 'angry', mouth: 'flat', extra: '' },
  orgullo: { fill: '#FFD36B', eyes: 'closed', brows: 'none', mouth: 'smile', extra: 'cheeks' },
};
function face(name, size = 120, opts = {}) {
  const f = FACE[name];
  const ink = C.azul;
  const fill = opts.outline ? '#fff' : f.fill;
  const sw = 3.2;
  let eyes = '', brows = '', mouth = '', extra = '';
  switch (f.eyes) {
    case 'happy': eyes = `<path d="M33 47q7-8 14 0M63 47q7-8 14 0" stroke="${ink}" stroke-width="${sw}" fill="none" stroke-linecap="round"/>`; break;
    case 'dot': eyes = `<circle cx="40" cy="47" r="4.5" fill="${ink}"/><circle cx="70" cy="47" r="4.5" fill="${ink}"/>`; break;
    case 'wide': eyes = `<circle cx="40" cy="47" r="8" fill="#fff" stroke="${ink}" stroke-width="2.4"/><circle cx="40" cy="48" r="3.6" fill="${ink}"/><circle cx="70" cy="47" r="8" fill="#fff" stroke="${ink}" stroke-width="2.4"/><circle cx="70" cy="48" r="3.6" fill="${ink}"/>`; break;
    case 'closed': eyes = `<path d="M33 47q7 6 14 0M63 47q7 6 14 0" stroke="${ink}" stroke-width="${sw}" fill="none" stroke-linecap="round"/>`; break;
    case 'squint': eyes = `<path d="M34 44l11 4-11 4M76 44l-11 4 11 4" stroke="${ink}" stroke-width="${sw}" fill="none" stroke-linecap="round" stroke-linejoin="round"/>`; break;
    case 'side': eyes = `<circle cx="45" cy="49" r="4.5" fill="${ink}"/><circle cx="75" cy="49" r="4.5" fill="${ink}"/>`; break;
  }
  switch (f.brows) {
    case 'sad': brows = `<path d="M31 37l14-5M79 37l-14-5" stroke="${ink}" stroke-width="${sw}" stroke-linecap="round"/>`; break;
    case 'angry': brows = `<path d="M31 33l15 7M79 33l-15 7" stroke="${ink}" stroke-width="${sw + 0.4}" stroke-linecap="round"/>`; break;
    case 'raised': brows = `<path d="M31 32q9-7 17-1M62 31q8-6 17 1" stroke="${ink}" stroke-width="${sw}" fill="none" stroke-linecap="round"/>`; break;
  }
  switch (f.mouth) {
    case 'smile': mouth = `<path d="M36 66q19 20 38 0z" fill="${ink}"/><path d="M45 74q10 5 20 0" stroke="${C.rosaMed}" stroke-width="4" fill="none" stroke-linecap="round"/>`; break;
    case 'frown': mouth = `<path d="M40 78q15-13 30 0" stroke="${ink}" stroke-width="${sw}" fill="none" stroke-linecap="round"/>`; break;
    case 'angry': mouth = `<path d="M39 76q16-9 32 0" stroke="${ink}" stroke-width="${sw + 0.6}" fill="none" stroke-linecap="round"/>`; break;
    case 'wobble': mouth = `<path d="M41 74q4-4 8 0t8 0t8 0" stroke="${ink}" stroke-width="${sw}" fill="none" stroke-linecap="round"/>`; break;
    case 'o': mouth = `<ellipse cx="55" cy="73" rx="7" ry="9" fill="${ink}"/>`; break;
    case 'soft': mouth = `<path d="M45 69q10 8 20 0" stroke="${ink}" stroke-width="${sw}" fill="none" stroke-linecap="round"/>`; break;
    case 'flat': mouth = `<path d="M44 74h22" stroke="${ink}" stroke-width="${sw}" stroke-linecap="round"/>`; break;
    case 'zigzag': mouth = `<path d="M38 74l6-5 6 5 6-5 6 5 6-5 5 4" stroke="${ink}" stroke-width="${sw}" fill="none" stroke-linecap="round" stroke-linejoin="round"/>`; break;
  }
  switch (f.extra) {
    case 'cheeks': extra = `<circle cx="28" cy="62" r="6" fill="${C.rosaMed}" opacity=".45"/><circle cx="82" cy="62" r="6" fill="${C.rosaMed}" opacity=".45"/>`; break;
    case 'blush': extra = `<g stroke="#E2577A" stroke-width="2.2" stroke-linecap="round"><path d="M23 60l5-5M28 62l5-5M77 60l5-5M82 62l5-5"/></g>`; break;
    case 'tear': extra = `<path d="M71 55q-4 7 0 10q4-3 0-10z" fill="#fff" stroke="${ink}" stroke-width="1.6"/>`; break;
    case 'sweat': extra = `<path d="M85 26q-5 8 0 11q5-3 0-11z" fill="#DDEBFF" stroke="${ink}" stroke-width="1.6"/>`; break;
  }
  return `<svg width="${size}" height="${size}" viewBox="0 0 110 110"><circle cx="55" cy="55" r="50" fill="${fill}" stroke="${ink}" stroke-width="3"/>${opts.outline ? '' : extra}${brows}${eyes}${mouth}</svg>`;
}

const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

function doc(title, pages) {
  // «S/» nunca se separa del número y la raya de diálogo no queda sola al final de una línea.
  const body = pages.join('\n').replace(/S\/ (?=\d)/g, 'S/&nbsp;').replace(/—(?=[\p{L}¿¡])/gu, '—\u2060');
  return `<!doctype html><html lang="es"><head><meta charset="utf-8"><title>${esc(title)}</title><style>${CSS}</style></head><body>${body}</body></html>`;
}

// Separador de parte (página de color), como en las guías Lunori.
function partPage({ part, title, subtitle, bg = C.naranja, color = '#fff', art = '', label, pageNo }) {
  return `<section class="page" style="background:${bg};padding:0">
  ${art}
  <div style="position:absolute;left:16mm;right:16mm;bottom:34mm;color:${color}">
    <div class="kick" style="color:${color};opacity:.85">${part}</div>
    <h1 style="color:${color};font-size:38pt;font-weight:700;line-height:1.05">${title}</h1>
    <p style="font-size:13pt;margin-top:4mm;max-width:150mm;opacity:.95">${subtitle}</p>
  </div>
  <div class="foot" style="color:${color}">${img('lunori-logo.png', 'filter:brightness(0) invert(1)')}<span>${label} · ${pageNo}</span></div>
</section>`;
}

module.exports = { C, CSS, img, spark, star, emptyStars, footer, face, FACE, doc, esc, partPage };
