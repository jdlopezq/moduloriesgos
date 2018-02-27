<?php
header("Access-Control-Allow-Origin: *");
header('Content-type: text/xml');
include("config.php");
$con = 1;
$sql= "SELECT * from graphics ORDER BY id";
$query = $DB->query($sql);
while ($r=$query->fetch(PDO::FETCH_ASSOC)) {
    $name[$con]=$r['names'];
    $parameter[$con]=$r['parameter'];
    $con++;
}
$dataout= [];
$dataout[0]=$name;
for ($i=1; $i <$con; $i++){
    $data=[];
    if ($parameter[$i]=='') {
        $sql ="SELECT $name[$i], COUNT(*) Total FROM prueba GROUP BY $name[$i]";
    } else {
        $sql ="SELECT $name[$i], COUNT(*) Total FROM prueba WHERE $parameter[$i] GROUP BY $name[$i]";
    }
    $query=$DB2->query($sql);
    while ($r=$query->fetch(PDO::FETCH_ASSOC)) {
        $data[]=$r;
    }
    $dataout[$i]=$data;
}
echo json_encode($dataout);
?>
