<?php

header('Access-Control-Allow-Headers: Content-Type');
header('Access-Control-Allow-Origin: *');
$rest_json = file_get_contents("php://input");
 



if ($_SERVER['REQUEST_METHOD'] === 'POST') {

    function test_input($data) {
        $data = trim($data);
        $data = stripslashes($data);
        $data = htmlspecialchars($data);
        return $data;
      }
      
    $fname = test_input($_POST['fname']);
    $fphone = test_input($_POST['fphone']);
    $fmail = test_input($_POST['fmail']);

/*     $sname = $conn->real_escape_string($_POST['fname']);
    $sphone = $conn->real_escape_string($_POST['fphone']);
    $semail = $conn->real_escape_string($_POST['fmail']); */

    
/* link for db */
$url = "http://localhost:8000/includes/db.inc/db.inc.php";

$ch = curl_init();

/* form to post */
$form_data = array(
    'fname' => $fname,
    'fphone' => $fphone,
    'fmail' => $fmail
);

$data = http_build_query($form_data);

curl_setopt($ch, CURLOPT_URL, $url);
curl_setopt($ch,CURLOPT_POST,true);
curl_setopt($ch, CURLOPT_POSTFIELDS, $data);
curl_setopt($ch,CURLOPT_RETURNTRANSFER, true);

$resp = curl_exec($ch);

if($e = curl_error($ch)){
    echo $e;
} else{
    $decode = json_decode($resp);
 
}
echo $resp;
curl_close($ch);

}