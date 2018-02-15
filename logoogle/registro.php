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
		<title>VII - Registro de Usuarios</title>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<link rel="stylesheet" type="text/css" href="bootstrap/css/bootstrap.min.css">
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
		<script src="bootstrap/js/bootstrap.min.js"></script>
	</head>
	<body>
	<?php include "php/navbar.php"; ?>
	<div class="container">
		<div class="row">
			<div class="col-md-6">
				<h2>Registro</h2>
				<form role="form" name="registro" action="php/registro.php" method="post">
					<div class="form-group">
						<label for="name">Nombre Completo</label>
						<input type="text" class="form-control" id="name" name="name" placeholder="Nombre Completo">
					</div>
					<div class="form-group">
						<label for="username">Nombre de Usuario</label>
						<input type="text" class="form-control" id="username" name="username" placeholder="Nombre de usuario">
					</div>
					<div class="form-group">
						<label for="email">Correo Electronico</label>
						<input type="email" class="form-control" id="email" name="email" placeholder="Correo Electronico">
					</div>
					<div class="form-group">
						<label for="rol">Rol</label>		  
						<select name="rol" id="rol" class="form-control">
						<option value="" selected>Seleccionar</option>
						<option value="Administrador">Administrador</option>
						<option value="Usuario">Usuario</option>
						</select> 
					</div>
					<div class="form-group">
						<label for="password">Contraseña</label>
						<input type="password" class="form-control" id="password" name="password" placeholder="Contraseña">
					</div>
					<div class="form-group">
						<label for="confirm_password">Confirmar Contraseña</label>
						<input type="password" class="form-control" id="confirm_password" name="confirm_password" placeholder="Confirmar Contraseña">
					</div>
				<button type="submit" class="btn btn-default">Registrar</button>
				</form>
				<script src="js/valida_registro.js"></script>
			</div>
		</div>
	</div>
	</body>
</html>