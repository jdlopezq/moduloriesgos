<?php 
include ("config.php");
$rol=$_SESSION['rol'];
?>
<nav class="navbar navbar-default">
<div class="container-fluid">
	<div class="navbar-header">
		<button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#Navbar">
			<span class="icon-bar"></span>
			<span class="icon-bar"></span>
			<span class="icon-bar"></span>
		</button>
		<a class="navbar-brand" href="./"><b>VII</b></a>
  </div>
	<div class="collapse navbar-collapse" id="Navbar">
		<?php if(!isset($_SESSION["user_id"])):?>
		<?php else:?>
		<ul class="nav navbar-nav">
			<li><a href="changepass.php">Cambiar contraseña</a></li>
			<?php if($rol=='Administrador'): ?>
			<li class="dropdown">
			<a class="dropdown-toggle" data-toggle="dropdown" href="#">Administración<span class="caret"></span></a>
				<ul class="dropdown-menu">
					<li><a href="registro.php">Registrar un usuario</a></li>
					<li><a href="modifyusers.php">Modificar un Usuario</a></li>
					<li><a href="gestorvariables.php">Gestor de Variables</a></li>
				</ul>
			</li>
			<?php endif; ?>	
		</ul>
		<?php endif;?>
		<ul class="nav navbar-nav navbar-right">
			<?php if(!isset($_SESSION["user_id"])):?>
			<li><a href="login.php"><span class="glyphicon glyphicon-log-in"></span> Entrar</a></li>
			<?php else:?>
			<li><a href="<?php echo LOGOUT_URL; ?>"><span class="glyphicon glyphicon-log-out"></span> Salir</a></li>
			<?php endif;?>
		</ul>

	</div>
</div>
</nav>