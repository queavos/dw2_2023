<?php
 include("../libs/conex.php");
 include("../libs/personas.lib.php");
 if ($_POST)
 {
   // if ($_POST['nombre'])
     //   {
    $err=validarPersonas($_POST);    
    if (length($err)==0) {    
        if ($_POST['id']==-1){
        agregarPersona($_POST,$conn);  
        }  else {
        editarPersona($_POST,$conn);
        }
        } else 
        {
        header('Location:index.php?mod=persona&accion=edit&errores='.$errores);    
        }
     //   }
 }
header('Location:index.php?mod=persona&accion=lst');
?>
<p>soy guardar</p>