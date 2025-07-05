document.getElementById('generate-pdf').addEventListener('click', function () {
    const { jsPDF } = window.jspdf;

    // Crear el documento con formato A4
    const doc = new jsPDF({
        orientation: 'portrait',
        unit: 'mm', // Utiliza milímetros
        format: 'a4' // Establece el tamaño a A4
    });

    // Captura el contenido HTML y lo convierte en texto seleccionable
    doc.html(document.getElementById('content'), {
        callback: function (pdf) {
            pdf.save('César Andrés Llano Iza.pdf');
        },
        x: 5,  // Margen izquierdo
        y: 5,  // Margen superior
        html2canvas: {
            scale: 0.25, // Escala el contenido para que se ajuste mejor a la página A4
            useCORS: true // Evita problemas de CORS si se cargan imágenes externas
        }
    });
});

let visitas = localStorage.getItem('contadorVisitas') ? parseInt(localStorage.getItem('contadorVisitas')) : 0;

// Incrementar el contador
visitas += 1;

// Guardar el nuevo número de visitas en el almacenamiento local
localStorage.setItem('contadorVisitas', visitas);

// Mostrar el número de visitas en la página
document.getElementById('visitas').innerText = visitas;