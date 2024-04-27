const { log } = require("console");
const Pedido = require("../models/pedido.model");

exports.getPedido = (request, response) => {
    const username = request.session.username || "";
    response.render("pedido.ejs", {username: username});
};

// Procesamiento de datos
exports.postPedido = (request, response) => {
    const nom = request.body.nom;
    const email = request.body.email;

    // Crear objeto Pedido
    const newPedido = new Pedido(nom, email);

    // Guardar objeto
    newPedido.save();

    const username = request.session.username;

    //Guardar cookie con último email
    response.setHeader("Set-Cookie", "cookieEmail=" + email + "; HttpOnly");


    // Regresar a index
    response.redirect("/");
};

exports.pedidoData = (request, response) => {
    let cookieEmail = request.cookies.cookieEmail;

    response.render("index.ejs", {
        pedidos: Pedido.fetchAll(),
        cookieEmail: cookieEmail,
      });
};