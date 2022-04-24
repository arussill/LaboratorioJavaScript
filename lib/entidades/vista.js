export async function cargarVista(ruta) {
    const vista = await fetch(ruta)
    const text = await vista.text()
    document.querySelector('#pagina').innerHTML = text
}