<?php
 include("../libs/conex.php");
 include("../libs/ciudades.lib.php");
 include("../libs/personas.lib.php");

//echo "<pre>";
// foreach($datos as $d)
// {
//  print_r($d);
// }
if (!$_GET["mod"] or !isset($_GET["mod"])) { $_GET["mod"]="lstpersona";   }?>
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Personas</title>
</head>
<body>
<?php
if ( $_GET["mod"]=="lstpersona" )
        {
            include("list.php");
        } elseif ($_GET["mod"]=="edtpersona")
        {
              include("form.php");  
        } elseif ($_GET["mod"]=="delpersona")
        {
              include("borrar.php");    
        }

?>
</body>
</html>