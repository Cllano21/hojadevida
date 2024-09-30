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

const hiddenImageSrc = './img4.png'; // Cambia esto a la ruta correcta
const img = new Image();
img.src = hiddenImageSrc;

img.onload = function() {
    // Ahora puedes agregar la imagen oculta al PDF
    html2pdf().from(content).set(options).toPdf().get('pdf').then((pdf) => {
        pdf.addImage(img, 'PNG', 15, 170, 180, 160); // Ajusta la posición y tamaño según necesites
        pdf.save('pagina-con-imagen.pdf');
    });
};

if (img.complete) {
    img.onload(); // Llama la función si la imagen ya está cargada
}