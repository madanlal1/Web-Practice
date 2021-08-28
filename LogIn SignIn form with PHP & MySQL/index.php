<?php

include 'config.php';

session_start();

error_reporting(0);

if(isset($_SESSION['username'])) {
    header("Location: welcome.php");
}

if(isset($_POST['submit'])) {
    $email = $_POST['email'];
    $password = md5($_POST['password']);

    $sql = "SELECT * FROM users WHERE email='$email' AND password='$password'";
    $result = mysqli_query($conn, $sql);
    if($result->num_rows > 0) {
        $row = mysqli_fetch_assoc($result);
        $_SESSION['username'] = $row['username'];
        header("Location: welcome.php");
    } else {
        echo "<script>alert('Email or password wrong.')</script>";
        $email = "";
        $password = "";
    }
}

mysqli_close($conn);

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" type="text/css" href="style.css">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
    <title>Document</title>
</head>
<body>
    <header>
        <div class="display-3">APPLICATION NAME HERE</div>
    </header>

    <form method="POST">

    <h1>Sign In</h1>

    <div class="form-group">
        <input type="email" name="email" class="form-control" id="exampleInputEmail1" value="<?php $email; ?>" aria-describedby="emailHelp" placeholder="Enter email" required>
    </div>

    <div class="form-group">
        <input type="password" name="password" class="form-control" id="exampleInputPassword1" value="<?php $_POST['password']; ?>" placeholder="Password" required>
    </div>

    <button type="submit" name="submit" class="btn btn-primary form-control">Sign In</button>

    <label>Don't hava an Account? <a href="register.php">Sign Up</a></label>
    </form>
</body>
</html>
