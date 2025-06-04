// Product detail functionality
const allProducts = [
  {
    id: 1,
    name: "Nike Air Max 270",
    price: 3200000,
    image: "images/products/air-max-270.jpg",
    description:
      "Giày thể thao Nike Air Max 270 với công nghệ đệm khí tiên tiến, mang lại sự thoải mái tối đa cho mọi bước chân. Thiết kế hiện đại với phần đế Air Max lớn nhất từ trước đến nay.",
    sizes: ["38", "39", "40", "41", "42", "43", "44"],
    features: [
      "Công nghệ Air Max 270 độc quyền",
      "Chất liệu mesh thoáng khí",
      "Đế ngoài cao su bền bỉ",
      "Thiết kế năng động, hiện đại",
    ],
  },
  {
    id: 2,
    name: "Nike Air Force 1",
    price: 2800000,
    image: "images/products/air-force-1.jpg",
    description:
      "Biểu tượng bất tử của Nike với thiết kế cổ điển, phù hợp cho mọi phong cách thời trang. Được ra mắt từ năm 1982 và vẫn giữ nguyên sức hút đến ngày hôm nay.",
    sizes: ["38", "39", "40", "41", "42", "43", "44"],
    features: ["Thiết kế cổ điển iconic", "Chất liệu da cao cấp", "Đế Air-Sole thoải mái", "Phù hợp mọi phong cách"],
  },
  {
    id: 3,
    name: "Nike React Infinity Run",
    price: 4200000,
    image: "images/products/react-infinity-run.jpg",
    description:
      "Giày chạy bộ với công nghệ React foam, giúp giảm chấn thương và tăng hiệu suất chạy. Được thiết kế đặc biệt cho những người chạy bộ thường xuyên.",
    sizes: ["38", "39", "40", "41", "42", "43", "44"],
    features: [
      "Công nghệ React foam đàn hồi",
      "Thiết kế giảm chấn thương",
      "Upper Flyknit thoáng khí",
      "Đế ngoài chống mài mòn",
    ],
  },
  {
    id: 4,
    name: "Nike Dunk Low",
    price: 3500000,
    image: "images/products/dunk-low.jpg",
    description:
      "Thiết kế retro basketball với phong cách streetwear hiện đại. Mẫu giày được yêu thích bởi cộng đồng sneakerhead trên toàn thế giới.",
    sizes: ["38", "39", "40", "41", "42", "43", "44"],
    features: ["Thiết kế retro basketball", "Phong cách streetwear", "Chất liệu da premium", "Đế cao su cổ điển"],
  },
  {
    id: 5,
    name: "Nike Blazer Mid '77",
    price: 3100000,
    image: "images/products/blazer-mid-77.jpg",
    description:
      "Phong cách vintage basketball với chất liệu da cao cấp. Thiết kế cổ cao mang đến sự hỗ trợ tốt cho mắt cá chân.",
    sizes: ["38", "39", "40", "41", "42", "43", "44"],
    features: ["Thiết kế vintage basketball", "Cổ giày cao hỗ trợ mắt cá", "Chất liệu da thật", "Logo Swoosh cổ điển"],
  },
  {
    id: 6,
    name: "Nike Air Jordan 1",
    price: 5500000,
    image: "images/products/air-jordan-1.jpg",
    description:
      "Huyền thoại basketball với thiết kế iconic và chất lượng premium. Mẫu giày đầu tiên trong dòng Air Jordan huyền thoại.",
    sizes: ["38", "39", "40", "41", "42", "43", "44"],
    features: ["Thiết kế huyền thoại", "Chất lượng premium", "Công nghệ Air-Sole", "Biểu tượng của Michael Jordan"],
  },
  {
    id: 7,
    name: "Nike Air Max 90",
    price: 3400000,
    image: "images/products/air-max-90.jpg",
    description:
      "Thiết kế cổ điển với công nghệ Air-Sole unit, mang đến sự thoải mái và phong cách. Một trong những mẫu Air Max được yêu thích nhất.",
    sizes: ["38", "39", "40", "41", "42", "43", "44"],
    features: ["Thiết kế Air Max cổ điển", "Công nghệ Air-Sole unit", "Chất liệu mesh và da", "Đế Waffle pattern"],
  },
  {
    id: 8,
    name: "Nike Cortez",
    price: 2600000,
    image: "images/products/cortez.jpg",
    description:
      "Mẫu giày running cổ điển với thiết kế đơn giản và thanh lịch. Được ra mắt từ năm 1972 và trở thành biểu tượng của Nike.",
    sizes: ["38", "39", "40", "41", "42", "43", "44"],
    features: [
      "Thiết kế running cổ điển",
      "Phong cách đơn giản, thanh lịch",
      "Chất liệu nylon và da lộn",
      "Đế EVA nhẹ nhàng",
    ],
  },
  // Các sản phẩm còn lại vẫn dùng placeholder
  {
    id: 9,
    name: "Nike Air Max 97",
    price: 4800000,
    image: "images/products/air-max-97.jpg",
    description:
      "Thiết kế futuristic với đường nét sóng độc đáo và công nghệ Air Max toàn chiều dài. Lấy cảm hứng từ tàu cao tốc Nhật Bản.",
    sizes: ["38", "39", "40", "41", "42", "43", "44"],
    features: [
      "Thiết kế futuristic độc đáo",
      "Air Max toàn chiều dài",
      "Đường nét sóng đặc trưng",
      "Chất liệu mesh và synthetic",
    ],
  },
  {
    id: 10,
    name: "Nike Zoom Pegasus",
    price: 3800000,
    image: "images/products/zoom-pegasus.jpg",
    description:
      "Giày chạy bộ đa năng với công nghệ Zoom Air, phù hợp cho mọi cự ly. Được tin dùng bởi các vận động viên chuyên nghiệp.",
    sizes: ["38", "39", "40", "41", "42", "43", "44"],
    features: ["Công nghệ Zoom Air responsive", "Thiết kế đa năng", "Upper Engineered mesh", "Phù hợp mọi cự ly chạy"],
  },
  {
    id: 11,
    name: "Nike SB Dunk",
    price: 3900000,
    image: "images/products/sb-dunk.jpg",
    description:
      "Thiết kế skateboarding với đệm tăng cường và độ bền cao. Được phát triển đặc biệt cho cộng đồng skateboard.",
    sizes: ["38", "39", "40", "41", "42", "43", "44"],
    features: [
      "Thiết kế skateboarding chuyên dụng",
      "Đệm Zoom Air tăng cường",
      "Chất liệu da bền bỉ",
      "Đế cao su grip tốt",
    ],
  },
  {
    id: 12,
    name: "Nike Air Huarache",
    price: 3300000,
    image: "images/products/air-huarache.jpg",
    description:
      "Thiết kế ôm chân độc đáo với hệ thống dây đeo neoprene. Mang đến cảm giác như đi chân trần nhưng vẫn được bảo vệ.",
    sizes: ["38", "39", "40", "41", "42", "43", "44"],
    features: [
      "Thiết kế ôm chân độc đáo",
      "Hệ thống dây đeo neoprene",
      "Cảm giác như đi chân trần",
      "Đế Phylon nhẹ nhàng",
    ],
  },
  {
    id: 13,
    name: "Nike Air Max Plus",
    price: 4500000,
    image: "images/products/air-max-plus.jpg",
    description: "Thiết kế táo bạo với công nghệ Tuned Air cho sự ổn định tối ưu. Lấy cảm hứng từ cây cọ và cá voi.",
    sizes: ["38", "39", "40", "41", "42", "43", "44"],
    features: [
      "Công nghệ Tuned Air độc quyền",
      "Thiết kế táo bạo, futuristic",
      "Hệ thống TPU hỗ trợ",
      "Đế Max Air đa vùng",
    ],
  },
  {
    id: 14,
    name: "Nike Vapormax",
    price: 5200000,
    image: "images/products/vapormax.jpg",
    description: "Công nghệ Air Max cách mạng với đế khí trong suốt. Mang đến cảm giác như đi trên không khí.",
    sizes: ["38", "39", "40", "41", "42", "43", "44"],
    features: [
      "Đế Air Max trong suốt cách mạng",
      "Cảm giác như đi trên không khí",
      "Upper Flyknit liền mạch",
      "Thiết kế tương lai",
    ],
  },
  {
    id: 15,
    name: "Nike Free Run",
    price: 2900000,
    image: "images/products/free-run.jpg",
    description:
      "Cảm giác chạy chân trần tự nhiên với đế giày linh hoạt. Được thiết kế để mô phỏng chuyển động tự nhiên của bàn chân.",
    sizes: ["38", "39", "40", "41", "42", "43", "44"],
    features: ["Cảm giác chạy chân trần", "Đế giày linh hoạt", "Chuyển động tự nhiên", "Upper thoáng khí"],
  },
  {
    id: 16,
    name: "Nike Air Zoom Structure 24",
    price: 3600000,
    image: "images/products/air-zoom-structure-24.jpg",
    description:
      "Giày chạy bộ hỗ trợ vận động với công nghệ Zoom Air và Dynamic Support, lý tưởng cho người chạy cần sự ổn định.",
    sizes: ["38", "39", "40", "41", "42", "43", "44"],
    features: ["Công nghệ Zoom Air responsive", "Dynamic Support system", "Upper mesh thoáng khí", "Đế ngoài bền bỉ"],
  },
  {
    id: 17,
    name: "Nike Revolution 6",
    price: 1800000,
    image: "images/products/revolution-6.jpg",
    description: "Giày thể thao hàng ngày với thiết kế thoải mái và giá cả phải chăng, phù hợp cho mọi hoạt động.",
    sizes: ["38", "39", "40", "41", "42", "43", "44"],
    features: ["Thiết kế thoải mái", "Giá cả phải chăng", "Phù hợp mọi hoạt động", "Upper mesh nhẹ"],
  },
  {
    id: 18,
    name: "Nike Tanjun",
    price: 1600000,
    image: "images/products/tanjun.jpg",
    description: "Thiết kế tối giản với sự thoải mái tối đa, lấy cảm hứng từ phong cách sống đơn giản của Nhật Bản.",
    sizes: ["38", "39", "40", "41", "42", "43", "44"],
    features: ["Thiết kế tối giản", "Cảm hứng Nhật Bản", "Thoải mái tối đa", "Phong cách đơn giản"],
  },
  {
    id: 19,
    name: "Nike Flex Experience RN 11",
    price: 2200000,
    image: "images/products/flex-experience-rn-11.jpg",
    description: "Giày chạy bộ linh hoạt với đế Flex grooves, mang lại chuyển động tự nhiên và thoải mái.",
    sizes: ["38", "39", "40", "41", "42", "43", "44"],
    features: ["Đế Flex grooves", "Chuyển động tự nhiên", "Thiết kế linh hoạt", "Thoải mái khi chạy"],
  },
  {
    id: 20,
    name: "Nike Downshifter 12",
    price: 1900000,
    image: "images/products/downshifter-12.jpg",
    description: "Giày chạy bộ cơ bản với đệm mềm mại và thiết kế bền bỉ, hoàn hảo cho người mới bắt đầu.",
    sizes: ["38", "39", "40", "41", "42", "43", "44"],
    features: ["Đệm mềm mại", "Thiết kế bền bỉ", "Dành cho người mới", "Giá cả hợp lý"],
  },
  {
    id: 21,
    name: "Nike Air Max SC",
    price: 2400000,
    image: "images/products/air-max-sc.jpg",
    description: "Phong cách retro basketball với đế Air-Sole và thiết kế clean, dễ phối đồ hàng ngày.",
    sizes: ["38", "39", "40", "41", "42", "43", "44"],
    features: ["Phong cách retro", "Đế Air-Sole", "Thiết kế clean", "Dễ phối đồ"],
  },
  {
    id: 22,
    name: "Nike Court Vision Low",
    price: 2100000,
    image: "images/products/court-vision-low.jpg",
    description: "Lấy cảm hứng từ giày tennis cổ điển với upper da tổng hợp và logo Swoosh nổi bật.",
    sizes: ["38", "39", "40", "41", "42", "43", "44"],
    features: ["Cảm hứng tennis cổ điển", "Upper da tổng hợp", "Logo Swoosh nổi bật", "Thiết kế court-inspired"],
  },
  {
    id: 23,
    name: "Nike Venture Runner",
    price: 2000000,
    image: "images/products/venture-runner.jpg",
    description: "Giày lifestyle với thiết kế outdoor-inspired, kết hợp chất liệu da lộn và mesh thoáng khí.",
    sizes: ["38", "39", "40", "41", "42", "43", "44"],
    features: ["Thiết kế outdoor", "Chất liệu da lộn", "Mesh thoáng khí", "Phong cách lifestyle"],
  },
  {
    id: 24,
    name: "Nike Air Zoom Winflo 9",
    price: 3300000,
    image: "images/products/air-zoom-winflo-9.jpg",
    description: "Giày chạy bộ với công nghệ Zoom Air ở forefoot, mang lại sự đẩy mạnh và phản hồi tốt.",
    sizes: ["38", "39", "40", "41", "42", "43", "44"],
    features: ["Zoom Air forefoot", "Phản hồi tốt", "Đẩy mạnh hiệu quả", "Thiết kế chạy bộ"],
  },
  {
    id: 25,
    name: "Nike Air Max Excee",
    price: 2700000,
    image: "images/products/air-max-excee.jpg",
    description: "Thiết kế hiện đại lấy cảm hứng từ Air Max 90 với upper mesh và overlays da tổng hợp.",
    sizes: ["38", "39", "40", "41", "42", "43", "44"],
    features: ["Cảm hứng Air Max 90", "Upper mesh", "Overlays da tổng hợp", "Thiết kế hiện đại"],
  },
  {
    id: 26,
    name: "Nike Renew Run 3",
    price: 2300000,
    image: "images/products/renew-run-3.jpg",
    description: "Giày chạy bộ với công nghệ Nike Renew foam, tái chế và thân thiện với môi trường.",
    sizes: ["38", "39", "40", "41", "42", "43", "44"],
    features: ["Nike Renew foam", "Tái chế", "Thân thiện môi trường", "Công nghệ bền vững"],
  },
  {
    id: 27,
    name: "Nike Quest 4",
    price: 2500000,
    image: "images/products/quest-4.jpg",
    description: "Giày training đa năng với upper mesh thoáng khí và đế ngoài cao su bền bỉ.",
    sizes: ["38", "39", "40", "41", "42", "43", "44"],
    features: ["Training đa năng", "Upper mesh thoáng khí", "Đế cao su bền bỉ", "Thiết kế versatile"],
  },
  {
    id: 28,
    name: "Nike Air Jordan 4",
    price: 6200000,
    image: "images/products/air-jordan-4.jpg",
    description: "Huyền thoại basketball với thiết kế mesh panels và công nghệ Air-Sole unit ở gót chân.",
    sizes: ["38", "39", "40", "41", "42", "43", "44"],
    features: ["Thiết kế mesh panels", "Air-Sole unit gót chân", "Chất lượng premium", "Biểu tượng basketball"],
  },
  {
    id: 29,
    name: "Nike Air Max 1",
    price: 3700000,
    image: "images/products/air-max-1.jpg",
    description: "Mẫu giày đầu tiên trong dòng Air Max với cửa sổ Air visible đầu tiên của Nike.",
    sizes: ["38", "39", "40", "41", "42", "43", "44"],
    features: ["Air Max đầu tiên", "Cửa sổ Air visible", "Thiết kế cổ điển", "Lịch sử Nike"],
  },
  {
    id: 30,
    name: "Nike Air Presto",
    price: 3200000,
    image: "images/products/air-presto.jpg",
    description: "Thiết kế slip-on độc đáo với upper mesh co giãn và cảm giác như T-shirt cho đôi chân.",
    sizes: ["S", "M", "L", "XL"],
    features: ["Thiết kế slip-on", "Upper mesh co giãn", "Cảm giác T-shirt", "Thoải mái tối đa"],
  },
]

