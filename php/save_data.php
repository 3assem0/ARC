<?php 
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");
    
// Check if the form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get the input data
    $name = htmlspecialchars($_POST['full-name']);
    $email = htmlspecialchars($_POST['email']);
    $phone = htmlspecialchars($_POST['phone']);
    $message = htmlspecialchars($_POST['message']);

    // Define the file where data will be saved
    $file = '../data.txt'; // Ensure the correct path here, use relative path or absolute path

    // Format the data to save
    $data = "Name: $name, Email: $email, Phone: $phone, Message: $message\n";

    // Save the data to the file
    if (file_put_contents($file, $data, FILE_APPEND)) {
        echo "Data saved successfully!";
    } else {
        echo "Failed to save data.";
    }
}
?>
