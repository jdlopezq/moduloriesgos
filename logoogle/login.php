<html>
	<head>
		<title>VII - Inicio de Sesión</title>
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
				<h2>Login</h2>
				<form role="form" name="login" action="php/login.php" method="post">
					<div class="form-group">
						<label for="username">Nombre de usuario o email</label>
						<input type="text" class="form-control" id="username" name="username" placeholder="Nombre de usuario">
					</div>
					<div class="form-group">
						<label for="password">Contraseña</label>
						<input type="password" class="form-control" id="password" name="password" placeholder="Contraseña">
					</div>
						<button type="submit" class="btn btn-default">Acceder</button>
						<a href="./php/logingoogle.php"><img border="0" alt="login" src="Style/google.png" height="40">
				</form>
				<script src="js/valida_login.js"></script>
			</div>
		</div>
	</div>
	</body>
</html>