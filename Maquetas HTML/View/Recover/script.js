//VER CONTRASEÑA
function show() {
    var pswrd = document.getElementById('pswrd');
    var icon = document.getElementById('toggle');
    if (pswrd.type === "password") {
        pswrd.type = "text";
        icon.classList.add("fi-rr-eye-crossed");
        icon.classList.remove("fi-rr-eye");
    }
    else {
        pswrd.type = "password";
        icon.classList.remove("fi-rr-eye-crossed");
        icon.classList.add("fi-rr-eye");
    }
}

//VERIFICAR EL RUT
var Fn = {
	// Valida el rut con su cadena completa "XXXXXXXX-X"
	validaRut : function (rutCompleto) {
		rutCompleto = rutCompleto.replace("‐","-");
		if (!/^[0-9]+[-|‐]{1}[0-9kK]{1}$/.test( rutCompleto ))
			return false;
		var tmp 	= rutCompleto.split('-');
		var digv	= tmp[1]; 
		var rut 	= tmp[0];
		if ( digv == 'K' ) digv = 'k' ;
		
		return (Fn.dv(rut) == digv );
	},
	dv : function(T){
		var M=0,S=1;
		for(;T;T=Math.floor(T/10))
			S=(S+T%10*(9-M++%6))%11;
		return S?S-1:'k';
	}
}

$("#btnvalida").click(function(){
	if (Fn.validaRut( $("#txt_rut").val() )){
	} else {
		$("#msgerror").html("¡RUT INVALIDO!");
	}
});

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