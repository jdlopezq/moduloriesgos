<?php
error_reporting(E_ALL & ~E_DEPRECATED & ~E_NOTICE);
ob_start();
session_start();

define('PROJECT_NAME', 'Modulo de Riesgos');

define('DB_DRIVER', 'sqlsrv');
define('DB_SERVER_USERNAME', 'sa');
define('DB_SERVER', '10.191.221.245');
define('DB_SERVER_PASSWORD', '(b@NkV1s10N)');
define('DB_DATABASE', 'VII');
define('DB_DATABASE2', 'CredIntegral');

$dboptions = array(
    PDO::ATTR_PERSISTENT => FALSE,
    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
    PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
    PDO::MYSQL_ATTR_INIT_COMMAND => 'SET NAMES utf8',
);
try {
  $DB = new PDO(DB_DRIVER . ':Server=' . DB_SERVER . ';Database=' . DB_DATABASE, DB_SERVER_USERNAME, DB_SERVER_PASSWORD, $dboptions);
  $DB2 = new PDO(DB_DRIVER . ':Server=' . DB_SERVER . ';Database=' . DB_DATABASE2, DB_SERVER_USERNAME, DB_SERVER_PASSWORD, $dboptions);
} catch (Exception $ex) {
  echo $ex->getMessage();
  die;
}
$codepassword = 'Credintegral$/(?¡*[:12'
?>