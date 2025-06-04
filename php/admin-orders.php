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
    
    // Build query to get orders with user info
    $sql = "SELECT o.*, u.fullname as customer_name, u.email as customer_email, u.phone as customer_phone 
            FROM orders o 
            LEFT JOIN users u ON o.user_id = u.id 
            WHERE 1=1";
    $params = [];
    
    if (!empty($search)) {
        $sql .= " AND (o.id LIKE ? OR u.fullname LIKE ? OR u.email LIKE ?)";
        $searchTerm = "%$search%";
        $params[] = $searchTerm;
        $params[] = $searchTerm;
        $params[] = $searchTerm;
    }
    
    if (!empty($status)) {
        $sql .= " AND o.status = ?";
        $params[] = $status;
    }
    
    $sql .= " ORDER BY o.created_at DESC LIMIT ? OFFSET ?";
    $params[] = $limit;
    $params[] = $offset;
    
    $stmt = $pdo->prepare($sql);
    $stmt->execute($params);
    $orders = $stmt->fetchAll(PDO::FETCH_ASSOC);
    
    // Get order items for each order
    foreach ($orders as &$order) {
        $itemsSql = "SELECT oi.*, p.name, p.image 
                     FROM order_items oi 
                     LEFT JOIN products p ON oi.product_id = p.id 
                     WHERE oi.order_id = ?";
        $itemsStmt = $pdo->prepare($itemsSql);
        $itemsStmt->execute([$order['id']]);
        $order['items'] = $itemsStmt->fetchAll(PDO::FETCH_ASSOC);
    }
    
    // Get total count
    $countSql = "SELECT COUNT(*) as total FROM orders o LEFT JOIN users u ON o.user_id = u.id WHERE 1=1";
    $countParams = [];
    
    if (!empty($search)) {
        $countSql .= " AND (o.id LIKE ? OR u.fullname LIKE ? OR u.email LIKE ?)";
        $countParams[] = $searchTerm;
        $countParams[] = $searchTerm;
        $countParams[] = $searchTerm;
    }
    
    if (!empty($status)) {
        $countSql .= " AND o.status = ?";
        $countParams[] = $status;
    }
    
    $countStmt = $pdo->prepare($countSql);
    $countStmt->execute($countParams);
    $totalOrders = $countStmt->fetch(PDO::FETCH_ASSOC)['total'];
    
    sendResponse([
        'success' => true,
        'orders' => $orders,
        'total' => $totalOrders,
        'count' => count($orders)
    ]);
    
} catch (PDOException $e) {
    sendResponse(['error' => 'Lỗi cơ sở dữ liệu: ' . $e->getMessage()], 500);
}
?>
