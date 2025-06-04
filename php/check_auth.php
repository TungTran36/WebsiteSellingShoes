<?php
require_once 'config.php';

// Helper function to check if user is logged in
function isLoggedIn() {
    return isset($_SESSION['user_id']);
}

// Helper function to get current user info
function getCurrentUser() {
    if (!isLoggedIn()) {
        return null;
    }
    
    try {
        $pdo = getConnection();
        $stmt = $pdo->prepare("SELECT id, fullname, email, phone FROM users WHERE id = ?");
        $stmt->execute([$_SESSION['user_id']]);
        return $stmt->fetch(PDO::FETCH_ASSOC);
    } catch (PDOException $e) {
        return null;
    }
}

// Helper function to require authentication
function requireAuth() {
    if (!isLoggedIn()) {
        sendResponse(['error' => 'Vui lòng đăng nhập để tiếp tục'], 401);
    }
}
?>
