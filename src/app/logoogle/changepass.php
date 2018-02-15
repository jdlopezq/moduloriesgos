<?php
session_start();
if(!isset($_SESSION["user_id"]) || $_SESSION["user_id"]==null){
	print "<script>alert(\"Acceso invalido! Debe Loguearse \");window.location='login.php';</script>";
}
?>
<html>
	<head>
		<title>VII - Cambiar Contraseña</title>
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
				<h2>Cambio de Contraseña</h2>
				<form role="form" name="changepass" action="php/change.php" method="post">
					<div class="form-group">
						<label for="passwordold">Contraseña Actual</label>
						<input type="password" class="form-control" id="passwordold" name="passwordold" placeholder="Contraseña Actual">
					</div>
					<div class="form-group">
						<label for="passwordnew">Nueva Contraseña</label>
						<input type="password" class="form-control" id="passwordnew" name="passwordnew" placeholder="Nueva Contraseña">
					</div>
					<div class="form-group">
						<label for="confirm_passwordnew">Confirmar Contraseña Nueva</label>
						<input type="password" class="form-control" id="confirm_passwordnew" name="confirm_passwordnew" placeholder="Confirmar Contraseña Nueva">
					</div>
				<button type="submit" class="btn btn-default">Cambiar</button>
				</form>
				<script src="js/valida_change.js"></script>
			</div>
		</div>
	</div>
	</body>
</html>