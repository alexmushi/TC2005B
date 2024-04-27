const db = require('../util/database');

module.exports = class Nombres {
    // Constructor de la clase. Sirve para crear un nuevo objeto, y en él se definen las propiedades del modelo
    constructor(mi_Nombre, mi_Correo) {
        this.Nombre = mi_Nombre;
        this.Correo = mi_Correo;
    }

    static fetchAll() {
        return db.execute('SELECT Nombre, Correo FROM nombres');
    }
    

}