<?php

if(!empty($_POST)){
	if(isset($_POST["username"]) &&isset($_POST["password"])){
		if($_POST["username"]!=""&&$_POST["password"]!=""){
			include "config.php";
			
			$userid=null;
			$passwordh = hash('sha256', $codepass . $_POST["password"]);
			$sql1= "select * from google_users where (username=\"$_POST[username]\" or email=\"$_POST[username]\") and passwd=\"$passwordh\" ";
			$query = $DB->query($sql1);
			while ($r=$query->fetch(PDO::FETCH_ASSOC)) {
				$userid=$r["id"];
				$username=$r["name"];
				$username2=$r["username"];
				$userrol=$r["rol"];
				$userpsw=$r["passwd"];
				$useremail=$r["email"];
				break;
			}
			if($userid==null){
				print "<script>alert(\"Acceso invalido.\");window.location='../login.php';</script>";
			}else{
				session_start();
				$_SESSION["user_id"] = $userid;
				$_SESSION["name"] = $username;
				$_SESSION["username"] = $username2;
				$_SESSION["rol"]=$userrol;
				$_SESSION["passwd"]=$userpsw;
				$_SESSION["email"]=$useremail;
				print "<script>window.location='../index.php';</script>";				
			}
		}
	}
}



?>