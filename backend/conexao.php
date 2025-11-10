<?php
$servername = getenv("DB_HOST");
$username = getenv("DB_USER");
$password = getenv("DB_PASSWORD");
$database = getenv("DB_NAME");

if (!$servername || !$username || !$password || !$database) {
    exit("Erro: Variáveis de ambiente do banco de dados não estão definidas corretamente.");
}

$link = new mysqli($servername, $username, $password, $database);

if (mysqli_connect_errno()) {
    printf("Connect failed: %s\n", mysqli_connect_error());
    exit();
}
?>
