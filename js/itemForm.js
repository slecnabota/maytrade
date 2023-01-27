let buttonForm = document.querySelector(".hemo-form__btn");
let inputForm = document.querySelector(".hemo-form__input");
let textForm = document.querySelector(".hemo-form-text")

buttonForm.addEventListener("click", function(){
    buttonForm.classList.toggle("btn-clicked");
    if(buttonForm.classList.contains("btn-clicked")){
        buttonForm.innerHTML = "Ok";
        inputForm.classList.add("invisible");
        textForm.classList.remove("invisible");
    }
    else{
        buttonForm.innerHTML = "Заказать";
        inputForm.classList.remove("invisible");
        textForm.classList.add("invisible");
    }

});

