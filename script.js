// Espera a que todo el HTML esté cargado
document.addEventListener('DOMContentLoaded', function() {

    // El elemento HTML que contiene el libro
    const bookElement = document.getElementById('catalog-book');

    // Creamos la lista COMPLETA de las rutas de tus imágenes.
    // Esta es la forma correcta para que GitHub Pages las encuentre.
    const imagePaths = [
        'assets/pagina1.jpg',
        'assets/pagina2.jpg',
        'assets/pagina3.jpg',
        'assets/pagina4.jpg',
        'assets/pagina5.jpg',
        'assets/pagina6.jpg',
        'assets/pagina7.png',
        'assets/pagina8.png'
    ];

    // Crea el objeto PageFlip
    const pageFlip = new St.PageFlip(bookElement, {
        width: 450,
        height: 600,
        showCover: true // Muestra la primera imagen como una portada
    });

    // Carga TODAS las imágenes de una sola vez
    pageFlip.loadFromImages(imagePaths);

});