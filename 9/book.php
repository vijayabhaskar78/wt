<?php
$conn = new mysqli("localhost", "svijay", "", "railway");
$conn->query("INSERT INTO bookings VALUES (
  '$_POST[n]', '$_POST[d]', '$_POST[f]', '$_POST[t]', '$_POST[c]', '$_POST[b]', $_POST[num])");
echo "<h2>Booked!</h2><a href='index.html'>Back</a>";
?>
