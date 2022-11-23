<?php
// Configuratiebestand
// Path: config.php

// Definieer de databasegegevens
define('DB_HOST', 'localhost');
define('DB_USER', 'root');
define('DB_PASS', '');
define('DB_NAME', 'cms');

// Maak de databaseverbinding
$mysqli = new mysqli(DB_HOST, DB_USER, DB_PASS, DB_NAME);

// Controleer de verbinding
if ($mysqli->connect_error) {
    die('Connect Error (' . $mysqli->connect_errno . ') '
            . $mysqli->connect_error);
}

// Functies

?>