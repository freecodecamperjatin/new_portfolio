// Select Dom Items
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');
const menuBrand = document.querySelector('.menu-brand');
const navItem = document.querySelectorAll('.nav-item');

// This is our dom selection which will be used to change the page 

// Now we will set the initial state of the menu
let showMenu = true;

// we need an event listener where we will click and then something will happen 
// to the menu

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu(){
    if (!showMenu){
        menuBtn.classList.add('close');
        menu.classList.add('show');
        menuNav.classList.add('show');
        menuBrand.classList.add('show');
        navItem.forEach(item => item.classList.add('show'));

        showMenu = true;
    }else {
        menuBtn.classList.remove('close');
        menu.classList.remove('show');
        menuNav.classList.remove('show');
        menuBrand.classList.remove('show');
        navItem.forEach(item => item.classList.remove('show'));

        showMenu = false;

    }
}