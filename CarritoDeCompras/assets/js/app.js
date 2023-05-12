import loader from './components/loader.js';
import showMenu from './components/showMenu.js';
import showCart from './components/showCart.js';  
import products from './components/products.js';
import getProducts from './components/helpers/getProducts.js';
import cart from './components/cart.js';


// ui elements
// ocultar louder

loader();

// mostrar menu

showMenu();

// mostrar carrito

showCart();

// mostrar productos

const {db, printProducts} = products(await getProducts());

// carrito

cart(db, printProducts);

// dark mode

let toggle = document.getElementById('toggle');
let label_toggle = document.getElementById('label_toggle');
let footer = document.querySelector('.footer'); 
toggle.addEventListener('change',(e) => {
  let checked = e.target.checked;
  document.body.classList.toggle('dark');
  if (checked) {
    label_toggle.innerHTML = '<i class="fa-solid fa-sun"></i>';
    document.querySelector('.footer__title').style.color = '#f6f6f6';
    document.querySelector('.footer__text').style.color = 'hsl(0, 0%, 60%)';
    document.querySelector('.title_redes').style.color = '#f6f6f6';
    document.querySelector('.text--sun').style.color = 'hsl(0, 0%, 60%)';
    document.querySelector('.products__title').style.color = '#f6f6f6';
  } else {
    label_toggle.innerHTML = '<i class="fa-solid fa-moon"></i>';
    document.querySelector('.footer__title').style.color = '#333'
    document.querySelector('.title_redes').style.color = '#333';
    document.querySelector('.footer__text').style.color = 'hsl(0, 0%, 30%)';
    document.querySelector('.products__title').style.color = '#333';
  }
})