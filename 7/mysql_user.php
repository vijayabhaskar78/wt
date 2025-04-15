<?php
try {
    // Try to connect to MySQL
    $pdo = new PDO('mysql:host=localhost;dbname=test', 'root', '');
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    
    // Create table if it doesn't exist
    $pdo->exec("CREATE TABLE IF NOT EXISTS users (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(50))");
    
    // Insert new name if submitted
    if (!empty($_POST['name'])) {
        $pdo->prepare("INSERT INTO users (name) VALUES (?)")->execute([$_POST['name']]);
    }
    
    // Display all names
    echo "<h2>Users from MySQL:</h2>";
    foreach ($pdo->query("SELECT name FROM users") as $row) {
        echo $row['name'] . "<br>";
    }
} catch (PDOException $e) {
    // Fallback to session-based simulation
    session_start();
    
    // Initialize session array if it doesn't exist
    if (!isset($_SESSION['users'])) {
        $_SESSION['users'] = [
            ['name' => 'Alice'],
            ['name' => 'Bob'],
            ['name' => 'Charlie']
        ];
    }
    
    // Add new name if submitted
    if (!empty($_POST['name'])) {
        $_SESSION['users'][] = ['name' => htmlspecialchars($_POST['name'])];
    }
    
    // Display all names
    echo "<h2>Users (Simulated):</h2>";
    foreach ($_SESSION['users'] as $user) {
        echo $user['name'] . "<br>";
    }
}
?>

<form method="post">
    <input type="text" name="name">
    <input type="submit" value="Add">
</form>
