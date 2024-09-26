const carrusel = document.querySelector(".carrusel-items");

let maxScrollLeft = carrusel.scrollWidth - carrusel.clientWidth;
let intervalo = null;
let step = 1;
let startX;
let scrollLeft;

// Iniciar el auto-desplazamiento
const start = () => {
    intervalo = setInterval(function () {
        carrusel.scrollLeft += step;
        if (carrusel.scrollLeft >= maxScrollLeft || carrusel.scrollLeft <= 0) {
            step = -step; // Invertir dirección
        }
    }, 10);
};



start();