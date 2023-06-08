<?php
function acceder($user,$pass,$conn)
{
$sql='select * from usuarios where nombreusu="'.$user.'" and clave="'.md5($pass).'"'; 
$rs=$conn->query($sql);
if ($rs->num_rows==1)
{
  $d=$rs->fetch_assoc();
  $_SESSION['id']=$d['id'];
  $_SESSION['nombreusu']=$d['nombreusu'];  
  $_SESSION['nombre']=$d['nombre'];
  $_SESSION['rol_id']=$d['rol_id']; 
  return true;
} else 
{
return false;
}

}
?>