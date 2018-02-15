<?php
session_start();
if(!isset($_SESSION["user_id"]) || $_SESSION["user_id"]==null){
	print "<script>alert(\"Acceso invalido! Debe Loguearse \");window.location='login.php';</script>";
}

?>
<html>
	<head>
		<title>VII - Formularios</title>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<script type="text/javascript" src="js/script.js"></script>
		<link rel="stylesheet" type="text/css" href="bootstrap/css/bootstrap.min.css">
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
		<script src="bootstrap/js/bootstrap.min.js"></script>
	</head>
	<body>
	<?php include "php/navbar.php"; ?>
	<div class="container">
   	<h1 class="main_title">Configuración de Variables</h1>
   	<div class="content">
     <div class="panel panel-default">
       <div class="panel-body">
         <h3> Agregar Campo</h3>
         <form>
           <div class="form-group">
             <div class="col-sm-2">
               <input type="text" id="nombrec" class="form-control" placeholder="Nombre Campo">
             </div>
             <div class="col-sm-2">
               <input type="text" id="nombreq" class="form-control" placeholder="Nombre query">
             </div>
             <div class="col-sm-1">
               <input type="button" class="btn btn-primary" value="Agregar" onclick="add()">
             </div>
           </div>
         </form>
         <div style="clear:both"></div>
       </div>
     </div>
     <hr>
     <div class="panel panel-default">
       <div class="panel-body">
         <h3>Lista de Variables</h3>
         <div id="list_container">
           <?php 
                include('php/lista.php'); 
            ?>
         </div>
       </div>
     </div>
   </div>
 </div>
	</body>
</html>