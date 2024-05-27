/*
JS es un lenguaje de programacion multiparadigma
significa que acepta, POO, estructural, modular, eventos, reactivos, funcional

Asi mismo JS es un lenguaje no tipado, no existen los tipos de dato, dentro de JS 
nosotros tenemos que parsearlos
*/

function validar(formulario){
    // quiero validar que no pueda ingresar un nombre menor a 2 letras
    if(formulario.nombre.value.length <= 2){
        alert("Escriba mas de 2 letras en el campo nombre")
        formulario.nombre.focus();
        }
    var checkOK = "qwertyuiopasdfghjklñzxcvbnm" + "QWERTYUIOPASDFGHJKLÑZXCVBNM";

    var checkString = formulario.nombre.value;

    var todoesValido = true;

    for(var i = 0; i < checkString.length; i++){
        //tengo que transformar la cadena a caracteres
        var charac = checkString.charAt(i);
        for(var j = 0; j < checkOK.length; j++){
            if(charac == checkOK.charAt(j)){
                break;
            }
        }
        if(j == checkOK.length){
            todoesValido = false;
            break;
        }
    }

    if(!todoesValido){
        alert("Escribe unicamente letras en el campo nombre");
        formulario.nombre.focus();
        return false;
    }

    var checkOK = "1234567890" ;

    var checkString = formulario.edad.value;

    var todoesValido = true;

    for(var i = 0; i < checkString.length; i++){
        //tengo que transformar la cadena a caracteres
        var charac = checkString.charAt(i);
        for(var j = 0; j < checkOK.length; j++){
            if(charac == checkOK.charAt(j)){
                break;
            }
        }
        if(j == checkOK.length){
            todoesValido = false;
            break;
        }
    }

    if(!todoesValido){
        alert("Escribe unicamente numeros en el campo nombre");
        formulario.nombre.focus();
        return false;
    }


    //existe una expesion mediante la cual ahi que tener un formato de cadena especifica
    //Toda expresión regular tiene un patron 

    var txt = formulario.email.value;
    var patron =  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    alert("El email " + (patron.test(txt)?" " : " no ") + "valido");
    return patron.test;
}