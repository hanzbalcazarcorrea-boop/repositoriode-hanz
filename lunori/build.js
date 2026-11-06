// Genera los PDF de los productos Lunori.
// Uso: node build.js            -> todos
//      node build.js emociones  -> solo los que contengan "emociones" en el nombre
//      PREVIEW=1 node build.js   -> además guarda PNG de cada página en preview/
const fs = require('fs');
const path = require('path');
const { chromium } = require('playwright');

const products = ['comprension', 'matematica', 'actividades', 'kit-emociones']
  .filter((m) => fs.existsSync(path.join(__dirname, 'src', m)) || fs.existsSync(path.join(__dirname, 'src', m + '.js')))
  .flatMap((m) => [].concat(require('./src/' + m)));

(async () => {
  const filter = process.argv[2];
  const outDir = path.join(__dirname, 'pdf');
  const htmlDir = path.join(__dirname, 'build');
  const prevDir = path.join(__dirname, 'preview');
  fs.mkdirSync(outDir, { recursive: true });
  fs.mkdirSync(htmlDir, { recursive: true });
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 794, height: 1123 } });
  for (const p of products) {
    if (filter && !p.file.includes(filter)) continue;
    const htmlPath = path.join(htmlDir, p.file + '.html');
    fs.writeFileSync(htmlPath, p.html());
    await page.goto('file://' + htmlPath);
    await page.evaluate(() => document.fonts.ready);
    await page.pdf({ path: path.join(outDir, p.file + '.pdf'), preferCSSPageSize: true, printBackground: true });
    const n = await page.locator('.page').count();
    // Aviso si algún contenido se sale de su página (o pisa el pie de página).
    const overflow = await page.evaluate(() =>
      [...document.querySelectorAll('.page')].map((el, i) => {
        const top = el.getBoundingClientRect().top;
        const foot = el.querySelector('.foot');
        const limit = (foot ? foot.getBoundingClientRect().top : el.getBoundingClientRect().bottom) - top;
        let max = 0;
        el.querySelectorAll(':scope > *:not(.foot):not(svg), :scope > div > *').forEach((c) => {
          if (getComputedStyle(c).position === 'absolute' || c.closest('.foot')) return;
          max = Math.max(max, c.getBoundingClientRect().bottom - top);
        });
        return max > limit + 1 ? `${i + 1} (+${Math.round(max - limit)}px)` : null;
      }).filter(Boolean));

    if (process.env.PREVIEW) {
      fs.mkdirSync(prevDir, { recursive: true });
      const els = await page.locator('.page').all();
      for (let i = 0; i < els.length; i++) {
        await els[i].screenshot({ path: path.join(prevDir, `${p.file}-${String(i + 1).padStart(2, '0')}.png`) });
      }
    }
    const clipped = await page.evaluate(() => [...document.querySelectorAll('[data-fit]')].filter((e) => e.scrollHeight > e.clientHeight + 1).map((e) => e.textContent.trim().slice(0, 30)));
    if (clipped.length) console.log('  ⚠ texto cortado en: ' + clipped.join(' | '));
    console.log(`${p.file}.pdf  (${n} páginas)${overflow.length ? '  ⚠ desborde en páginas: ' + overflow.join(', ') : ''}`);
  }
  await browser.close();
})();
