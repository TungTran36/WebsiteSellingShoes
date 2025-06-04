# Nike Shoe Store - Website Bán Giày Nike

Website bán giày Nike hoàn chỉnh với frontend HTML/CSS/JavaScript và backend PHP/MySQL.

## Tính năng chính

### Frontend
- Trang chủ với hero section và sản phẩm nổi bật
- Trang sản phẩm với tìm kiếm và lọc theo giá
- Chi tiết sản phẩm với chọn size và số lượng
- Giỏ hàng đầy đủ chức năng
- Đăng nhập/đăng ký người dùng
- Responsive design cho mobile

### Backend
- API PHP với PDO MySQL
- Quản lý người dùng với mã hóa mật khẩu
- Quản lý sản phẩm và giỏ hàng
- Session management
- CORS support

### Database
- 15 sản phẩm Nike đa dạng
- Bảng users, products, orders, order_items
- JSON fields cho sizes và features

## Cài đặt

1. **Cài đặt Database:**
   \`\`\`sql
   mysql -u root -p < database.sql
   \`\`\`

2. **Cấu hình PHP:**
   - Chỉnh sửa `php/config.php` với thông tin database
   - Đảm bảo PHP có extension PDO MySQL

3. **Web Server:**
   - Đặt tất cả file trong thư mục web server (htdocs/www)
   - Hoặc sử dụng PHP built-in server:
   \`\`\`bash
   php -S localhost:8000
   \`\`\`

4. **Truy cập:**
   - Mở `http://localhost:8000/index.html`

## Cấu trúc thư mục

\`\`\`
nike-store/
├── index.html              # Trang chủ
├── products.html           # Danh sách sản phẩm
├── product-detail.html     # Chi tiết sản phẩm
├── cart.html              # Giỏ hàng
├── login.html             # Đăng nhập
├── register.html          # Đăng ký
├── css/
│   └── style.css          # CSS chính
├── js/
│   ├── main.js            # JavaScript trang chủ
│   ├── products.js        # JavaScript sản phẩm
│   ├── product-detail.js  # JavaScript chi tiết
│   ├── cart.js            # JavaScript giỏ hàng
│   ├── login.js           # JavaScript đăng nhập
│   └── register.js        # JavaScript đăng ký
├── php/
│   ├── config.php         # Cấu hình database
│   ├── register.php       # API đăng ký
│   ├── login.php          # API đăng nhập
│   ├── logout.php         # API đăng xuất
│   ├── products.php       # API sản phẩm
│   └── cart.php           # API giỏ hàng
└── database.sql           # Script tạo database
\`\`\`

## Sử dụng

1. **Duyệt sản phẩm:** Xem danh sách 15 sản phẩm Nike
2. **Tìm kiếm:** Tìm theo tên hoặc mô tả sản phẩm
3. **Lọc giá:** Lọc sản phẩm theo khoảng giá
4. **Chi tiết:** Xem thông tin chi tiết, chọn size
5. **Giỏ hàng:** Thêm/xóa/cập nhật sản phẩm
6. **Đăng ký/Đăng nhập:** Tạo tài khoản và đăng nhập

## Công nghệ sử dụng

- **Frontend:** HTML5, CSS3, JavaScript ES6+
- **Backend:** PHP 7.4+, PDO
- **Database:** MySQL 5.7+
- **Icons:** Font Awesome 6
- **Responsive:** CSS Grid & Flexbox

## Bảo mật

- Mã hóa mật khẩu với password_hash()
- Sanitize input data
- Prepared statements cho SQL
- Session management
- CORS headers

## Tương lai

- Tích hợp thanh toán VNPay/MoMo
- Theo dõi đơn hàng
- Đánh giá sản phẩm
- Wishlist

## Liên hệ

Phát triển bởi Nike Store Team
