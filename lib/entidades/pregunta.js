import { Respuesta } from "./respuesta.js"
export class Pregunta {
    constructor(id, descripcion, id_categoria) {
        this.id = id
        this.descripcion = descripcion
        this.id_categoria = id_categoria
    }

    leerPregunta(id_categoria) {
        let random = Math.floor(Math.random() * (5 - 1)) + 1
        return fetch('../../json/preguntas.json')
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

    async mostrarPregunta(id_categoria) {
        let respuesta = new Respuesta()
        let pregunta = await this.leerPregunta(id_categoria)
        await respuesta.mostrarRespuestas(pregunta.id)
        document.querySelector('#pregunta').appendChild(document.createTextNode(pregunta.description))
    }
}