// Desktop Menu
const emailMenu = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

emailMenu.addEventListener('click', emailMenuState);

function emailMenuState() {
    desktopMenu.classList.toggle('inactive');
    shoppingCartContainer.classList.add('inactive');
    productDetailContainer.classList.add('inactive');
}

// Mobile Menu
const bgMenuIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

bgMenuIcon.addEventListener('click', bgMenuState);

function bgMenuState() {
    mobileMenu.classList.toggle('inactive');
    desktopMenu.classList.add('inactive');
    shoppingCartContainer.classList.add('inactive');
    productDetailContainer.classList.add('inactive');
}

// Cart Menu
const cartMenuIcon = document.querySelector('.navbar-shopping-cart');
const shoppingCartContainer = document.querySelector('#shopping-cart-container');

cartMenuIcon.addEventListener('click', cartMenuStatus);

function cartMenuStatus() {
    shoppingCartContainer.classList.toggle('inactive');
    mobileMenu.classList.add('inactive');
    desktopMenu.classList.add('inactive');
    productDetailContainer.classList.add('inactive');
}

// Product List

const productList = [];
productList.push({
    name: 'Bike 1',
    price: 120,
    img: 'https://images.pexels.com/photos/1413412/pexels-photo-1413412.jpeg?auto=compress&cs=tinysrgb&w=300'
});
productList.push({
    name: 'Bike 2',
    price: 130,
    img: 'https://images.pexels.com/photos/1413412/pexels-photo-1413412.jpeg?auto=compress&cs=tinysrgb&w=300'
});
productList.push({
    name: 'Bike 3',
    price: 140,
    img: 'https://images.pexels.com/photos/1413412/pexels-photo-1413412.jpeg?auto=compress&cs=tinysrgb&w=300'
});
productList.push({
    name: 'Bike 4',
    price: 150,
    img: 'https://images.pexels.com/photos/1413412/pexels-photo-1413412.jpeg?auto=compress&cs=tinysrgb&w=300'
});
productList.push({
    name: 'Bike 5',
    price: 160,
    img: 'https://images.pexels.com/photos/1413412/pexels-photo-1413412.jpeg?auto=compress&cs=tinysrgb&w=300'
});

const productDetailContainer = document.querySelector('#product-detail');
const productDetailCloser = document.querySelector('.product-detail-close');

productDetailCloser.addEventListener('click', closePDAside);

// Abrir y cerrar las aside del product detail
function openPDAside () {
    productDetailContainer.classList.remove('inactive');
}
function closePDAside () {
    productDetailContainer.classList.add('inactive');
    shoppingCartContainer.classList.toggle('inactive');
    mobileMenu.classList.add('inactive');
    desktopMenu.classList.add('inactive');
}

const cardsContainer = document.querySelector('.cards-container');

function renderProducts(arr) {
    for (product of arr) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.img);
        productImg.addEventListener('click', openPDAside);
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
        const productInfoDiv = document.createElement('div');
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;
        const productName = document.createElement('p');
        productName.innerText = '$' + product.name;
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
        const productInfoFig = document.createElement('figure');
        const productImgCard = document.createElement('img');
        productImgCard.setAttribute('src', './assets/Icons/bt_add_to_cart.svg');
        productInfoFig.appendChild(productImgCard);
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFig);
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
        cardsContainer.appendChild(productCard);
    }
}

renderProducts(productList);