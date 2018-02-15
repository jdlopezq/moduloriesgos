<?php
include('config.php');
try {
	$sql = "DELETE FROM datosbase WHERE id = :id";
	$query = $DB->prepare($sql);
	$query->bindParam(':id', $_POST['id'], PDO::PARAM_INT);
	$query->execute();
} catch (PDOException $e) {
	echo 'PDOException : '.  $e->getMessage();
}
include('lista.php');
?>