<?php
// include("../libs/conex.php");
// include("../libs/ciudades.lib.php");
$titulo="Insertar Persona";
if ($_GET and isset($_GET['id']))
    {
       // echo $_GET['id'];
        $titulo="Editar Persona";
        $rs=traerPersona($_GET['id'],$conn);
        //echo "<pre>";
        $dato=$rs->fetch_assoc();
       // echo "</pre>";
    } else 
    {
        $dato['id']=-1;
        $dato['nombre']="";
        $dato['apellido']="";
        $dato['cin']="";
        $dato['direccion']="";
        $dato['fecha_nac']="";
        $dato['ciudad_id']="";
    }
  $cdatos=traerCiudades($conn);

?>
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ciudades - <?php echo $titulo; ?></title>
</head>
<body>
    <h3><?php echo $titulo; ?></h3>
    <div>
        <form action="guardar.php" method="post">
           
           <input type="hidden" id="id" name="id" value="<?php 
           echo $dato['id'];
            ?>" />
            <label>Nonbre</label><br>
           <input type="text" id="nombre" name="nombre" required value="<?php 
          // if (isset($dato['nombre'])) { echo $dato['nombre']; }
           echo $dato['nombre'];
            ?>" /> <br>
            <label>Apellido</label><br>
           <input type="text" id="apellido" name="apellido" required value="<?php 
          // if (isset($dato['nombre'])) { echo $dato['nombre']; }
           echo $dato['apellido'];
            ?>" /> <br><label>Cedula</label><br>
           <input type="text" id="cin" name="cin" required value="<?php 
          // if (isset($dato['nombre'])) { echo $dato['nombre']; }
           echo $dato['cin'];
            ?>" /> <br><label>Direccion</label><br>
           <input type="text" id="direccion" name="direccion" required value="<?php 
          // if (isset($dato['nombre'])) { echo $dato['nombre']; }
           echo $dato['direccion'];
            ?>" /> <br><label>F. de Nacimiento</label><br>
           <input type="date" id="fecha_nac" name="fecha_nac" required value="<?php 
          // if (isset($dato['nombre'])) { echo $dato['nombre']; }
           echo $dato['fecha_nac'];
            ?>" /> <br><label>Ciudad</label><br>
            <select name="ciudad_id" id="ciudad_id">
                   <option value="0" >Seleccionar </option>
                    <?php
                     foreach($cdatos as $c) { ?>

                     <option value="<?php echo $c["id"]; ?>" <?php if ($c["id"]==$dato['ciudad_id']) { echo "selected"; } ?> ><?php echo $c["nombre"]; ?> </option>

             
                   <?php  } ?>

            </select>
            <br>
           <button type="submit">Enviar</button>
           <a href="index.php?mod=lstpersona">Volver</a>    

        </form>

    </div>
</body>
</html>