<?php
// include("libs/conex.php");
// include("libs/ciudades.lib.php");
$datos=traerCiudades($conn);

?>
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ciudades</title>
</head>
<body>
    <h1>Ciudades</h1>
    <?php 
    if (!($_SESSION['rol_id']>1)) {
    ?>
    <a href="index.php?mod=ciudades&accion=nuevo">Nuevo</a>
    <?php } ?>
    <table class="table">
        <thead>
            <tr>
                <th>Id</th>
                <th>Nombre</th>
                  <?php 
    if (!($_SESSION['rol_id']>1)) {
    ?>  
                <th>Editar</th>
                <th>Borrar</th>
         <?php } ?>    
            </tr>
        </thead>
        <tbody>
           
                <?php
                foreach($datos as $d) {
                ?>
             <tr>    
                <td><?php echo $d['id'];  ?> </td>
                <td><?php echo $d['nombre'];  ?></td>
                <?php 
    if (!($_SESSION['rol_id']>1)) {
    ?>  
                <td><a href="index.php?mod=ciudades&accion=editar&id=<?php  echo $d['id'];  ?>">Editar</a> </td>
                <td><a href="ciudades/borrar.php?id=<?php  echo $d['id'];  ?>">Borrar</a> </td>
            </tr>
               <?php 
    }
               }
               ?> 
        </tbody>    
    </table>
</body>
</html>