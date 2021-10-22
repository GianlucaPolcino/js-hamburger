const button = document.querySelector('.fa-bars');
const nav = document.querySelector('.hamburger-menu');
const btnClose = document.querySelector('.fa-times')

console.log(button);
console.log(nav);

button.addEventListener('click',function(){
    nav.classList.add('active');
});

btnClose.addEventListener('click',function(){
    nav.classList.remove('active');
});

