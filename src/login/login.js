const nombre = document.getElementById("name")
const pass = document.getElementById("password")
const form = document.getElementById("form")

form.addEventListener("submit", e =>{
    e.preventDefault()
    
    if(!validateNombre()){
        alert("El nombre no es valido")
        return;
    }

    if(!validatePassword()){
        alert("La contraseña no es válida")
        return;
    }

    window.location.href = "./Main.html";
});

function validateNombre(){
    return nombre.value.length >0;
}

function validatePassword(){
    return pass.value.length >0;
}