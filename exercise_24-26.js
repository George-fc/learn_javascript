/* 24) Programa una función que dado un arreglo de números devuelva un objeto con dos arreglos, el primero tendrá los numeros ordenados en forma ascendente y el segundo de forma descendiente, pe. miFuncion([7, 5,7,8,6]) devolverá { asc: [5,6,7,7,8], desc: [8,7,7,6,5] }*/
// const ordenarArreglo = (NumArray = undefined) => {
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
//     NumArray,
//     asc: NumArray.map((el) => el).sort(),
//     desc: NumArray.map((el) => el)
//       .sort()
//       .reverse(),
//   });
// };
// ordenarArreglo();
// ordenarArreglo({});
// ordenarArreglo([]);
// ordenarArreglo(["George"]);
// ordenarArreglo([7, 5, 7, 9, 6]);

/* 25) Programa una función que dado un arreglo de elementos, elimine los duplicados, pe. miFuncion(["x", 10, "x", 2, "10", 10, true, true]) devolverá ["x", 10, 2, "10", true]  */
// const eliminarDuplicados = (NumArray = undefined) => {
//   if (NumArray === undefined)
//     return console.warn("No ingresó un arreglo de numeros.");
//   if (!(NumArray instanceof Array))
//     return console.error("No ingresó un array.");
//   if (NumArray.length === 0)
//     return console.error("El arreglo no puede estar vacio.");
//   if (NumArray.length === 1)
//     return console.warn("El arreglo debe tener almenos 2 elementos.");
//   // return console.info({
//   //   original: NumArray,
//   //   sinDuplicado: NumArray.filter(
//   //     (value, index, self) => self.indexOf(value) === index
//   //   ),
//   // });
//   return console.info({
//     original: NumArray,
//     sinDuplicado: [...new Set(NumArray)],
//   });
// };
// eliminarDuplicados();
// eliminarDuplicados({});
// eliminarDuplicados(true);
// eliminarDuplicados([]);
// eliminarDuplicados([7]);
// eliminarDuplicados(["x", 10, "x", 2, "10", 10]);

/* 26) Programa una función que dado un arreglo de números obtenga el promedio, pe. promedio([9,8,7,6,5,4,3,2,1,0]) devolverá 4.5 */
// const promedio = (NumArray = undefined) => {
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
//     NumArray.reduce((total, num, index, NumArray) => {
//       total += num;
//       if (index === NumArray.length - 1) {
//         return `El promedio de ${NumArray.join(" + ")} es ${
//           total / NumArray.length
//         }`;
//       } else {
//         return total;
//       }
//     })
//   );
// };
// promedio();
// promedio(false);
// promedio([]);
// promedio(["hola"]);
// promedio([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);
