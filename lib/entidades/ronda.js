import { Pregunta } from "./pregunta.js"
import { Respuesta } from "./respuesta.js"
export class Ronda {
    constructor(nivel) {
        this.nivel = nivel
    }
    mostrar() {
        let preguntas = new Pregunta(this.nivel)
        preguntas.mostrarPreguntas()
        let respuestas = new Respuesta(this.nivel)
        respuestas.obtenerValidez()
    }

}