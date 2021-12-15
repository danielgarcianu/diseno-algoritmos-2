/*

    CONDICIONALES
        if (condicion){
            ...bloque de codigo
        } else if(){
            
        }

    funciones
    bloque de codigo reutilizable que evita hacer un codigo repetitivo
        function nombre (parametros){
            return palabra reservada que se unsa para que nos muestre el resultado de la function
        }
        nombre(argumentos);

*/
function procesadorDeFrutas(manzanas, naranjas){
    let jugo = 'Jugo de ' + manzanas + ' manzanas ' + naranjas + ' naranjas' 
    return jugo;
}

let jugoDeManzana = procesadorDeFrutas(4,0);
console.log(jugoDeManzana);

let jugoDeNaranja = procesadorDeFrutas (0,5);
console.log(jugoDeNaranja);
