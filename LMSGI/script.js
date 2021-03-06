// ETIQUETAS DEL DOM PARA EJERCICIOS
const container = document.querySelector(".container");
const h1 = document.createElement("h1");
container.appendChild(h1);
// 1. Desarrolla un script que acepte un número empleando la función prompt y muestre si dicho número es o no es par.

/* let numero = prompt("Escriba un numero.");
numero = parseInt(numero);
if (!numero) {
  console.error("No ingreso un valor valido.");
} else if (numero % 2 === 0) {
  document.write(`El numero ${numero} es Par`);
} else if (numero % 2 === 1) {
  document.write(`El numero ${numero} es Impar`);
} else {
  console.error("No acepto la solicitud.");
} */

// 2. Crea un script que muestre los números enteros del 1 al 30.

/* let numero = 31;
for (i = 1; i < numero; i++) {
  document.write(`${i}<br>`);
} */

// 3. Crea un script que muestre los números enteros del 30 al 1.

/* let numero = 0;
for (i = 30; i > numero; i--) {
  document.write(`${i}<br>`);
} */

// 4. Crea un script que muestre los números enteros pares entre 1 y 60.

/* let numero = 60;
for (i = 2; i < numero; i += 2) {
  document.write(`${i}<br>`);
} */

// 5. Crea un script que muestre los números enteros múltiplos de 3 que existen entre 1 y 90.

/* let numero = 90;
for (i = 3; i < numero; i += 3) {
  document.write(`${i}<br>`);
} */

// 6. Crea un script que pida dos números. El primer número indicará la cantidad de valores que se deben mostrar, y el segundo número hará de divisor. El script empezará desde el valor 1, y en orden creciente, mostrará los números enteros que son divisibles por el segundo valor introducido por el usuario, es decir, los múltiplos de ese número. Terminará cuando haya mostrado la cantidad de números pedidos.

/* h1.innerHTML = "Mostrar Multiplos"; 
const mostrarMultiplos = (cantidad, divisor) => {
  if (!cantidad) return console.error("No ingreso ningun valor de cantidad.");
  if (typeof cantidad !== "number")
    return console.warn("No ingreso un numero de cantidad");
  if (!divisor) return console.error("No ingreso ningun valor divisor.");
  if (typeof divisor !== "number")
    return console.warn("No ingreso un numero divisor");
  document.write(`Hay que mostrar ${cantidad} multiplos de ${divisor} <br>`);
  let multiplo = divisor;
  for (i = 0; i < cantidad; i++) {
    document.write(`${divisor} `);
    divisor += multiplo;
  }
};
mostrarMultiplos(10, 3); */

// 7. Escribe un documento HTML empleando JavaScript que pida un número en una ventana emergente y muestre el mensaje ¡Hola mundo! tantas veces como indique ese número:

/* h1.innerHTML = "Mostrar un mensaje ";
let numero = prompt("Escriba un numero");
numero = parseInt(numero);
let frase = prompt("Escriba la frase a repetir");
if (!numero) {
  console.warn("No ingreso ningun numero.");
} else if (!frase) {
  console.warn("No ingreso ninguna frase.");
}
for (i = 0; i < numero; i++) {
  123;
  document.write(`${i + 1}. ${frase} <br>`);
} */

// 8. Escribe un documento HTML empleando JavaScript que pida un número en una ventana emergente y una cadena de caracteres en otra, y muestre esa cadena de caracteres tantas veces como indique ese número:Debes comprobar que el usuario no pulsa cancelar ni en la introducción del número ni en la introducción de la cadena.En ese caso debes mostrar el mensaje "El usuario canceló la acción".

/* h1.innerHTML = "Mostrar un mensaje ";
let numero = prompt("Escriba un numero");
let frase = prompt("Escriba la frase a repetir");
if (numero == "") console.warn("No puede haber campos vacios");
numero = parseInt(numero);
if (!numero) console.warn("No ingreso un numero correcto");
if (numero == undefined || frase == undefined)
  console.error("El usuario canceló la acción");
if (frase == "") console.warn("No puede haber campos vacios");

for (i = 0; i < numero; i++) {
  123;
  document.write(`${i + 1}. ${frase} <br>`);
} */

// 9. Escribe un documento HTML empleando JavaScript que muestre en una lista ordenada los números del 1 al 20. La lista la debes generar con JavaScript, escribiendo las etiquetas HTML correspondientes (<ol>, <li>, …).

