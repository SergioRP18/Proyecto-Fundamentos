let contador;
const contadorElemento = document.getElementById("contador");

Init();

function Init(){
    const botonCart = document.getElementById("enviar");

    botonCart.addEventListener("click", onBotonCartClick);
}

function actualizarContador(){
    contadorElemento.textContent = contador;
}

function guardarEnSessionStorage(){
    if(contador !== undefined){
        window.sessionStorage.setItem("totalCarrito",contador);
    } else {
        window.sessionStorage.setItem("totalCarrito",0);
    }
}

function recuperarDeSessionStorage(){
    const totalCarrito = window.sessionStorage.getItem("totalCarrito");
    if(totalCarrito === null){
        window.sessionStorage.setItem("totalCarrito", 0);
        contador = 0; 
    } else {
        contador = totalCarrito;
        actualizarContador();
    }
}


function onBotonCartClick(){
    let contadorActualEntero = parseInt(contadorElemento.innerText);
    const selectorCantidad = document.getElementById("selector");
    let cantidadEntero = parseInt(selectorCantidad.value);

    contadorActualEntero += cantidadEntero;

    contador = contadorActualEntero;

    contadorElemento.innerText = contadorActualEntero;
}