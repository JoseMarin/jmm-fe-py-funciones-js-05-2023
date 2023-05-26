// creo etiquetas en tiempo de ejecución
// document.write('<h3>Etiqueta nueva</h3>'); 

//recupera informacion de 1 etiqueta de mi html 
// let titulo =  document.getElementById('titulo');
// console.log(titulo);

// titulo.innerHTML = 'JS';

//recupera un conjunto de etiquetas html
// let bx = document.getElementsByClassName('bx');
// console.log(bx);

// console.log(bx[0]);
// bx[0].innerHTML = 'Nuevo contenido desde JS';
// console.log(bx[0]);

//recupera valor del input


let imprimir = () =>{
    let inp = document.getElementById('txt').value;
    console.log(inp);
    document.getElementById('bx-1').innerHTML = inp;

    document.getElementById('resultado').innerHTML = eval(inp);
}

