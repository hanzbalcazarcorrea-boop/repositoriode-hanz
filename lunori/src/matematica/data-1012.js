// Súper Mate · 10-12 años: fracciones, porcentajes, proporcionalidad, promedios, geometría, gráficos, decimales y lógica.
const bar = (name, n, color) => `<div style="display:flex;align-items:center;gap:3mm;margin:1.2mm 0"><span style="width:14mm;font-weight:700">${name}</span><span style="display:inline-block;height:5.5mm;width:${n * 9}mm;background:${color};border-radius:1.5mm"></span><span style="font-weight:700">${n}</span></div>`;

module.exports = {
  age: '10 a 12 años',
  slug: '10-12-anos',
  mode: 'adv',
  retos: [
    {
      title: 'El camino de los exploradores', skill: 'Entender el enunciado', img: 'club.jpg',
      lu: 'Lee el problema dos veces: la primera para entender la historia, la segunda para cazar los datos.',
      qs: [
        { t: 'prob', q: 'El Club de Exploradores recorrió 3/5 de un camino de 20 km el primer día, y el resto el segundo día. ¿Cuántos kilómetros recorrió el segundo día?', scaffold: true, a: '20 ÷ 5 = 4; 3 × 4 = 12 km el primer día. 20 − 12 = 8 km el segundo día.' },
        { t: 'choice', q: '¿Qué te preguntan en este problema?', o: ['cuánto recorrieron el primer día', 'cuánto recorrieron el segundo día', 'cuánto mide todo el camino'], a: 1 },
        { t: 'open', q: 'Explica con tus palabras qué significa «el resto» en este problema.', lines: 1, a: 'Lo que faltaba para completar el camino después del primer día.' },
      ],
      tip: 'Pídele que cuente el problema como si fuera una historia, sin números: «unos exploradores caminan una parte un día y lo que falta al día siguiente». Si la entiende, los números se acomodan solos.',
    },
    {
      title: 'Las zapatillas en oferta', skill: 'Porcentajes y descuentos', art: '🏷️',
      lu: 'El 25 % es la cuarta parte; el 50 %, la mitad; el 10 %, dividir entre 10. ¡Atajos de explorador!',
      qs: [
        { t: 'prob', q: 'Unas zapatillas cuestan S/ 120 y tienen 25 % de descuento. ¿Cuánto se paga?', scaffold: true, a: '25 % de 120 = 120 ÷ 4 = 30. 120 − 30 = S/ 90.' },
        { t: 'prob', q: 'En un aula de 40 alumnos, el 60 % prefiere fútbol. ¿Cuántos alumnos prefieren fútbol?', a: '10 % de 40 = 4; 60 % = 6 × 4 = 24 alumnos.' },
        { t: 'choice', q: '¿Qué conviene más?', o: ['una mochila de S/ 80 con 10 % de descuento', 'una mochila de S/ 75 sin descuento', 'cuestan lo mismo'], a: 0 },
      ],
      tip: 'Vayan al supermercado o miren un catálogo con ofertas y calculen juntos los descuentos. El porcentaje cobra sentido cuando se ahorra dinero de verdad.',
    },
    {
      title: 'Chicha para la familia', skill: 'Proporcionalidad', art: '🍇',
      lu: 'Si las personas aumentan, los ingredientes aumentan en la misma proporción. Busca cuánto va «para 1».',
      qs: [
        { t: 'prob', q: 'Para preparar chicha morada para 4 personas se usan 2 limones. ¿Cuántos limones se necesitan para 10 personas?', scaffold: true, a: '2 limones para 4 personas = medio limón por persona. 10 × 0,5 = 5 limones.' },
        { t: 'prob', q: 'Un carro avanza 60 km cada hora a la misma velocidad. ¿Cuántos kilómetros recorre en 2 horas y media?', a: '60 × 2 = 120; media hora = 30 km. 120 + 30 = 150 km.' },
        { t: 'tf', q: 'Marca V o F.', items: [['Si duplico las personas, duplico los ingredientes.', true], ['Si 1 pintor tarda 6 horas en pintar una pared, 2 pintores (al mismo ritmo) tardarán 12 horas.', false]] },
      ],
      tip: 'El segundo ítem del V o F es una trampa a propósito: con más pintores se tarda menos (proporcionalidad inversa). Conversen por qué no siempre «más es más».',
    },
    {
      title: 'La mochila de Nina', skill: 'Datos que sobran o faltan', img: 'club.jpg',
      lu: 'Los problemas de la vida real tienen datos de más. Un buen explorador elige solo los que necesita.',
      qs: [
        { t: 'choice', q: '«Zara compró 3 cuadernos y 2 lapiceros y pagó S/ 21 en total. ¿Cuánto costó cada lapicero?». ¿Se puede resolver?', o: ['Sí: S/ 3 cada uno', 'No: falta saber cuánto costó cada cuaderno', 'Sí: S/ 7 cada uno'], a: 1 },
        { t: 'prob', q: 'Nina tiene 11 años y pesa 38 kg. Su mochila pesa 4,5 kg. Se recomienda que la mochila no pese más del 10 % del peso del niño. ¿Su mochila pesa más de lo recomendado? ¿Por cuánto?', scaffold: true, a: '10 % de 38 = 3,8 kg. 4,5 − 3,8 = 0,7. Sí: pesa 0,7 kg (700 g) más de lo recomendado.' },
        { t: 'open', q: '¿Qué dato sobra en el problema de Nina?', lines: 1, a: 'Su edad (11 años).' },
      ],
      tip: 'Pesen de verdad su mochila y calculen su 10 %. Además de practicar porcentajes, puede que descubran que lleva peso de más.',
    },
    {
      title: 'Las notas de Bruno', skill: 'Promedios', art: '📊',
      lu: 'El promedio es «repartir en partes iguales»: suma todo y divide entre cuántos datos hay.',
      qs: [
        { t: 'prob', q: 'Bruno sacó estas notas en matemática: 14, 16, 18 y 12. ¿Cuál es su promedio?', scaffold: true, a: '14 + 16 + 18 + 12 = 60; 60 ÷ 4 = 15. Su promedio es 15.' },
        { t: 'prob', q: 'En 5 días, Lu leyó 12, 15, 9, 20 y 14 páginas. ¿Cuántas páginas leyó en promedio cada día?', a: '12 + 15 + 9 + 20 + 14 = 70; 70 ÷ 5 = 14 páginas.' },
        { t: 'prob', q: 'Reto: Bruno quiere un promedio de 16 con 5 notas. ¿Qué nota necesita sacar en la quinta?', a: '16 × 5 = 80; 80 − 60 = 20. Necesita un 20.' },
      ],
      tip: 'Calculen el promedio de cosas de la casa: minutos que tarda en vestirse cada mañana, goles por partido, horas de sueño de la semana. El promedio aparece en todos lados.',
    },
    {
      title: 'La chacra de Yaku', skill: 'Área y perímetro', art: '🌾',
      lu: 'Perímetro es el borde (lo que rodea). Área es la superficie (lo que se cubre). ¡No los confundas!',
      qs: [
        { t: 'prob', q: 'La familia de Yaku quiere cercar una chacra rectangular de 25 m de largo y 12 m de ancho. ¿Cuántos metros de cerca necesitan?', scaffold: true, a: '25 + 12 + 25 + 12 = 74. Necesitan 74 m de cerca (es el perímetro).' },
        { t: 'prob', q: 'Si quieren sembrar papa en toda la chacra, ¿cuántos metros cuadrados tienen para sembrar?', a: '25 × 12 = 300 m² (es el área).' },
        { t: 'choice', q: 'Para saber cuánta alfombra necesitas para cubrir tu cuarto, calculas…', o: ['el perímetro', 'el área', 'la altura'], a: 1 },
      ],
      tip: 'Midan juntos su cuarto con una cinta métrica y calculen el perímetro (para un borde decorativo) y el área (para una alfombra). Lo concreto hace la diferencia.',
    },
    {
      title: 'El club lector', skill: 'Leer gráficos', img: 'lu-lee.jpg',
      lu: 'En un gráfico de barras, mientras más larga la barra, mayor la cantidad. Lee el título y los números.',
      intro: `<b>Libros leídos en un mes por el Club de Exploradores</b>${bar('Zara', 6, '#F28C28')}${bar('Bruno', 3, '#6F8FD8')}${bar('Nina', 9, '#7CC596')}${bar('Lu', 12, '#9B86E0')}`,
      qs: [
        { t: 'open', q: '¿Quién leyó el doble de libros que Zara?', lines: 1, a: 'Lu: 12 = 2 × 6.' },
        { t: 'prob', q: '¿Cuántos libros leyeron entre todos? ¿Qué fracción del total leyó Nina?', a: '6 + 3 + 9 + 12 = 30 libros. Nina: 9/30 = 3/10.' },
        { t: 'choice', q: '¿Cuál es el promedio de libros leídos por explorador?', o: ['7,5', '7', '10'], a: 0 },
      ],
      tip: 'Busquen gráficos en el periódico o en un recibo de luz (consumo por mes). Pregúntale qué información le da el gráfico y qué conclusión sacaría.',
    },
    {
      title: 'Compras en el mercado', skill: 'Decimales con dinero', art: '🥔',
      lu: 'Con soles y céntimos, alinea la coma. Y piensa: S/ 2,50 es «dos soles con cincuenta».',
      qs: [
        { t: 'prob', q: 'Mamá compra 2 kg de papa a S/ 2,50 el kilo y medio kilo de queso a S/ 18 el kilo. Paga con S/ 20. ¿Cuánto recibe de vuelto?', scaffold: true, a: 'Papa: 2 × 2,50 = 5. Queso: 18 ÷ 2 = 9. Total: 14. Vuelto: 20 − 14 = S/ 6.' },
        { t: 'prob', q: 'Un pasaje cuesta S/ 1,50. Valeria toma el bus 2 veces al día, de lunes a viernes. ¿Cuánto gasta en pasajes a la semana?', a: '1,50 × 2 = 3 por día; 3 × 5 = S/ 15.' },
        { t: 'choice', q: 'Sin calcular exacto: 3 helados de S/ 3,90 cuestan aproximadamente…', o: ['S/ 9', 'S/ 12', 'S/ 39'], a: 1 },
      ],
      tip: 'Llévalo al mercado con una lista y un presupuesto: que calcule cuánto llevan gastado y cuánto sobra. Es la clase de decimales más útil que existe.',
    },
    {
      title: 'La carrera del club', skill: 'Problemas de lógica', img: 'zara.jpg',
      lu: 'En lógica, prueba ordenando las pistas una por una. Descarta lo que no puede ser.',
      qs: [
        { t: 'prob', q: 'Zara, Bruno y Nina corrieron una carrera. Pistas: Nina no llegó última. Bruno llegó antes que Nina. Zara no llegó primera. ¿En qué orden llegaron?', scaffold: true, a: 'Como Bruno llegó antes que Nina, Nina no fue primera; y no fue última: fue segunda. Bruno, primero. Zara, tercera.' },
        { t: 'prob', q: 'Tengo 3 monedas que suman S/ 9. Ninguna es de S/ 1. ¿Qué monedas son?', a: 'Una de S/ 5 y dos de S/ 2 (5 + 2 + 2 = 9).' },
        { t: 'open', q: 'Si hoy es miércoles, ¿qué día será dentro de 10 días? Explica cómo lo pensaste.', lines: 2, a: 'Sábado: en 7 días vuelve a ser miércoles, y 3 días después es sábado.' },
      ],
      tip: 'Los acertijos de lógica entrenan la misma habilidad que la comprensión lectora: leer con precisión cada palabra. Busquen más acertijos y resuélvanlos en familia.',
    },
    {
      title: '¡Ahora inventas tú!', skill: 'Invento mi problema', img: 'lu-piensa.jpg',
      lu: 'Un buen problema tiene historia, datos suficientes, una pregunta clara… y una respuesta realista.',
      qs: [
        { t: 'open', q: 'Inventa un problema con un descuento del 20 % y resuélvelo.', lines: 3, a: 'Ejemplo: «Un polo cuesta S/ 50 con 20 % de descuento. ¿Cuánto pago?». 20 % de 50 = 10; 50 − 10 = S/ 40.' },
        { t: 'open', q: 'Inventa un problema de dos pasos que use el área de un rectángulo.', lines: 3, a: 'Ejemplo: «Un patio mide 6 m × 4 m y cada m² de pintura cuesta S/ 5. ¿Cuánto cuesta pintarlo?». 24 m² × 5 = S/ 120.' },
        { t: 'prob', q: 'Intercambia tu problema con alguien de tu familia y resuelve el suyo aquí.', a: 'Respuesta libre.' },
      ],
      tip: 'Revisen juntos si sus problemas «funcionan»: ¿tienen todos los datos?, ¿la respuesta es realista? Esa revisión es pensamiento matemático de alto nivel.',
    },
  ],
};
