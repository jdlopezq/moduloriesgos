<?php
session_start();
if(!isset($_SESSION["user_id"]) || $_SESSION["user_id"]==null){
	print "<script>alert(\"Acceso invalido! Debe Loguearse \");window.location='login.php';</script>";
}
$rol=$_SESSION['rol'];
if ($rol!='Administrador'){
	print "<script>alert(\"Acceso invalido! Debe ser Administrador \");window.location='index.php';</script>";
}
?>
<html>
	<head>
		<title>VII - Modificar Usuarios</title>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<link rel="stylesheet" type="text/css" href="bootstrap/css/bootstrap.min.css">
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
		<script src="bootstrap/js/bootstrap.min.js"></script>
		<script>
		function showUser(str) {
		  if (str=="") {
			document.getElementById("txtHint").innerHTML="";
			return;
		  }
		  if (window.XMLHttpRequest) {
			// code for IE7+, Firefox, Chrome, Opera, Safari
			xmlhttp=new XMLHttpRequest();
		  } else { // code for IE6, IE5
			xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
		  }
		  xmlhttp.onreadystatechange=function() {
			if (this.readyState==4 && this.status==200) {
			  document.getElementById("txtHint").innerHTML=this.responseText;
			}
		  }
		  xmlhttp.open("GET","php/getuser.php?q="+str,true);
		  xmlhttp.send();
		}
		</script>
	</head>
	<body>
	<?php include "php/navbar.php"; ?>
	<div class="container">
		<div class="row">
			<div class="col-md-6">
				<h2>Modificar Usuarios</h2>
				<form>
					<div class="form-group">
						<label for="rol">Usuarios:</label>		  
						<select name="users" onchange="showUser(this.value)" class="form-control">
						<option value="" selected>Seleccionar</option>
						<?php 
						$sql1= "select id, username from google_users ORDER BY id";
						$query = $DB->query($sql1);
						while ($r=$query->fetch(PDO::FETCH_ASSOC)) {
							echo "<option value=\"".$r["id"]."\">".$r["username"]."</option>";
						}
						?>
						</select> 
					</div>
				</form>
			<div id="txtHint"><b>Seleccione un usuario</b></div>
			</div>
		</div>
	</div>
	</body>
</html>