// agregar alumno javascript function
function add() {
	// iniciamos el proceso
	var url = 'php/agregarvariable.php';
	var method = 'POST';
	var params = 'nombrec='+document.getElementById('nombrec').value;
	params += '&nombreq='+document.getElementById('nombreq').value;
	var container_id = 'list_container' ;
	var loading_text = '<img src="Style/fb_loading.gif">' ;
	// llamamos ajax function
	ajax (url, method, params, container_id, loading_text) ;
}

// delete_member function
function deletev(id) {
	if (confirm('¿Confirma eliminar la variable?')) {
		// initialisation
		var url = 'php/borrarvariable.php';
		var method = 'POST';
		var params = 'id='+id;
		var container_id = 'list_container' ;
		var loading_text = '<img src="Style/fb_loading.gif">' ;
		// call ajax function
		ajax (url, method, params, container_id, loading_text) ;
	}
}

// ajax : basic function for using ajax easily
function ajax (url, method, params, container_id, loading_text) {
    try { // For: chrome, firefox, safari, opera, yandex, ...
    	xhr = new XMLHttpRequest();
    } catch(e) {
	    try{ // for: IE6+
	    	xhr = new ActiveXObject("Microsoft.XMLHTTP");
	    } catch(e1) { // if not supported or disabled
		    alert("Not supported!");
		}
	}
	xhr.onreadystatechange = function() {
						       if(xhr.readyState == 4) { // when result is ready
							       document.getElementById(container_id).innerHTML = xhr.responseText;
							   } else { // waiting for result 
							       document.getElementById(container_id).innerHTML = loading_text;
							   }
						   	}
	xhr.open(method, url, true);
	xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
	xhr.send(params);
}