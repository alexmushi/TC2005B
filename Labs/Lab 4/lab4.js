function tablaCuadradosCubos() {
    var numero = prompt("Introduce un número:");

    document.write("<h2>Tabla de Cuadrados y Cubos</h2>");
    document.write("<table>");
    document.write("<tr><th>Número</th><th>Cuadrado</th><th>Cubo</th></tr>");

    for (var i = 1; i <= numero; i++) {
        var cuadrado = i * i;
        var cubo = i * i * i;
        document.write("<tr><td>" + i + "</td><td>" + cuadrado + "</td><td>" + cubo + "</td></tr>");
    }

    document.write("</table>");
}
tablaCuadradosCubos();

function sumaAleatoria() {
    var num1 = Math.random() * 10 + 1;
    var num2 = Math.random() * 10 + 1;
    var suma = num1 + num2;
    var inicio = new Date();

    var respuesta = prompt("¿Cuál es la suma de " + num1 + " y " + num2 + "?");

    var fin = new Date();
    var tiempo = (fin - inicio) / 1000;

    if (respuesta === suma) {
        document.write("<p>¡Respuesta correcta!</p>");
    } else {
        document.write("<p>Respuesta incorrecta. La suma es " + suma + "</p>");
    }

    document.write("<p>Tiempo de respuesta: " + tiempo + " segundos</p>");
}
sumaAleatoria();

function contador(arr) {
    var negativos = 0;
    var ceros = 0;
    var mayoresCero = 0;

    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            negativos++;
        } else if (arr[i] === 0) {
            ceros++;
        } else {
            mayoresCero++;
        }
    }

    return { negativos, ceros, mayoresCero };
}

// prueba
var numeros = [-2, 0, 5, -7, 0, 10, -3];
var resultado = contador(numeros);

function promedios(matriz) {
    var promedios = [];

    for (var i = 0; i < matriz.length; i++) {
        var fila = matriz[i];
        var suma = 0;

        for (var j = 0; j < fila.length; j++) {
            suma += fila[j];
        }

        var promedio = suma / fila.length;
        promedios.push(promedio);
    }

    return promedios;
}

// prueba
var matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
var resultado2 = promedios(matriz);

function inverso(numero) {
    var numeroString = numero.toString();
    var numeroInverso = "";

    for (var i = numeroString.length - 1; i >= 0; i--) {
        numeroInverso += numeroString[i];
    }

    return(numeroInverso);
}

// prueba
var numero = 12345;

class Producto {
    constructor(nombre, precio, cantidadInicial) {
        this.nombre = nombre;
        this.precio = precio;
        this.cantidad = cantidadInicial;
    }

    vender(cantidadVendida) {
        if (cantidadVendida <= this.cantidad) {
            this.cantidad -= cantidadVendida;
            document.write("Se han vendido ", cantidadVendida, " unidades de ",  this.nombre.toString());
        } else {
            document.write("No hay suficientes unidades de", this.nombre.toString(), "en inventario.");
        }
    }

    reponer(cantidadReponer) {
        this.cantidad += cantidadReponer;
        document.write("Se han repuesto ", cantidadReponer, " unidades de ", this.nombre.toString());
    }
}

// prueba
let producto1 = new Producto("Flores", 110, 5);
let producto2 = new Producto("Dragón", 150, 10);

producto1.vender(3);
producto1.reponer(5);

document.write(JSON.stringify(producto1));
document.write(JSON.stringify(producto2));


