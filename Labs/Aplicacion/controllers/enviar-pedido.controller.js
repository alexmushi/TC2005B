exports.getEnviarPedido = (request, response, next) => {
    response.render("enviar-pedido.ejs");
    next();
}