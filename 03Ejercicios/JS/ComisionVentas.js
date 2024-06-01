function calcularComision() {
    const sueldoBase = parseFloat(document.getElementById('sueldoBase').value);
    const venta1 = parseFloat(document.getElementById('venta1').value);
    const venta2 = parseFloat(document.getElementById('venta2').value);
    const venta3 = parseFloat(document.getElementById('venta3').value);

    const mensajeError = document.getElementById('mensajeError');
    mensajeError.textContent = '';

    if (isNaN(sueldoBase) || isNaN(venta1) || isNaN(venta2) || isNaN(venta3)) {
        mensajeError.textContent = 'Por favor, ingresa el sueldo base y todas las ventas.';
       
        return;
    }

    if (sueldoBase < 0 || venta1 < 0 || venta2 < 0 || venta3 < 0) {
        mensajeError.textContent = 'No se aceptan valores negativos negativos.';
       
        return;
    }

    const tasaComision = 0.10;
    const comisionTotal = (venta1 + venta2 + venta3) * tasaComision;
    const totalRecibido = sueldoBase + comisionTotal;

    document.getElementById('resultadoComision').textContent = `Comisiones: $${comisionTotal.toFixed(2)}`;
    document.getElementById('resultadoTotal').textContent = `Total Recibido: $${totalRecibido.toFixed(2)}`;
}

function borrarCampos() {
    document.getElementById('sueldoBase').value = '';
    document.getElementById('venta1').value = '';
    document.getElementById('venta2').value = '';
    document.getElementById('venta3').value = '';
    document.getElementById('resultadoComision').textContent = '';
    document.getElementById('resultadoTotal').textContent = '';
    document.getElementById('mensajeError').textContent = '';
   
}


