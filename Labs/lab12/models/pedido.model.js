const contenido = [];

module.exports = class pedido {
    constructor(mi_nom, mi_email) {
        this.nom = mi_nom;
        this.email = mi_email;
    }

    save() {
        contenido.push({
            nom: this.nom,
            email: this.email
        });
    }

    static fetchAll() {
        return contenido;
    }
}