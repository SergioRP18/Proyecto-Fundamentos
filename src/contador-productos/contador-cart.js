const iconoContador = document.querySelectorAll(".miniicon");
const contadorElemento = document.getElementById("contador-cart");


let contador;
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

function guardarEnSessionStorage(){
    if(contador !== undefined){
        window.sessionStorage.setItem("totalCarrito",contador);
    } else {
        window.sessionStorage.setItem("totalCarrito",0);
    }
}

function actualizarContador(){
    contadorElemento.textContent = contador;
}

function incrementarContador(){
    contador++;
    actualizarContador();
}

iconoContador.forEach((icon) => {
    icon.addEventListener("click", () => incrementarContador());
})
