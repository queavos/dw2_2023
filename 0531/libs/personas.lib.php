<?php
function traerPersonas($con)
{
    $sql="SELECT * FROM personas";
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
   echo $sql="INSERT INTO personas (nombre, apellido,cin,direccion,fecha_nac,ciudad_id) 
   VALUES ('".$datos['nombre']."','".$datos['apellido']."','".$datos['cin']."','".$datos['direccion']."','".$datos['fecha_nac']."',".$datos['ciudad_id'].");";
   $con->query($sql);
}
function editarPersona($datos,$con)
{
    // update personas set nombre = CAMPO where id= ID
  echo  $sql="update personas set nombre ='".$datos['nombre']."' " 
            .", apellido =  '".$datos['apellido']."' " 
            .", cin =  '".$datos['cin']."' "    
            .", direccion =  '".$datos['direccion']."' "
            .", fecha_nac =  '".$datos['fecha_nac']."' " 
            .", ciudad_id =  ".$datos['ciudad_id']." "      
            ." where id=".$datos['id'];
   $con->query($sql);
}
function borrarPersona($id,$con)
{
   // delete from personas where id == ID
   echo  $sql="delete from  personas where id=".$id;
    $filas=$con->query($sql);
  // $filas=[];
    return $filas;
}
function validarPersonas($dato)
  {
    $errores=[];
    /* 
           $dato['id']=-1;
        $dato['nombre']="";
        $dato['apellido']="";
        $dato['cin']="";
        $dato['direccion']="";
        $dato['fecha_nac']="";
        $dato['ciudad_id']="";
    */
    if (empty($dato['id'])) 
      {
        array_push($errores, "El campo id debe estar definido");
      }
      if (empty($dato['apellido'])) 
      {
        array_push($errores, "El campo apellido debe estar definido");
      }
          if (empty($dato['nombre'])) 
      {
        array_push($errores, "El campo nombre debe estar definido");
      }
       if (is_nan($dato['cin'])) 
      {
        array_push($errores, "El campo Nro de Cedula debe ser un numero");
      }
      if (!preg_match('/^\d{4}-\d{2}-\d{2}$/', $dato['fecha_nac']))
       {
       array_push($errores,"La fecha ingresada no tiene el formato correcto (YYYY-MM-DD)");
      }
      if (is_nan($dato['ciudad_id'])) 
      {
        array_push($errores, "El campo Ciudad debe ser un numero");
      }
      return  $errores;
}

?>