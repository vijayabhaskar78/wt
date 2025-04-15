<?php
$data_file = 'users.txt';

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $user = $_POST['username'];
    $pass = $_POST['password'];

    file_put_contents($data_file, "$user:$pass\n", FILE_APPEND);
    echo "Registered!<br>";
}
?>
<!DOCTYPE html>
<html>
<body>
  <form method="POST">
    <input type="text" name="username" placeholder="Username" required><br>
    <input type="password" name="password" placeholder="Password" required><br>
    <input type="submit" value="Register">
  </form>
</body>
</html>