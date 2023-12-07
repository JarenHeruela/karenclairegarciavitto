function login() {
    var username = document.getElementById("username").value;
    var errorMessage = document.getElementById("error-message");

    // Perform simple authentication (replace this with server-side validation)
    if (username === "Karen" || username === "Klaii") {
        errorMessage.innerText = "Hi Karen My Love 💕💕💕!";
        window.location.href='/dashboard/index.html';
    } else {
        errorMessage.innerText = "Hey! Hindi ka ikaw Jowa ko!🤨";
    }
}
