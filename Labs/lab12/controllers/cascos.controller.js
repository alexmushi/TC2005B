exports.getCascos = (request, response, next) => {
    response.render("cascos.ejs");
    next();
}