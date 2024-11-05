//*--------Ejercicio 1: Perfil de usuario--------
const usuario = prompt ("¿Cuál es tu nombre de usuario?");
const edad = prompt("¿Cuántos años tienes?");
const peliculas = prompt("Lista tus películas favoritas, separadas por comas:");

const moviesArray = peliculas.split(",").map(peli => peli.trim());

console.log(`Nombre de usuario: ${usuario}`);
console.log(`Edad: ${edad}`);
console.log("Mis películas favoritas:");


if (moviesArray.length === 0 || moviesArray.every(peli => peli === "")) {
    console.log("No se han ingresado películas.");
} else {
    moviesArray.forEach(peli => {
        console.log(`The film "${peli}" is one of my favorites.`);
    });
}

//*--------Ejercicio 2: Número más alto--------
const numbers = [];
for (let i = 0; i < 10; i++) {
    const num = parseFloat(prompt("Ingresa el número #" + (i + 1))); 
    numbers.push(num); 
}

console.log("Los números ingresados son: " + numbers);

const maxNumber = Math.max(...numbers);

console.log("El número más alto es: " + maxNumber);

//*----------Ejercicio 3: Alarma----------
const segundos = prompt("¿Cuántos segundos quieres esperar hasta que se active la alarma?");

setTimeout(() => {
    console.log(`Time for bed after ${segundos} seconds`);
}, segundos * 1000);

//*---------Ejercicio 4: Palíndromo.--------
// Pedir al usuario una palabra o frase
const input = prompt("Introduce una palabra o frase:");

// Limpiar la entrada: eliminar espacios, puntuación y convertir a minúsculas
const cleanedInput = input.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

// Comparar si la cadena limpia es igual a su reverso
if (cleanedInput === cleanedInput.split("").reverse().join("")) {
    console.log("¡Es un palíndromo!");
} else {
    console.log("No es un palíndromo.");
}

//*---------Ejercicio 5: Factorial.-----------
// Función recursiva para calcular el factorial
function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;  // Caso base: el factorial de 0 y 1 es 1
    } else {
        return n * factorial(n - 1);  // Llamada recursiva
    }
}

let n = prompt("Introduce un número entero :");

if (n >= 1 && n <= 20) {
    // Calcular y mostrar el factorial
    console.log("El factorial de " + n + " es " + factorial(n));
} else {
    console.log("Por favor, ingresa un número en el rango válido (1 <= n <= 20).");
}

//*---------Ejercicio 6: Matriz plana.-----------
const multiDim = [1, [2, 3, [4, 5, [6]]]];

function aplanar(a) {
  const result = [];
  
  for (let i = 0; i < a.length; i++) {
    if (Array.isArray(a[i])) {
      result.push(...aplanar(a[i]));  
    } else {
      result.push(a[i]);  
    }
  }

  return result;
}

const array = aplanar(multiDim);
console.log("Resultado matriz:",array);