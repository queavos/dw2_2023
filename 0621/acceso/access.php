<?php
session_start();
include("../libs/conex.php");
include("../libs/acceso.lib.php");
if (acceder($_POST['nombreusu'],$_POST['clave'],$conn))
{
   header('Location:../index.php');    
} else {
    header('Location:login.php');   
}

?>