export class Jugador {
    constructor(nombre) {
        this.id = Math.floor(Math.random() * (6 - 1)) + 1
        this.nombre = nombre
        this.score = 0
    }

    leerJugador(id) {
        return fetch('preguntas.json')
        .then(response => response.json())
        .then(datos => {
            for (let dato of datos) {
                if (dato.id == id) {
                    return dato
                }
            }
        })
    }

    guardarJugador() {
        let id = this.id
        console.log(id)
    }
}