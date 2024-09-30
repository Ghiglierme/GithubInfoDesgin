let popup = document.getElementById("popup");
let description = document.getElementById("popup-description");

function openPopup(testo){
    popup.classList.add("open-popup");
    description.innerText = testo;
}

function closePopup(){
    popup.classList.remove("open-popup");
}

