
const menu = document.querySelector('.menu-toggle');
const mobileNav = document.querySelector('#mobileNav');

if(menu){
  menu.addEventListener('click', ()=>{
    mobileNav.classList.toggle('active');
  });
}
