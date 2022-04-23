export class Juego {
  constructor(id, puntaje, ronda_actual, jugador, estado) {
    this.id = id;
    this.puntaje = puntaje;
    this.ronda_actual = ronda_actual;
    this.jugador = jugador;
    this.estado = estado;
  }

  leerJuegos() {
    return fetch("preguntas.json").then((response) => {
      return response.json();
    });
  }

  terminarJuego() {
    this.estado = "terminado";
    document.querySelector("#estado").innerHTML =`Jugador: ${this.estado }`
    document.querySelector("#jugador").innerHTML = `Jugador: ${this.jugador.nombre }`
    document.querySelector("#puntaje").innerHTML = `Jugador: ${this.puntaje }` 
    document.querySelector("#ronda_actual").innerHTML =`Jugador: ${this.ronda_actual }`     

  }

  nuevoJuego () {
    //Falta funcion que regresa al formulario de inico para un nuevo juego
  };

  cambioRonda() {
      if((respuesta) && (this.ronda_actual < 5)){
          this.ronda_actual += 1
          
      }
  }
}
