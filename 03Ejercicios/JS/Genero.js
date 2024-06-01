function calcularPorcentaje() {
    const TotalPersonas = parseInt(document.getElementById('TotalPersonas').value);
    const hombres = parseInt(document.getElementById('hombres').value);
    const mujeres = parseInt(document.getElementById('mujeres').value);

    if (isNaN(TotalPersonas) || isNaN(hombres) || isNaN(mujeres) || 
        TotalPersonas <= 0 || hombres < 0 || mujeres < 0 || 
        TotalPersonas < hombres || TotalPersonas < mujeres) {
        mostrarError("Por favor, ingresa valores válidos y asegúrate de que la cantidad de hombres y mujeres sea menor o igual al total de estudiantes.");
        return;
    }

    const porcentajeHombres = (hombres / TotalPersonas) * 100;
    const porcentajeMujeres = (mujeres / TotalPersonas) * 100;

    mostrarPorcentajes(`Porcentaje de Hombres: ${porcentajeHombres.toFixed(2)}%`, `Porcentaje de Mujeres: ${porcentajeMujeres.toFixed(2)}%`);
}

function mostrarPorcentajes(porcentajeHombres, porcentajeMujeres) {
    document.getElementById('porcentajeHombres').textContent = porcentajeHombres;
    document.getElementById('porcentajeMujeres').textContent = porcentajeMujeres;
}

function mostrarError(mensaje) {
    document.getElementById('porcentajeHombres').textContent = '';
    document.getElementById('porcentajeMujeres').textContent = '';
    alert(mensaje);
}

function borrar() {
    document.getElementById('TotalPersonas').value = '';
    document.getElementById('hombres').value = '';
    document.getElementById('mujeres').value = '';
    mostrarPorcentajes('', '');
}
