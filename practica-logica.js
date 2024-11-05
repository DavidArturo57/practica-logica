//*--------Ejercicio 1: Perfil de usuario--------
const usuario = prompt ("¿Cuál es tu nombre de usuario?");
const edad = prompt("¿Cuántos años tienes?");
const peliculas = prompt("Lista tus películas favoritas, separadas por comas:");

const moviesArray = peliculas.split(",").map(peli => peli.trim());

console.log(`Nombre de usuario: ${usuario}`);
console.log(`Edad: ${edad}`);
console.log("Mis películas favoritas:");

moviesArray.forEach(peli => {
    console.log(`The film "${peli}" is one of my favorites.`);
});

//*--------Ejercicio 2: Número más alto--------
const numbers = [];
for (let i = 0; i < 10; i++) {
    const num = parseFloat(prompt("Ingresa el número #" + (i + 1))); 
    numbers.push(num); 
}

console.log("Los números ingresados son: " + numbers);

const maxNumber = Math.max(...numbers);

console.log("El número más alto es: " + maxNumber);



