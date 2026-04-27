/*
    Archivo: menu.js
    Propósito: controlar el menú hamburguesa responsive para el sitio.
    Este script gestiona la apertura y cierre del panel de navegación móvil,
    el overlay oscuro y el comportamiento del teclado.
*/

// Elementos del DOM que participan en el menú responsivo.
const hamburguesa = document.querySelector('.hamburguesa');
const navMenu = document.getElementById('nav-menu');
const overlay = document.querySelector('.nav-overlay');
const navLinks = document.querySelectorAll('.nav-bar a');

// Cierra el menú móvil y regresa el estado aria-expanded a false.
function cerrarMenu() {
    hamburguesa.classList.remove('activo');
    navMenu.classList.remove('abierto');
    overlay.classList.remove('activo');
    hamburguesa.setAttribute('aria-expanded', 'false');
}

// Alterna la visibilidad del menú móvil y actualiza aria-expanded.
function toggleMenu() {
    const estaAbierto = navMenu.classList.contains('abierto');
    hamburguesa.classList.toggle('activo');
    navMenu.classList.toggle('abierto');
    overlay.classList.toggle('activo');
    hamburguesa.setAttribute('aria-expanded', String(!estaAbierto));
}

// Abre o cierra el menú al hacer clic en el botón hamburguesa.
hamburguesa.addEventListener('click', toggleMenu);

// Cierra el menú si el usuario hace clic fuera del panel.
overlay.addEventListener('click', cerrarMenu);

// Cierra el menú cuando se selecciona cualquiera de los enlaces de navegación.
navLinks.forEach(link => link.addEventListener('click', cerrarMenu));

// Cierra el menú al presionar Escape para mejorar la accesibilidad.
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') cerrarMenu();
});
