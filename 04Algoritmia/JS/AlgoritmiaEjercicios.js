function problema1() {
    // Obtener el input del usuario
    var input = document.querySelector('#p1-input').value;

    // Separar las palabras por espacios y almacenarlas en un array
    var palabras = input.split(' ');

    // Invertir el orden de las palabras en el array
    var palabrasInvertidas = palabras.reverse();

    // Unir las palabras invertidas en una cadena
    var resultado = palabrasInvertidas.join(' ');

    // Mostrar el resultado en el elemento con id 'p1-output'
    document.querySelector('#p1-output').textContent= resultado;
}

function problema2(){
    //lo primero que necesito es obtener los campos
    var p2_x1 = document.querySelector('#p2-x1').value;
    var p2_x2 = document.querySelector('#p2-x2').value;
    var p2_x3 = document.querySelector('#p2-x3').value;
    var p2_x4 = document.querySelector('#p2-x4').value;
    var p2_x5 = document.querySelector('#p2-x5').value;

    var p2_y1 = document.querySelector('#p2-y1').value;
    var p2_y2 = document.querySelector('#p2-y2').value;
    var p2_y3 = document.querySelector('#p2-y3').value;
    var p2_y4 = document.querySelector('#p2-y4').value;
    var p2_y5 = document.querySelector('#p2-y5').value;

    //con los valores consturyo el vector
    var v1 = [p2_x1, p2_x2, p2_x3, p2_x4, p2_x5];
    var v2 = [p2_y1, p2_y2, p2_y3, p2_y4, p2_y5];

    //debo de aplicar un ordenamiento a los vectores, en este caso debo de colocar
    //en primer lugar el valor mas chico, burbuja, short, 

    v1 = v1.sort(function(a,b){
        return a - b
    });

    v2 = v2.sort(function(a,b){
        return a - b
    });

    //vamos hacer el producto escalar

    var p2_producto = 0;

    for(var i = 0; i < v1.length; i++){
        p2_producto += v1[i]*v2[i];
    }

    document.querySelector('#p2-output').textContent = 
    'Producto Escalar Minimo es de : ' + p2_producto;
}


function problema3() {
    // Obtener el input del usuario
    var input = document.querySelector('#p3-input').value.toUpperCase();

    // Separar las palabras por comas
    var palabras = input.split(',');

    var maxUnicos = 0;
    var palabraMaxUnicos = '';

    //El método llama a una función para cada elemento de una matriz.forEach()
    palabras.forEach(function(palabra) {
        // Crear un Set para contar los caracteres únicos
        var unicos = new Set(palabra);

        // Comparar y actualizar el resultado si es necesario
        if (unicos.size > maxUnicos) {
            maxUnicos = unicos.size;
            palabraMaxUnicos = palabra;
        }
    });

    // Mostrar el resultado
    document.querySelector('#p3-output').textContent = 'La palabra con más caracteres únicos es: ' + palabraMaxUnicos + ' con ' + maxUnicos + ' caracteres únicos.';
}