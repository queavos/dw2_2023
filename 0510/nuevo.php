<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Nueva Ciudad</title>
</head>
<body>
    <h3>Agregar Ciudad</h3>
    <div>
        <form action="guardar.php" method="post">
           <label>Nonbre de la ciudad</label><br>
           <input type="text" id="nombre" name="nombre" required /> <br>
           <button type="submit">Enviar</button>
           <a href="index.php">Volver</a>    

        </form>

    </div>
</body>
</html>