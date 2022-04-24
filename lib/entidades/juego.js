import { leerDatos, guardarDatos } from "./bd.js"
export class Juego {
    constructor(id, puntaje, rondaActual, jugador, estado) {
        this.id = id
        this.puntaje = puntaje
        this.rondaActual = rondaActual
        this.jugador = jugador
        this.estado = estado
    }

    async leerJuegos() {
        const vista = await fetch('lib/vistas/historial.html')
        const text = await vista.text()
        document.querySelector('#pagina').innerHTML = text

        let juegos = leerDatos('Juegos')
        let tblBody = document.querySelector('#tblBody')
        if (juegos !== null) {
            for (let juego of juegos) {
                let fila = tblBody.insertRow(-1)
                fila.insertCell(-1).appendChild(document.createTextNode(juego.id))
                fila.insertCell(-1).appendChild(document.createTextNode(juego.jugador.id))
                fila.insertCell(-1).appendChild(document.createTextNode(juego.jugador.nombre))
                fila.insertCell(-1).appendChild(document.createTextNode(juego.puntaje))
                fila.insertCell(-1).appendChild(document.createTextNode(juego.rondaActual))
                fila.insertCell(-1).appendChild(document.createTextNode(juego.estado))
            }
        }
    }

    crearJuego() {
        let juego = new Juego()
        const frmInicio = document.querySelector('#frmInicio')
        frmInicio.addEventListener('submit', (event) => {
            event.preventDefault();
            juego.id = 1
            juego.puntaje = 0
            juego.rondaActual = 1
            juego.estado = "activo"
            juego.jugador = Object.fromEntries(new FormData(frmInicio).entries())
            guardarDatos('Juegos', juego)
        })
    }

    async iniciarJuego() {
        const vista = await fetch('lib/vistas/inicio.html')
        const text = await vista.text()
        document.querySelector('#pagina').innerHTML = text
        this.crearJuego()
    }
}