/**Supongamos que un individuo desea invertir en un banco y desea saber
 * cuanto dinero ganara despues de un mes si el banco paga 2% mensual.
 * 
 * 
 * @returns 
 */


function calcularIntereses() {
    var monto = document.getElementById('monto').value;
    if (monto === '' || parseFloat(monto) <= 0) {
        alert('Por favor, ingrese un monto inicial válido y mayor que cero.');
        return;
    }
    monto = parseFloat(monto);
    var tasaInteres = 0.02;
    var ganancia = monto * tasaInteres;
    var total = monto + ganancia;

    document.getElementById('result').innerHTML = 
        'Después de un mes, usted ganará: $' + ganancia.toFixed(2) + 
        '<br>El monto total será: $' + total.toFixed(2);
}

function Borrar(){
    document.getElementById('monto').value = " ";
    document.getElementById('result').innerHTML = " ";
    
}