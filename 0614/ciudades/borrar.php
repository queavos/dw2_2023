<?php
 include("../libs/conex.php");
 include("../libs/ciudades.lib.php");
include("../comun/accesso.php");
  if (!($_SESSION['rol_id']>1)) {
if ($_GET and $_GET['id'])
    {
       // echo $_GET['id'];
        $rs=borrarCiudad($_GET['id'],$conn);
        //echo "<pre>";
        //$dato=$rs->fetch_assoc();
       // echo "</pre>";
    } }
  header('Location:../index.php?mod=ciudades');   
    ?>