let btnForm = document.querySelector(".air-form__btn");
let inptForm = document.querySelector(".air-form__input");
let txtForm = document.querySelector(".air-form-text")

btnForm.addEventListener("click", function(){
    btnForm.classList.toggle("btn-clicked");
    if(btnForm.classList.contains("btn-clicked")){
        btnForm.innerHTML = "Ok";
        inptForm.classList.add("invisible");
        txtForm.classList.remove("invisible");
    }
    else{
        btnForm.innerHTML = "Заказать";
        inptForm.classList.remove("invisible");
        txtForm.classList.add("invisible");
    }

});
