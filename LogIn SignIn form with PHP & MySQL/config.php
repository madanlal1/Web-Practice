<?php 

$dbhost = "localhost";
$dbuser = "root";
$dbpass = "";
$dbname = "login";

$conn = mysqli_connect($dbhost, $dbuser, $dbpass, $dbname);

if(!$conn){
    die("<script>alert('Connection Failed.')</script>");
}

mysqli_close($conn);

?>