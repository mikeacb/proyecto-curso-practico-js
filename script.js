const emailMenu = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

emailMenu.addEventListener('click', emailMenuState);

function emailMenuState() {
    desktopMenu.classList.toggle('inactive');
}