<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no">
    <title>XploreLankaRecoverPassword</title>
    <link rel="stylesheet" href="assets/bootstrap/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,700">
    <link rel="stylesheet" href="assets/fonts/ionicons.min.css">
    <link rel="stylesheet" href="assets/css/Footer-Basic.css">
    <link rel="stylesheet" href="assets/css/Header-Blue.css">
    <link rel="stylesheet" href="assets/css/Login-Form-Clean.css">
    <link rel="stylesheet" href="assets/css/Navigation-Clean.css">
    <link rel="stylesheet" href="assets/css/styles.css">
</head>

<body>  
    <div></div>
    <div class="login-clean">
        <?php echo"<h3 class='text-monospace text-center text-danger shadow-none' style='color: #40C3F7;font-size: 30px;'>Reset Password</h3>"; ?>
        <form method="post" action="template.php">
            <h2 class="sr-only">Login Form</h2>
            <div class="illustration"><img src="assets/img/WhatsApp%20Image%202020-04-30%20at%2010.06.26%20AM.jpeg" width="100%" height="100%"></div>
            <div class="form-group"><input class="border rounded form-control" type="password" name="password" placeholder="Password" minlength="8" required=""></div>
            <div class="form-group"><input class="border rounded form-control" type="password" name="confirmPassword" placeholder="Confirm Password" minlength="8" required=""></div>
            <div class="form-group"><button class="btn btn-primary btn-block" type="submit" style="background-color: #40C3F7;">Change Password</button></div>
            <?php
            echo "<input type=hidden name=fname value=$name>";
            echo "<input type=hidden name=userid value=$userid>";
             ?>
        </form>
    </div>
    <div class="footer-basic"><img class="img-fluid d-flex justify-content-center align-items-center align-content-center align-self-center m-auto" src="assets/img/facebook_cover_photo_1.png" loading="auto" width="30%" height="50%">
        <footer>
            <div class="social"><a href="#"><i class="icon ion-social-instagram"></i></a><a href="#"><i class="icon ion-social-snapchat"></i></a><a href="#"><i class="icon ion-social-twitter"></i></a><a href="#"><i class="icon ion-social-facebook"></i></a></div>
            <ul class="list-inline"></ul>
            <p class="copyright">XploreLanka by Informates © 2020</p>
        </footer>
    </div>
    <script src="assets/js/jquery.min.js"></script>
    <script src="assets/bootstrap/js/bootstrap.min.js"></script>
</body>

</html>