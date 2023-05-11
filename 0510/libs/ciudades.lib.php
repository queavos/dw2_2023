<?php
function traerCiudades($con)
{
    $sql="SELECT * FROM ciudades";
    $filas=$con->query($sql);
    return $filas;
}
function guardarCiudad($datos,$con)
{
   $sql="INSERT INTO ciudades (nombre) VALUES ('".$datos['nombre']."');";
   $con->query($sql);
}

?>