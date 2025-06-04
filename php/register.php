<?php
require_once 'config.php';

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    sendResponse(['error' => 'Method not allowed'], 405);
}

// Get JSON input
$input = json_decode(file_get_contents('php://input'), true);

// Validate required fields
if (!validateRequired($input, ['fullname', 'email', 'phone', 'password'])) {
    sendResponse(['error' => 'Vui lòng điền đầy đủ thông tin'], 400);
}

$fullname = sanitizeInput($input['fullname']);
$email = sanitizeInput($input['email']);
$phone = sanitizeInput($input['phone']);
$password = $input['password'];

// Validate email format
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    sendResponse(['error' => 'Email không hợp lệ'], 400);
}

// Validate password length
if (strlen($password) < 6) {
    sendResponse(['error' => 'Mật khẩu phải có ít nhất 6 ký tự'], 400);
}

try {
    $pdo = getConnection();
    
    // Check if email already exists
    $stmt = $pdo->prepare("SELECT id FROM users WHERE email = ?");
    $stmt->execute([$email]);
    
    if ($stmt->fetch()) {
        sendResponse(['error' => 'Email đã được sử dụng'], 400);
    }
    
    // Hash password
    $hashedPassword = password_hash($password, PASSWORD_DEFAULT);
    
    // Insert new user
    $stmt = $pdo->prepare("INSERT INTO users (fullname, email, phone, password) VALUES (?, ?, ?, ?)");
    $stmt->execute([$fullname, $email, $phone, $hashedPassword]);
    
    $userId = $pdo->lastInsertId();
    
    sendResponse([
        'success' => true,
        'message' => 'Đăng ký thành công',
        'user_id' => $userId
    ]);
    
} catch (PDOException $e) {
    sendResponse(['error' => 'Lỗi cơ sở dữ liệu: ' . $e->getMessage()], 500);
}
?>
