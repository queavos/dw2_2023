<?php
$datos=traerPersonas($conn);
?>    
    
    <h1>Personas</h1>
    <a href="index.php?mod=personas&accion=nuevo">Nuevo</a>
    <table class="table">
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
                <td><a href="index.php?mod=personas&accion=editar&id=<?php  echo $d['id'];  ?>">Editar</a> </td>
                <td><a href="personas/borrar.php?id=<?php  echo $d['id'];  ?>">Borrar</a> </td>
            </tr>
               <?php 
               }
               ?> 
        </tbody>    
    </table>