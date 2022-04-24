export class Respuesta {
    constructor(id, description, isValid, id_pregunta) {
        this.id = id
        this.description = description
        this.isValid = isValid
        this.id_pregunta = id_pregunta
    }

    leerRespuestas(id_pregunta) {
        return fetch('../../json/respuestas.json')
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

    buscarRespuesta(id) {
        return fetch('../../json/respuestas.json')
            .then(response => response.json())
            .then(datos => {
                for (let dato of datos) {
                    if (dato.id == id) {
                        return dato
                    }
                }
            })
    }

    async mostrarRespuestas(id_pregunta) {
        const respuestas = await this.leerRespuestas(id_pregunta)
        this.barajarRespuestas(respuestas)
        let cadena = ""
        for (let respuesta of respuestas) {
            cadena +=
                `<div  class="form-check"><input class="form-check-input" type="radio" name="respuesta" id="${respuesta.id}" value="${respuesta.id}" />
                <label class="form-check-label" for="${respuesta.id}">
                    ${respuesta.description}
                </label></div>`
        }
        document.getElementById('radio').innerHTML = cadena
    }

    barajarRespuestas(arr){
        for(var i =arr.length-1 ; i>0 ;i--){
            var j = Math.floor( Math.random() * (i + 1) );
            [arr[i],arr[j]]=[arr[j],arr[i]];
        }
    }
}