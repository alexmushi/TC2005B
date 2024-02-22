console.log("wello horld");

const filesystem = require("fs");

filesystem.writeFileSync("hola.txt", "wello horld")

const http = require("http");

const server = http.createServer( (request, response) =>{
    console.log(request);
    response.setHeader("Content-Type", "text/html");
    response.write("well hoolr dnode");
    response.end();
});

server.listen(3000);