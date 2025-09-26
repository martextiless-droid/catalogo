// Espera a que todo el HTML esté cargado antes de ejecutar el script
document.addEventListener('DOMContentLoaded', function () {

    // --- BASE DE DATOS DE PRODUCTOS ---
    // ¡Aquí es donde editas la información de cada pijama!
    const products = [
        {
            image: 'assets/pagina1.jpg',
            ref: '3301',
            title: 'Pijama Short Tiras Ref: 3301',
            price: 'Desde COP 9.000 al por mayor',
            description: `*TALLA:* Unica
*TELA:* Piel de durazno.
*Estampados surtidos.*

*Precios por Cantidad:*
- Valor x 1: $18.000
- Valor x 6: $69.000 ($11.500 c/u)
- Valor x 12: $114.000 ($9.500 c/u)
- Valor x 120+: $9.000 c/u`,
            link: 'https://wa.me/p/3760818927282293/573015547616'
        },
        {
            image: 'assets/pagina2.jpg',
            ref: '3303',
            title: 'Pijama Batola Ref: 3303',
            price: 'Desde COP 9.000 al por mayor',
            description: `*TALLA:* Unica
*TELA:* Piel de durazno.
*Estampados surtidos.*

*Precios por Cantidad:*
- Valor x 1: $18.000
- Valor x 6: $69.000 ($11.500 c/u)
- Valor x 12: $114.000 ($9.500 c/u)
- Valor x 120+: $9.000 c/u`,
            link: 'https://wa.me/p/8897517780318866/573015547616'
        },
        {
	    image: 'assets/pagina3.jpg',
            ref: '3305',
            title: 'Pijama Short Ref: 3305',
            price: 'Desde COP 9.000 al por mayor',
            description: `*TALLA:* Unica
*TELA:* Piel de durazno.
*Estampados surtidos.*

*Precios por Cantidad:*
- Valor x 1: $18.000
- Valor x 6: $69.000 ($11.500 c/u)
- Valor x 12: $114.000 ($9.500 c/u)
- Valor x 120+: $9.000 c/u`,
            link: 'https://wa.me/p/6043646905731935/573015547616'
        },
        {
            image: 'assets/pagina4.jpg',
            ref: '3305XL',
            title: 'Pijama Short XL Ref: 3305XL',
            price: 'Desde COP 11.500 al por mayor',
            description: `*TALLA:* Unica
*TELA:* Piel de durazno.
*Estampados surtidos.*

*Precios por Cantidad:*
- Valor x 1: $21.000
- Valor x 6: $84.000 ($14.000 c/u)
- Valor x 12: $144.000 ($12.00 c/u)
- Valor x 120+: $11.500 c/u`,
            link: 'https://wa.me/p/24073798738876233/573015547616'
        },
        {
            image: 'assets/pagina5.jpg',
            ref: '3306',
            title: 'Pijama Short Ref: 3306',
            price: 'Desde COP 9.000 al por mayor',
            description: `*TALLA:* Unica
*TELA:* Piel de durazno.
*Estampados surtidos.*

*Precios por Cantidad:*
- Valor x 1: $18.000
- Valor x 6: $69.000 ($11.500 c/u)
- Valor x 12: $114.000 ($9.500 c/u)
- Valor x 120+: $9.000 c/u`,
            link: 'https://wa.me/p/6114342001952498/573015547616'
        },
        {
            image: 'assets/pagina6.jpg',
            ref: '3308',
            title: 'Pijama Enterizo Ref: 3308',
            price: 'Desde COP 11.500 al por mayor',
            description: `*TALLA:* Unica
*TELA:* Piel de durazno.
*Estampados surtidos.*

*Precios por Cantidad:*
- Valor x 1: $21.000
- Valor x 6: $84.000 ($14.000 c/u)
- Valor x 12: $144.000 ($12.00 c/u)
- Valor x 120+: $11.500 c/u`,
            link: 'https://wa.me/p/5904539409675217/573015547616'
        },
        {
            image: 'assets/pagina7.jpg',
            ref: '3308XL',
            title: 'Pijama Enterizo Ref: 3308XL',
            price: 'Desde COP 13.500 al por mayor',
            description: `*TALLA:* XL
*TELA:* Piel de durazno.
*Estampados surtidos.*

*Precios por Cantidad:*
- Valor x 1: $25.000
- Valor x 6: $96.000 ($16.000 c/u)
- Valor x 12: $168.000($14.000 c/u)
- Valor x 120+: $13.500 c/u`,
            link: 'https://wa.me/p/5351728944929832/573015547616'
        },
        {
            image: 'assets/pagina8.jpg',
            ref: '3309',
            title: 'Pijama Enterizo Ref: 3309',
            price: 'Desde COP 9.500 al por mayor',
            description: `*TALLA:* Unica
*TELA:* Piel de durazno.
*Estampados surtidos.*

*Precios por Cantidad:*
- Valor x 1: $18.000
- Valor x 6: $72.000 ($12.000 c/u)
- Valor x 12: $120.000 ($10.000 c/u)
- Valor x 120+: $9.500 c/u`,
            link: 'https://wa.me/p/5910055192376860/573015547616'
        },
	{
	    image: 'assets/pagina9.jpg',
            ref: '3309XL',
            title: 'Pijama Enterizo Ref: 3309XL',
            price: 'Desde COP 9.000 al por mayor',
            description: `*TALLA:* XL
*TELA:* Piel de durazno.
*Estampados surtidos.*

*Precios por Cantidad:*
- Valor x 1: $18.000
- Valor x 6: $69.000 ($11.500 c/u)
- Valor x 12: $114.000 ($9.500 c/u)
- Valor x 120+: $9.000 c/u`,
            link: 'https://wa.me/p/9333409850032256/573015547616'
        },
	{
  	    image: 'assets/pagina10.jpg',
            ref: '3306',
            title: 'Pijama Short Ref: 3306',
            price: 'Desde COP 9.000 al por mayor',
            description: `*TALLA:* Unica
*TELA:* Piel de durazno.
*Estampados surtidos.*

*Precios por Cantidad:*
- Valor x 1: $18.000
- Valor x 6: $69.000 ($11.500 c/u)
- Valor x 12: $114.000 ($9.500 c/u)
- Valor x 120+: $9.000 c/u`,
            link: 'https://wa.me/p/5995638747158343/573015547616'
        },
	{
 	    image: 'assets/pagina11.jpg',
            ref: '3306',
            title: 'Pijama Short Ref: 3306',
            price: 'Desde COP 9.000 al por mayor',
            description: `*TALLA:* Unica
*TELA:* Piel de durazno.
*Estampados surtidos.*

*Precios por Cantidad:*
- Valor x 1: $18.000
- Valor x 6: $69.000 ($11.500 c/u)
- Valor x 12: $114.000 ($9.500 c/u)
- Valor x 120+: $9.000 c/u`,
            link: 'https://wa.me/p/6172729359473823/573015547616'
        },
	{
            image: 'assets/pagina12.jpg',
            ref: '3306',
            title: 'Pijama Short Ref: 3306',
            price: 'Desde COP 9.000 al por mayor',
            description: `*TALLA:* Unica
*TELA:* Piel de durazno.
*Estampados surtidos.*

*Precios por Cantidad:*
- Valor x 1: $18.000
- Valor x 6: $69.000 ($11.500 c/u)
- Valor x 12: $114.000 ($9.500 c/u)
- Valor x 120+: $9.000 c/u`,
            link: 'https://wa.me/p/6390426561042311/573015547616'
        },
	{
            image: 'assets/pagina13.jpg',
            ref: '3306',
            title: 'Pijama Short Ref: 3306',
            price: 'Desde COP 9.000 al por mayor',
            description: `*TALLA:* Unica
*TELA:* Piel de durazno.
*Estampados surtidos.*

*Precios por Cantidad:*
- Valor x 1: $18.000
- Valor x 6: $69.000 ($11.500 c/u)
- Valor x 12: $114.000 ($9.500 c/u)
- Valor x 120+: $9.000 c/u`,
            link: 'https://wa.me/p/5910055192376860/573015547616'
        },
	{
            image: 'assets/pagina14.jpg',
            ref: '3306',
            title: 'Pijama Short Ref: 3306',
            price: 'Desde COP 9.000 al por mayor',
            description: `*TALLA:* Unica
*TELA:* Piel de durazno.
*Estampados surtidos.*

*Precios por Cantidad:*
- Valor x 1: $18.000
- Valor x 6: $69.000 ($11.500 c/u)
- Valor x 12: $114.000 ($9.500 c/u)
- Valor x 120+: $9.000 c/u`,
            link: 'https://wa.me/p/5910055192376860/573015547616'
        },
	{
            image: 'assets/pagina15.jpg',
            ref: '3306',
            title: 'Pijama Short Ref: 3306',
            price: 'Desde COP 9.000 al por mayor',
            description: `*TALLA:* Unica
*TELA:* Piel de durazno.
*Estampados surtidos.*

*Precios por Cantidad:*
- Valor x 1: $18.000
- Valor x 6: $69.000 ($11.500 c/u)
- Valor x 12: $114.000 ($9.500 c/u)
- Valor x 120+: $9.000 c/u`,
            link: 'https://wa.me/p/5910055192376860/573015547616'
        },
	{
            image: 'assets/pagina16.jpg',
            ref: '3306',
            title: 'Pijama Short Ref: 3306',
            price: 'Desde COP 9.000 al por mayor',
            description: `*TALLA:* Unica
*TELA:* Piel de durazno.
*Estampados surtidos.*

*Precios por Cantidad:*
- Valor x 1: $18.000
- Valor x 6: $69.000 ($11.500 c/u)
- Valor x 12: $114.000 ($9.500 c/u)
- Valor x 120+: $9.000 c/u`,
            link: 'https://wa.me/p/5910055192376860/573015547616'
        },
	{
            image: 'assets/pagina17.jpg',
            ref: '3306',
            title: 'Pijama Short Ref: 3306',
            price: 'Desde COP 9.000 al por mayor',
            description: `*TALLA:* Unica
*TELA:* Piel de durazno.
*Estampados surtidos.*

*Precios por Cantidad:*
- Valor x 1: $18.000
- Valor x 6: $69.000 ($11.500 c/u)
- Valor x 12: $114.000 ($9.500 c/u)
- Valor x 120+: $9.000 c/u`,
            link: 'https://wa.me/p/5910055192376860/573015547616'
        },
	{
            image: 'assets/pagina18.jpg',
            ref: '3306',
            title: 'Pijama Short Ref: 3306',
            price: 'Desde COP 9.000 al por mayor',
            description: `*TALLA:* Unica
*TELA:* Piel de durazno.
*Estampados surtidos.*

*Precios por Cantidad:*
- Valor x 1: $18.000
- Valor x 6: $69.000 ($11.500 c/u)
- Valor x 12: $114.000 ($9.500 c/u)
- Valor x 120+: $9.000 c/u`,
            link: 'https://wa.me/p/5910055192376860/573015547616'
        },
	{
            image: 'assets/pagina19.jpg',
            ref: '3306',
            title: 'Pijama Short Ref: 3306',
            price: 'Desde COP 9.000 al por mayor',
            description: `*TALLA:* Unica
*TELA:* Piel de durazno.
*Estampados surtidos.*

*Precios por Cantidad:*
- Valor x 1: $18.000
- Valor x 6: $69.000 ($11.500 c/u)
- Valor x 12: $114.000 ($9.500 c/u)
- Valor x 120+: $9.000 c/u`,
            link: 'https://wa.me/p/5910055192376860/573015547616'
        }
    ];

   const bookElement = document.getElementById('catalog-book');
    const bookContainer = document.querySelector('.flipbook-container');

    // Inicializa la librería PageFlip
    const pageFlip = new St.PageFlip(bookElement, {
        width: 500,
        height: 600,
        size: 'stretch',
        usePortrait: true,
        drawShadow: false,
        flippingTime: 500,
        maxShadowOpacity: 0.1,
    });

    // --- CONSTRUCCIÓN DINÁMICA DEL LIBRO ---

    // 1. Portada
    const coverPage = document.createElement('div');
    coverPage.classList.add('page', 'cover-page');
    coverPage.innerHTML = '<h2>Pijamas Martex</h2><p>Colección 2025</p>';
    bookElement.appendChild(coverPage);

    // 2. Páginas de productos (una página por producto)
    products.forEach(product => {
        const productPage = document.createElement('div');
        productPage.classList.add('page', 'product-page');
        // Ahora usamos los campos únicos de cada producto
        productPage.innerHTML = `
            <div class="product-image-container">
                <img src="${product.image}" alt="${product.title}">
            </div>
            <div class="product-details">
                <h2 class="product-title">${product.title}</h2>
                <p class="product-price">${product.price}</p>
                <div class="product-description">${product.description.replace(/\n/g, '<br>')}</div>
                <a href="${product.link}" target="_blank" class="whatsapp-button">
                    <svg viewBox="0 0 24 24"><path fill="currentColor" d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.37 21.82 12.04 21.82C17.5 21.82 21.95 17.37 21.95 11.91C21.95 6.45 17.5 2 12.04 2M12.04 3.67C16.56 3.67 20.28 7.39 20.28 11.91C20.28 16.43 16.56 20.15 12.04 20.15C10.46 20.15 8.96 19.68 7.72 18.89L7.22 18.59L4.41 19.31L5.15 16.58L4.83 16.07C3.93 14.68 3.46 13.07 3.46 11.91C3.46 7.39 7.18 3.67 12.04 3.67M16.57 14.49C16.31 14.23 15.39 13.78 15.17 13.7C14.94 13.62 14.78 13.58 14.61 13.84C14.45 14.1 13.98 14.65 13.82 14.81C13.66 14.98 13.5 15 13.24 14.74C12.98 14.48 12.15 14.19 11.16 13.3C10.39 12.63 9.89 11.84 9.73 11.58C9.56 11.32 9.72 11.18 9.86 11.04C10 10.9 10.15 10.7 10.3 10.5C10.46 10.3 10.54 10.14 10.7 9.88C10.87 9.62 10.79 9.42 10.71 9.25C10.63 9.08 10.12 7.82 9.91 7.32C9.7 6.82 9.49 6.86 9.35 6.85H9.08C8.82 6.85 8.51 6.93 8.24 7.2C7.98 7.46 7.37 8.01 7.37 9.17C7.37 10.32 8.28 11.41 8.41 11.58C8.53 11.74 10.12 14.23 12.58 15.22C13.23 15.5 13.71 15.66 14.08 15.81C14.69 16.03 15.21 15.99 15.63 15.9C16.1 15.8 16.92 15.29 17.13 14.7C17.35 14.1 17.35 13.62 17.27 13.45C17.19 13.28 16.84 14.74 16.57 14.49Z"></path></svg>
                    Ver y Comprar en WhatsApp
                </a>
            </div>
        `;
        bookElement.appendChild(productPage);
    });
    
    // 3. Cargar las páginas en la librería
    const pages = bookElement.querySelectorAll('.page');
    pageFlip.loadFromHTML(pages);

});

