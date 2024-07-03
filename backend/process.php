<?php
require_once('db-config.php');

$response = [];


if ($_SERVER['REQUEST_METHOD'] === 'POST') {
   
        $name = $_POST['name'];
        $email = $_POST['email'];
        $message = $_POST['message'];

        $query = "INSERT INTO contacts (name, email, message) VALUES (?,?,?)";
        $stmt = $db->prepare($query);

        if ($stmt) {
            $stmt->bind_param("sss", $name, $email, $message);
            $result = $stmt->execute();
            $stmt->close();

            if ($result) {
                $response = ['success' => 'Message send successfully.'];
            } else {
                $response = ['error' => 'Message can not be created.'];
            }
        } else {
            $response = ['error' => 'Failed to insert into database'];
        }

        header('Content-Type: application/json');
        echo json_encode($response);
        return $result;

} else {
    $response = ['error' => 'Missing action for POST request'];
}

header('Content-Type: application/json');
echo json_encode($response);
error_reporting(E_ALL);
ini_set('display_errors', 1);
