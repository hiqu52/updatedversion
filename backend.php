<?php
// Connect to MySQL
$servername = "localhost";
$username = "root";  // Change as per your database configuration
$password = "";  // Change as per your database configuration
$dbname = "car_service";  // Database name

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Handle form submission
if ($_SERVER['REQUEST_METHOD'] == 'POST' && isset($_POST['submit'])) {
    // Collect form data
    $name = $_POST['name'];
    $email = $_POST['email'];
    $whatsapp = $_POST['whatsapp'];
    $service_area = $_POST['service_area'];

    // Insert into database
    $sql = "INSERT INTO bookings (name, email, whatsapp, service_area) VALUES ('$name', '$email', '$whatsapp', '$service_area')";
    
    if ($conn->query($sql) === TRUE) {
        $alert_message = "Your booking has been successfully submitted!";
    } else {
        $alert_message = "Error: " . $conn->error;
    }
}

?>