const Nombres = require("../models/nombres.model.js");
const Pedido = require("../models/pedido.model.js");

exports.getIndex = (request, response, next) => {
    
    Nombres.fetchAll()
        .then(([rows]) => {
            response.render('index.ejs', {
                nombres: rows,
            });
        })
        .catch((error) => {
            console.log(error);
            response.status(500).render('500');
        });
};