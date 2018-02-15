<?php
session_start();
if(!isset($_SESSION["user_id"]) || $_SESSION["user_id"]==null){
	print "<script>alert(\"Acceso invalido! Debe Loguearse \");window.location='../login.php';</script>";
}
$rol=$_SESSION['rol'];
if ($rol!='Administrador'){
	print "<script>alert(\"Acceso invalido! Debe ser Administrador \");window.location='../index.php';</script>";
}
include "config.php";
$q = intval($_GET['q']);
$sql="SELECT * FROM google_users WHERE id = '".$q."'";
$query = $DB->query($sql);
$r=$query->fetch(PDO::FETCH_ASSOC);
$roll = 'Usuario';
echo "<form role=\"form\" name=\"modify\" action=\"php/modifyuser.php?q=".$q."\" method=\"post\">"; 
echo "<div class=\"form-group\">";
echo "<label for=\"name\">Nombre Completo</label>";
echo "<input type=\"text\" name=\"name\" id=\"name\" class=\"form-control\" value=\"".$r["name"]."\">";
echo "</div>";
echo "<div class=\"form-group\">";
echo "<label for=\"username\">Nombre de Usuario</label>";
echo "<input type=\"text\" name=\"username\" id=\"username\" class=\"form-control\" value=\"".$r["username"]."\">";
echo "</div>";
echo "<div class=\"form-group\">";
echo "<label for=\"email\">Correo Electronico</label>";
echo "<input type=\"email\" name=\"email\" id=\"email\" class=\"form-control\" value=\"".$r["email"]."\">";
echo "</div>";
echo "<div class=\"form-group\">";
echo "<label for=\"rol\">Rol</label>";
echo "<select name=\"rol\" id=\"rol\" class=\"form-control\">";
if ($r['rol']==$roll) {
	echo "<option value=\"Usuario\" selected>Usuario</option>";
	echo "<option value=\"Administrador\">Administrador</option>";
} else {
	echo "<option value=\"Administrador\" selected>Administrador</option>";
	echo "<option value=\"Usuario\">Usuario</option>";
}
echo "</select>";
echo "</div>";
echo "<button type=\"submit\" class=\"btn btn-default\">Actualizar</button>";
echo "</form>";
echo "<script src=\"js/valida_modify.js\"></script>";
?>