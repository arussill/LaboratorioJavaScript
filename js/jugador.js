export class Jugador {
    constructor(id, edad, nombre) {
        this.id = id
        this.edad = edad
        this.nombre = nombre
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