export class Respuesta {
    constructor(nivel) {
        this.id = nivel
    }

    leerRespuestas() {
        return fetch('../../json/respuestas.json')
            .then(response => response.json()) 
            .then(datos => {
                let respuestasPorPregunta = []
                let pregunta = document.querySelector('h5')
                let preguntaID = parseInt(pregunta.getAttribute('id'))
                for (let dato of datos) {
                    if ( dato.question.category.id == this.id && dato.question.id == preguntaID) {
                        respuestasPorPregunta.push(dato)
                    }
                }
                return respuestasPorPregunta
            })
    }

    async mostrarRespuestas() {
        const datos = await this.leerRespuestas(this.id)
        let cadena = ""
        for (let dato of datos) {
            dato.valid = String(dato.valid)
            cadena +=
                `<div class="form-check">
                    <input class="form-check-input" type="radio" name="respuesta" value="${dato}" id="${dato.id}" valid="${dato.valid}"/>
                    <label class="form-check-label" for="${dato.id}">
                        ${dato.description}
                    </label>
                </div>`
        }
        document.getElementById('radio').innerHTML = cadena
    }
    async obtenerValidez() {
        const datos = await this.mostrarRespuestas(this.id)
        let respuestasHTML = document.getElementsByClassName('form-check-input')
        for (let i = 0; i < respuestasHTML.length; i++) {
            let x = respuestasHTML[i]
            x.addEventListener("click", () => {
                this.validarRespuesta(x.getAttribute('valid'))
            })
        }
    }
    validarRespuesta(validacion) {
        let frmInterfaz = document.querySelector('#interfaz')
        frmInterfaz.addEventListener("submit", (e) => {
            e.preventDefault()
            if (validacion === "true") {
                console.log("La respuesta es correcta");
                document.getElementById('interfaz').setAttribute("valid",validacion)
            }
            if (validacion === "false") {
                console.log("La respuesta es incorrecta");
            }
        })
    }
}