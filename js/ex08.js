/*Dados los arrays javascript1 = ["DOM", "BOM", "Funciones", "Arrays"] y javascript2 =
["Objetos", "Arrays", "ParseInt"], crea una función que determine si se repite algún
elemento y lo saque por consola.*/

let javascript1 = ["DOM", "BOM", "Funciones", "Arrays","DOM"];
let javascript2 = ["Objetos", "Arrays", "ParseInt"];


const repe = (arrayEntrada)=>{
    for (let i = 0; i < arrayEntrada.length; i++) {
        let newArray = [...arrayEntrada];
        newArray[i]= null;
        for (let j = 0; j < arrayEntrada.length; j++) {
            if (arrayEntrada[i]==newArray[j]) {
                console.log('existen valores repetidos, el valor: ' + arrayEntrada[i]);
            }     
        }
    }
}

repe(javascript1);
repe(javascript2);


//forma sencilla
// let javascript1 = ["DOM", "BOM", "Funciones", "Arrays","DOM","DOM"];
// let javascript2 = ["Objetos", "Arrays", "ParseInt"];

// let repe = (newArray) => {
//     let arrayNorepe = new Set(newArray);
//     if (arrayNorepe.size < newArray.length ) {
//         console.log('tiene repetidos');
//     } else {
//         console.log('No hay repetidos');
//     }
// }

// repe(javascript2);