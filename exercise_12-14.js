/* 12) Programa una función que determine si un número es primo (aquel que solo es divisible por sí mismo y 1) o no, pe. miFuncion(7) devolverá true */
// const numeroPrimo = (numero = undefined) => {
//   if (numero === undefined) return console.warn("No ingresó ningun numero");
//   if (typeof numero !== "number")
//     return console.error(`El valor ${numero} no es un numero.`);
//   if (numero === 0) return console.error("El numuero no puede ser 0.");
//   if (numero === 1) return console.error("El numuero no puede ser 1.");
//   if (Math.sign(numero) === -1)
//     return console.error("El numero no puede ser negativo.");
//   let divisible = false;
//   for (let i = 2; i < numero; i++) {
//     if (numero % i === 0) {
//       divisible = true;
//       break;
//     }
//   }
//   return divisible
//     ? console.info(`El numero ${numero}, no es primo`)
//     : console.info(`El numero ${numero}, si es primo`);
// };
// numeroPrimo();
// numeroPrimo("54");
// numeroPrimo(0);
// numeroPrimo(1);
// numeroPrimo(-21);
// numeroPrimo(21);
// numeroPrimo(13);

/* 13) Programa una función que determine si un número es par o impar, pe. miFuncion(29) devolverá Impar */
// const parEImpar = (numero = undefined) => {
//   if (numero === undefined) return console.warn("No ingresó ningun numero");
//   if (typeof numero !== "number")
//     return console.error(`El valor ${numero} no es un numero.`);
//   return numero % 2 === 0
//     ? console.info(`El numero ${numero} es par.`)
//     : console.info(`El numero ${numero} es impar.`);
// };
// parEImpar();
// parEImpar("45");
// parEImpar(8);
// parEImpar(7);
// parEImpar(-98);

/* 14) Programa una función para convertir grados Celsius a Fahrenheit y viceversa, pe. miFuncion(0,"C") devolverá 32°F */
// const convertirGrados = (grado = undefined, formula = undefined) => {
//   if (grado === undefined)
//     return console.warn("No ingresó ningun grado a convertir");
//   if (typeof grado !== "number")
//     return console.error(`El valor ${grado} no es un numero.`);
//   if (typeof formula === undefined)
//     return console.error("No ingresó el tipo de grado a convertir.");
//   if (typeof formula !== "string")
//     return console.error(`El valor ${formula} no es una cadena de texto.`);
//   if (formula.length !== 1 || !/(C|F)/.test(formula))
//     return console.error("Valor de formula incorrecto");
//   if (formula === "C") {
//     return console.info(`${grado}℃ = ${Math.round(grado * (9 / 5) + 32)}℉`);
//   } else if (formula === "F") {
//     return console.info(`${grado}℉ = ${Math.round((grado - 32) * (5 / 9))}℃`);
//   } else {
//     return console.log("Error XD");
//   }
// };
// convertirGrados();
// convertirGrados("");
// convertirGrados(2, "");
// convertirGrados(335, "F");
// convertirGrados(50, "C");

/* 15) Programa una función para convertir números de base binaria a decimal y viceversa, pe. miFuncion(100,2) devolverá 4 base 10 */

/* 16) Programa una función que devuelva el monto final después de aplicar un descuento a una cantidad dada, pe. miFuncion(1000, 20) devolverá 800 */

/* 17) Programa una función que dada una fecha válida determine cuantos años han pasado hasta el día de hoy, pe. miFuncion(new Date(1984,4,23)) devolverá 35 años (en 2020) */
