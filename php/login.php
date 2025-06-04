<?php
require_once 'config.php';

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    sendResponse(['error' => 'Method not allowed'], 405);
}

// Get JSON input
$input = json_decode(file_get_contents('php://input'), true);

// Validate required fields
if (!validateRequired($input, ['email', 'password'])) {
    sendResponse(['error' => 'Vui lòng điền đầy đủ thông tin'], 400);
}

$email = sanitizeInput($input['email']);
$password = $input['password'];

try {
    $pdo = getConnection();
    
    // Get user by email
    $stmt = $pdo->prepare("SELECT id, fullname, email, phone, password FROM users WHERE email = ?");
    $stmt->execute([$email]);
    $user = $stmt->fetch(PDO::FETCH_ASSOC);
    
    if (!$user || !password_verify($password, $user['password'])) {
        sendResponse(['error' => 'Email hoặc mật khẩu không đúng'], 401);
    }
    
    // Remove password from response
    unset($user['password']);
    
    // Set session
    $_SESSION['user_id'] = $user['id'];
    $_SESSION['user_email'] = $user['email'];
    
    sendResponse([
        'success' => true,
        'message' => 'Đăng nhập thành công',
        'user' => $user
    ]);
    
} catch (PDOException $e) {
    sendResponse(['error' => 'Lỗi cơ sở dữ liệu: ' . $e->getMessage()], 500);
}
?>
