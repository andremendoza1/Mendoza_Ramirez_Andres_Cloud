function calcularDescuento() {
    const totalCompraInput = document.getElementById('totalCompra');
    const totalCompra = parseFloat(totalCompraInput.value);

    if (isNaN(totalCompra) || totalCompra <= 0) {
        mostrarError("Por favor, ingresa un valor positivo.");
        return;
    }

    const descuento = totalCompra * 0.15;
    const montoFinal = totalCompra - descuento;

    mostrarResultado(`El cliente deberá pagar finalmente: $${montoFinal.toFixed(2)}`);
}

function mostrarResultado(mensaje) {
    const resultadoElement = document.getElementById('montoFinal');
    resultadoElement.textContent = mensaje;
}

function mostrarError(mensaje) {
    const resultadoElement = document.getElementById('montoFinal');
    resultadoElement.textContent = '';
    alert(mensaje);
}

function borrarCampos() {
    document.getElementById('totalCompra').value = '';
    mostrarResultado('');
}
