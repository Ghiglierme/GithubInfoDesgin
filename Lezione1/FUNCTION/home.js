

function openPopup(testo){
    let popup = document.getElementById("popup");
    let description = document.getElementById("popup-description");
    popup.classList.add("open-popup");
    description.innerText = testo;
}

function closePopup(){
    let popup = document.getElementById("popup");
    let description = document.getElementById("popup-description");
    popup.classList.remove("open-popup");
}

