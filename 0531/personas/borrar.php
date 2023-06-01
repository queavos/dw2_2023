<?php
// include("../libs/conex.php");
// include("../libs/ciudades.lib.php");
if ($_GET and $_GET['id'])
    {
       // echo $_GET['id'];
        $rs=borrarPersona($_GET['id'],$conn);
        //echo "<pre>";
        //$dato=$rs->fetch_assoc();
       // echo "</pre>";
    }
  header('Location:index.php?mod=persona&accion=lst');   
    ?>