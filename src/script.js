const menuMobile = document.getElementById('menu');
const btnOpen = document.getElementById('btn-open');
const btnClose = document.getElementById('btn-close');



function openMenu() {
    menuMobile.classList.remove('hidden');
    menuMobile.classList.add('flex');
}
function closeMenu() {
    menuMobile.classList.remove('flex');
    menuMobile.classList.add('hidden');
}