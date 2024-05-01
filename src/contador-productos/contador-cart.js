const iconoContador = document.querySelectorAll(".miniicon");
const contadorElemento = document.getElementById("contador-cart");

let contador = 0;

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
