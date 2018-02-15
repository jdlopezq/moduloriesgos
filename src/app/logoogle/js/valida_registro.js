with(document.registro){
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
		if(ok && password.value==""){
			ok=false;
			alert("Debe escribir su password");
			password.focus();
			
		}
		if(ok && password.value.length < 6){
			ok=false;
			alert("La contraseña no puede tener menos de 6 caracteres")
			password.focus();
		}
		if(ok && confirm_password.value==""){
			ok=false;
			alert("Debe escribir su confirmacion de password");
			confirm_password.focus();
		}

		if(ok && password.value!= confirm_password.value){
			ok=false;
			alert("Los passwords no coinciden caracteres");
			confirm_password.focus();
		}


		if(ok){ submit(); }
	}
}
