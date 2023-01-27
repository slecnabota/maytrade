function view(){
	let list = document.getElementById("list");
	let show = document.querySelector(".air-filter__menu-show");
    list.classList.toggle('list-shown');
    show.classList.toggle('list-show');
}