<?php
 include("../libs/conex.php");
 include("../libs/ciudades.lib.php");
 header("Content-Type: application/json; charset=UTF-8");

 if ($_GET['mod']=="ciudades" && $_GET['action']=="mostrar"  && isset($_GET['id']))  {
                   $datos=traerCiudad($_GET['id'],$conn);
                   //$res=$datos->fetch_assoc();
                    $res=$datos->fetch_all(MYSQLI_ASSOC);
                    print_r(json_encode($res));
                    return;
                }
   if ($_GET['mod']=="ciudades" && $_GET['action']=="borrar"  && isset($_GET['id']))  {
                   $rs=borrarCiudad($_GET['id'],$conn);
                   $respone["mensaje"]=="borrado"; 
                   print_r(json_encode($respone));
                   return ;
                }  
     if ($_GET['mod']=="ciudades" && $_GET['action']=="guardar"  && isset($_POST))  {
                //echo "entro en guardar";   
                $dato=json_decode(file_get_contents('php://input'), true);
                // $dato['id']=$data->id;
                // $dato['nombre']=$data->nombre;
                // print_r($dato);
                if ($dato['nombre'])
                         {
                        if ($dato['id']==-1){
                             agregarCiudad($dato,$conn);  
                             $id=$conn->insert_id;
                            }  else {
                            editarCiudad($dato,$conn);
                            $id=$dato['id'];
                        }
                        }
                   $datos=traerCiudad($id,$conn);
                    $respone=$datos->fetch_all(MYSQLI_ASSOC);
                    //$respone["mensaje"]=="guardado"; 
                    print_r(json_encode($respone));
                    return;
                }                                  
                if ($_GET['mod']=="ciudades")  {
                    $datos=traerCiudades($conn);
                   $res=$datos->fetch_all(MYSQLI_ASSOC);
                    print_r(json_encode($res));
                }                            

?>