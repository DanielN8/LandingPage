function loadContent(url, element) {
    fetch(url)
        .then(response => response.text())
        .then(html => {
            document.getElementById("content").innerHTML = html;
            
            // Eliminar la clase "active" de todos los enlaces
            document.querySelectorAll('.nav-link').forEach(link => {
                link.classList.remove('active');
                link.classList.remove('fw-bold');
            });
            
            // Agregar la clase "active" al enlace correspondiente
            element.classList.add('active');
            element.classList.add('fw-bold');
        })
        .catch(error => {
            document.getElementById("content").innerHTML = "<p>Error al cargar el contenido.</p>";
            console.error("Error al cargar el contenido:", error);
        });
}

// Este muestra el popup del inicio del botón Registrarse
document.querySelector('.btn-light').addEventListener('click', function() {
    var myModal = new bootstrap.Modal(document.getElementById('registroModal'));
    myModal.show();
});