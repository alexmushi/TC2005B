exports.getModelado = (request, response, next) => {
    response.render("modelado.ejs");
    next();
}