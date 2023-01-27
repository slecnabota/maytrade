const arrowBurger = document.querySelector('.header__mobile-arrow');
const bodyBurger = document.querySelector('.header__mobile');
const logoBurger = document.querySelector('.header-logo');
const linkBurger = document.getElementById('close');
arrowBurger.addEventListener('click', function(e){
    document.body.classList.toggle('lock');
    arrowBurger.classList.toggle('active3');
    bodyBurger.classList.toggle('active3');
    logoBurger.classList.toggle('width');
});
linkBurger.addEventListener('click', function(){
    document.body.classList.toggle('lock');
    arrowBurger.classList.toggle('active3');
    bodyBurger.classList.toggle('active3');
    logoBurger.classList.toggle('width');
})