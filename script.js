// Desktop Menu
const emailMenu = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

emailMenu.addEventListener('click', emailMenuState);

function emailMenuState() {
    desktopMenu.classList.toggle('inactive');
    aside.classList.toggle('inactive');
}

// Mobile Menu
const bgMenuIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

bgMenuIcon.addEventListener('click', bgMenuState);

function bgMenuState() {
    aside.classList.add('inactive');
    mobileMenu.classList.toggle('inactive');
}

// Cart Menu
const cartMenuIcon = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail');

cartMenuIcon.addEventListener('click', cartMenuStatus);

function cartMenuStatus() {
    mobileMenu.classList.add('inactive');
    aside.classList.toggle('inactive');
    desktopMenu.classList.add('inactive');
}