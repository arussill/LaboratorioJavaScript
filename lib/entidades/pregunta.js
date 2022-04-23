export class Pregunta {
    constructor(nivel) {
        this.id = nivel
    }
    
    leerPregunta() {
        return fetch('../../json/preguntas.json')
            .then(response => response.json())
            .then(datos => {
                let preguntasPorCategoria = []
                for (let dato of datos) {
                    if (dato.category.id == this.id) {
                        preguntasPorCategoria.push(dato)
                    }
                }
                let random = Math.floor(Math.random() * (5 - 1)) + 1
                return preguntasPorCategoria[random - 1]
            })
    }
    async mostrarPreguntas() {
        const dato = await this.leerPregunta(this.id)
        let cadena =  
            `<div>
                <h5 id= ${dato.id}>
                ${dato.description}
                <h5>
            <div>`
        document.getElementById('pregunta').innerHTML = cadena
    }
}