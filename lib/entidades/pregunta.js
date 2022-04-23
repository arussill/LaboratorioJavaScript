export class Pregunta {
    constructor(id, descripcion, id_categoria) {
        this.id = id
        this.descripcion = descripcion
        this.id_categoria = id_categoria
    }

    leerPregunta(id_categoria) {
        let random = Math.floor(Math.random() * (5 - 1)) + 1
        return fetch('preguntas.json')
        .then(response => response.json())
        .then(datos => {
            let preguntasPorCategoria = []
            for (let dato of datos) {
                if (dato.category.id == id_categoria) {
                    preguntasPorCategoria.push(dato)
                }
            }
            return preguntasPorCategoria[random]
        })
    }
}