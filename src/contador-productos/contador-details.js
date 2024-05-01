Init();

function Init(){
    const botonCart = document.getElementById("enviar");

    botonCart.addEventListener("click", onBotonCartClick);
}

function onBotonCartClick(){
    const contadorActual = document.getElementById("contador");
    let contadorActualEntero = parseInt(contadorActual.innerText);
    const selectorCantidad = document.getElementById("selector");
    let cantidadEntero = parseInt(selectorCantidad.value);

    contadorActualEntero += cantidadEntero;

    contadorActual.innerText = contadorActualEntero;
}