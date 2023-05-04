    <?php 
    //echo "Hola";
    $titulo="Clase 0503";
    $lista=["melon","sandia","mango", "piña"];
    //$lista[0]="naranja";
    array_push($lista,"limon");
    function mifunc() 
    {
        return "Hola todos";
    } 

    ?>
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?php echo $titulo; ?></title>
</head>
<body>
    <?php 
    echo "Hola"."<br>";
    //print_r($lista);
    echo $lista[0]."<br>";
    echo $salida=mifunc();
    ?>
    <table border=1>
        <tr>
            <th>Nombre</th>
        </tr>
        <?php 
        for ($i=0; $i<sizeof($lista);$i++) {
        ?>

           <tr>
            <td><?php echo $lista[$i]; ?></td>
        </tr>
        <?php } ?>
    </table>
</body>
</html>