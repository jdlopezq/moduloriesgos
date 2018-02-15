<?php
session_start();
if(!isset($_SESSION["user_id"]) || $_SESSION["user_id"]==null){
	print "<script>alert(\"Acceso invalido! Debe Loguearse \");window.location='../login.php';</script>";
}
$rol=$_SESSION['rol'];
if ($rol!='Administrador'){
	print "<script>alert(\"Acceso invalido! Debe ser Administrador \");window.location='../index.php';</script>";
}
$q = intval($_GET["q"]);
$ids = $_SESSION['user_id'];
if(!empty($_POST)){
	if(isset($_POST["name"])&&isset($_POST["username"])&&isset($_POST["email"])&&isset($_POST["rol"])){
		if($_POST["name"]!=""&&$_POST["username"]!=""&&$_POST["email"]!=""&&$_POST["rol"]!=""){
			include "config.php";
			$sqln = "UPDATE google_users SET name=\"$_POST[name]\",username=\"$_POST[username]\",email=\"$_POST[email]\",rol=\"$_POST[rol]\"  WHERE id=\"$q\"";
			$queryn = $DB->query($sqln);
			if($queryn!=null){
				if ($q==$ids){
				$_SESSION["name"] = $_POST["name"];
				$_SESSION["username"] = $_POST["username"];
				$_SESSION["email"]=$_POST["email"];
				$_SESSION["rol"]= $_POST["rol"];	
				}
				print "<script>alert(\"Sus cambios se han realizado correctamente\");window.location='../index.php';</script>";
			}
			
		}
		print "<script>alert(\"No se permiten espacios en blanco\");window.location='../modifyusers.php';</script>";
	}
	echo "Error 2";
}


?>