/* h1.innerHTML = "Mostrar una lista ordenada";
let numero = 20;
document.write(`<ol>`);
for (var i = 1; i <= numero; i++) {
  document.write(`<li>Numero: ${i}<br></li>`);
}
document.write(`</ol>`); */

// 10. Escribe un documento HTML empleando JavaScript que pida un número en una ventana emergente y muestre en una lista ordenada los números del 1 hasta ese número. La lista la debes generar con JavaScript, escribiendo las etiquetas HTML correspondientes (<ol>, <li>, …).

/* h1.innerHTML = "Mostrar una lista ordenada";
let numero = prompt("Escribe un numero.");
if (numero == "") console.warn("No puede haber campos vacios");
numero = parseInt(numero);
if (!numero) console.warn("No ingreso un numero correcto");
document.write(`<ol>`);
for (let i = 1; i <= numero; i++) {
  document.write(`<li>Numero: ${i}<br></li>`);
}
document.write(`</ol>`); */

// 11. Escribe un documento HTML empleando JavaScript que pida un número en una ventana emergente y muestre en una tabla, una lista ordenada con los números impares del 1 hasta ese número, y una lista no ordenada con los números pares del 1 hasta ese número. Debes crear la tabla al tiempo que escribes el contenido, empleando las etiquetas HTML correspondientes (<table>, <tr>, <td>, <ol>, <ul>, <li>, …).

/* h1.innerHTML = "Mostrar una tabla con una lista ordenada y la otra no ordenada";
let numero = prompt("Escribe un numero.");
if (numero == "") console.warn("No puede haber campos vacios");
numero = parseInt(numero);
if (!numero) console.warn("No ingreso un numero correcto");

// IMPARES
document.write(`<table><tr><td><ol>`);
for (let i = 1; i <= numero; i++) {
  if (i % 2 === 1) {
    document.write(`<li>Numero: ${i}<br></li>`);
  }
}
document.write(`</ol></td>`);
// PARES
document.write(`<td><ol>`);
for (let i = 1; i <= numero; i++) {
  if (i % 2 === 0) document.write(`<li>Numero: ${i}<br></li>`);
}
document.write(`</ol></td></table>`);
// TABLE STYLES
const head = document.querySelector("head");
const styles = document.createElement("style");
styles.innerHTML = `td {
  border: 1px black solid;
  min-width: 250px;
}`;
head.appendChild(styles); */

// 12. Escribe un documento HTML empleando JavaScript que pida un número en una ventana emergente y muestre en una tabla, los números del 1 hasta ese valor, en filas de cinco celdas cada una, de forma que los valores pares aparezcan con el fondo en verde y los impares con el fondo en rojo.
// !!!!!!!!!!!!!!!!! PENDIENTE DE ARREGLAR !!!!!!!!!!!!!!!!!!!!
// TABLE STYLES
/* const head = document.querySelector("head");
const styles = document.createElement("style");
styles.innerHTML = `td {
  border: 1px black solid;
  margin: 0px;
  padding: 0px;
  min-width: 50px;
}
.green {
  background-color: green
}
.red {
  background-color: red
}
`;
head.appendChild(styles);

let celdas = 5;
document.write(`<table><tr>`);
for (let i = 1; i <= numero; i++) {
  if (i <= celdas) {
    if (i % 2 === 1) document.write(`<td class="red">${i}</td>`);
    else document.write(`<td class="green">${i}</td>`);
  }
}
document.write(`</tr>`);
celdas += 5;
document.write(`<tr>`);
for (let i = 6; i <= numero; i++) {
  if (i <= celdas) {
    if (i % 2 === 1) document.write(`<td class="red">${i}</td>`);
    else document.write(`<td class="green">${i}</td>`);
  }
}
document.write(`</tr>`);

document.write(`</table>`); */

// 13. Crea un script que muestre los números enteros del 1 al 5, con sus secuencias anteriores:
// !!!!!!!!!!!!!!!!! PENDIENTE DE ARREGLAR !!!!!!!!!!!!!!!!!!!!
/* let numero = 5;
let arrayNum = [];
for (let i = numero; i > 0; i--) {
  arrayNum.push(numero);
  numero--;
}
for (element of arrayNum) {
  document.write(arrayNum.sort());
  document.write(`<br>`);
}
 */
// 14. Escribe un documento HTML empleando JavaScript que muestre la siguiente "pirámide" de números:

//15. Modifica el ejercicio anterior para que pida en una ventana emergente un número para generar posteriormente una pirámide en función del número introducido:
