//1. Intro JS
//Ejercicio 2
let a = 5;
let b = 10;
console.log("La suma de a y b es:", a + b)

//Ejercicio 3

let nombre = prompt("¿Cual es tu nombre?")
console.log("Hola   " + nombre + ", bienvenido")


//2. Operadores lógicos y condicionales
//Ejercicio 1
let n1 = 11;
let n2 = 14;
let n3;
if (n1 > n2) {
  n3 = n1;
} else {
  n3 = n2;
}
console.log("El mayor de los números es: " + n3)

//Ejercicio 2

let ingresado = prompt("Ingrese un numero e indicaré si es par o impar ")
let numero = parseInt(ingresado)
if (numero % 2 == 0) {
  console.log("El numero " + numero + "es par")
} else {
  console.log("El numero " + numero + ", es impar")
}


//3. Operadores de asignación y bucles
//Ejercicio 1
let inicial = 10;
while (inicial > 0) {
  console.log(inicial)
  inicial--;
}

//Ejercicio 2

let valor;
do {
  valor = prompt("Ingresa un numero mayor a 100:")
  valor = parseInt(valor)
} while (valor < 100)
console.log("Ingresaste un número mayor a 100: " + valor)


//4. Funciones de JavaScript
//Ejercicio 1
function esPar(s) {
  return s % 2 == 0;
}
//pruebas
console.log("El numero 8 es par: " + esPar(8))
console.log("El numero 17 es impar: " + esPar(17))

//Ejercicio 2
function convertirCelciusFarenheit(c) {
  let f = c * 1.8 + 32;
  return f;
}
console.log("30°C son equivalentes a " + convertirCelciusFarenheit(30) + "°F")

