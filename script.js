// --- BASE DE DATOS DE PRODUCTOS ---
const products = [
    {
            image: 'assets/3301.png',
            ref: '3301',
            title: 'Pijama Short Tiras Ref: 3301',
            price: 'Desde COP 9.000 al por mayor',
            description: `TALLA: Unica
TELA: Piel de durazno.
Estampados surtidos.

Precios por Cantidad:
- Valor x 1: $18.000
- Valor x 6: $69.000 ($11.500 c/u)
- Valor x 12: $114.000 ($9.500 c/u)
- Valor x 120+: $9.000 c/u`,
            link: 'https://wa.me/p/3760818927282293/573015547616'
        },
        {
            image: 'assets/3303.jpg',
            ref: '3303',
            title: 'Pijama Batola Ref: 3303',
            price: 'Desde COP 9.000 al por mayor',
            description: `TALLA: Unica
TELA: Piel de durazno.
Estampados surtidos.

Precios por Cantidad:
- Valor x 1: $18.000
- Valor x 6: $69.000 ($11.500 c/u)
- Valor x 12: $114.000 ($9.500 c/u)
- Valor x 120+: $9.000 c/u`,
            link: 'https://wa.me/p/8897517780318866/573015547616'
        },
        {
	    image: 'assets/3305.jpg',
            ref: '3305',
            title: 'Pijama Short Ref: 3305',
            price: 'Desde COP 9.000 al por mayor',
            description: `TALLA: Unica
TELA: Piel de durazno.
Estampados surtidos.

Precios por Cantidad:
- Valor x 1: $18.000
- Valor x 6: $69.000 ($11.500 c/u)
- Valor x 12: $114.000 ($9.500 c/u)
- Valor x 120+: $9.000 c/u`,
            link: 'https://wa.me/p/6043646905731935/573015547616'
        },
        {
            image: 'assets/3305XL.jpg',
            ref: '3305XL',
            title: 'Pijama Short XL Ref: 3305XL',
            price: 'Desde COP 11.500 al por mayor',
            description: `TALLA: Unica
TELA: Piel de durazno.
Estampados surtidos.

Precios por Cantidad:
- Valor x 1: $21.000
- Valor x 6: $84.000 ($14.000 c/u)
- Valor x 12: $144.000 ($12.000 c/u)
- Valor x 120+: $11.500 c/u`,
            link: 'https://wa.me/p/24073798738876233/573015547616'
        },
        {
            image: 'assets/3306.png',
            ref: '3306',
            title: 'Pijama Short Ref: 3306',
            price: 'Desde COP 9.000 al por mayor',
            description: `TALLA: Unica
TELA: Piel de durazno.
Estampados surtidos.

Precios por Cantidad:
- Valor x 1: $18.000
- Valor x 6: $69.000 ($11.500 c/u)
- Valor x 12: $114.000 ($9.500 c/u)
- Valor x 120+: $9.000 c/u`,
            link: 'https://wa.me/p/6114342001952498/573015547616'
        },
        {
            image: 'assets/3308.png',
            ref: '3308',
            title: 'Pijama Enterizo Ref: 3308',
            price: 'Desde COP 11.500 al por mayor',
            description: `TALLA: Unica
TELA: Piel de durazno.
Estampados surtidos.

Precios por Cantidad:
- Valor x 1: $21.000
- Valor x 6: $84.000 ($14.000 c/u)
- Valor x 12: $144.000 ($12.000 c/u)
- Valor x 120+: $11.500 c/u`,
            link: 'https://wa.me/p/5904539409675217/573015547616'
        },
        {
            image: 'assets/3308XL.png',
            ref: '3308XL',
            title: 'Pijama Enterizo Ref: 3308XL',
            price: 'Desde COP 13.500 al por mayor',
            description: `TALLA: XL
TELA: Piel de durazno.
Estampados surtidos.

Precios por Cantidad:
- Valor x 1: $25.000
- Valor x 6: $96.000 ($16.000 c/u)
- Valor x 12: $168.000($14.000 c/u)
- Valor x 120+: $13.500 c/u`,
            link: 'https://wa.me/p/5351728944929832/573015547616'
        },
        {
            image: 'assets/3309.png',
            ref: '3309',
            title: 'Pijama Enterizo Ref: 3309',
            price: 'Desde COP 9.500 al por mayor',
            description: `TALLA: Unica
TELA: Piel de durazno.
Estampados surtidos.

Precios por Cantidad:
- Valor x 1: $18.000
- Valor x 6: $72.000 ($12.000 c/u)
- Valor x 12: $120.000 ($10.000 c/u)
- Valor x 120+: $9.500 c/u`,
            link: 'https://wa.me/p/5910055192376860/573015547616'
        },
	{
	    image: 'assets/3309XL.jpg',
            ref: '3309XL',
            title: 'Pijama Enterizo Ref: 3309XL',
            price: 'Desde COP 11.500 al por mayor',
            description: `TALLA: XL
TELA: Piel de durazno.
Estampados surtidos.

Precios por Cantidad:
- Valor x 1: $21.000
- Valor x 6: $84.000 ($14.000 c/u)
- Valor x 12: $144.000 ($12.000 c/u)
- Valor x 120+: $11.500 c/u`,
            link: 'https://wa.me/p/9333409850032256/573015547616'
        },
	{
  	    image: 'assets/3310.png',
            ref: '3310',
            title: 'Pijama Enterizo Ref: 3310',
            price: 'Desde COP 9.000 al por mayor',
            description: `TALLA: Unica
TELA: Piel de durazno.
Estampados surtidos.

Precios por Cantidad:
- Valor x 1: $18.000
- Valor x 6: $69.000 ($11.500 c/u)
- Valor x 12: $114.000 ($9.500 c/u)
- Valor x 120+: $9.000 c/u`,
            link: 'https://wa.me/p/5995638747158343/573015547616'
        },
	{
 	    image: 'assets/3311.png',
            ref: '3311',
            title: 'Pijama Bolero Ref: 3311',
            price: 'Desde COP 10.500 al por mayor',
            description: `TALLA: Unica
TELA: Piel de durazno.
Estampados surtidos.

Precios por Cantidad:
- Valor x 1: $20.000
- Valor x 6: $78.000 ($13.000 c/u)
- Valor x 12: $132.000 ($11.000 c/u)
- Valor x 120+: $10.500 c/u`,
            link: 'https://wa.me/p/6172729359473823/573015547616'
        },
	{
            image: 'assets/3312.jpg',
            ref: '3312',
            title: 'Pijama Batola Ref: 3312',
            price: 'Desde COP 9.000 al por mayor',
            description: `TALLA: Unica
TELA: Piel de durazno.
Estampados surtidos.

Precios por Cantidad:
- Valor x 1: $18.000
- Valor x 6: $69.000 ($11.500 c/u)
- Valor x 12: $114.000 ($9.500 c/u)
- Valor x 120+: $9.000 c/u`,
            link: 'https://wa.me/p/6390426561042311/573015547616'
        },
	{
            image: 'assets/3315.jpg',
            ref: '3315',
            title: 'Pijama Batola Ref: 3315',
            price: 'Desde COP 9.000 al por mayor',
            description: `TALLA: Unica
TELA: Piel de durazno.
Estampados surtidos.

Precios por Cantidad:
- Valor x 1: $18.000
- Valor x 6: $69.000 ($11.500 c/u)
- Valor x 12: $114.000 ($9.500 c/u)
- Valor x 120+: $9.000 c/u`,
            link: 'https://wa.me/p/5910055192376860/573015547616'
        },
	{
            image: 'assets/3315XL.jpg',
            ref: '3315XL',
            title: 'Pijama Batola XL Ref: 3315XL',
            price: 'Desde COP 9.000 al por mayor',
            description: `TALLA: XL
TELA: Piel de durazno.
Estampados surtidos.

Precios por Cantidad:
- Valor x 1: $20.000
- Valor x 6: $81.000 ($13.500 c/u)
- Valor x 12: $138.000 ($11.500 c/u)
- Valor x 120+: $11.000 c/u`,
            link: 'https://wa.me/p/5910055192376860/573015547616'
        },
	{
            image: 'assets/3316.jpg',
            ref: '3316',
            title: 'Pijama Short Ref: 3316',
            price: 'Desde COP 9.000 al por mayor',
            description: `TALLA: Unica
TELA: Piel de durazno.
Estampados surtidos.

Precios por Cantidad:
- Valor x 1: $18.000
- Valor x 6: $69.000 ($11.500 c/u)
- Valor x 12: $114.000 ($9.500 c/u)
- Valor x 120+: $9.000 c/u`,
            link: 'https://wa.me/p/5910055192376860/573015547616'
        },
	{
            image: 'assets/3316XL.jpg',
            ref: '3316XL',
            title: 'Pijama Short Ref: 3316XL',
            price: 'Desde COP 9.000 al por mayor',
            description: `TALLA: XL
TELA: Piel de durazno.
Estampados surtidos.

Precios por Cantidad:
- Valor x 1: $20.000
- Valor x 6: $81.000 ($13.500 c/u)
- Valor x 12: $138.000 ($11.500 c/u)
- Valor x 120+: $11.000 c/u`,
            link: 'https://wa.me/p/5910055192376860/573015547616'
        },
	{
            image: 'assets/3317'.jpg',
            ref: '3320',
            title: 'Pijama Short Ref: 3319',
            price: 'Desde COP 9.000 al por mayor',
            description: `TALLA: Unica
TELA: Piel de durazno.
Estampados surtidos.

Precios por Cantidad:
- Valor x 1: $18.000
- Valor x 6: $69.000 ($11.500 c/u)
- Valor x 12: $114.000 ($9.500 c/u)
- Valor x 120+: $9.000 c/u`,
            link: 'https://wa.me/p/5910055192376860/573015547616'
        },
	{
            image: 'assets/3319.jpg',
            ref: '3324',
            title: 'Pijama Short Ref: 3320',
            price: 'Desde COP 9.000 al por mayor',
            description: `TALLA: Unica
TELA: Piel de durazno.
Estampados surtidos.

Precios por Cantidad:
- Valor x 1: $18.000
- Valor x 6: $69.000 ($11.500 c/u)
- Valor x 12: $114.000 ($9.500 c/u)
- Valor x 120+: $9.000 c/u`,
            link: 'https://wa.me/p/5910055192376860/573015547616'
        },
	{
            image: 'assets/3320.jpg',
            ref: '3328',
            title: 'Pijama Short Ref: 3324',
            price: 'Desde COP 9.000 al por mayor',
            description: `TALLA: Unica
TELA: Piel de durazno.
Estampados surtidos.

Precios por Cantidad:
- Valor x 1: $18.000
- Valor x 6: $69.000 ($11.500 c/u)
- Valor x 12: $114.000 ($9.500 c/u)
- Valor x 120+: $9.000 c/u`,
            link: 'https://wa.me/p/5910055192376860/573015547616'
        },
	{
            image: 'assets/3324.jpg',
            ref: '3329',
            title: 'Pijama Short Ref: 3328',
            price: 'Desde COP 9.000 al por mayor',
            description: `TALLA: Unica
TELA: Piel de durazno.
Estampados surtidos.

Precios por Cantidad:
- Valor x 1: $18.000
- Valor x 6: $69.000 ($11.500 c/u)
- Valor x 12: $114.000 ($9.500 c/u)
- Valor x 120+: $9.000 c/u`,
            link: 'https://wa.me/p/5910055192376860/573015547616'
        },
	{
            image: 'assets/3328.jpg',
            ref: '3328',
            title: 'Pijama Short Ref: 3329',
            price: 'Desde COP 9.000 al por mayor',
            description: `TALLA: Unica
TELA: Piel de durazno.
Estampados surtidos.

Precios por Cantidad:
- Valor x 1: $18.000
- Valor x 6: $69.000 ($11.500 c/u)
- Valor x 12: $114.000 ($9.500 c/u)
- Valor x 120+: $9.000 c/u`,
            link: 'https://wa.me/p/5910055192376860/573015547616'
        },
	{
            image: 'assets/3329.jpg',
            ref: '3328',
            title: 'Pijama Short Ref: 3330',
            price: 'Desde COP 9.000 al por mayor',
            description: `TALLA: Unica
TELA: Piel de durazno.
Estampados surtidos.

Precios por Cantidad:
- Valor x 1: $18.000
- Valor x 6: $69.000 ($11.500 c/u)
- Valor x 12: $114.000 ($9.500 c/u)
- Valor x 120+: $9.000 c/u`,
            link: 'https://wa.me/p/5910055192376860/573015547616'
        },
	{
            image: 'assets/3330.jpg',
            ref: '3328',
            title: 'Pijama Short Ref: 3330XL',
            price: 'Desde COP 9.000 al por mayor',
            description: `TALLA: Unica
TELA: Piel de durazno.
Estampados surtidos.

*Precios por Cantidad:*
- Valor x 1: $18.000
- Valor x 6: $69.000 ($11.500 c/u)
- Valor x 12: $114.000 ($9.500 c/u)
- Valor x 120+: $9.000 c/u`,
            link: 'https://wa.me/p/5910055192376860/573015547616'
        },
	{
            image: 'assets/3330XL.png',
            ref: '3328',
            title: 'Pijama Short Ref: 3331',
            price: 'Desde COP 9.000 al por mayor',
            description: `TALLA: Unica
TELA: Piel de durazno.
Estampados surtidos.

*Precios por Cantidad:*
- Valor x 1: $18.000
- Valor x 6: $69.000 ($11.500 c/u)
- Valor x 12: $114.000 ($9.500 c/u)
- Valor x 120+: $9.000 c/u`,
            link: 'https://wa.me/p/5910055192376860/573015547616'
        },
	{
            image: 'assets/3331.jpg',
            ref: '3328',
            title: 'Pijama Short Ref: 3334',
            price: 'Desde COP 9.000 al por mayor',
            description: `TALLA: Unica
TELA: Piel de durazno.
Estampados surtidos.

*Precios por Cantidad:*
- Valor x 1: $18.000
- Valor x 6: $69.000 ($11.500 c/u)
- Valor x 12: $114.000 ($9.500 c/u)
- Valor x 120+: $9.000 c/u`,
            link: 'https://wa.me/p/5910055192376860/573015547616'
        },
	{
            image: 'assets/3335.jpg',
            ref: '3328',
            title: 'Pijama Short Ref: 3335',
            price: 'Desde COP 9.000 al por mayor',
            description: `TALLA: Unica
TELA: Piel de durazno.
Estampados surtidos.

*Precios por Cantidad:*
- Valor x 1: $18.000
- Valor x 6: $69.000 ($11.500 c/u)
- Valor x 12: $114.000 ($9.500 c/u)
- Valor x 120+: $9.000 c/u`,
            link: 'https://wa.me/p/5910055192376860/573015547616'
        },
	{
            image: 'assets/3335XL.jpg',
            ref: '3328',
            title: 'Pijama Short Ref: 3334',
            price: 'Desde COP 9.000 al por mayor',
            description: `TALLA: Unica
TELA: Piel de durazno.
Estampados surtidos.

*Precios por Cantidad:*
- Valor x 1: $18.000
- Valor x 6: $69.000 ($11.500 c/u)
- Valor x 12: $114.000 ($9.500 c/u)
- Valor x 120+: $9.000 c/u`,
            link: 'https://wa.me/p/5910055192376860/573015547616'
        },
	{
            image: 'assets/3336.png',
            ref: '3328',
            title: 'Pijama Short Ref: 3336',
            price: 'Desde COP 9.000 al por mayor',
            description: `TALLA: Unica
TELA: Piel de durazno.
Estampados surtidos.

*Precios por Cantidad:*
- Valor x 1: $18.000
- Valor x 6: $69.000 ($11.500 c/u)
- Valor x 12: $114.000 ($9.500 c/u)
- Valor x 120+: $9.000 c/u`,
            link: 'https://wa.me/p/5910055192376860/573015547616'
        },
	{
            image: 'assets/3338.jpg',
            ref: '3338',
            title: 'Pijama Short Ref: 3338',
            price: 'Desde COP 9.000 al por mayor',
            description: `TALLA: Unica
TELA: Piel de durazno.
Estampados surtidos.

*Precios por Cantidad:*
- Valor x 1: $18.000
- Valor x 6: $69.000 ($11.500 c/u)
- Valor x 12: $114.000 ($9.500 c/u)
- Valor x 120+: $9.000 c/u`,
            link: 'https://wa.me/p/5910055192376860/573015547616'
        }
    ];




 // --- CÓDIGO PARA CREAR LAS PÁGINAS DEL LIBRO ---
