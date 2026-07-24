
function actualizarFechas() {

    // Fecha actual del sistema (Lado izquierdo, encima del IDCard)

    const contenedorCurrent = document.getElementById("Current-Date");
    if (contenedorCurrent) {
        const fechaActual = new Date();
        const opciones = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        let textoActual = fechaActual.toLocaleDateString('es-ES', opciones);
        contenedorCurrent.innerHTML = textoActual.charAt(0).toUpperCase() + textoActual.slice(1);
    }

    // Fecha de actualización automática (Lado derecho, arriba del menú)
    const contenedorUpdate = document.getElementById("UpdateDate");
    if (contenedorUpdate) {
        const fechaMod = new Date(document.lastModified);
        const opciones = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        let textoMod = fechaMod.toLocaleDateString('es-ES', opciones);
        contenedorUpdate.innerHTML = `Actualizado el: ${textoMod.charAt(0).toUpperCase() + textoMod.slice(1)}`;
    }
}

document.addEventListener('DOMContentLoaded', actualizarFechas);