<?php 

include 'config.php';

error_reporting(0);

session_start();

if(isset($_SESSION['username'])) {
    header("Location: index.php");
}

if(isset($_POST['submit'])) {
    $username = $_POST['username'];
    $email = $_POST['email'];
    $password1 = md5($_POST['password1']);
    $password2 = md5($_POST['password2']);  

    if($password1 == $password2) {
        $sql = "SELECT * FROM users WHERE email = '$email'";
        $result = mysqli_query($conn, $sql);
        if(!$result->num_rows > 0) {
            $sql1 = "INSERT INTO users (username, email, password1) VALUES ('$username', '$email', '$password1')";
            $result = mysqli_query($conn, $sql1);

                if($result) {
                echo "<script>alert('User registered successfully.')</script>";
                $username = "";
                $email = "";
                $password1 = "";
                $password2 = "";
                } else {
                    echo "<script>alert('Oops! Something went wrong.')</script>";
                }

        } else {
            echo "<script>alert('Oops! Email already Exist.')</script>";
        }      
    } else {
        echo "<script>alert('Password not Match!')</script>";
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
    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
    <title>Document</title>
</head>
<body>
    <header>
        <div class="display-3">APPLICATION NAME HERE</div>
    </header>

    <form method="POST" class="reg" style="height: 400px; top: 5rem;">

    <h1>Sign Up</h1>

    <div class="form-group">
        <input type="text" name="username" class="form-control" id="username" aria-describedby="user" value="<?php echo $username; ?>" placeholder="Username" required>
    </div>

    <div class="form-group">
        <input type="email" name="email" class="form-control" id="email" aria-describedby="emailHelp" value="<?php echo $email; ?>" placeholder="Enter email" required>
    </div>

    <div class="form-group">
        <input type="password" name="password1" class="form-control" id="password1" value="<?php echo $password1; ?>" placeholder="Password" required>
    </div>

    <div class="form-group">
        <input type="password" name="password2" class="form-control" id="password2" value="<?php echo $password2; ?>" placeholder="Confirm Password" required>
    </div>

    <button name="submit" class="btn btn-primary form-control">Sign Up</button>

    <label>Hava an Account? <a href="index.php">Sign In</a></label>
</form>
</body>
</html>
