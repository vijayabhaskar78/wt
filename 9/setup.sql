CREATE DATABASE railway;
USE railway;
CREATE TABLE bookings (
  name VARCHAR(50), date DATE, from_city VARCHAR(50),
  to_city VARCHAR(50), class VARCHAR(10),
  berth VARCHAR(5), tickets INT);