let selectedSize = ""
let quantity = 1

// Load product detail
function loadProductDetail() {
  const productId = Number.parseInt(localStorage.getItem("selectedProduct"))
  const product = allProducts.find((p) => p.id === productId)

  if (!product) {
    document.getElementById("product-detail").innerHTML = `
            <div style="text-align: center; padding: 3rem;">
                <h2>Không tìm thấy sản phẩm</h2>
                <a href="products.html" class="cta-button">Quay lại danh sách sản phẩm</a>
            </div>
        `
    return
  }

  document.getElementById("product-detail").innerHTML = `
        <div class="product-detail-image">
            <img src="${product.image}" alt="${product.name}" class="product-detail-image">
        </div>
        <div class="product-detail-info">
            <h1>${product.name}</h1>
            <p class="product-detail-price">${formatPrice(product.price)}</p>
            <div class="product-description">
                <p>${product.description}</p>
            </div>
            
            <div class="product-features">
                <h3>Đặc điểm nổi bật:</h3>
                <ul>
                    ${product.features.map((feature) => `<li>${feature}</li>`).join("")}
                </ul>
            </div>
            
            <div class="size-selector">
                <h3>Chọn size:</h3>
                <div class="size-options">
                    ${product.sizes
                      .map(
                        (size) => `
                        <button class="size-option" onclick="selectSize('${size}')">${size}</button>
                    `,
                      )
                      .join("")}
                </div>
            </div>
            
            <div class="quantity-selector">
                <h3>Số lượng:</h3>
                <div class="quantity-controls">
                    <button class="quantity-btn" onclick="decreaseQuantity()">-</button>
                    <span id="quantity">${quantity}</span>
                    <button class="quantity-btn" onclick="increaseQuantity()">+</button>
                </div>
            </div>
            
            <div class="product-actions">
                <button class="add-to-cart" onclick="addToCartFromDetail()" style="margin-bottom: 1rem;">
                    Thêm vào giỏ hàng
                </button>
                <button class="cta-button" onclick="buyNow()" style="width: 100%;">
                    Mua ngay
                </button>
            </div>
        </div>
    `
}

