import { Jugador } from './lib/entidades/jugador.js'
import { Juego } from'./lib/entidades/juego.js'

var participante = new Jugador("Santiago Viana")
var juego = new Juego(participante)
juego.play();
