<?php
$servidor="localhost"; // ip o direccion e la base e datos
$usuario="dw2_user";
$password="dw2_user";
$base="dw2_user";
$conn=mysqli_connect($servidor,$usuario,$password,$base);
if($conn->connect_error)
{
    die("fallo la conexion");
}
//echo "conectado";

?>