function calcularEdad() {
    const fechaNacimientoInput = document.getElementById('fechaNacimiento');
    const fechaNacimiento = new Date(fechaNacimientoInput.value);
    const fechaActual = new Date();

    if (isNaN(fechaNacimiento.getTime())) {
        mostrarError("Por favor, ingresa una fecha de nacimiento válida.");
        return;
    }

    const edadMilisegundos = fechaActual - fechaNacimiento;
    const edadAños = Math.floor(edadMilisegundos / (1000 * 60 * 60 * 24 * 365));

    mostrarEdad(`Edad: ${edadAños} años`);
}

function mostrarEdad(mensaje) {
    const resultadoElement = document.getElementById('edad');
    resultadoElement.textContent = mensaje;
}

function mostrarError(mensaje) {
    const resultadoElement = document.getElementById('edad');
    resultadoElement.textContent = '';
    alert(mensaje);
}

function borrarCampo() {
    document.getElementById('fechaNacimiento').value = '';
    mostrarEdad('');
}