// Select size
function selectSize(size) {
  selectedSize = size
  document.querySelectorAll(".size-option").forEach((btn) => {
    btn.classList.remove("selected")
  })
  event.target.classList.add("selected")
}

// Increase quantity
function increaseQuantity() {
  quantity++
  document.getElementById("quantity").textContent = quantity
}

// Decrease quantity
function decreaseQuantity() {
  if (quantity > 1) {
    quantity--
    document.getElementById("quantity").textContent = quantity
  }
}

// Add to cart from detail page
function addToCartFromDetail() {
  if (!selectedSize) {
    alert("Vui lòng chọn size!")
    return
  }

  const productId = Number.parseInt(localStorage.getItem("selectedProduct"))
  addToCart(productId, quantity, selectedSize)
}

// Buy now
function buyNow() {
  if (!selectedSize) {
    alert("Vui lòng chọn size!")
    return
  }

  addToCartFromDetail()
  window.location.href = "cart.html"
}

// Add to cart function
function addToCart(productId, quantity = 1, size = "M") {
  const cart = JSON.parse(localStorage.getItem("cart")) || []
  const product = allProducts.find((p) => p.id === productId)

  if (!product) return

  const existingItem = cart.find((item) => item.id === productId && item.size === size)

  if (existingItem) {
    existingItem.quantity += quantity
  } else {
    cart.push({
      id: productId,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: quantity,
      size: size,
    })
  }

  localStorage.setItem("cart", JSON.stringify(cart))
  updateCartCount()

  showNotification("Đã thêm sản phẩm vào giỏ hàng!")
}

// Format price
function formatPrice(price) {
  return new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  }).format(price)
}

// Update cart count
function updateCartCount() {
  const cart = JSON.parse(localStorage.getItem("cart")) || []
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0)
  const cartCountElement = document.getElementById("cart-count")
  if (cartCountElement) {
    cartCountElement.textContent = totalItems
  }
}

// Show notification
function showNotification(message) {
  const notification = document.createElement("div")
  notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: #4CAF50;
        color: white;
        padding: 1rem 2rem;
        border-radius: 5px;
        z-index: 10000;
        animation: slideIn 0.3s ease;
    `
  notification.textContent = message

  document.body.appendChild(notification)

  setTimeout(() => {
    notification.remove()
  }, 3000)
}

// Initialize page
document.addEventListener("DOMContentLoaded", () => {
  updateCartCount()
  loadProductDetail()
})
