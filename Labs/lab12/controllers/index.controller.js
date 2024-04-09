const Pedido = require("../models/pedido.model.js");

exports.getIndex = async (request, response, next) => {
    try {
        const recs = await Pedido.fetchAll();
        response.render("index.ejs", {data: recs});
    } catch (error) {
        //En caso de error
        console.error("Error cargando pedidos", error);
        //Mostrar página de error
        response.status(500).send("500: Internal Server Error");
    }
};