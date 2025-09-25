// Espera a que todo el HTML esté cargado
document.addEventListener('DOMContentLoaded', function() {

    // El elemento HTML que contiene el libro
    const bookElement = document.getElementById('catalog-book');

    // La lista de tus imágenes
    const imagenes = [
        'pagina1.jpg', 'pagina2.jpg', 'pagina3.jpg', 'pagina4.jpg',
        'pagina5.jpg', 'pagina6.jpg', 'pagina7.png', 'pagina8.png'
    ];

    // Crea el objeto PageFlip
    // Los valores de width y height deben ser la MITAD del tamaño del contenedor del libro en el CSS
    // Nuestro #catalog-book mide 900px de ancho, así que cada página mide 450px.
    const pageFlip = new St.PageFlip(bookElement, {
        width: 450,
        height: 600,
        showCover: true // Muestra la primera imagen como una portada
    });

    // Añade cada imagen como una página al libro
    imagenes.forEach(nombreImagen => {
        pageFlip.loadFromImages('assets/' + nombreImagen);
    });

});