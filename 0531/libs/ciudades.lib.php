<?php
function traerCiudades($con)
{
    $sql="SELECT * FROM ciudades";
    $filas=$con->query($sql);
    return $filas;
}
function traerCiudad($id,$con)
{
    $sql="SELECT * FROM ciudades where id=".$id;
    $filas=$con->query($sql);
    return $filas;
}
function agregarCiudad($datos,$con)
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
function traerCiudadNombre($id,$con)
{
    $sql="SELECT nombre FROM ciudades where id=".$id;
    $filas=$con->query($sql);
    $dato=$filas->fetch_assoc();
    return $dato['nombre'] ;
}
?>