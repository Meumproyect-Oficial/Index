function actualizarFecha() {
    const contenedor = document.getElementById("fecha-actual");
    if (!contenedor) return;
    const fecha = new Date();
    const opciones = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    let texto = fecha.toLocaleDateString('es-ES', opciones);
    contenedor.innerHTML = `Actualizado el: ${  texto.charAt(0).toUpperCase() + texto.slice(1)}`;
}
document.addEventListener('DOMContentLoaded', actualizarFecha);