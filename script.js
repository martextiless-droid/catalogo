// Espera a que todo el HTML esté cargado antes de ejecutar el script
document.addEventListener('DOMContentLoaded', function () {

    // --- BASE DE DATOS DE PRODUCTOS ---
    // ¡Aquí es donde editas la información de cada pijama!
    const products = [
        {
            image: 'assets/pagina1.png',
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
	    image: 'assets/pagina3.png',
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
            image: 'assets/pagina4.png',
            ref: '3305XL',
            title: 'Pijama Short XL Ref: 3305XL',
            price: 'Desde COP 11.500 al por mayor',
            description: `*TALLA:* Unica
*TELA:* Piel de durazno.
*Estampados surtidos.*

*Precios por Cantidad:*
- Valor x 1: $21.000
- Valor x 6: $84.000 ($14.000 c/u)
- Valor x 12: $144.000 ($12.000 c/u)
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
            image: 'assets/pagina6.png',
            ref: '3308',
            title: 'Pijama Enterizo Ref: 3308',
            price: 'Desde COP 11.500 al por mayor',
            description: `*TALLA:* Unica
*TELA:* Piel de durazno.
*Estampados surtidos.*

*Precios por Cantidad:*
- Valor x 1: $21.000
- Valor x 6: $84.000 ($14.000 c/u)
- Valor x 12: $144.000 ($12.000 c/u)
- Valor x 120+: $11.500 c/u`,
            link: 'https://wa.me/p/5904539409675217/573015547616'
        },
        {
            image: 'assets/pagina7.png',
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
            price: 'Desde COP 11.500 al por mayor',
            description: `*TALLA:* XL
*TELA:* Piel de durazno.
*Estampados surtidos.*

*Precios por Cantidad:*
- Valor x 1: $21.000
- Valor x 6: $84.000 ($14.000 c/u)
- Valor x 12: $144.000 ($12.000 c/u)
- Valor x 120+: $11.500 c/u`,
            link: 'https://wa.me/p/9333409850032256/573015547616'
        },
	{
  	    image: 'assets/pagina10.jpg',
            ref: '3310',
            title: 'Pijama Enterizo Ref: 3310',
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
            ref: '3311',
            title: 'Pijama Bolero Ref: 3311',
            price: 'Desde COP 10.500 al por mayor',
            description: `*TALLA:* Unica
*TELA:* Piel de durazno.
*Estampados surtidos.*

*Precios por Cantidad:*
- Valor x 1: $20.000
- Valor x 6: $78.000 ($13.000 c/u)
- Valor x 12: $132.000 ($11.000 c/u)
- Valor x 120+: $10.500 c/u`,
            link: 'https://wa.me/p/6172729359473823/573015547616'
        },
	{
            image: 'assets/pagina12.jpg',
            ref: '3312',
            title: 'Pijama Batola Ref: 3312',
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
            ref: '3315',
            title: 'Pijama Batola Ref: 3315',
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
            ref: '3315XL',
            title: 'Pijama Batola XL Ref: 3315XL',
            price: 'Desde COP 9.000 al por mayor',
            description: `*TALLA:* XL
*TELA:* Piel de durazno.
*Estampados surtidos.*

*Precios por Cantidad:*
- Valor x 1: $20.000
- Valor x 6: $81.000 ($13.500 c/u)
- Valor x 12: $138.000 ($11.500 c/u)
- Valor x 120+: $11.000 c/u`,
            link: 'https://wa.me/p/5910055192376860/573015547616'
        },
	{
            image: 'assets/pagina15.png',
            ref: '3316',
            title: 'Pijama Short Ref: 3316',
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
            ref: '3316XL',
            title: 'Pijama Short Ref: 3316XL',
            price: 'Desde COP 9.000 al por mayor',
            description: `*TALLA:* XL
*TELA:* Piel de durazno.
*Estampados surtidos.*

*Precios por Cantidad:*
- Valor x 1: $20.000
- Valor x 6: $81.000 ($13.500 c/u)
- Valor x 12: $138.000 ($11.500 c/u)
- Valor x 120+: $11.000 c/u`,
            link: 'https://wa.me/p/5910055192376860/573015547616'
        },
	{
            image: 'assets/pagina17.jpg',
            ref: '3320',
            title: 'Pijama Short Ref: 3320',
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
            image: 'assets/pagina18.png',
            ref: '3324',
            title: 'Pijama Short Ref: 3324',
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
            ref: '3328',
            title: 'Pijama Short Ref: 3328',
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

// --- LÓGICA DE PRUEBA ---

const bookElement = document.getElementById('catalog-book');

const pageFlip = new St.PageFlip(bookElement, {
    width: 500,
    height: 700,
});

// Vamos a cargar UNA SOLA imagen
pageFlip.loadFromImages(['assets/pagina1.jpg']);

// La librería detecta automáticamente las páginas hijas, no se necesita "load"
});