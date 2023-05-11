<?php
include("libs/conex.php");
include("libs/ciudades.lib.php");
//print_r($_GET);
// if (!$_POST)
// {
//     echo "NO POST";

// }
// if (!$_GET)
// {
//     echo "NO GET";

// }

// echo $_POST["nombre"];
 if ($_POST)
 {
    if ($_POST['nombre'])
        {
         //   echo "entro";
        guardarCiudad($_POST,$conn);    
        }
 }
 header('Location:index.php');
?>
<p>soy guardar</p>