// Ejercicio 1

const arreglo = [6, 8, 10, 11];
let prom = 0;
let count = 0;
for (let i = 0; i < arreglo.length; i++){
    prom += arreglo[i];
    count += 1;
}
const promedio = prom / count;
console.log(promedio);

// Ejercicio 2

const filesystem = require('fs');
filesystem.writeFileSync("hoal.txt", "ejercicio 2");

// Ejercicio 3 (factorial recursivo)
function factorial(numero) {
    if (numero === 0 || numero === 1) {
        return 1;
    } else {
        return numero * factorial(numero - 1);
    }
}
let prueba1 = 5;
let prueba2 = 1;

let resultado1 = factorial(prueba1);
let resultado2 = factorial(prueba2);

console.log(resultado1)
console.log(resultado2)


const http = require("http");
const server = http.createServer( (request, response) => {
    console.log(request.url);
    response.setHeader("Content-Type", "text/html");
    response.write(`
    <!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Lab 4</title>
    <script src="lab4.js"></script>
</head>
<body>
    <h1>Laboratorio 4: Fundamentos de JavaScript</h1>
     <section>
         <h2>Descripción del problema</h2>
         <p>Tengo un emprendimiento de impresiones 3D y necesito una página para registrar mi inventario.</p>
        <h2>Sección de preguntas</h2>
        <article>
            <h3>¿Qué diferencias y semejanzas hay entre Java y JavaScript?</h3>
            <p>Java es un lenguaje de uso general, mientras que JavaScript está enfocado en la creación de páginas web. Javascript es un poco más dinámico y flexible en el área de la sintaxis, pero comparten algunas similitudes en la sintaxis básica. De igual manera, Java es un lenhuaje compilado mientras que JavaScript es un lenguaje interpretado. La diferencia entre ambos es que un lenguaje interpretado se ejecuta en tiempo real, mientras que uno compilado corre como proyecto entero.</p>
        </article>
            <article>
            <h3>¿Qué métodos tiene el objeto Date? (Menciona al menos 5*)</h3>
            <p>getTime(): Devuelve el valor numérico correspondiente a la fecha y hora para la fecha especificada por el objeto Date, como el número de milisegundos desde el 1 de enero de 1970 00:00:00 UTC.</p>
            <p>getDate(): Devuelve el día del mes (entre 1 y 31) para la fecha especificada por el objeto Date.</p>
            <p>getFullYear(): Devuelve el año (completo, por ejemplo, 2022) para la fecha especificada por el objeto Date.</p>
            <p>getDay(): Devuelve el día de la semana (entre 0 y 6, donde 0 corresponde a Domingo) para la fecha especificada por el objeto Date.</p>
            <p>getHours(): Devuelve la hora (entre 0 y 23) para la fecha especificada por el objeto Date.</p>
        </article>
            <article>
            <h3>¿Qué métodos tienen los arreglos? (Menciona al menos 5*)</h3>
            <p>indexOf(): Devuelve el índice de la primera ocurrencia de un elemento en un arreglo, o -1 si el elemento no está presente.</p>
            <p>forEach(): Ejecuta una función por cada elemento presente en el arreglo.</p>
            <p>pop(): Elimina el último elemento de un arreglo y devuelve ese elemento.</p>
            <p>push(): Agrega uno o más elementos al final de un arreglo y devuelve la nueva longitud del arreglo.</p>
            <p>includes(): Determina si un arreglo incluye un determinado elemento, devolviendo true o false según corresponda.</p>
        </article>
            <article>
            <h3>¿Cómo se declara una variable con alcance local dentro de una función?</h3>
            <p>Con la palabra clave "let". Es como si usaras una var pero nada más tendrá alcance dentro de la función en la que se usa.</p>
        </article>
            <article>
            <h3>¿Qué implicaciones tiene utilizar variables globales dentro de funciones?</h3>
            <p>No es muy recomendable tener variables globales, pues puede implicar que las funciones sean más dependientes entre sí, o afectar negativamente la modularidad del código.</p>
        </article>
    </section>

</body>
</html>
      `);
    response.end();
});
server.listen(3000);
