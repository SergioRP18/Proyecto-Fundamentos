const localStorage = window.localStorage

const nombre = document.getElementById("user")
const email = document.getElementById("email")
const pass = document.getElementById("password")
const repeatPass = document.getElementById("repeat")
const form = document.getElementById("form")

form.addEventListener("submit", e =>{
    e.preventDefault()
    if (!validateEmail()) {
        alert("El email no es válido.");
        return;
    }
    
    if (!validateNombre()) {
        alert("El nombre no es válido. Debe tener al menos 6 caracteres.");
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
    
    saveUser()
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

function saveUser(){
    const nombre = document.getElementById("user").value
    const email = document.getElementById("email").value
    const password = document.getElementById("password").value
    const repeatPass = document.getElementById("repeat").value
    const id = (Math.random() + 1).toString(36).substring(7);

    const userToSave = {
        id : id,
        nombre : nombre,
        password : password,
        email : email,
        repeatPass : repeatPass
    }
        

    const userlistString = localStorage.getItem("users")
    if(userlistString){
        let listObject = JSON.parse(userlistString)
        listObject.push(userToSave)

        const listToSave = JSON.stringify(listObject)
        localStorage.setItem("users", listToSave)
    } else {
        const userList = [userToSave]
        const listToSave = JSON.stringify(userList)
        localStorage.setItem("users", listToSave)
    }

    window.location.href = "./profile.html";
}