export class Juego {
    constructor(id, puntaje, jugador, estado) {
        this.id = id
        this.puntaje = puntaje
        this.jugador = jugador
        this.estado = estado
    }

    leerJuegos() {
        return fetch('preguntas.json')
        .then(response => { return response.json() })
    }
}