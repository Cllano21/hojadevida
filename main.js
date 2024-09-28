// script.js
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault(); // Previene el comportamiento por defecto del enlace
        const targetId = this.getAttribute('data-target'); // Obtiene el ID del contenedor
        const targetElement = document.getElementById(targetId); // Selecciona el contenedor

        // Desplazamiento manual
        const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY;
        
        // Desplazamiento suave
        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
    });
});
