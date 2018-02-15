<?php
session_start();
if(!isset($_SESSION["user_id"]) || $_SESSION["user_id"]==null){
	print "<script>alert(\"Acceso invalido! Debe Loguearse \");window.location='../login.php';</script>";
}
$rol=$_SESSION['rol'];
if ($rol!='Administrador'){
	print "<script>alert(\"Acceso invalido! Debe ser Administrador \");window.location='../index.php';</script>";
}
if(!empty($_POST)){
	if(isset($_POST["name"]) &&isset($_POST["username"]) &&isset($_POST["email"]) &&isset($_POST["rol"]) &&isset($_POST["password"]) &&isset($_POST["confirm_password"])){
		if($_POST["name"]!=""&& $_POST["username"]!=""&& $_POST["rol"]!=""&&$_POST["email"]!=""&&$_POST["password"]!=""&&$_POST["password"]==$_POST["confirm_password"]){
			include "config.php";
			
			$found=false;
			$sql1= "select * from google_users where username=\"$_POST[username]\" or email=\"$_POST[email]\"";
			$query = $DB->query($sql1);
			while ($r=$query->fetch(PDO::FETCH_ASSOC)) {
				$found=true;
				break;
			}
			if($found){
				print "<script>alert(\"Nombre de usuario o email ya estan registrados.\");window.location='../registro.php';</script>";
			}
			$passwordh = hash('sha256', $codepass . $_POST["password"]);
			$sql = "insert into google_users(name,username,email,passwd,rol) value (\"$_POST[name]\",\"$_POST[username]\",\"$_POST[email]\",\"$passwordh\",\"$_POST[rol]\")";
			$query = $DB->query($sql);
			if($query!=null){
				print "<script>alert(\"Registro exitoso.\");window.location='../index.php';</script>";
			}
		}
	}
}



?>