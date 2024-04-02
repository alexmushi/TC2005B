//Para utilizar express
const  express = require("express");
const router = express.Router();

// app.use(express.urlencoded({ extended: true }));

//Para acceder a datos de usuario
let pedidos = [];

//Para la ruta root (página principal)
router.get('/',(request, response) =>{
    response.render('index.ejs', {pedidos: pedidos});
})

//Para la ruta cascos
router.get('/cascos',(request, response) => {
    response.render('cascos.ejs');
});

//Para la ruta litofania
router.get('/litofania',(request, response) => {
    response.render('litofania.ejs');
})

//Para la ruta modelado
router.get('/modelado',(request, response) => {
    response.render('modelado.ejs');
})

//Para la ruta pedido, get
router.get('/pedido', (request, response) => {
    response.render('pedido.ejs');
});

//Para la ruta pedido, post
router.post('/pedido', (request, response) => {
    const { nombre, email, modelo, dimensiones, material, color, comentarios } = request.body;
    pedidos.push({ nombre, email, modelo, dimensiones, material, color, comentarios });
    response.render('index.ejs', { pedidos: pedidos });
});

module.exports = router;