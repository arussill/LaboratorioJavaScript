import { leerDatos, guardarDatos } from "./bd.js"
import { Pregunta } from "./pregunta.js"
import { Respuesta } from "./respuesta.js"
import { Categoria } from "./categoria.js"
import { cargarVista } from "./vista.js"

export class Juego {
    constructor(id, puntaje, rondaActual, jugador, estado) {
        this.id = id
        this.puntaje = puntaje
        this.rondaActual = rondaActual
        this.jugador = jugador
        this.estado = estado
    }

    async leerJuegos() {
        await cargarVista('lib/vistas/historial.html')
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

    async crearJuego() {
        await cargarVista('lib/vistas/inicio.html')
        const frmInicio = document.querySelector('#frmInicio')
        frmInicio.addEventListener('submit', (event) => {
            event.preventDefault()
            this.id = this.obtenerUltimo() + 1
            this.puntaje = 0
            this.rondaActual = 1
            this.jugador = Object.fromEntries(new FormData(frmInicio).entries())
            this.jugar()
        })
    }

    obtenerUltimo() {
        let juegos = leerDatos('Juegos')
        if (juegos !== null) {
            return juegos[juegos.length - 1].id
        }
        return 0
    }

    async jugar() {
        await cargarVista('lib/vistas/juego.html')
        let pregunta = new Pregunta()
        pregunta.mostrarPregunta(this.rondaActual)
        this.mostrarDatos()
        const interfaz = document.querySelector('#interfaz')
        interfaz.addEventListener('submit', (event) => {
            event.preventDefault()
            let recibido = Object.fromEntries(new FormData(interfaz).entries())
            this.validarRespuesta(recibido.respuesta)
        })
    }

    mostrarDatos() {
        document.querySelector('#ronda').appendChild(document.createTextNode(this.rondaActual))
        document.querySelector('#jugador').appendChild(document.createTextNode(this.jugador.nombre))
        document.querySelector('#puntaje').appendChild(document.createTextNode(this.puntaje))
    }

    async validarRespuesta(id) {
        let respuesta = new Respuesta()
        let categoria = new Categoria()
        let validacion = await respuesta.buscarRespuesta(id)
        if (validacion.valid === true) {
            if (this.rondaActual < 5) {
                let puntos = await categoria.leerCategoria(this.rondaActual)
                this.rondaActual += 1
                this.puntaje += puntos.reward
                this.jugar()
            } else {
                this.estado = "Ganado"
                guardarDatos('Juegos', this)
            }
        }
    }
}