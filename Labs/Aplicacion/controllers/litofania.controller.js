exports.getLitofania = (request, response, next) => {
    response.render("litofania.ejs");
    next();
}