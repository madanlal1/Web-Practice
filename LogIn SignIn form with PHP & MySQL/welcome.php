<?php 

session_start();

if(!isset($_SESSION['username'])) {
    header("Location: index.php");
}


?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>welcome</title>
</head>
<body>
    <?php echo "<h1>Hellow " .$_SESSION['username']. "</h1>" ?>
    <a href="logout.php">Logout</a>
</body>
</html>