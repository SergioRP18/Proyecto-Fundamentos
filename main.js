init();

function init() {
    const profileLoginA = document.querySelector("#profile-login");
    const userId = sessionStorage.getItem("userId");
    if (userId) {
        profileLoginA.href = "./html/profile.html";
        return;
    } else {
        profileLoginA.href = "./html/login.html";
    }
}