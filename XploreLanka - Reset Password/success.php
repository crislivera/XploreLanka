
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



 <div class="col">

    <?php  
    echo "<label class='col-form-label text-capitalize text-center text-danger shadow-none d-flex justify-content-center align-items-center' style='filter: blur(0px) brightness(83%);margin: 5% 0 0 0;font-weight: bold;color: #107ca7;'>Hi there, your password has been successfully changed!<br><br>Switch to XploreLanka App and sign in.<br><br>Thank you for using our services<br></label>";


// code do delete from recover
    // update password in user

    include('db.php');

    $sql = "UPDATE user SET password='$pwd' WHERE userID=$userid";

    if (mysqli_query($conn, $sql)) {
    // echo "Record updated successfully";
    } else {
        echo "Error updating record: " . mysqli_error($conn);
    }

    $sql = "DELETE FROM recoverUser WHERE userID=$userid";

    if (mysqli_query($conn, $sql)) {
        // echo "Record deleted successfully";
    } else {
        echo "Error deleting record: " . mysqli_error($conn);
    }

    ?>

</div>
    <div
        class="footer-basic"><img class="d-flex align-items-center m-auto" src="assets/img/facebook_cover_photo_1.png" width="30%" height="50%">
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