document.addEventListener("DOMContentLoaded", function () {
    const imagenes = document.querySelectorAll(".suave"); // Selecciona todas las imágenes con la clase .suave

    function mostrarImagenes() {
        imagenes.forEach((imagen) => {
            const posicion = imagen.getBoundingClientRect().top;
            const alturaPantalla = window.innerHeight;

            if (posicion < alturaPantalla - 150) { 
                imagen.classList.add("mostrar"); // Agrega la clase para activar la animación
            } else{
                imagen.classList.remove("mostrar");
            }
        });
    }

    window.addEventListener("scroll", mostrarImagenes);
    mostrarImagenes(); // Para que funcione si ya está visible al cargar la página
});
