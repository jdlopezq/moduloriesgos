<?php
session_start();
if(!isset($_SESSION["user_id"]) || $_SESSION["user_id"]==null){
	print "<script>alert(\"Acceso invalido! Debe Loguearse \");window.location='../login.php';</script>";
}
if(!empty($_POST)){
	if(isset($_POST["passwordold"]) &&isset($_POST["passwordnew"]) &&isset($_POST["confirm_passwordnew"])){
		if($_POST["passwordold"]!=""&&$_POST["passwordnew"]==$_POST["confirm_passwordnew"]){
			include "config.php";

			$username=$_SESSION['username'];
			$email=$_SESSION['email'];
			$passwordh = hash('sha256', $codepass . $_POST["passwordold"]);
			$sql1= "select passwd from google_users where (username=\"$username\" or email=\"$email\")";
			$query = $DB->query($sql1);
			$r=$query->fetch(PDO::FETCH_ASSOC);
			$passwd=$r["passwd"];
			if($passwd==$passwordh){
				$passwordhn = hash('sha256', $codepass . $_POST["passwordnew"]);
				$sqln = "UPDATE google_users SET passwd=\"$passwordhn\" WHERE (username=\"$username\" or email=\"$email\")";
				$queryn = $DB->query($sqln);
				if($queryn!=null){
					print "<script>alert(\"Su clave se ha cambiado correctamente.\");window.location='../index.php';</script>";
					$_SESSION["passwd"]=$passwordhn;
				}
			} else {
				print "<script>alert(\"La clave actual ingresada es incorrecta.\");window.location='../changepass.php';</script>";
			}
		}
		echo "Error 1";
	}
	echo "Error 2";
}



?>