<?php

header('Access-Control-Allow-Headers: Content-Type');
header('Access-Control-Allow-Origin: *');
$rest_json = file_get_contents("php://input");
$_POST = json_decode($rest_json, true);

 

$servername = "localhost";
$username = "root";
$pswd = "";
$db = "ajaxform";

$conn = new mysqli($servername, $username, $pswd, $db);

$sql = "SELECT  fname, fphone, fmail FROM atest";
$result = $conn->query($sql);

if($result->num_rows > 0){

    $array = array();

    while($row = $result->fetch_assoc()){
 

        $allData = array( "name" => $row['fname'], "phone" => $row['fphone'], "email" => $row['fmail']);
        
         /* var_dump($allData); */
           
        echo json_encode($allData);

    }

 

}else{
    echo "0 results";
}
 
 
$conn->close();