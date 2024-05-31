function calcularIntereses() {
    var capital = document.getElementById('capital').value;
    if (capital === '' || parseFloat(capital) <= 0) {
        alert('Por favor, ingrese un capital inicial válido y mayor que cero.');
        return;
    }
    capital = parseFloat(capital);
    var tasaInteres = 0.02;
    var ganancia = capital * tasaInteres;
    var total = capital + ganancia;

    document.getElementById('result').innerHTML = 
        'Después de un mes, usted ganará: $' + ganancia.toFixed(2) + 
        '<br>El monto total será: $' + total.toFixed(2);
}
