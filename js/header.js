let body = document.querySelector('body');
let iconMenu = document.querySelector(".menu");
let cross = document.querySelector(".menu__cross");
let menuColorMain = document.querySelector("#changeColor");
if (window.screen.width<992) {
    body.classList.add('touch');
    let arrow = document.querySelectorAll('.arrow');
    let arrowSub = document.querySelectorAll('.sub-menu__arrow');
    let linkColor = document.querySelectorAll('.sub-menu__link');
    for (let i = 0; i < arrow.length; i++) {
        let thisLink = arrow[i].previousElementSibling;
        let subMenu = arrow[i].nextElementSibling;
        let thisArrow = arrow[i];
        thisLink.classList.add('parent');
        arrow[i].addEventListener('click', function () {
            subMenu.classList.toggle('open');
            thisArrow.classList.toggle('active');
        });
    }
    for (let i = 0; i < arrowSub.length; i++) {
        let thisArrowSub = arrowSub[i];
        let thisLinkColor = linkColor[i+1];
        arrowSub[i].addEventListener('click', function () {
            thisArrowSub.classList.toggle('active-open');
            thisLinkColor.classList.toggle('accent');
        });
    }
    document.querySelector('.lesspace').addEventListener('click', function(){
        menuColorMain.classList.toggle("accent")
    })
  } else {
    body.classList.add('mouse');
    iconMenu.addEventListener('mouseover', function(){
        cross.classList.add('active3');
    })
    iconMenu.addEventListener('mouseleave', function(){
        cross.classList.remove('active3');
    })
}
