const localStorage = window.localStorage

const nombre = document.getElementById("name")
const pass = document.getElementById("password")
const form = document.getElementById("form")

form.addEventListener("submit", e =>{
    e.preventDefault()
    
    login();

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
        var found = false
        for(let i = 0; i < listObject.length; i++){
            const obj = listObject[i]

            if(obj.nombre === username.value &&
                obj.password === password.value){
                    found = true
                    sessionStorage.setItem("userId", obj.id)
                }
        }
        if(found){
            window.location.href = "../Main.html"
        } else{
            alert("Datos incorrectos")
        }
    } else{
        alert("Datos incorrectos")
    }
}


