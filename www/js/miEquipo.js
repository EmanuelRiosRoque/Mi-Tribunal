const miEquipo = document.querySelector("#miEquipo");


document.addEventListener("DOMContentLoaded", () => {
    if(miEquipo) {
        miEquipo.addEventListener("click", enviarAequipo)
    }

});


function enviarAequipo() {
    window.location.href = 'miEquipo.html';
}