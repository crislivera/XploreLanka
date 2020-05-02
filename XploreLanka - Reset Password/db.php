
<?php
$servername = "159.203.105.235";
$username = "admin";
$password = "rusiru@1999";
$dbname = "xploreLanka";

// Create connection
$conn = mysqli_connect($servername, $username, $password, $dbname);
// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}