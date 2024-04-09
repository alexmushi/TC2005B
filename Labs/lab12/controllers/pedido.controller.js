const { log } = require("console");
const Pedido = require("../models/pedido.model.js");

exports.getPedido = (request, response) => {
    response.render("pedido.ejs");
};

// Procesamiento de datos
exports.postPedido = (request, response) => {
    const pedido = request.body.pedido;
    const email = request.body.email;

    // Crear objeto Pedido
    const newPedido = new Pedido(pedido, email);

    // Guardar objeto
    newPedido.save();

    // Regresar a index
    response.redirect("/");
};

exports.pedidoData = (request, response) => {
    const pedidos = Pedido.fetchAll();
    response.render("index.ejs", { pedidos: pedidos });
};