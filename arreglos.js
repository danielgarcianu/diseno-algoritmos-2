/*
    coleccion de elementos 
    Tienen m[etodos o funciones que nos permiten ordenar o 
        manipular los datos almacenados
        
*/
//manera1
const arreglo1 = [4, 'hola', true, [1, 2,6]];
console.log(arreglo1);

//manera2
const arreglo2 = Array.of(1, "hola", true);
console.log(arreglo2);

//manera3
const arreglo3 = new Array(3,true, 'adios');
console.log(arreglo3);

const frutas = ['manzana', 'naranjas', 'uvas', 'sandias', [1,2,3,4,5,['a','b', 'c']]];
console.log(frutas[1]);
//notacion de corchetes

console.log(frutas[1])
console.log(frutas[3])
console.log(frutas[4])
console.log(frutas[4][4])
console.log(frutas[4][5][1])
frutas[4][5].push('D');
console.log(frutas);

//METODOS PARA HACER CAMBIOS A NUESTROS ARREGLOS
/*Lenght = longitud de nuestro arreglo */
const letras =['a', 'b', 'c', 'd'];
console.log(letras.length)

/*push = añade un elemento al final de nuestro arreglo */
letras.push('e');
console.log(letras);

// pop = elimina el ultimo elemento que tengamos en nuestro arreglo
letras.pop()
console.log(letras);

//unshift = agrega un elemento al inicio de nuestro arreglo
letras.unshift('1');
console.log(letras)

//shift = elimina el primer elemnto de el array
letras.shift();
console.log(letras);