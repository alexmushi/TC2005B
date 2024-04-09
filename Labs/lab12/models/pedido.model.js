const contenido = [];

module.exports = class Pedido {
    constructor(mi_pedido, mi_email) {
        this.pedido = mi_pedido;
        this.email = mi_email;
    }

    save() {
        contenido.push({
            pedido: this.pedido,
            email: this.email
        });
    }

    static fetchAll() {
        return contenido;
    }
}