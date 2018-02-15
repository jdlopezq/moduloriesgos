with(document.changepass){
	onsubmit = function(e){
		e.preventDefault();
		ok = true;
		if(ok && passwordold.value==""){
			ok=false;
			alert("Debe escribir su contraseña actual");
			passwordold.focus();
			
		}
		if(ok && passwordnew.value==""){
			ok=false;
			alert("Debe ingresar una contraseña nueva");
			passwordnew.focus();
			
		}
		if(ok && passwordnew.value.length < 6){
			ok=false;
			alert("La contraseña no puede tener menos de 6 caracteres")
			passwordnew.focus();
		}
		
		if(ok && passwordnew.value == passwordold.value){
			ok=false;
			alert("Su contraseña nueva debe ser diferente de su actual contraseña")
			passwordnew.focus();
		}
		
		if(ok && confirm_passwordnew.value==""){
			ok=false;
			alert("Debe escribir su confirmacion de contraseña");
			confirm_passwordnew.focus();
		}

		if(ok && passwordnew.value!= confirm_passwordnew.value){
			ok=false;
			alert("Las nuevas contraseñas no coinciden");
			confirm_passwordnew.focus();
		}


		if(ok){ submit(); }
	}
}
