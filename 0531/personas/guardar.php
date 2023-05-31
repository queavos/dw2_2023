<?php
 include("../libs/conex.php");
 include("../libs/personas.lib.php");
 if ($_POST)
 {
    if ($_POST['nombre'])
        {
        if ($_POST['id']==-1){
        agregarPersona($_POST,$conn);  
        }  else {
        editarPersona($_POST,$conn);
        }
        }
 }
header('Location:index.php?mod=lstpersona');
?>
<p>soy guardar</p>