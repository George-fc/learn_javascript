/* 5) Programa una función que invierta las palabras de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá "odnuM aloH" */
// const invertir = (texto = "") =>
//   !texto
//     ? console.error("No ingresó una cadena")
//     : texto === undefined
//     ? console.warn("No ingresó un texto")
//     : console.log(texto.split("").reverse().join(""));
// invertir("Hola Mundo");

/* 6) Programa una función para contar el número de veces que se repite una palabra en un texto largo, pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2 */
// const contadorTexto = (cadena = "", texto = "") => {
//   if (!cadena) return console.warn("No ingresó una cadena.");
//   if (!texto) return console.warn("No ingresó la cadena que se repite.");
//   let i = 0,
//     contador = 0;
//   while (i !== -1) {
//     i = cadena.indexOf(texto, i);
//     if (i !== -1) {
//       i++;
//       contador++;
//     }
//   }
//   return console.info(`La palabra ${texto} se repite ${contador} veces.`);
// };
// contadorTexto();
// contadorTexto("hola mundo hola mundo");
// contadorTexto("hola mundo hola mundo adios mundo", "mundo");

/* 7) Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true */
// const validarTexto = (cadena = "") => {
//   if (!cadena) return console.warn("No ingresó una cadena.");
//   cadena = cadena.toLowerCase();
//   let alReves = cadena.split("").reverse().join("");
//   return cadena === alReves
//     ? console.info(
//         `Si es palíndromo, palabra original ${cadena}, palabra revertida ${alReves}`
//       )
//     : console.info(
//         `No es palíndromo, palabra original ${cadena}, palabra revertida ${alReves}`
//       );
// };
// validarTexto();
// validarTexto("hola");
// validarTexto("Salas");
// validarTexto("RoDaDoR");
/* 8) Programa una función que elimine cierto patrón de caracteres de un texto dado, pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5 */
// const eliminarCaracteres = (texto = "", patron = "") =>
//   !texto
//     ? console.warn("No ingresó un texto")
//     : !patron
//     ? console.warn("No ingresó un patron")
//     : console.info(texto.replace(new RegExp(patron, "ig"), ""));
// eliminarCaracteres();
// eliminarCaracteres("xyz1, xyz2, xyz3, xyz4 y xyz5");
// eliminarCaracteres("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz");
// eliminarCaracteres(
//   "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius laboriosam modi tempore labore similique praesentium ab eveniet! Expedita necessitatibus aliquid quam debitis iste, explicabo maiores consectetur, rerum, in quaerat minus.",
//   "[a-t]"
// );
