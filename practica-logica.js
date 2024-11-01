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


