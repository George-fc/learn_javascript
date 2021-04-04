/* 18) Programa una función que dada una cadena de texto cuente el número de vocales y consonantes, pe. miFuncion("Hola Mundo") devuelva Vocales: 4, Consonantes: 5 */
// const contarCadena = (cadena = "") => {
//   if (!cadena) return console.warn("La cadena no puede estar vacia");
//   if (typeof cadena !== "string")
//     return console.error("No ingresó una cadena de texto.");
//   let vocales = 0,
//     consonantes = 0;
//   cadena = cadena.toLowerCase();
//   for (let letra of cadena) {
//     if (/[aeiouáéíóú]/.test(letra)) vocales++;
//     if (/[bcdfghjklmnñpqrstvwxyz]/.test(letra)) consonantes++;
//   }
//   return console.info({
//     cadena,
//     consonantes,
//     vocales,
//   });
// };
// contarCadena();
// contarCadena(2);
// contarCadena("Hola Mundo");
// contarCadena(
//   "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus libero error omnis quo? Maiores iste temporibus minus iusto fugiat provident voluptatum obcaecati at, inventore dignissimos ab ipsam laborum consequatur modi."
// );
/* 19) Programa una función que valide que un texto sea un nombre válido, pe. miFuncion("Jonathan MirCha") devolverá verdadero */
// const validarNombre = (nombre = "") => {
//   if (!nombre) return console.error("El nombre no puede estar vacio");
//   if (typeof nombre !== "string")
//     return console.error("No ingresó una cadena de texto.");
//   let expReg = /^[A-Za-zÑñÁÉÍÓÚáéíóú\s]+$/g.test(nombre);
//   return expReg
//     ? console.info(`${nombre}, es un nombre valido.`)
//     : console.info(`${nombre}, no un nombre valido.`);
// };
// validarNombre();
// validarNombre(3);
// validarNombre("George Flores Coca");
// validarNombre("George Flores Coca, 17");
/* 20) Programa una función que valide que un texto sea un email válido, pe. miFuncion("jonmircha@gmail.com") devolverá verdadero */
// const validarEmail = (email = "") => {
//   if (!email) return console.error("El email no puede estar vacio");
//   if (typeof email !== "string")
//     return console.error("No ingresó una cadena de texto.");
//   let expReg = /[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/i.test(
//     email
//   );
//   return expReg
//     ? console.info(`${email}, es un email valido.`)
//     : console.info(`${email}, no un email valido.`);
// };
// validarEmail();
// validarEmail(3);
// validarEmail("george,flores,coca@gmail");
// validarEmail("georgeflorescoca@gmail.com");

//////////////EJERCICIO 19 + 20 /////////////////////
// const validarPatron = (cadena = "", patron = undefined) => {
//   if (!cadena) return console.error("El campo no puede estar vacio.");
//   if (typeof cadena !== "string")
//     return console.error(`El valor ${cadena} no es una cadena de texto`);
//   if (patron === undefined)
//     return console.warn("No ingresó el patron a evaluar");
//   if (!(patron instanceof RegExp))
//     return console.warn(
//       `El valor ${patron} no es una expresion regular valida`
//     );
//   let expReg = patron.test(cadena);
//   return expReg
//     ? console.info(`${cadena}, es una cadena con patron valido.`)
//     : console.warn(`${cadena}, es un cadena con patron No valido.`);
// };
// validarPatron();
// validarPatron("a");
// validarPatron({});
// validarPatron("holi", "que tal");
// validarPatron("holi", 123);
// //Nombre
// validarPatron("George Flores", /^[A-Za-zÑñÁÉÍÓÚáéíóú\s]+$/g);
// validarPatron("George Flores19", /^[A-Za-zÑñÁÉÍÓÚáéíóú\s]+$/g);
// //Email
// validarPatron(
//   "GeorgeFloresCoca@gmail",
//   new RegExp(
//     "/[a-z0-9]+(.[_a-z0-9]+)*@[a-z0-9-]+(.[a-z0-9-]+)*(.[a-z]{2,15})/",
//     "i"
//   )
// );
// validarPatron(
//   "GeorgeFloresCoca@gmail",
//   new RegExp(
//     "[a-z0-9]+(.[_a-z0-9]+)*@[a-z0-9-]+(.[a-z0-9-]+)*(.[a-z]{2,15})",
//     "i"
//   )
// );
