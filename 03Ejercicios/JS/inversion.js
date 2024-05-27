

function validarn(e){
    var teclado = (document.all)?e.keycode : e.which;
    if(teclado == 8) return true;
    var patron = /[0-9\d .]/;
    var codigo = String.fromCharCode(teclado);
    return patron.test(codigo);
}

function interes(){
    var valor = document.formulario.cantidad.value;

    var resultado = parseInt(valor);
    var interes = resultado * 0.15;
    var total = resultado + interes;


    document.formulario.sueldoI.value = "$$"+total;

}

function borrar(){
    document.formulario.sueldoI.value="";
    document.formulario.cantidad.value="";
}