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
   
	<?php
		include ('db.php');

		if ( isset( $_GET['userid'] )){
			$userid =  $_GET['userid'];
			$sql = "SELECT * FROM recoverUser WHERE userID=$userid";
			$result = mysqli_query($conn, $sql);


			if (mysqli_num_rows($result) > 0) {
			    // output data of each row
			    // while($row = mysqli_fetch_assoc($result)) {
			    //     echo "recoverID: " . $row["recoverID"]. " - username: " . $row["username"].  " - userID: " . $row["userID"];
			    // }
			    include('changepassword.php');
			} else {
			   include ('accessdenied.php');
			}

		}else{
			include ('accessdenied.php');
		}
		
	?>

</body>

</html>