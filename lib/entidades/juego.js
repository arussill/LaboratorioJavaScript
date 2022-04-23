export class Juego {
  constructor(id, puntaje, ronda_actual, jugador, estado) {
    this.id = id
    this.puntaje = puntaje
    this.ronda_actual = ronda_actual
    this.jugador = jugador
    this.estado = estado
  }

  leerJuegos() {
    return fetch("preguntas.json").then((response) => {
      return response.json()
    });
  }

  cambiarVista() {
    document.querySelector("#estado").innerHTML = `Juego: ${this.estado}`
    document.querySelector(
      "#jugador"
    ).innerHTML = `Jugador: ${this.jugador.nombre}`
    document.querySelector("#puntaje").innerHTML = `Acumulado: ${this.puntaje}`
    document.querySelector(
      "#ronda_actual"
    ).innerHTML = `Ronda alcanzada: ${this.ronda_actual}`
  }

  terminarJuego() {
    this.estado = "Terminado"
    this.cambiarVista()
  }

  nuevoJuego() {
    //Falta funcion que regresa al formulario de inico para un nuevo juego
  }

  cambioRonda() {
 
    if (respuesta && this.ronda_actual < 5) {
      this.ronda_actual += 1
      //   metodo santiago
    }

    if (respuesta && (this.ronda_actual = 5)) {
      this.estado = "Ganado"
      this.cambiarVista()
    }

    if (respuesta == false) {
      this.estado = "Perdido"
      this.puntaje = 0
      this.cambiarVista()
    }
  }
}
