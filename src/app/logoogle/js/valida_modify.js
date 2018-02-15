with(document.modify){
	onsubmit = function(e){
		e.preventDefault();
		ok = true;
		if(ok && name.value==""){
			ok=false;
			alert("Debe escribir un nombre");
			name.focus();
		}
		if(ok &&username.value==""){
			ok=false;
			alert("Debe escribir un nombre de usuario");
			username.focus();
		}
		if(ok && email.value==""){
			ok=false;
			alert("Debe escribir un correo");
			email.focus();
		}
		if(ok && rol.value==""){
			ok=false;
			alert("Debe seleccionar un rol");
			rol.focus();
		}
		if(ok){ submit(); }
	}
}
