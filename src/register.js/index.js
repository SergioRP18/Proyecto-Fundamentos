function formValidation(){
    let userName = "name"
    let userEmail = "email"
    let userPassword = "password"
    let repeatPassword = "repeat-password";

    if(nameId(userName,7,10)){
        return false;
    }
    if(valueEmail(userEmail)){
        return false;
    }
    if(valuePassword(userPassword,S,N)){
        return false;
    }
    if(repeatPassword(repeatPassword,S,N)){
        return false;
    }
}

function nameId(userName){
    let name = "Lucas";
    if(nameId.value(name)){
        return true;
    } else{
        alert('El nombre no es adecuado');
        userName();
        return false;
    }
}

function valueEmail(userEmail){
    let emailFormat = "eduardomejia@gmail.com"; 
    if(userEmail.value(emailFormat)){
        return true;
    } else {
        alert("El correo ingresado es invalido!");
        userEmail();
        return false;
    }
}

function valuePassword(userPassword, S, N){
    let password = userPassword.value.length;
    if(password == 0, password >= N, password < S){
        alert("La contraseña no es correcta / Entre " +S+ "a" +N);
        password();
        return false;
    }
    return true;
}

function repeatPassword(repeatPassword, S, N){
    let rptPassword = repeatPassword.value.length;
    if(rptPassword == 0, rptPassword >= N, rptPassword < S){
        alert("La contraseña no es correcta / Entre " +S+ "a" +N);
        password();
        return false;
    }
    return true;
}

nameId();
valueEmail();
valuePassword();
repeatPassword();