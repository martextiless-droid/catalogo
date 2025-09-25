// Espera a que todo el HTML esté cargado
document.addEventListener('DOMContentLoaded', function() {

    const bookElement = document.getElementById('catalog-book');

    const imagePaths = [
        'assets/pagina1.jpg',
        'assets/pagina2.jpg',
        'assets/pagina3.jpg',
        'assets/pagina4.jpg',
        'assets/pagina5.jpg',
        'assets/pagina6.jpg',
        'assets/pagina7.png',
        'assets.pagina8.png' // <-- ¡OJO! Corregí un error de escritura aquí también
    ];

    // Crea el objeto PageFlip con una configuración más simple
    const pageFlip = new St.PageFlip(bookElement, {
        width: 450, // la mitad del ancho del libro en CSS
        height: 600 // la altura completa del libro en CSS
    });

    // Carga TODAS las imágenes de una sola vez
    pageFlip.loadFromImages(imagePaths);

});