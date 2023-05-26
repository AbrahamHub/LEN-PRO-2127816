function copiar() {
        let etiqueta = document.getElementById("contenido");
        let conten = etiqueta.textContent;
        navigator.clipboard.writeText(conten);
        alert("Copiado al portapapeles");
}