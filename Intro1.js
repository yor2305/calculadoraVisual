//comentar

/*

var res = 5 +7;
console.log("El resultado de la suma es: "+res);
res = 5 - 7;
console.log("El resultado de la resta es: "+res);
res = 5 * 7;
console.log("El resultado de la multiplicacion es: "+res);
res = 5 / 7;
console.log("El resultado de la division es: "+res);

*/

/*
//incrementos y decrementos
var contador = 105;
console.log(contador);
contador++;
console.log(contador);
contador--;
contador--;
contador--;
console.log(contador);

var total = 13;

total = total + 7;
console.log(total);
total +=7;
console.log(total);
total -=6;
console.log(total);
total *=2;
console.log(total);
total /= 2;
console.log(total);

console.log("esto es programacion en\bjavascript")
console.log("esto es programacion en \t javascript")
console.log("esto es programacion en \r javascript")


var nombreCompleto = "Yuli" + "  Garces";
console.log(nombreCompleto);
var apellido = " Bolaños"
nombreCompleto += apellido;
console.log(nombreCompleto);
console.log(nombreCompleto.length);
console.log(nombreCompleto[3]);

var miArreglo = ["Paula",43]
console.log(miArreglo);
var estudianntes = ["Paula","Camila","carlos","Diego"]
console.log(estudianntes);
console.log(estudianntes[2]);
var listaEstudiantes = [["Juan",25],["Felipe",18],["Diana",22]];
console.log(listaEstudiantes);
console.log(listaEstudiantes[1][0]);
console.log(listaEstudiantes[2][1]);

var numeros = [10, 20, 30];
console.log(numeros);
var suma = numeros[0] + numeros[1] + numeros[2];
console.log(suma);
numeros[0] = 40;
suma = numeros[0] + numeros[1] + numeros[2];
console.log(suma);


var estaciones = ["Invierno","Otoño","Primavera"]
console.log(estaciones);
estaciones.push("Verano");
console.log(estaciones);
var estacion = estaciones.pop();
console.log(estacion);
console.log(estaciones);
estacion = estaciones.shift();
console.log(estacion);
console.log(estaciones);
estaciones.unshift("verano");
console.log(estaciones);

*/

function saludar(){
console.log("Hola Mundo");

}
saludar();

function sumar (a,b){
    return a+b;
}console.log(sumar(7,4));

function restar (a,b){
    return a-b;
}console.log(restar(30,10))

function multiplicar (a,b){
    return a*b;
}console.log(multiplicar(2,9))

function dividir(a,b){
    return a/b;
}console.log(dividir(48,8));

function potenciacion (a,b){
    return a**b;
}console.log(potenciacion(3,4));


function abs(a) {
    if (a < 0) {
        return -a;  
    } else {
        return a;  
    }
}console.log(abs(-40));

function raizCuadrada(a) {
    return Math.sqrt(a);
}console.log(raizCuadrada(9));  
