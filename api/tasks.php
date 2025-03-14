<?php
header("Content-Type: application/json");
require_once '../db/config.php';

$method = $_SERVER['REQUEST_METHOD'];

switch ($method) {
  case 'GET':
    $stmt = $pdo->query("SELECT * FROM tasks");
    $tasks = $stmt->fetchAll(PDO::FETCH_ASSOC);
    echo json_encode($tasks);
    break;

  case 'POST':
    $title = $_POST['title'] ?? '';
    if ($title != '') {
      $stmt = $pdo->prepare("INSERT INTO tasks (title, created_at) VALUES (?, NOW())");
      $stmt->execute([$title]);
      echo json_encode(['success' => true]);
    } else {
      echo json_encode(['error' => 'Titolo mancante']);
    }
    break;

  case 'DELETE':
    // Recupera l'ID passato come parametro
    $id = $_GET['id'] ?? 0;
    $stmt = $pdo->prepare("DELETE FROM tasks WHERE id = ?");
    $stmt->execute([$id]);
    echo json_encode(['success' => true]);
    break;

  // Puoi implementare anche PUT per la modifica, utilizzando php://input per leggere i dati in formato JSON.
  default:
    echo json_encode(['error' => 'Metodo non supportato']);
    break;
}
?>
