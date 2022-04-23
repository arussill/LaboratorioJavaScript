import { Ronda } from './ronda.js'

export class Juego {
    constructor(jugador) {
        this.jugador = jugador
        this.nivel = 5
        this.rondas = this.traerRondas();
    }
    traerRondas() {
        return [
            new Ronda(1), new Ronda(2), new Ronda(3), new Ronda(4), new Ronda(5)
        ]
    }

    async play() {
        switch (this.nivel) {
            case 1:
                await this.rondas[0].mostrar()
                    console.log(document.getElementById('interfaz'))
                    let validacion = document.getElementById('interfaz').getAttribute('valid')
                    if (validacion == "true") this.level += 1
                break;
            case 2:
                this.rondas[1].mostrar();
                break;
            case 3:
                this.rondas[2].mostrar();
                break;
            case 4:
                this.rondas[3].mostrar();
                break;
            case 5:
                this.rondas[4].mostrar();
            default:
                break;

        }
    }
}