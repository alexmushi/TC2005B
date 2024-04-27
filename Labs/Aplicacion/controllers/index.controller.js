const Pedido = require("../models/pedido.model.js");

exports.getIndex = async (request, response, next) => {
    try {
        const pedidos = await Pedido.fetchAll();
        const cookiePed = request.cookies.cookiePed || "";
        const username = request.session.username || "";
        response.render("index.ejs", {data: pedidos, cookiePed: cookiePed, username: username});
    } catch (error) {
        //En caso de error
        console.error("Error cargando pedidos", error);
        //Mostrar página de error
        response.status(500).send("500: Internal Server Error");
    }
};