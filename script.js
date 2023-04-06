const header = document.querySelector('header');
window.addEventListener('scroll', function(){
    header.classList.toggle('sticky', this.window.scrollY>0);
})

let menu = document.querySelector('nav');
let menubar = document.querySelector('.menu-icon');

menubar.onclick = () =>{
    menubar.classList.toggle('fa-x');
    menu.classList.toggle('open');
}