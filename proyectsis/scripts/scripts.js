// Seleccionar elementos
const menuButton = document.getElementById('menu-button');
const sidebar = document.getElementById('sidebar');

// Función para abrir la barra lateral
function openSidebar() {
    sidebar.classList.add('active');
}

// Función para cerrar la barra lateral
function closeSidebar() {
    sidebar.classList.remove('active');
}

// Evento para abrir la barra lateral
menuButton.addEventListener('click', (event) => {
    event.stopPropagation(); // Evita que el evento se propague al documento
    openSidebar();
});

// Evento para cerrar la barra al hacer clic fuera de ella
document.addEventListener('click', (event) => {
    // Verifica si el clic fue fuera de la barra lateral
    if (!sidebar.contains(event.target) && sidebar.classList.contains('active')) {
        closeSidebar();
    }
});




const departamentoSelect = document.getElementById("departamento");
const zonaSelect = document.getElementById("zona");

const zonas = {
    beni: ["Zona 1", "Zona 2", "Zona 3"],
    chuquisaca: ["Zona 4", "Zona 5", "Zona 6"],
    cochabamba: ["Zona 7", "Zona 8", "Zona 9"],
    laPaz: ["Zona 10", "Zona 11", "Zona 12"],
    oruro: ["Zona 13", "Zona 14", "Zona 15"],
    pando: ["Zona 16", "Zona 17", "Zona 18"],
    potosi: ["Zona 19", "Zona 20", "Zona 21"],
    santaCruz: ["Zona 22", "Zona 23", "Zona 24"],
    tarija: ["Zona 25", "Zona 26", "Zona 27"]
};

departamentoSelect.addEventListener("change", function() {
    const selectedDepartamento = departamentoSelect.value;
    zonaSelect.innerHTML = '<option value="">Seleccione...</option>'; // Reinicia la lista de zonas
    
    if (selectedDepartamento && zonas[selectedDepartamento]) {
        zonas[selectedDepartamento].forEach(function(zona) {
            const option = document.createElement("option");
            option.value = zona;
            option.textContent = zona;
            zonaSelect.appendChild(option);
        });
    }
});
