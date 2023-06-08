<?php
session_start();
print_r($_SESSION);
if(!isset($_SESSION['nombreusu']) )
{
  session_destroy();
  header('Location:acceso/login.php');    
}

?>