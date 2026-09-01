// ============================================================
// TEXTOS COMPLETOS DE NORMATIVA
// ============================================================
// Cómo añadir una ley nueva:
// 1. Copia un bloque { id, title, text } completo (incluida la coma final).
// 2. Pega el texto de la ley TAL CUAL dentro de las comillas invertidas ` `.
//    No hace falta limpiarlo mucho: el buscador trocea por "Artículo X"
//    automáticamente, así que basta con que el texto conserve la palabra
//    "Artículo" delante de cada número de artículo.
// 3. Guarda el archivo y sube este mismo leyes-texto.js a GitHub Pages
//    junto al index.html. No necesitas tocar nada más.
//
// Cuanto más texto añadas aquí, mejor podrá citar el asistente. Puedes
// empezar solo con las normas que más preguntan tus opositores
// (LOMLOE, LEEX, Decreto 107/2022 Primaria, Decreto 110/2022 ESO...).

const LAW_TEXTS = [
  {
    id: 'ejemplo',
    title: 'PLANTILLA DE EJEMPLO — bórrame o sustitúyeme',
    text: `Artículo 1. Objeto.
Pega aquí el contenido real del artículo 1 de la ley que quieras añadir.

Artículo 2. Ámbito de aplicación.
Y aquí el del artículo 2, y así sucesivamente. Puedes pegar la ley entera
de una vez: el separador "Artículo" ya divide el texto automáticamente.`
  },

  // {
  //   id: 'lomloe',
  //   title: 'Ley Orgánica 3/2020, de 29 de diciembre (LOMLOE)',
  //   text: `... texto completo pegado aquí ...`
  // },

];
