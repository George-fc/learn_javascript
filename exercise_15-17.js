/* 15) Programa una función para convertir números de base binaria a decimal y viceversa, pe. miFuncion(100,2) devolverá 4 base 10 */
// const convertirBase = (numero = undefined, base = undefined) => {
//   if (numero === undefined) return console.warn("No ingresó ningun numero");
//   if (typeof numero !== "number")
//     return console.error(`El primer valor ${numero} no es un numero.`);
//   if (base === undefined) return console.warn("No ingreso la base a convertir");
//   if (typeof base !== "number")
//     return console.error(`El segundo valor ${base} no es un numero.`);
//   if (base === 2) {
//     return console.info(
//       `${numero} base ${base} = ${parseInt(numero, base)} base 10`
//     );
//   } else if (base === 10) {
//     return console.info(
//       `${numero} base ${base} = ${numero.toString(2)} base 2`
//     );
//   } else {
//     return console.error("El tipo de base");
//   }
// };
// convertirBase();
// convertirBase(100);
// convertirBase("777");
// convertirBase(100, "");
// convertirBase(255, 10);
// convertirBase(11000000, 2);

/* 16) Programa una función que devuelva el monto final después de aplicar un descuento a una cantidad dada, pe. miFuncion(1000, 20) devolverá 800 */
// const descuentoDeNumero = (monto = undefined, descuento = 0) => {
//   if (monto === undefined) return console.warn("No ingresó ningun numero");
//   if (typeof monto !== "number")
//     return console.error(`El valor de monto no es un numero.`);
//   if (monto === 0) return console.warn("El monto no puede ser 0.");
//   if (Math.sign(monto) === -1) console.error("El monto no puede ser negativo.");
//   if (descuento === undefined)
//     return console.warn("No ingresó el numero a descontar.");
//   if (typeof descuento !== "number")
//     return console.error(`El valor a descontar no es un numero.`);
//   if (Math.sign(descuento) === -1)
//     return console.error("El descuento no puede ser negativo.");
//   return console.info(
//     `${monto} - ${descuento}% = ${monto - (monto * descuento) / 100}`
//   );
// };
// descuentoDeNumero();
// descuentoDeNumero("");
// descuentoDeNumero(0, "");
// descuentoDeNumero(4, "");
// descuentoDeNumero(-9, "");
// descuentoDeNumero(9, -8);
// descuentoDeNumero(1000, 20);
// descuentoDeNumero(1000, 25);
/* 17) Programa una función que dada una fecha válida determine cuantos años han pasado hasta el día de hoy, pe. miFuncion(new Date(1984,4,23)) devolverá 35 años (en 2020) */
const calcularAnios = (fecha = undefined) => {
  if (fecha === undefined) return console.warn("No ingresó la fecha");
  if (!(fecha instanceof Date))
    return console.error("El valor ingresado no es una fecha valida");
  let hoyMenosFecha = new Date().getTime() - fecha.getTime(),
    aniosEnMS = 1000 * 60 * 60 * 24 * 365,
    aniosHumanos = Math.floor(hoyMenosFecha / aniosEnMS);
  return Math.sign(aniosHumanos) === -1
    ? console.info(
        `Faltan ${Math.abs(aniosHumanos)} años para el ${fecha.getFullYear()}`
      )
    : Math.sign(aniosHumanos) === 1
    ? console.info(
        `Han pasado ${aniosHumanos} años desde ${fecha.getFullYear()}.`
      )
    : console.info(`Estamos en el año actual ${fecha.getFullYear()}.`);
};
calcularAnios();
calcularAnios("");
calcularAnios({});
calcularAnios(false);
calcularAnios(new Date());
calcularAnios(new Date(1984, 4, 23));
calcularAnios(new Date(1484, 4, 23));
calcularAnios(new Date(2484, 4, 23));
