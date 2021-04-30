const burger = document.querySelector('.burger-label');
const menu = document.querySelector('.menu-nav');


burger.addEventListener('click',()=>{
    menu.classList.toggle('active');
    burger.classList.toggle('active');
})






