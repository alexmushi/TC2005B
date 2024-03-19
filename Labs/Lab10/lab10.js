const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        // Home
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end('<h1>Bienvenido a la pagina principal</h1>');
    } else if (req.url === '/formulario' && req.method === 'GET') {
        // Ruta formulario
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(`
            <form action="/enviar" method="post">
                <label for="nombre">Nombre:</label>
                <input type="text" id="nombre" name="nombre"><br><br>
                <label for="mensaje">Mensaje:</label>
                <input type="text" id="mensaje" name="mensaje"><br><br>
                <input type="submit" value="Enviar">
            </form>
        `);
    } else if (req.url === '/enviar' && req.method === 'POST') {
        // Ruta para procesar el formulario: guarda los datos en un archivo de texto
        let datos = '';
        req.on('data', chunk => {
            datos += chunk.toString();
        });
        req.on('end', () => {
            fs.writeFile('datos.txt', datos, (err) => {
                if (err) throw err;
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end('<h1>Datos recibidos y guardados</h1>');
            });
        });
    } else {
        // Cualquier otra ruta: devuelve un error 404
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end('<h1>Error 404: Pagina no encontrada</h1>');
    }
});

// Mantiene activo el servidor
server.listen(3000);
