const images = ["sauna-bagno.jpg", "solar.jpeg", "ssaunana.png"];
const titles = ["GERADORES DE VAPOR PARA SAUNA", "SAUNA VAPORMAX", "CONFORTO E ECONOMIA"]
const description = ["TRABALHAMOS COM DIVERSAS OPÇÕES DE GERADORES DE VAPOR PARA SAUNAS.", "TRABALHAMOS COM DIVERSAS OPÇÕES DE GERADORES DE VAPOR PARA SAUNAS.", "COM NOSSOS AQUECEDORES DE ALTA PERFORMANCE!"]
var current = 0;

function nextImage() {
    if(current == 2) {
        current = 0;
    }
    else {
        current = current + 1;
    }
    document.getElementById("promo").style.backgroundImage = "url('assets/images/" + images[current] + "')";
    document.getElementById("desc1").innerHTML = titles[current];
    document.getElementById("desc2").innerHTML = description[current];
}

function previousImage() {
    if(current == 0) {
        current = 2;
    }
    else {
        current = current - 1;
    }
    document.getElementById("promo").style.backgroundImage = "url('assets/images/" + images[current] + "')";
    document.getElementById("desc1").innerHTML = titles[current];
    document.getElementById("desc2").innerHTML = description[current];
}

// Chiamato quando viene caricata la pagina
document.addEventListener("DOMContentLoaded", () => {
    setInterval(() => {
        nextImage();
    }, 3000);
});