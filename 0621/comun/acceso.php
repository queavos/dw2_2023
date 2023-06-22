<?php
session_start();
print_r($_SESSION);
echo session_id();
if(!isset($_SESSION['nombreusu']) )
{
  session_destroy();
  header('Location:acceso/login.php');    
}

?>