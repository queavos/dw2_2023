<?php
session_destroy();
unset($_SESSION);
header('Location:login.php');  
?>