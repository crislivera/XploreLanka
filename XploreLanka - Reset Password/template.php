<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no">
    <title>Change Password</title>
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
        
        if (isset($_POST["password"])&&isset($_POST["confirmPassword"])){
             $pwd = $_POST["password"];
             $cpwd = $_POST["confirmPassword"];
             $name = $_POST['fname'];
             $userid = $_POST['userid'];


             if($pwd == $cpwd){
               include('success.php');
             }else{
                include('nomatch.php');
             }
        	
        }else{
        	include('accessdenied.php');
        }
    ?>

   