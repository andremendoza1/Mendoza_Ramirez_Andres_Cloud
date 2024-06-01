function CalificacionFinal() {
    const parcial1 = parseFloat(document.getElementById('parcial1').value);
    const parcial2 = parseFloat(document.getElementById('parcial2').value);
    const parcial3 = parseFloat(document.getElementById('parcial3').value);
    const examenFinal = parseFloat(document.getElementById('examenFinal').value);
    const trabajo = parseFloat(document.getElementById('trabajo').value);

    if (isNaN(parcial1) || isNaN(parcial2) || isNaN(parcial3) || isNaN(examenFinal) || isNaN(trabajo) ||
        parcial1 < 0 || parcial2 < 0 || parcial3 < 0 || examenFinal < 0 || trabajo < 0) {
        mostrarError("Por favor, ingresa valores válidos y positivos para todas las calificaciones.");
        return;
    }

    const promedioParciales = (parcial1 + parcial2 + parcial3) / 3;
    const calificacionFinal = (0.55 * promedioParciales) + (0.30 * examenFinal) + (0.15 * trabajo);

    mostrarCalificacionFinal(`La calificación final del alumno es: ${calificacionFinal.toFixed(2)}`);
}

function mostrarCalificacionFinal(mensaje) {
    const resultadoElement = document.getElementById('calificacionFinal');
    resultadoElement.textContent = mensaje;
}

function mostrarError(mensaje) {
    const resultadoElement = document.getElementById('calificacionFinal');
    resultadoElement.textContent = '';
    alert(mensaje);
}

function borrar() {
    document.getElementById('parcial1').value = '';
    document.getElementById('parcial2').value = '';
    document.getElementById('parcial3').value = '';
    document.getElementById('examenFinal').value = '';
    document.getElementById('trabajo').value = '';
    mostrarCalificacionFinal('');
}