document.addEventListener('DOMContentLoaded', function() {
    const catalogBook = document.getElementById('catalog-book');

    // ===== INICIO: CÓDIGO NUEVO PARA LA PORTADA =====
    const coverPage = document.createElement('div');
    coverPage.className = 'page cover-page'; // Nueva clase 'cover-page'
    coverPage.innerHTML = `
        <div class="page-content">
            <h1>Pijamas Martex</h1>
            <h2>Colección 2025</h2>
            <p>Calidad y comodidad para tus sueños.</p>
        </div>
    `;
    catalogBook.appendChild(coverPage);
    // ===== FIN: CÓDIGO NUEVO PARA LA PORTADA =====

    // 1. Crear y añadir las páginas del libro dinámicamente
    products.forEach(product => {
        // Contenedor principal de la página
        const page = document.createElement('div');
        page.className = 'page product-page';

        // Contenido interno de la página
        const pageContent = document.createElement('div');
        pageContent.className = 'page-content';

        // --- Agregar todos los elementos del producto ---
        pageContent.innerHTML = `
    <img src="${product.image}" alt="${product.title}" class="product-image-column">

    <div class="product-info-column">
        <h3>${product.title}</h3>
        <p class="price">${product.price}</p>
        <p class="description">${product.description}</p>
        <a href="${product.link}" class="whatsapp-button" target="_blank">Pedir por WhatsApp</a>
    </div>
`;

        page.appendChild(pageContent);
        catalogBook.appendChild(page);
    });

    // 2. Inicializar la librería PageFlip DESPUÉS de crear las páginas
    const pageFlip = new St.PageFlip(catalogBook, {
        width: 450, // Ancho de una página
        height: 600, // Alto de una página
        showCover: true // Muestra una portada si la tienes
    });

    pageFlip.loadFromHTML(document.querySelectorAll('.page'));
});