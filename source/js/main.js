// Función para cargar archivos HTML
function loadHTML(elementID, filePath) {
    fetch(filePath)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Error ${response.status}: No se pudo cargar ${filePath}`);
            }
            return response.text();
        })
        .then(data => {
            document.getElementById(elementID).innerHTML = data;
        })
        .catch(error => {
            console.error("Error al cargar el archivo:", error);
            document.getElementById(elementID).innerHTML = `<p style="color: red;">Error al cargar el archivo: ${filePath}</p>`;
        });
}

// Cargar Header y Footer
document.addEventListener("DOMContentLoaded", () => {
    loadHTML("header-placeholder", "includes/header.html");
    loadHTML("footer-placeholder", "includes/footer.html");
});
