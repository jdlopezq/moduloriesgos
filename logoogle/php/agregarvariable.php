<?php
include('config.php');
try {
	$sql = "INSERT INTO datosbase (nombrec, nombreq) VALUES (:nombrec,:nombreq)";
	$query = $DB->prepare($sql);
	$query->bindParam(':nombrec', $_POST['nombrec'], PDO::PARAM_STR);
	$query->bindParam(':nombreq', $_POST['nombreq'], PDO::PARAM_STR);
	$query->execute();
} catch (PDOException $e) {
	echo 'PDOException : '.  $e->getMessage();
}

include('lista.php');
?>