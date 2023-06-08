<?php
include("comun/includes.php");
?>
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Principal</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ" crossorigin="anonymous">

</head>
<body>
    <header>
        <h1>Pagina</h1>
    </header>
    <div class="container" >
        <div class="row">
            <div class="col col-4 "> 
            <?php 
            include("comun/menu.php");
            ?>        
        </div>
            <div class="col col-8 bg-light"> 
                <?php
                if ($_GET['mod']=="ciudades")  {
                    include("ciudades/index.php");
                }
                if ($_GET['mod']=="ciudades" && ($_GET['accion']=="editar" || $_GET['accion']=="nuevo" ))  {
                    include("ciudades/nuevo.php");
                }
                if ($_GET['mod']=="ciudades" && ($_GET['accion']=="borrar"))  {
                    include("ciudades/borrar.php");
                }
                if ($_GET['mod']=="personas")  {
                    include("personas/list.php");
                }
                if ($_GET['mod']=="personas" && ($_GET['accion']=="editar" || $_GET['accion']=="nuevo" ))  {
                    include("personas/form.php");
                }
                if ($_GET['mod']=="personas" && ($_GET['accion']=="borrar"))  {
                    include("ciudades/borrar.php");
                }
                ?>
            </div>
        </div>
    </div>
    <footer><pre>
        DW2 - 2023
    </pre></footer>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ENjdO4Dr2bkBIFxQpeoTz1HIcje39Wm4jDKdf19U8gI4ddQ3GYNS7NTKfAdVQSZe" crossorigin="anonymous"></script>
</body>
</html>