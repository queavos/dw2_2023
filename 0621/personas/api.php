<?php
 include("../libs/conex.php");
 include("../libs/personas.lib.php");
 header("Content-Type: application/json; charset=UTF-8");

 if ($_GET['mod']=="personas" && $_GET['action']=="mostrar"  && isset($_GET['id']))  {
                   $datos=traerPersona($_GET['id'],$conn);
                   //$res=$datos->fetch_assoc();
                    $res=$datos->fetch_all(MYSQLI_ASSOC);
                    print_r(json_encode($res));
                    return;
                }
   if ($_GET['mod']=="personas" && $_GET['action']=="borrar"  && isset($_GET['id']))  {
                   $rs=borrarPersona($_GET['id'],$conn);
                   $respone["mensaje"]="borrado"; 
                   echo json_encode($respone);
                   return 1;
                }  
     if ($_GET['mod']=="personas" && $_GET['action']=="guardar"  && isset($_POST)) 
      {
            $dato=json_decode(file_get_contents('php://input'), true);
            $err=validarPersonas($dato);  
           // echo json_encode($err);  
            if (count($err)==0) {    
                if ($dato['id']==-1){
                agregarPersona($dato,$conn);  
                }  else {
                editarPersona($dato,$conn);
                }
                   $respone["mensaje"]="borrado"; 
                   echo json_encode($respone);
                    return 1;
                }   }                               
      if ($_GET['mod']=="personas")  {
                  //  echo "personas";
                    $datos=traerPersonas($conn);
                   $res=$datos->fetch_all(MYSQLI_ASSOC);
                    echo json_encode($res) ;
                }                            

?>