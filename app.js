import { Respuesta } from "./lib/entidades/respuesta.js"
import { Juego } from "./lib/entidades/juego.js"

let juego1 = {
  id: 1,
  puntaje: 0,
  ronda_actual: 1,
  estado: "Activo",
  jugador: {
    id: 123,
    nombre: "Sergio",
    edad: 24,
  },
}

let respuesta = new Respuesta()
respuesta.mostrarRespuestas(3)

let juego = new Juego(
  juego1.id,
  juego1.puntaje,
  juego1.ronda_actual,
  juego1.jugador,
  juego1.estado
)

const terminar = document.getElementById("terminar")
terminar.addEventListener("click", () => {
  juego.terminarJuego()
})


const nuevoJuego = document.querySelector("#btnNuevoJuego")
nuevoJuego.addEventListener("click", () =>{
    jugo.nuevoJuego()
})