<?php
 include("../libs/conex.php");
 include("../libs/personas.lib.php");
 if ($_POST)
 {
   // if ($_POST['nombre'])
     //   {
    $err=validarPersonas($_POST);  
    print_r($err);  
    if (count($err)==0) {    
        if ($_POST['id']==-1){
        agregarPersona($_POST,$conn);  
        }  else {
        editarPersona($_POST,$conn);
        }
        header('Location:../index.php?mod=personas');
        } else 
        {
        //echo "NO PASO";
        $datos=json_encode($_POST); 
        header('Location:../index.php?mod=personas&accion=editar&errores='. json_encode($err).'&odata='.$datos);    
        }
     //   }
 }
//header('Location:index.php?mod=persona&accion=lst');

?>
<p>soy guardar</p>