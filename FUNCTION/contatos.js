function validateForm() {
    const name = document.getElementById("name");
    const phone = document.getElementById("telefone");
    const email = document.getElementById("email");
    const message = document.getElementById("message");

    if(name.value.length == 0) {
        alert("Inserisci un nome valido");
    }
    else if(phone.value.length == 0) {
        alert("Inserisci un numero di telefono valido");
    }
    else if(email.value.length == 0 || !isEmailValid(email.value)) {
        alert("Inserisci una email valida");
    }
    else if(message.value.length == 0){
        alert("Inserisci un messaggio valido");
    }
}


function isEmailValid(email) {
    /*const emailRegex = new RegExp(
    "/^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-ZA-Z]{2,}$/"
    );
    if(emailRegex.test(email)) {
        */return true;/*
    }
    return false;*/
}