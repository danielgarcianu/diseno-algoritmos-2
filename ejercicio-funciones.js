/*Crea una función que calcule el descuento que se le va a hacer a un cliente 
según el valor de su compra.

Si es una compra de menos de 100, se le hará un descuento del 10%. (0-99)
Si es una compra de 100 hasta menos de 200 se le hará un descuento del 20%.(100 - 199)
y si es una compra de más de 200 se le hará un descuento del 30%. (200 =>)

Utiliza prompt, funciones, condicionales y operadores de comparación.

La función debe pedir el precio al cliente, e imprimir el resultado del precio menos el descuento
 ya sea en pantalla o en consola.

(Se guardará en un archivo nuevo llamado ejercicioFunciones.js)
 */
let totalDeCompra = parseInt(prompt('ingresa el valor de tu compra'));

function tuDescuento(totalDeCompra){
    
    if(totalDeCompra <= 99){
        descuento = totalDeCompra * .90;
    } else if(totalDeCompra > 99 && totalDeCompra <= 199){
        descuento = totalDeCompra * .80;
    } else if(totalDeCompra > 199){
        descuento = totalDeCompra * .70;
    }
}

tuDescuento(totalDeCompra);
document.write('<h1> Tu total con descuento es ' + descuento + '</h1>');