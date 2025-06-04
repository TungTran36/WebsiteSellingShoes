<?php
require_once 'config.php';

// Check admin authentication (simple check)
if (!isset($_GET['admin_token']) || $_GET['admin_token'] !== 'admin_logged_in') {
    sendResponse(['error' => 'Unauthorized'], 401);
}

if ($_SERVER['REQUEST_METHOD'] !== 'GET') {
    sendResponse(['error' => 'Method not allowed'], 405);
}

try {
    $pdo = getConnection();
    
    // Get query parameters
    $search = isset($_GET['search']) ? sanitizeInput($_GET['search']) : '';
    $status = isset($_GET['status']) ? sanitizeInput($_GET['status']) : '';
    $limit = isset($_GET['limit']) ? (int)$_GET['limit'] : 50;
    $offset = isset($_GET['offset']) ? (int)$_GET['offset'] : 0;
    
    // Build query
    $sql = "SELECT id, fullname, email, phone, created_at FROM users WHERE 1=1";
    $params = [];
    
    if (!empty($search)) {
        $sql .= " AND (fullname LIKE ? OR email LIKE ?)";
        $searchTerm = "%$search%";
        $params[] = $searchTerm;
        $params[] = $searchTerm;
    }
    
    $sql .= " ORDER BY created_at DESC LIMIT ? OFFSET ?";
    $params[] = $limit;
    $params[] = $offset;
    
    $stmt = $pdo->prepare($sql);
    $stmt->execute($params);
    $users = $stmt->fetchAll(PDO::FETCH_ASSOC);
    
    // Get total count
    $countSql = "SELECT COUNT(*) as total FROM users WHERE 1=1";
    $countParams = [];
    
    if (!empty($search)) {
        $countSql .= " AND (fullname LIKE ? OR email LIKE ?)";
        $countParams[] = $searchTerm;
        $countParams[] = $searchTerm;
    }
    
    $countStmt = $pdo->prepare($countSql);
    $countStmt->execute($countParams);
    $totalUsers = $countStmt->fetch(PDO::FETCH_ASSOC)['total'];
    
    // Add status field (all users are active by default)
    foreach ($users as &$user) {
        $user['status'] = 'active';
    }
    
    sendResponse([
        'success' => true,
        'users' => $users,
        'total' => $totalUsers,
        'count' => count($users)
    ]);
    
} catch (PDOException $e) {
    sendResponse(['error' => 'Lỗi cơ sở dữ liệu: ' . $e->getMessage()], 500);
}
?>
