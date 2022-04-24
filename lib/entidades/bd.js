
export function guardarDatos(key, objeto) {
    let datos = []
    let datosEnBd = localStorage.getItem(key)

    if (datosEnBd !== null) {
        datos = JSON.parse(datosEnBd)
    }
    datos.push(objeto)
    localStorage.setItem(key, JSON.stringify(datos))
}

export function leerDatos(key) {
    return JSON.parse(localStorage.getItem(key))
}