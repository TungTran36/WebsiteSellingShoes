<?php
require_once 'config.php';

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    sendResponse(['error' => 'Method not allowed'], 405);
}

// Destroy session
session_destroy();

sendResponse([
    'success' => true,
    'message' => 'Đăng xuất thành công'
]);
?>
