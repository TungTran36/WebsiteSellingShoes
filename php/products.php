<?php
require_once 'config.php';

if ($_SERVER['REQUEST_METHOD'] !== 'GET') {
    sendResponse(['error' => 'Method not allowed'], 405);
}

try {
    $pdo = getConnection();
    
    // Get query parameters
    $search = isset($_GET['search']) ? sanitizeInput($_GET['search']) : '';
    $minPrice = isset($_GET['min_price']) ? (int)$_GET['min_price'] : 0;
    $maxPrice = isset($_GET['max_price']) ? (int)$_GET['max_price'] : 999999999;
    $limit = isset($_GET['limit']) ? (int)$_GET['limit'] : 50;
    $offset = isset($_GET['offset']) ? (int)$_GET['offset'] : 0;
    
    // Build query
    $sql = "SELECT id, name, description, price, image, sizes, features, stock FROM products WHERE 1=1";
    $params = [];
    
    if (!empty($search)) {
        $sql .= " AND (name LIKE ? OR description LIKE ?)";
        $searchTerm = "%$search%";
        $params[] = $searchTerm;
        $params[] = $searchTerm;
    }
    
    if ($minPrice > 0) {
        $sql .= " AND price >= ?";
        $params[] = $minPrice;
    }
    
    if ($maxPrice < 999999999) {
        $sql .= " AND price <= ?";
        $params[] = $maxPrice;
    }
    
    $sql .= " ORDER BY id LIMIT ? OFFSET ?";
    $params[] = $limit;
    $params[] = $offset;
    
    $stmt = $pdo->prepare($sql);
    $stmt->execute($params);
    $products = $stmt->fetchAll(PDO::FETCH_ASSOC);
    
    // Decode JSON fields
    foreach ($products as &$product) {
        $product['sizes'] = json_decode($product['sizes'], true);
        $product['features'] = json_decode($product['features'], true);
        $product['price'] = (float)$product['price'];
    }
    
    sendResponse([
        'success' => true,
        'products' => $products,
        'count' => count($products)
    ]);
    
} catch (PDOException $e) {
    sendResponse(['error' => 'Lỗi cơ sở dữ liệu: ' . $e->getMessage()], 500);
}
?>
