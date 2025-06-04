<?php
require_once 'config.php';

// Check if user is logged in
function checkAuth() {
    if (!isset($_SESSION['user_id'])) {
        sendResponse(['error' => 'Vui lòng đăng nhập'], 401);
    }
    return $_SESSION['user_id'];
}

switch ($_SERVER['REQUEST_METHOD']) {
    case 'GET':
        getCart();
        break;
    case 'POST':
        addToCart();
        break;
    case 'PUT':
        updateCart();
        break;
    case 'DELETE':
        removeFromCart();
        break;
    default:
        sendResponse(['error' => 'Method not allowed'], 405);
}

function getCart() {
    $userId = checkAuth();
    
    try {
        $pdo = getConnection();
        
        // Get cart items from session or database
        // For simplicity, we'll use session storage
        $cart = isset($_SESSION['cart']) ? $_SESSION['cart'] : [];
        
        sendResponse([
            'success' => true,
            'cart' => $cart
        ]);
        
    } catch (PDOException $e) {
        sendResponse(['error' => 'Lỗi cơ sở dữ liệu: ' . $e->getMessage()], 500);
    }
}

function addToCart() {
    $userId = checkAuth();
    
    $input = json_decode(file_get_contents('php://input'), true);
    
    if (!validateRequired($input, ['product_id', 'quantity', 'size'])) {
        sendResponse(['error' => 'Thiếu thông tin sản phẩm'], 400);
    }
    
    $productId = (int)$input['product_id'];
    $quantity = (int)$input['quantity'];
    $size = sanitizeInput($input['size']);
    
    try {
        $pdo = getConnection();
        
        // Get product info
        $stmt = $pdo->prepare("SELECT id, name, price, image, stock FROM products WHERE id = ?");
        $stmt->execute([$productId]);
        $product = $stmt->fetch(PDO::FETCH_ASSOC);
        
        if (!$product) {
            sendResponse(['error' => 'Sản phẩm không tồn tại'], 404);
        }
        
        if ($product['stock'] < $quantity) {
            sendResponse(['error' => 'Không đủ hàng trong kho'], 400);
        }
        
        // Initialize cart if not exists
        if (!isset($_SESSION['cart'])) {
            $_SESSION['cart'] = [];
        }
        
        // Check if item already exists in cart
        $itemKey = $productId . '_' . $size;
        
        if (isset($_SESSION['cart'][$itemKey])) {
            $_SESSION['cart'][$itemKey]['quantity'] += $quantity;
        } else {
            $_SESSION['cart'][$itemKey] = [
                'id' => $productId,
                'name' => $product['name'],
                'price' => (float)$product['price'],
                'image' => $product['image'],
                'size' => $size,
                'quantity' => $quantity
            ];
        }
        
        sendResponse([
            'success' => true,
            'message' => 'Đã thêm sản phẩm vào giỏ hàng',
            'cart' => $_SESSION['cart']
        ]);
        
    } catch (PDOException $e) {
        sendResponse(['error' => 'Lỗi cơ sở dữ liệu: ' . $e->getMessage()], 500);
    }
}

function updateCart() {
    $userId = checkAuth();
    
    $input = json_decode(file_get_contents('php://input'), true);
    
    if (!validateRequired($input, ['product_id', 'size', 'quantity'])) {
        sendResponse(['error' => 'Thiếu thông tin'], 400);
    }
    
    $productId = (int)$input['product_id'];
    $size = sanitizeInput($input['size']);
    $quantity = (int)$input['quantity'];
    $itemKey = $productId . '_' . $size;
    
    if (!isset($_SESSION['cart'][$itemKey])) {
        sendResponse(['error' => 'Sản phẩm không có trong giỏ hàng'], 404);
    }
    
    if ($quantity <= 0) {
        unset($_SESSION['cart'][$itemKey]);
    } else {
        $_SESSION['cart'][$itemKey]['quantity'] = $quantity;
    }
    
    sendResponse([
        'success' => true,
        'message' => 'Đã cập nhật giỏ hàng',
        'cart' => $_SESSION['cart']
    ]);
}

function removeFromCart() {
    $userId = checkAuth();
    
    $input = json_decode(file_get_contents('php://input'), true);
    
    if (!validateRequired($input, ['product_id', 'size'])) {
        sendResponse(['error' => 'Thiếu thông tin'], 400);
    }
    
    $productId = (int)$input['product_id'];
    $size = sanitizeInput($input['size']);
    $itemKey = $productId . '_' . $size;
    
    if (isset($_SESSION['cart'][$itemKey])) {
        unset($_SESSION['cart'][$itemKey]);
    }
    
    sendResponse([
        'success' => true,
        'message' => 'Đã xóa sản phẩm khỏi giỏ hàng',
        'cart' => $_SESSION['cart']
    ]);
}
?>
