<?php

header('Access-Control-Allow-Headers: Content-Type');
header('Access-Control-Allow-Origin: *');
$rest_json = file_get_contents("php://input");
$_POST = json_decode($rest_json, true);

 


 

if ($_SERVER['REQUEST_METHOD'] === 'POST') {

  // enter your own credentials
 $servername = "localhost";
 $username = "root";
 $pswd = "";
 $db = "ajaxform";

 /* database connection */
 $conn = new mysqli($servername, $username, $pswd, $db);

 $sname =  $_POST['fname'];
 $sphone = $_POST['fphone'];
 $semail = $_POST['fmail'];
 
 



/* sql scripts */

/* $sql = "INSERT INTO atest(fname, fphone, fmail)VALUES('test', '6545665615','ran@hotmail.com')"; */


$sql = "INSERT INTO atest(fname, fphone, fmail)VALUES('$sname', '$sphone','$semail')";

if ($conn->query($sql) === TRUE) {
    echo "All the fields has been posted!";
  } else {
    echo "Error: " . $sql . "<br>" . $conn->error;
  }
  
  /* connection close */
  $conn->close();
  
}