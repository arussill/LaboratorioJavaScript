export class Respuesta {
    constructor(id, desripcion, isValid, id_pregunta) {
        this.id = id
        this.desripcion = desripcion
        this.isValid = isValid
        this.id_pregunta = id_pregunta
    }

    leerRespuestas(id_pregunta) {
        return fetch('../json/respuestas.json')
        .then(response => response.json())
        .then(datos => {
            let respuestasPorPregunta = []
            for (let dato of datos) {
                if (dato.question.id == id_pregunta) {
                    respuestasPorPregunta.push(dato)
                }
            }
            return respuestasPorPregunta
        })
    }

    async mostrarRespuestas() {
        const datos = await this.leerRespuestas(3)
        let cadena = ""
        for (let dato of datos) {
            cadena +=
                `<div  class="form-check"><input class="form-check-input" type="radio" name="respuesta" value="${dato}" id="${dato.id}" value="${dato.id}" />
                <label class="form-check-label" for="${dato.id}">
                    ${ dato.description }
                </label></div>`
        }
        document.getElementById('radio').innerHTML = cadena
    }
}