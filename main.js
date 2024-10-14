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

//5. Objetos en JavaScript
//Ejercicio 1
let persona = {
  nombre: 'Analia',
  edad: 30,
  ciudad: 'Mendoza',
  cambiarCiudad: function (nuevaCiudad) {
    this.ciudad = nuevaCiudad;
  }
};
persona.cambiarCiudad('San Rafael')
//Propiedades acrualizadas
console.log("Persona: " + persona.nombre + ", Edad: " + persona.edad + ", Ciudad: " + persona.ciudad);

//Ejercicio 2
let libro = {
  titulo: "El  Quijote",
  autor: 'Miguel de Cervantes Saavedra',
  anio: 1605,
  esAntiguo: function () {
    let anioActual = new Date().getFullYear();
    let aniosDesdePublicacion = anioActual - this.anio;
    return aniosDesdePublicacion > 10;
  }
};
console.log("El libro " + libro.titulo + " es antiguo : " + libro.esAntiguo());

//6. Arrays
//Ejercicio 1
let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let numerosMultiplicados = numeros.map((elemento) => elemento * 2);

console.log("Números originales:", numeros);
console.log("Números múltiplicados por 2:", numerosMultiplicados);

//Ejercicio 2
let pares = [];
for (let i = 1; i <= 20; i++) {
  if (i % 2 === 0) {
    pares.push(i);
  }

  if (pares.length === 10) {
    break;
  }
}

console.log("Primeros diez números pares:", pares);

//7. Introducciona DOM
//Ejercicio 1
function cambiarColorAParrafos() {
  let parrafos = document.querySelectorAll('p');
  parrafos.forEach(function (parrafo) {
    parrafo.style.color = 'blue';
  });
}

const cambiarColorBtn = document.getElementById("cambiarColorBtn");
cambiarColorBtn.addEventListener('click', () => {
  cambiarColorAParrafos();
});

//Ejercicio 2
function mostrarAlerta() {
  let ingreso = document.getElementById('ingreso').value;
  alert("Has ingresado: " + ingreso)
}
const mostrarAlertaBtn = document.getElementById('mostrarAlertaBtn');
mostrarAlertaBtn.addEventListener('click', () => {
  mostrarAlerta();
});

//8.Eventos en DOM
//Ejercicio 1

function mostrarTextoEnConsola(event) {
  console.log(event.target.textContent);
}

document.addEventListener('DOMContentLoaded', function () {
  let lista = document.getElementById('miLista');
  let elementos = lista.getElementsByTagName('li');

  for (let i = 0; i < elementos.length; i++) {
    elementos[i].addEventListener('click', mostrarTextoEnConsola);
  }
});

//Ejercicio 2
// Función para deshabilitar el campo de texto
function deshabilitarCampoTexto() {
  document.getElementById('miCampoTexto').disabled = true;
}

// Función para habilitar el campo de texto
function habilitarCampoTexto() {
  document.getElementById('miCampoTexto').disabled = false;
}

const habilitar = document.getElementById("habilitarBtn");
const deshabilitar = document.getElementById("deshabilitarBtn");
habilitar.addEventListener('click', () => {
  habilitarCampoTexto()
});
deshabilitar.addEventListener('click', () => {
  deshabilitarCampoTexto()
})

//9. LocalStorage
//Ejercicio 1

const guardarCorreo = () => {
  const correo = document.getElementById("correo").value;
  localStorage.setItem("correo", JSON.stringify(correo));
  mostrarCorreoGuardado();
}

const mostrarCorreoGuardado = () => {
  let correoGuardado = localStorage.getItem("correo");
  let correoDiv = document.getElementById("correoGuardado");
  let eliminarBtn = document.getElementById("eliminarBtn");

  if (correoGuardado) {
    correoDiv.textContent = 'Correo guardado: ' + correoGuardado;
    eliminarBtn.style.display = 'inline-block';
  } else {
    correoDiv.textContent = '';
    eliminarBtn.style.display = 'none';
  }
}

const eliminarCorreo = () => {
  localStorage.removeItem('correo');
  mostrarCorreoGuardado();
}


document.getElementById("form").addEventListener('submit', function (event) {
  event.preventDefault();
  guardarCorreo();
});

document.getElementById("eliminarBtn").addEventListener('click', () => {
  eliminarCorreo();
})
document.addEventListener('DOMContentLoaded', mostrarCorreoGuardado);
