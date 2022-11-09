const emailMenu = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const bgMenuIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

emailMenu.addEventListener('click', emailMenuState);
bgMenuIcon.addEventListener('click', bgMenuState);

function emailMenuState() {
    desktopMenu.classList.toggle('inactive');
}

function bgMenuState() {
    mobileMenu.classList.toggle('inactive');
}