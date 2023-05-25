<?php
function traerPersonas($con)
{
    $sql="SELECT * FROM ciudades";
    $filas=$con->query($sql);
    return $filas;
}
function traerPersona($id,$con)
{
    $sql="SELECT * FROM personas where id=".$id;
    $filas=$con->query($sql);
    return $filas;
}
function agregarPersona($datos,$con)
{
   $sql="INSERT INTO ciudades (nombre) VALUES ('".$datos['nombre']."');";
   $con->query($sql);
}
function editarCiudad($datos,$con)
{
    // update ciudades set nombre = CAMPO where id= ID
    $sql="update ciudades set nombre ='".$datos['nombre']."' where id=".$datos['id'];
   $con->query($sql);
}
function borrarCiudad($id,$con)
{
   // delete from ciudades where id == ID
    $sql="delete from  ciudades where id=".$id;
    $filas=$con->query($sql);
    return $filas;
}
?>