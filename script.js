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

function mostrarResultados(clientes4) {

    let imc = CalcularIMC(clientes4.peso, clientes4.altura);
    console.log("Cliente:", clientes4.nombre);
    console.log("IMC:", imc.toFixed(2));

    mostrarCategoria(imc);

    console.log("------------------");
}

mostrarResultados("Raul", 130, 1.80);
mostrarResultados("Fernando", 100, 1.45);


let clientes = ["Braulio", "Raul", "Krystal"];

console.log(clientes[0]);
console.log(clientes[1]);
console.log(clientes[2]);
console.log(clientes[3]);

clientes.push("Fernando");

console.log(clientes);
console.log(clientes.length);

console.log("Otro array");

let clientes2 = ["Romulo", "Edgar", "Victor"];

console.log(clientes2.length);

clientes2.push("krystal");

console.log(clientes2.length);

clientes2.push("Miguelina");

console.log(clientes2.length);

let clientes3 = ["Guadalupe", "Ronaldo", "Kawasaky", "Lebron"];

for (let i = 0; i < clientes3.length; i++) {
    console.log(clientes[i]);
}

console.log("Otra mision");

let clientes4 = [
    {
        nombre: "Braulio",
        peso: 130,
        altura: 1.80
    },
    {
        nombre: "Raúl",
        peso: 90,
        altura: 1.75
    },
    {
        nombre: "Maria",
        peso: 85,
        altura: 1.65
    }
];
console.log("-----------------------");

for (let i = 0; i < clientes4.length; i++) {

    let cliente = clientes4[i];
    mostrarResultados(cliente);
}

console.log("-----------------------");

for (let i = 0; i < clientes4.length; i++) {
    console.log(clientes4[i].nombre);
}

let numeros10 = [3, 8, 12, 5, 20];

for (let i = 0; i < numeros10.length; i++) {

    if (numeros10[i] > 10) {
        console.log(numeros10[i]);
    }
}

console.log("--------------");

let clientes11 = [
    {
        nombre: "Braulio",
        imc: 35
    },
    {
        nombre: "Raul",
        imc: 22
    },
    {
        nombre: "Carlos",
        imc: 31
    }
];

let clientesObesidad = [];

for (let i = 0; i < clientes11.length; i++) {

    if (clientes11[i].imc > 30) {
        clientesObesidad.push(clientes11[i]);
    }
}

console.log("Lista de clientes obesos");

for (let i = 0; i < clientesObesidad.length; i++) {
    console.log(clientesObesidad[i]);
}

console.log("------------Filter------------");

let clientes15 = [
    {
        nombre: "Braulio",
        imc: 35
    },
    {
        nombre: "Raul",
        imc: 22
    },
    {
        nombre: "Carlos",
        imc: 31
    },
    {
        nombre: "Pedro",
        imc: 28
    },
    {
        nombre: "Luis",
        imc: 24
    }
];

let clientesSobrepeso = clientes15.filter(cliente => cliente.imc >= 25);
console.log(clientesSobrepeso);

let clientes16 = [
    {
        nombre: "Braulio",
        imc: 35,
        activo: true
    },
    {
        nombre: "Raul",
        imc: 22,
        activo: false
    },
    {
        nombre: "Carlos",
        imc: 31,
        activo: true
    },
    {
        nombre: "Pedro",
        imc: 28,
        activo: false
    }
];

let clientesEspeciales = clientes16.filter(cliente => cliente.imc > 30 && cliente.nombre === "Carlos");
console.log(clientesEspeciales);

console.log("-------Otro de Filter------");

let clientesOferta = clientes16.filter(cliente => cliente.imc > 30 && cliente.activo);
console.log(clientesOferta);

console.log("--------------------------");

let clientes17 = [
    {
        nombre: "Braulio",
        imc: 35,
        activo: true
    },
    {
        nombre: "Raul",
        imc: 22,
        activo: true
    },
    {
        nombre: "Carlos",
        imc: 31,
        activo: false
    },
    {
        nombre: "Pedro",
        imc: 28,
        activo: true
    },
    {
        nombre: "Luis",
        imc: 33,
        activo: false
    }
];

let clientesSeguimiento = clientes17.filter(cliente => cliente.imc >30 && cliente.activo === false);
console.log(clientesSeguimiento);