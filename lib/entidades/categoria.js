export class Categoria {
    constructor(id, descripcion) {
        this.id = id
        this.descripcion = descripcion
    }

    leerCategoria(id) {
        return fetch("../../json/categorias.json")
            .then((response) => response.json())
            .then((datos) => {
                for (let dato of datos) {
                    if (dato.id == id) {
                        return dato
                    }
                }
            })
    }
}