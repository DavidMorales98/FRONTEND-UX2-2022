const list = document.querySelectorAll('.list');
function activeLink(){
list.forEach((item) => 
item.classList.remove('active'));
this.classList.add('active');
}
list.forEach((item)=>
item.addEventListener('click',activeLink));

//VENTANA MODAL


function modal() {
	let modal = document.getElementById('modal');
    if (modal.style.visibility == "visible") {
        modal.style.visibility = "hidden";
    }
    else {
		modal.style.visibility = "visible";
    }
}