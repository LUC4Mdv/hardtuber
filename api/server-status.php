<?php
header('Content-Type: application/json');

$ip = 'hardtuber.blazebr.com';
$port = 27450;

$socket = fsockopen("udp://$ip", $port, $errno, $errstr, 1);
if (!$socket) {
    echo json_encode(["error" => "Servidor offline"]);
    exit();
}

fwrite($socket, "\xFE\xFD\x09\x10\x20\x30\x40");
$response = fread($socket, 4096);
fclose($socket);

if (!$response) {
    echo json_encode(["error" => "Nenhuma resposta do servidor"]);
    exit();
}

$data = explode("\x00", substr($response, 5));
echo json_encode([
    "server_name" => $data[1] ?? "Desconhecido",
    "player_count" => (int) ($data[4] ?? 0),
    "max_players" => (int) ($data[5] ?? 0),
    "motd" => $data[2] ?? "Sem mensagem"
]);
