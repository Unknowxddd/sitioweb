function mostrarEsperando() {
    var esperandoModal = document.getElementById("esperandoModal");
    var compraModal = document.getElementById("compraModal");

    esperandoModal.style.display = "block";

    setTimeout(function() {
        esperandoModal.style.display = "none";
        compraModal.style.display = "block";
    }, 3000);
}
