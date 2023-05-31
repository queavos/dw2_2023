<?php
$datos=traerPersonas($conn);
?>    
    
    <h1>Personas</h1>
    <a href="form.php">Nuevo</a>
    <table border=1>
        <thead>
            <tr>
                <th>Id</th>
                <th>Nombre</th>
                <th>Apellido</th>
                <th>CIN</th>
                <th>F. Nac.</th>
                <th>Dir</th>
                <th>Ciudad</th>
                <th>Editar</th>
                <th>Borrar</th>
            </tr>
        </thead>
        <tbody>
           
                <?php
                foreach($datos as $d) {
                ?>
             <tr>    
                <td><?php echo $d['id'];  ?> </td>
                <td><?php echo $d['nombre'];  ?></td>
                <td><?php echo $d['apellido'];  ?> </td>
                <td><?php echo $d['cin'];  ?></td>
                <td><?php echo $d['fecha_nac'];  ?> </td>
                <td><?php echo $d['direccion'];  ?></td>
                <td><?php echo traerCiudadNombre($d['ciudad_id'],$conn);  ?> </td>
                <td><a href="index.php?mod=edtpersona&&id=<?php  echo $d['id'];  ?>">Editar</a> </td>
                <td><a href="index.php?mod=delpersona&&id=<?php  echo $d['id'];  ?>">Borrar</a> </td>
            </tr>
               <?php 
               }
               ?> 
        </tbody>    
    </table>