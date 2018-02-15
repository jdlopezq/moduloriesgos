<? include "config.php";?>
<table  class="table table-bordered" cellspacing="0" cellpadding="0">
    <tr>
        <th>Nombre Campo</th>
        <th>Nombre Query</th>
        <th style="width:160px;">Borrar Campo</th>
    </tr>
    <?php				
    $sql = "SELECT * FROM datosbase ORDER BY id ASC";
    $query = $DB->prepare($sql);
    $query->execute();
    $list = $query->fetchAll();
    foreach ($list as $rs) {
    ?>
    <tr>
        <td><?php echo $rs['nombrec']; ?></td>
        <td><?php echo $rs['nombreq']; ?></td>
        <td><a href="#" onclick="deletev(<?php echo $rs['id']; ?>)"> Borrar</a></td>
    </tr>
    <?php
    }
    ?>
</table>