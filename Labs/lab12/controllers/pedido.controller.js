const { log } = require("console");
const pedido = require("../models/pedido.model.js");

exports.getPedido = (request, response) => {
    response.render("pedido.ejs");
};

// Procesamiento de datos
exports.postPedido = (request, response) => {
    const nom = request.body.nom;
    const email = request.body.email;

    // Crear objeto Pedido
    const newPedido = new pedido(nom, email);

    // Guardar objeto
    newPedido.save();

    // Regresar a index
    response.redirect("/");
};

exports.pedidoData = (request, response) => {
    const pedidos = pedido.fetchAll();
    response.render("index.ejs", { pedidos: pedidos });
};