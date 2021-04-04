/* 21) Programa una función que dado un array numérico devuelve otro array con los números elevados al cuadrado, pe. mi_funcion([1, 4, 5]) devolverá [1, 16, 25] */
// const numearoAlCuadrado = (NumArray = undefined) => {
//   if (NumArray === undefined)
//     return console.warn("No ingresó un arreglo de numeros.");
//   if (!(NumArray instanceof Array))
//     return console.error("No ingresó un array.");
//   if (NumArray.length === 0)
//     return console.error("El arreglo no puede estar vacio.");
//   for (let num of NumArray) {
//     if (typeof num !== "number")
//       return console.error(`El valor "${num}" no es un numero.`);
//   }
//   const newArray = NumArray.map((el) => el * el);
//   return console.info(
//     `Arreglo original ${NumArray}, arreglo elevado al cuadrado.${newArray}.`
//   );
// };
// numearoAlCuadrado();
// numearoAlCuadrado(true);
// numearoAlCuadrado({});
// numearoAlCuadrado([]);
// numearoAlCuadrado([1, "2", 6]);
// numearoAlCuadrado([1, 4, 8]);

/* 22) Programa una función que dado un array devuelva el número mas alto y el más bajo de dicho array, pe. miFuncion([1, 4, 5, 99, -60]) devolverá [99, -60] */
// const arrayMinMax = (NumArray = undefined) => {
//   if (NumArray === undefined)
//     return console.warn("No ingresó un arreglo de numeros.");
//   if (!(NumArray instanceof Array))
//     return console.error("No ingresó un array.");
//   if (NumArray.length === 0)
//     return console.error("El arreglo no puede estar vacio.");
//   for (let num of NumArray) {
//     if (typeof num !== "number")
//       return console.error(`El valor "${num}" no es un numero.`);
//   }
//   return console.info(
//     `Arrray original: ${NumArray}\nValor mayor: ${Math.max(
//       ...NumArray
//     )},\nValor menor: ${Math.min(...NumArray)}`
//   );
// };
// arrayMinMax();
// arrayMinMax("");
// arrayMinMax([]);
// arrayMinMax([12, 3, true]);
// arrayMinMax([1, 4, 5, 99, -60]);

/* 23) Programa una función que dado un array de números devuelva un objeto con 2 arreglos en el primero almacena los números pares y en el segundo los impares, pe. miFuncion([1,2,3,4,5,6,7,8,9,0]) devolverá {pares: [2,4,6,8,0], impares: [1,3,5,7,9]} */

// const separarParEImpar = (NumArray = undefined) => {
//   if (NumArray === undefined)
//     return console.warn("No ingresó un arreglo de numeros.");
//   if (!(NumArray instanceof Array))
//     return console.error("No ingresó un array.");
//   if (NumArray.length === 0)
//     return console.error("El arreglo no puede estar vacio.");
//   for (let num of NumArray) {
//     if (typeof num !== "number")
//       return console.error(`El valor "${num}" no es un numero.`);
//   }
//   return console.info({
//     par: NumArray.filter((num) => num % 2 === 0),
//     impar: NumArray.filter((num) => num % 2 === 1),
//   });
// };
// separarParEImpar();
// separarParEImpar("");
// separarParEImpar([]);
// separarParEImpar([3, 7, false]);
// separarParEImpar([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);
