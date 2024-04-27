const nombre = document.getElementById("user")
const email = document.getElementById("email")
const pass = document.getElementById("password")
const repeatPass = document.getElementById("repeat")
const form = document.getElementById("form")

form.addEventListener("submit", e =>{
    e.preventDefault()
    if (!validateNombre()) {
        alert("El nombre no es válido. Debe tener al menos 6 caracteres.");
        return;
    }
    
    if (!validateEmail()) {
        alert("El email no es válido.");
        return;
    }
    
    if (!validatePassword()) {
        alert("La contraseña no es válida. Debe tener al menos 8 caracteres.");
        return;
    }
    
    if (!validateRepeatPassword()) {
        alert("Las contraseñas no coinciden.");
        return;
    }
    
    window.location.href = "file:///C:/Users/Sergio/OneDrive%20-%20Universidad%20Icesi%20(@icesi.edu.co)/Desktop/Quinto%20semestre/Fundamentos%20de%20programaci%C3%B3n/Proyecto-Fundamentos/html/profile.html"
});

function validateNombre() {
    return nombre.value.length >= 6;
}

function validateEmail() {
    const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return regexEmail.test(email.value);
}

function validatePassword() {
    return pass.value.length >= 8;
}

function validateRepeatPassword() {
    return repeatPass.value === pass.value;
}