const localStorage = window.localStorage

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

    window.location.href = "../Main.html";
});

function validateNombre(){
    return nombre.value.length >0;
}

function validatePassword(){
    return pass.value.length >0;
}

function login(){
    const username = document.getElementById("name")
    const password = document.getElementById("password")

    const userlistString = localStorage.getItem("users")
    if(userlistString){
        let listObject = JSON.parse(userlistString)
        var user = null
        for(let i = 0; i < listObject.length; i++){
            const obj = listObject[i]

            if(obj.username === username &&
                obj.password === password){
                    found = true
                    const objToSave = JSON.stringify(obj)
                    localStorage.setItem("logged-user", objToSave)
                }
        }
        if(found){
            window.location.href = "./Main.html"
        } else{
            alert("Datos incorrectos")
        }
    } else{
        alert("Datos incorrectos")
    }
}