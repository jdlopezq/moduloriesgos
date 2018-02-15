<html>
	<head>
		<title>VII - Modulo de Riesgos</title>
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
			<div class="col-md-12">
				<h2>Sistema moderno para fabrica de creditos.</h2>
				<p class="lead">Analisis estadistico para riesgos</p>
				<p>Desarrollado por <b>BankVision Medellin</b></p>
				<?php if(!isset($_SESSION["user_id"])):?>
				<h2>Debe loguearse para comenzar.</h2>
			</div>
		</div>
	</div>
	<?php else:?>
	<div class="container">
		<div class="row">
			<div class="col-md-6">
				<h2>Bienvenido  <?php echo $_SESSION['name']; ?> </h2>
				<p>Su usuario es: <b><?php echo $_SESSION['username']; ?></b></p>
				<p>Su correo es: <b><?php echo $_SESSION['email']; ?></b></p>
				<p>Su Rol es: <b><?php echo $_SESSION['rol']; ?></b></p>
				<p>Su Clave es: <b><?php echo $_SESSION['passwd']; ?></b></p>
				<p>Su id es: <b><?php echo $_SESSION['user_id']; ?></b></p>
			</div>
		</div>
	</div>
	<?php endif;?>
	</body>
</html>