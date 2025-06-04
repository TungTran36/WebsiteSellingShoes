-- Create database
CREATE DATABASE nike_store;
USE nike_store;

-- Users table
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    fullname VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    phone VARCHAR(20) NOT NULL,
    password VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Products table
CREATE TABLE products (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(200) NOT NULL,
    description TEXT,
    price DECIMAL(10,2) NOT NULL,
    image VARCHAR(255),
    sizes JSON,
    features JSON,
    stock INT DEFAULT 100,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Orders table
CREATE TABLE orders (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    total_amount DECIMAL(10,2) NOT NULL,
    status ENUM('pending', 'confirmed', 'shipped', 'delivered') DEFAULT 'pending',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id)
);

-- Order items table
CREATE TABLE order_items (
    id INT AUTO_INCREMENT PRIMARY KEY,
    order_id INT,
    product_id INT,
    quantity INT NOT NULL,
    size VARCHAR(10),
    price DECIMAL(10,2) NOT NULL,
    FOREIGN KEY (order_id) REFERENCES orders(id),
    FOREIGN KEY (product_id) REFERENCES products(id)
);

-- Tạo tài khoản sẵn cho bạn (mật khẩu: 1234566)
INSERT INTO users (fullname, email, phone, password) VALUES 
('Tùng', 'humg@gmail.com', '0123456789', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi');

-- Insert 8 sản phẩm Nike với ảnh thật
INSERT INTO products (name, description, price, image, sizes, features) VALUES
('Nike Air Max 270', 'Giày thể thao Nike Air Max 270 với công nghệ đệm khí tiên tiến, mang lại sự thoải mái tối đa cho mọi bước chân.', 3200000, 'images/products/air-max-270.jpg', '["38", "39", "40", "41", "42", "43", "44"]', '["Công nghệ Air Max 270 độc quyền", "Chất liệu mesh thoáng khí", "Đế ngoài cao su bền bỉ", "Thiết kế năng động, hiện đại"]'),

('Nike Air Force 1', 'Biểu tượng bất tử của Nike với thiết kế cổ điển, phù hợp cho mọi phong cách thời trang.', 2800000, 'images/products/air-force-1.jpg', '["38", "39", "40", "41", "42", "43", "44"]', '["Thiết kế cổ điển iconic", "Chất liệu da cao cấp", "Đế Air-Sole thoải mái", "Phù hợp mọi phong cách"]'),

('Nike React Infinity Run', 'Giày chạy bộ với công nghệ React foam, giúp giảm chấn thương và tăng hiệu suất chạy.', 4200000, 'images/products/react-infinity-run.jpg', '["38", "39", "40", "41", "42", "43", "44"]', '["Công nghệ React foam đàn hồi", "Thiết kế giảm chấn thương", "Upper Flyknit thoáng khí", "Đế ngoài chống mài mòn"]'),

('Nike Dunk Low', 'Thiết kế retro basketball với phong cách streetwear hiện đại.', 3500000, 'images/products/dunk-low.jpg', '["38", "39", "40", "41", "42", "43", "44"]', '["Thiết kế retro basketball", "Phong cách streetwear", "Chất liệu da premium", "Đế cao su cổ điển"]'),

('Nike Blazer Mid 77', 'Phong cách vintage basketball với chất liệu da cao cấp.', 3100000, 'images/products/blazer-mid-77.jpg', '["38", "39", "40", "41", "42", "43", "44"]', '["Thiết kế vintage basketball", "Cổ giày cao hỗ trợ mắt cá", "Chất liệu da thật", "Logo Swoosh cổ điển"]'),

('Nike Air Jordan 1', 'Huyền thoại basketball với thiết kế iconic và chất lượng premium.', 5500000, 'images/products/air-jordan-1.jpg', '["38", "39", "40", "41", "42", "43", "44"]', '["Thiết kế huyền thoại", "Chất lượng premium", "Công nghệ Air-Sole", "Biểu tượng của Michael Jordan"]'),

('Nike Air Max 90', 'Thiết kế cổ điển với công nghệ Air-Sole unit, mang đến sự thoải mái và phong cách.', 3400000, 'images/products/air-max-90.jpg', '["38", "39", "40", "41", "42", "43", "44"]', '["Thiết kế Air Max cổ điển", "Công nghệ Air-Sole unit", "Chất liệu mesh và da", "Đế Waffle pattern"]'),

('Nike Cortez', 'Mẫu giày running cổ điển với thiết kế đơn giản và thanh lịch.', 2600000, 'images/products/cortez.jpg', '["38", "39", "40", "41", "42", "43", "44"]', '["Thiết kế running cổ điển", "Phong cách đơn giản, thanh lịch", "Chất liệu nylon và da lộn", "Đế EVA nhẹ nhàng"]');

-- Cập nhật các sản phẩm ID 9-30 với ảnh thật
UPDATE products SET image = 'images/products/air-max-97.jpg' WHERE id = 9;
UPDATE products SET image = 'images/products/zoom-pegasus.jpg' WHERE id = 10;
UPDATE products SET image = 'images/products/sb-dunk.jpg' WHERE id = 11;
UPDATE products SET image = 'images/products/air-huarache.jpg' WHERE id = 12;
UPDATE products SET image = 'images/products/air-max-plus.jpg' WHERE id = 13;
UPDATE products SET image = 'images/products/vapormax.jpg' WHERE id = 14;
UPDATE products SET image = 'images/products/free-run.jpg' WHERE id = 15;
UPDATE products SET image = 'images/products/air-zoom-structure-24.jpg' WHERE id = 16;
UPDATE products SET image = 'images/products/revolution-6.jpg' WHERE id = 17;
UPDATE products SET image = 'images/products/tanjun.jpg' WHERE id = 18;
UPDATE products SET image = 'images/products/flex-experience-rn-11.jpg' WHERE id = 19;
UPDATE products SET image = 'images/products/downshifter-12.jpg' WHERE id = 20;
UPDATE products SET image = 'images/products/air-max-sc.jpg' WHERE id = 21;
UPDATE products SET image = 'images/products/court-vision-low.jpg' WHERE id = 22;
UPDATE products SET image = 'images/products/venture-runner.jpg' WHERE id = 23;
UPDATE products SET image = 'images/products/air-zoom-winflo-9.jpg' WHERE id = 24;
UPDATE products SET image = 'images/products/air-max-excee.jpg' WHERE id = 25;
UPDATE products SET image = 'images/products/renew-run-3.jpg' WHERE id = 26;
UPDATE products SET image = 'images/products/quest-4.jpg' WHERE id = 27;
UPDATE products SET image = 'images/products/air-jordan-4.jpg' WHERE id = 28;
UPDATE products SET image = 'images/products/air-max-1.jpg' WHERE id = 29;
UPDATE products SET image = 'images/products/air-presto.jpg' WHERE id = 30;

-- Insert 22 sản phẩm Nike còn lại
INSERT INTO products (name, description, price, image, sizes, features) VALUES
('Nike Air Max 97', 'Thiết kế futuristic với đường nét sóng độc đáo và công nghệ Air Max toàn chiều dài.', 4800000, 'images/products/air-max-97.jpg', '["38", "39", "40", "41", "42", "43", "44"]', '["Thiết kế futuristic độc đáo", "Air Max toàn chiều dài", "Đường nét sóng đặc trưng", "Chất liệu mesh và synthetic"]'),

('Nike Zoom Pegasus', 'Giày chạy bộ đa năng với công nghệ Zoom Air, phù hợp cho mọi cự ly.', 3800000, 'images/products/zoom-pegasus.jpg', '["38", "39", "40", "41", "42", "43", "44"]', '["Công nghệ Zoom Air responsive", "Thiết kế đa năng", "Upper Engineered mesh", "Phù hợp mọi cự ly chạy"]'),

('Nike SB Dunk', 'Thiết kế skateboarding với đệm tăng cường và độ bền cao.', 3900000, 'images/products/sb-dunk.jpg', '["38", "39", "40", "41", "42", "43", "44"]', '["Thiết kế skateboarding chuyên dụng", "Đệm Zoom Air tăng cường", "Chất liệu da bền bỉ", "Đế cao su grip tốt"]'),

('Nike Air Huarache', 'Thiết kế ôm chân độc đáo với hệ thống dây đeo neoprene.', 3300000, 'images/products/air-huarache.jpg', '["38", "39", "40", "41", "42", "43", "44"]', '["Thiết kế ôm chân độc đáo", "Hệ thống dây đeo neoprene", "Cảm giác như đi chân trần", "Đế Phylon nhẹ nhàng"]'),

('Nike Air Max Plus', 'Thiết kế táo bạo với công nghệ Tuned Air cho sự ổn định tối ưu.', 4500000, 'images/products/air-max-plus.jpg', '["38", "39", "40", "41", "42", "43", "44"]', '["Công nghệ Tuned Air độc quyền", "Thiết kế táo bạo, futuristic", "Hệ thống TPU hỗ trợ", "Đế Max Air đa vùng"]'),

('Nike Vapormax', 'Công nghệ Air Max cách mạng với đế khí trong suốt.', 5200000, 'images/products/vapormax.jpg', '["38", "39", "40", "41", "42", "43", "44"]', '["Đế Air Max trong suốt cách mạng", "Cảm giác như đi trên không khí", "Upper Flyknit liền mạch", "Thiết kế tương lai"]'),

('Nike Free Run', 'Cảm giác chạy chân trần tự nhiên với đế giày linh hoạt.', 2900000, 'images/products/free-run.jpg', '["38", "39", "40", "41", "42", "43", "44"]', '["Cảm giác chạy chân trần", "Đế giày linh hoạt", "Chuyển động tự nhiên", "Upper thoáng khí"]'),

('Nike Air Zoom Structure 24', 'Giày chạy bộ hỗ trợ vận động với công nghệ Zoom Air và Dynamic Support, lý tưởng cho người chạy cần sự ổn định.', 3600000, 'images/products/air-zoom-structure-24.jpg', '["38", "39", "40", "41", "42", "43", "44"]', '["Công nghệ Zoom Air responsive", "Dynamic Support system", "Upper mesh thoáng khí", "Đế ngoài bền bỉ"]'),

('Nike Revolution 6', 'Giày thể thao hàng ngày với thiết kế thoải mái và giá cả phải chăng, phù hợp cho mọi hoạt động.', 1800000, 'images/products/revolution-6.jpg', '["38", "39", "40", "41", "42", "43", "44"]', '["Thiết kế thoải mái", "Giá cả phải chăng", "Phù hợp mọi hoạt động", "Upper mesh nhẹ"]'),

('Nike Tanjun', 'Thiết kế tối giản với sự thoải mái tối đa, lấy cảm hứng từ phong cách sống đơn giản của Nhật Bản.', 1600000, 'images/products/tanjun.jpg', '["38", "39", "40", "41", "42", "43", "44"]', '["Thiết kế tối giản", "Cảm hứng Nhật Bản", "Thoải mái tối đa", "Phong cách đơn giản"]'),

('Nike Flex Experience RN 11', 'Giày chạy bộ linh hoạt với đế Flex grooves, mang lại chuyển động tự nhiên và thoải mái.', 2200000, 'images/products/flex-experience-rn-11.jpg', '["38", "39", "40", "41", "42", "43", "44"]', '["Đế Flex grooves", "Chuyển động tự nhiên", "Thiết kế linh hoạt", "Thoải mái khi chạy"]'),

('Nike Downshifter 12', 'Giày chạy bộ cơ bản với đệm mềm mại và thiết kế bền bỉ, hoàn hảo cho người mới bắt đầu.', 1900000, 'images/products/downshifter-12.jpg', '["38", "39", "40", "41", "42", "43", "44"]', '["Đệm mềm mại", "Thiết kế bền bỉ", "Dành cho người mới", "Giá cả hợp lý"]'),

('Nike Air Max SC', 'Phong cách retro basketball với đế Air-Sole và thiết kế clean, dễ phối đồ hàng ngày.', 2400000, 'images/products/air-max-sc.jpg', '["38", "39", "40", "41", "42", "43", "44"]', '["Phong cách retro", "Đế Air-Sole", "Thiết kế clean", "Dễ phối đồ"]'),

('Nike Court Vision Low', 'Lấy cảm hứng từ giày tennis cổ điển với upper da tổng hợp và logo Swoosh nổi bật.', 2100000, 'images/products/court-vision-low.jpg', '["38", "39", "40", "41", "42", "43", "44"]', '["Cảm hứng tennis cổ điển", "Upper da tổng hợp", "Logo Swoosh nổi bật", "Thiết kế court-inspired"]'),

('Nike Venture Runner', 'Giày lifestyle với thiết kế outdoor-inspired, kết hợp chất liệu da lộn và mesh thoáng khí.', 2000000, 'images/products/venture-runner.jpg', '["38", "39", "40", "41", "42", "43", "44"]', '["Thiết kế outdoor", "Chất liệu da lộn", "Mesh thoáng khí", "Phong cách lifestyle"]'),

('Nike Air Zoom Winflo 9', 'Giày chạy bộ với công nghệ Zoom Air ở forefoot, mang lại sự đẩy mạnh và phản hồi tốt.', 3300000, 'images/products/air-zoom-winflo-9.jpg', '["38", "39", "40", "41", "42", "43", "44"]', '["Zoom Air forefoot", "Phản hồi tốt", "Đẩy mạnh hiệu quả", "Thiết kế chạy bộ"]'),

('Nike Air Max Excee', 'Thiết kế hiện đại lấy cảm hứng từ Air Max 90 với upper mesh và overlays da tổng hợp.', 2700000, 'images/products/air-max-excee.jpg', '["38", "39", "40", "41", "42", "43", "44"]', '["Cảm hứng Air Max 90", "Upper mesh", "Overlays da tổng hợp", "Thiết kế hiện đại"]'),

('Nike Renew Run 3', 'Giày chạy bộ với công nghệ Nike Renew foam, tái chế và thân thiện với môi trường.', 2300000, 'images/products/renew-run-3.jpg', '["38", "39", "40", "41", "42", "43", "44"]', '["Nike Renew foam", "Tái chế", "Thân thiện môi trường", "Công nghệ bền vững"]'),

('Nike Quest 4', 'Giày training đa năng với upper mesh thoáng khí và đế ngoài cao su bền bỉ.', 2500000, 'images/products/quest-4.jpg', '["38", "39", "40", "41", "42", "43", "44"]', '["Training đa năng", "Upper mesh thoáng khí", "Đế cao su bền bỉ", "Thiết kế versatile"]'),

('Nike Air Jordan 4', 'Huyền thoại basketball với thiết kế mesh panels và công nghệ Air-Sole unit ở gót chân.', 6200000, 'images/products/air-jordan-4.jpg', '["38", "39", "40", "41", "42", "43", "44"]', '["Thiết kế mesh panels", "Air-Sole unit gót chân", "Chất lượng premium", "Biểu tượng basketball"]'),

('Nike Air Max 1', 'Mẫu giày đầu tiên trong dòng Air Max với cửa sổ Air visible đầu tiên của Nike.', 3700000, 'images/products/air-max-1.jpg', '["38", "39", "40", "41", "42", "43", "44"]', '["Air Max đầu tiên", "Cửa sổ Air visible", "Thiết kế cổ điển", "Lịch sử Nike"]'),

('Nike Air Presto', 'Thiết kế slip-on độc đáo với upper mesh co giãn và cảm giác như T-shirt cho đôi chân.', 3200000, 'images/products/air-presto.jpg', '["S", "M", "L", "XL"]', '["Thiết kế slip-on", "Upper mesh co giãn", "Cảm giác T-shirt", "Thoải mái tối đa"]');
