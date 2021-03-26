function saludar() {
    console.log("Hola Coderhouse")
}

saludar();

//let resultado = 10;

/**
 * Ejemplo de documentacion
 * @param {Int} pNumero1 
 * @param {Int} pNumero2 
 * @param {String} pOperation 
 * @returns Int
 */
function calculadora(pNumero1, pNumero2, pOperation) {
    let resultado = 0;
    switch (pOperation) {
        case "+":
            resultado = pNumero1 + pNumero2;
            break;
        case "-":
            resultado = pNumero1 - pNumero2;
            break;
        default:
            break;
    }

    return resultado;
}

let numero1 = parseInt(prompt("Ingrese numero 1"));
let numero2 = parseInt(prompt("Ingrese numero 2"));
let operacion = prompt("Ingrese Operacion: + o - ");
alert(calculadora(numero1,numero2, operacion));

// Repito el saludar 50 veces
for (let index = 0; index < 50; index++) {
    saludar();
}


const suma = (x,y) => x + y;
const resta = (x,y) => x - y;
const iva = x => x * 0.21;

// Version function
function iva2 ( x ){
    return x * 0.21;
}

alert(suma(2,3));

let precioProducto = 5000;
let precioDescuent = 500;

let precioMasIva = suma(precioProducto, iva(precioProducto));

let precioFinal = resta(precioMasIva, precioDescuent);

alert(precioFinal);
