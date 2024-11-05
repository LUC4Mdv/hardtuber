<?php
// receber_dados.php

// Define o caminho para o arquivo JSON onde os dados do servidor serão armazenados
$file_path = 'dados_servidor.json';

// Recebe os dados enviados via POST pelo plugin
$data = [
    'player_count' => $_POST['player_count'] ?? 0,
    'max_players' => $_POST['max_players'] ?? 0,
    'tps' => $_POST['tps'] ?? 0,
    'memory_usage' => $_POST['memory_usage'] ?? 0,
    'timestamp' => date("Y-m-d H:i:s")
];

// Salva os dados no arquivo JSON
file_put_contents($file_path, json_encode($data));

echo "Dados recebidos com sucesso!";
?>
