const logoutButton = document.querySelector("#logout")

logoutButton.addEventListener("click", ()=>{
    
    sessionStorage.removeItem("userId");

    window.location.replace("../Main.html")
})