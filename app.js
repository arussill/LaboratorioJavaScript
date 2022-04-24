import { Juego } from './lib/entidades/juego.js'

let juego = new Juego()

document.querySelector('#inicio').addEventListener('click', () => juego.iniciarJuego())
document.querySelector('#historial').addEventListener('click', () => juego.leerJuegos())