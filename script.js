console.log("Hola Mundo");
console.log("Braulio");
console.log(2026);

const nombreEmpresa = "Gymfit";
let nombreCliente = "Braulio";
let edad = 37;
let peso = 130;
let altura = 1.80;

console.log("Empresa =", nombreEmpresa);
console.log("Nombre =", nombreCliente)
console.log("Edad =", edad);
console.log("Peso =", peso);
console.log("Altura =", altura);

let numero1 = 20;
let numero2 = 5;

console.log("Suma:", numero1 + numero2);
console.log("Resta:", numero1 - numero2);
console.log("Multiplicacion:", numero1 * numero2);
console.log("Division:", numero1 / numero2);

console.log(10 + 5 * 2);
console.log((10 + 5) * 2);

let imc = peso / (altura * altura);

console.log("IMC de:", nombreCliente, "es:", imc.toFixed(2));

if (imc < 18.5) {
    console.log("Bajo peso");
} else if (imc < 25) {
    console.log("Peso normal");
} else if (imc < 30) {
    console.log("Sobrepeso");
} else {
    console.log("Obesidad");
}

function saludar(nombre) {
    console.log("Bienvenido", nombre);
}

saludar("Braulio");

function presentarCliente(nombre, edad) {
    console.log("Cliente", nombre);
    console.log("Edad", edad);
}

presentarCliente("Braulio", 37);

function sumar(numero1, numero2) {
    return numero1 + numero2;
}

let resultado = sumar(20, 5);

console.log(resultado);

function nombreCliente2(nombre) {
    console.log("Cliente:", nombre);
}


function CalcularIMC(peso, altura) {
    return peso / (altura * altura);
}


function mostrarCategoria(imc) {
    if (imc < 18.5) {
        console.log("Categoria:", "Bajo peso");
    } else if (imc < 25) {
        console.log("Categoria:", "Peso normal");
    } else if (imc < 30) {
        console.log("Categoria:", "Sobrepeso");
    } else {
        console.log("Categoria:", "Obesidad");
    }
}


nombreCliente2("Braulio");
let imc2 = CalcularIMC(130, 1.80);
console.log("IMC:", imc2.toFixed(2));
mostrarCategoria(imc2);

nombreCliente2("Romirna");
let imc3 = CalcularIMC(77, 1.75);
console.log("IMC:", imc3.toFixed(2));
mostrarCategoria(imc3);

nombreCliente2("Grace");
let imc4 = CalcularIMC(80, 1.5);
console.log("IMC:", imc4.toFixed(2));
mostrarCategoria(imc4);

function mostrarResultados(nombre, peso, altura) {
    nombreCliente2(nombre);
    let imc = CalcularIMC(peso, altura);
    console.log("IMC:", imc.toFixed(2));

    mostrarCategoria(imc);
}

mostrarResultados("Raul", 130, 1.80);
mostrarResultados("Fernando", 100, 1.45);
