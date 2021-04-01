/* 1) Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFunción("Hola Mundo") devolverá 10 */
//   function contador(cadena = "") {
//   if (!cadena) {
//     console.warn("Por favor ingresa una cadena");
//   } else {
//     console.log(
//       `La cadena "${cadena}" tiene ${cadena.length} caracteres.`
//     );
//   }
// }
// contador();
// contador("buenos dias");
// const contador2 = (cadena = "") =>
//   !cadena
//     ? console.warn("Por favor ingresa una cadena")
//     : console.log(
//         `La cadena "${cadena}" tiene ${cadena.length} caracteres.`
//       );
// contador2("buenos noches");

// function miFuncion(pe) {
//   return console.log(pe.length);
// }
// miFuncion("Hola Mundo");

/* 2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. miFunción("Hola Mundo", 4) devolverá "Hola" */
// const recortarTexto = (cadena = "", longitud = undefined) =>
//   !cadena
//     ? console.warn("No ingresó una cadena")
//     : longitud === undefined
//     ? console.warn("No ingresaste la longitud para recortar el texto")
//     : console.info(cadena.slice(0, longitud));
// recortarTexto("Hola Mundo", 7);
// recortarTexto();
// recortarTexto("buenas tardes");
// recortarTexto("", 3);
// function miFuncion2(pe) {
//   return console.log(pe.substring(0, 4));
// }
// miFuncion2("Hola Mundo");

/* 3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe.
               miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'] */
// const cadenaArray1 = (cadena = "", separador = undefined) => {
//   !cadena
//     ? console.warn("No ingresó una cadena")
//     : separador === undefined
//     ? console.warn("No ingresó un separador")
//     : console.info(cadena.split(separador));
// };
// cadenaArray1("Hola que tal", " ");
// cadenaArray1();
// cadenaArray1("A,B,C,D,E");
// cadenaArray1("A,B,C,D,E", ",");
// function miFuncion3(pe, separador) {
//   let cadenaArray = pe.split(" ");
//   return console.log(cadenaArray);
// }
// miFuncion3("Hola que tal");

/* 4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo */
// const repetirTexto = (texto = "", numero = undefined) => {
//   if (!texto) return console.warn("No ingresó una cadena de texto");
//   if (numero === undefined)
//     return console.warn("No ingresó el numero a repetir");
//   if (numero === 0) return console.error("No puede ser 0");
//   if (Math.sign(numero) === -1)
//     return console.error("No puede ser numero negativo");
//   for (let i = 1; i <= numero; i++) console.log(`${texto}, ${i}`);
// };
// repetirTexto("Hola Mundo", 9);
// repetirTexto("Hola Mundo", 0);
// repetirTexto("Hola Mundo", -2);
// repetirTexto("", 20);
// repetirTexto("Hola cheto");

// console.log("hola");
// function miFuncion4(texto, x) {
//   for (let i = 0; i === x; i++) {
//     console.log(texto);
//   }
// }
// miFuncion4("Hola que tal", 33);
//hola
//buenas
function saludo() {
  alert("hola");
}
saludo();
