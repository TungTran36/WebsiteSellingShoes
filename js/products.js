// All Nike products data (extended list)
const allProducts = [
  // 8 sản phẩm Nike với ảnh thật
  {
    id: 1,
    name: "Nike Air Max 270",
    price: 3200000,
    image: "images/products/air-max-270.jpg",
    description:
      "Giày thể thao Nike Air Max 270 với công nghệ đệm khí tiên tiến, mang lại sự thoải mái tối đa cho mọi bước chân.",
  },
  {
    id: 2,
    name: "Nike Air Force 1",
    price: 2800000,
    image: "images/products/air-force-1.jpg",
    description: "Biểu tượng bất tử của Nike với thiết kế cổ điển, phù hợp cho mọi phong cách thời trang.",
  },
  {
    id: 3,
    name: "Nike React Infinity Run",
    price: 4200000,
    image: "images/products/react-infinity-run.jpg",
    description: "Giày chạy bộ với công nghệ React foam, giúp giảm chấn thương và tăng hiệu suất chạy.",
  },
  {
    id: 4,
    name: "Nike Dunk Low",
    price: 3500000,
    image: "images/products/dunk-low.jpg",
    description: "Thiết kế retro basketball với phong cách streetwear hiện đại.",
  },
  {
    id: 5,
    name: "Nike Blazer Mid '77",
    price: 3100000,
    image: "images/products/blazer-mid-77.jpg",
    description: "Phong cách vintage basketball với chất liệu da cao cấp.",
  },
  {
    id: 6,
    name: "Nike Air Jordan 1",
    price: 5500000,
    image: "images/products/air-jordan-1.jpg",
    description: "Huyền thoại basketball với thiết kế iconic và chất lượng premium.",
  },
  {
    id: 7,
    name: "Nike Air Max 90",
    price: 3400000,
    image: "images/products/air-max-90.jpg",
    description: "Thiết kế cổ điển với công nghệ Air-Sole unit, mang đến sự thoải mái và phong cách.",
  },
  {
    id: 8,
    name: "Nike Cortez",
    price: 2600000,
    image: "images/products/cortez.jpg",
    description: "Mẫu giày running cổ điển với thiết kế đơn giản và thanh lịch.",
  },
  // 22 sản phẩm còn lại với ảnh thật
  {
    id: 9,
    name: "Nike Air Max 97",
    price: 4800000,
    image: "images/products/air-max-97.jpg",
    description: "Thiết kế futuristic với đường nét sóng độc đáo và công nghệ Air Max toàn chiều dài.",
  },
  {
    id: 10,
    name: "Nike Zoom Pegasus",
    price: 3800000,
    image: "images/products/zoom-pegasus.jpg",
    description: "Giày chạy bộ đa năng với công nghệ Zoom Air, phù hợp cho mọi cự ly.",
  },
  {
    id: 11,
    name: "Nike SB Dunk",
    price: 3900000,
    image: "images/products/sb-dunk.jpg",
    description: "Thiết kế skateboarding với đệm tăng cường và độ bền cao.",
  },
  {
    id: 12,
    name: "Nike Air Huarache",
    price: 3300000,
    image: "images/products/air-huarache.jpg",
    description: "Thiết kế ôm chân độc đáo với hệ thống dây đeo neoprene.",
  },
  {
    id: 13,
    name: "Nike Air Max Plus",
    price: 4500000,
    image: "images/products/air-max-plus.jpg",
    description: "Thiết kế táo bạo với công nghệ Tuned Air cho sự ổn định tối ưu.",
  },
  {
    id: 14,
    name: "Nike Vapormax",
    price: 5200000,
    image: "images/products/vapormax.jpg",
    description: "Công nghệ Air Max cách mạng với đế khí trong suốt.",
  },
  {
    id: 15,
    name: "Nike Free Run",
    price: 2900000,
    image: "images/products/free-run.jpg",
    description: "Cảm giác chạy chân trần tự nhiên với đế giày linh hoạt.",
  },
  {
    id: 16,
    name: "Nike Air Zoom Structure 24",
    price: 3600000,
    image: "images/products/air-zoom-structure-24.jpg",
    description:
      "Giày chạy bộ hỗ trợ vận động với công nghệ Zoom Air và Dynamic Support, lý tưởng cho người chạy cần sự ổn định.",
  },
  {
    id: 17,
    name: "Nike Revolution 6",
    price: 1800000,
    image: "images/products/revolution-6.jpg",
    description: "Giày thể thao hàng ngày với thiết kế thoải mái và giá cả phải chăng, phù hợp cho mọi hoạt động.",
  },
  {
    id: 18,
    name: "Nike Tanjun",
    price: 1600000,
    image: "images/products/tanjun.jpg",
    description: "Thiết kế tối giản với sự thoải mái tối đa, lấy cảm hứng từ phong cách sống đơn giản của Nhật Bản.",
  },
  {
    id: 19,
    name: "Nike Flex Experience RN 11",
    price: 2200000,
    image: "images/products/flex-experience-rn-11.jpg",
    description: "Giày chạy bộ linh hoạt với đế Flex grooves, mang lại chuyển động tự nhiên và thoải mái.",
  },
  {
    id: 20,
    name: "Nike Downshifter 12",
    price: 1900000,
    image: "images/products/downshifter-12.jpg",
    description: "Giày chạy bộ cơ bản với đệm mềm mại và thiết kế bền bỉ, hoàn hảo cho người mới bắt đầu.",
  },
  {
    id: 21,
    name: "Nike Air Max SC",
    price: 2400000,
    image: "images/products/air-max-sc.jpg",
    description: "Phong cách retro basketball với đế Air-Sole và thiết kế clean, dễ phối đồ hàng ngày.",
  },
  {
    id: 22,
    name: "Nike Court Vision Low",
    price: 2100000,
    image: "images/products/court-vision-low.jpg",
    description: "Lấy cảm hứng từ giày tennis cổ điển với upper da tổng hợp và logo Swoosh nổi bật.",
  },
  {
    id: 23,
    name: "Nike Venture Runner",
    price: 2000000,
    image: "images/products/venture-runner.jpg",
    description: "Giày lifestyle với thiết kế outdoor-inspired, kết hợp chất liệu da lộn và mesh thoáng khí.",
  },
  {
    id: 24,
    name: "Nike Air Zoom Winflo 9",
    price: 3300000,
    image: "images/products/air-zoom-winflo-9.jpg",
    description: "Giày chạy bộ với công nghệ Zoom Air ở forefoot, mang lại sự đẩy mạnh và phản hồi tốt.",
  },
  {
    id: 25,
    name: "Nike Air Max Excee",
    price: 2700000,
    image: "images/products/air-max-excee.jpg",
    description: "Thiết kế hiện đại lấy cảm hứng từ Air Max 90 với upper mesh và overlays da tổng hợp.",
  },
  {
    id: 26,
    name: "Nike Renew Run 3",
    price: 2300000,
    image: "images/products/renew-run-3.jpg",
    description: "Giày chạy bộ với công nghệ Nike Renew foam, tái chế và thân thiện với môi trường.",
  },
  {
    id: 27,
    name: "Nike Quest 4",
    price: 2500000,
    image: "images/products/quest-4.jpg",
    description: "Giày training đa năng với upper mesh thoáng khí và đế ngoài cao su bền bỉ.",
  },
  {
    id: 28,
    name: "Nike Air Jordan 4",
    price: 6200000,
    image: "images/products/air-jordan-4.jpg",
    description: "Huyền thoại basketball với thiết kế mesh panels và công nghệ Air-Sole unit ở gót chân.",
  },
  {
    id: 29,
    name: "Nike Air Max 1",
    price: 3700000,
    image: "images/products/air-max-1.jpg",
    description: "Mẫu giày đầu tiên trong dòng Air Max với cửa sổ Air visible đầu tiên của Nike.",
  },
  {
    id: 30,
    name: "Nike Air Presto",
    price: 3200000,
    image: "images/products/air-presto.jpg",
    description: "Thiết kế slip-on độc đáo với upper mesh co giãn và cảm giác như T-shirt cho đôi chân.",
  },
]

let filteredProducts = [...allProducts]

// Load all products
function loadAllProducts() {
  const container = document.getElementById("all-products")
  if (!container) return

  displayProducts(filteredProducts)
}

// Display products
let currentPage = 1
const productsPerPage = 12

// Cập nhật hàm displayProducts để hỗ trợ phân trang
function displayProducts(productsToShow) {
  const container = document.getElementById("all-products")
  const totalPages = Math.ceil(productsToShow.length / productsPerPage)

  if (productsToShow.length === 0) {
    container.innerHTML = `
            <div style="grid-column: 1/-1; text-align: center; padding: 3rem;">
                <i class="fas fa-search" style="font-size: 3rem; color: #ddd; margin-bottom: 1rem;"></i>
                <h3>Không tìm thấy sản phẩm nào</h3>
                <p>Thử tìm kiếm với từ khóa khác</p>
            </div>
        `
    document.getElementById("pagination").innerHTML = ""
    return
  }

  // Tính toán sản phẩm cho trang hiện tại
  const startIndex = (currentPage - 1) * productsPerPage
  const endIndex = startIndex + productsPerPage
  const currentProducts = productsToShow.slice(startIndex, endIndex)

  container.innerHTML = currentProducts
    .map(
      (product) => `
        <div class="product-card" onclick="viewProduct(${product.id})">
            <img src="${product.image}" alt="${product.name}" class="product-image">
            <div class="product-info">
                <h3 class="product-name">${product.name}</h3>
                <p class="product-price">${formatPrice(product.price)}</p>
                <button class="add-to-cart" onclick="event.stopPropagation(); addToCart(${product.id})">
                    Thêm vào giỏ hàng
                </button>
            </div>
        </div>
    `,
    )
    .join("")

  // Tạo pagination
  createPagination(totalPages, productsToShow)
}

// Hàm tạo pagination
function createPagination(totalPages, productsToShow) {
  const paginationContainer = document.getElementById("pagination")

  if (totalPages <= 1) {
    paginationContainer.innerHTML = ""
    return
  }

  let paginationHTML = '<div class="pagination-wrapper">'

  // Nút Previous
  if (currentPage > 1) {
    paginationHTML += `<button class="pagination-btn" onclick="changePage(${currentPage - 1}, ${JSON.stringify(productsToShow).replace(/"/g, "&quot;")})">‹ Trước</button>`
  }

  // Các số trang
  for (let i = 1; i <= totalPages; i++) {
    if (i === currentPage) {
      paginationHTML += `<button class="pagination-btn active">${i}</button>`
    } else {
      paginationHTML += `<button class="pagination-btn" onclick="changePage(${i}, ${JSON.stringify(productsToShow).replace(/"/g, "&quot;")})">${i}</button>`
    }
  }

  // Nút Next
  if (currentPage < totalPages) {
    paginationHTML += `<button class="pagination-btn" onclick="changePage(${currentPage + 1}, ${JSON.stringify(productsToShow).replace(/"/g, "&quot;")})">Sau ›</button>`
  }

  paginationHTML += "</div>"
  paginationContainer.innerHTML = paginationHTML
}

// Hàm thay đổi trang
function changePage(page, productsToShow) {
  currentPage = page
  displayProducts(productsToShow)

  // Scroll to top
  window.scrollTo({ top: 0, behavior: "smooth" })
}

// Filter products
function filterProducts() {
  const searchTerm = document.getElementById("product-search").value.toLowerCase()
  const priceFilter = document.getElementById("price-filter").value

  filteredProducts = allProducts.filter((product) => {
    const matchesSearch =
      product.name.toLowerCase().includes(searchTerm) || product.description.toLowerCase().includes(searchTerm)

    let matchesPrice = true
    if (priceFilter) {
      const [min, max] = priceFilter.split("-").map(Number)
      matchesPrice = product.price >= min && product.price <= max
    }

    return matchesSearch && matchesPrice
  })

  currentPage = 1 // Reset về trang 1 khi filter
  displayProducts(filteredProducts)
}

// Format price
function formatPrice(price) {
  return new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  }).format(price)
}

// View product detail
function viewProduct(productId) {
  localStorage.setItem("selectedProduct", productId)
  window.location.href = "product-detail.html"
}

// Add to cart
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
  loadAllProducts()

  // Check for search term from homepage
  const searchTerm = localStorage.getItem("searchTerm")
  if (searchTerm) {
    document.getElementById("product-search").value = searchTerm
    filterProducts()
    localStorage.removeItem("searchTerm")
  }

  // Add event listeners
  document.getElementById("product-search").addEventListener("keyup", filterProducts)
  document.getElementById("price-filter").addEventListener("change", filterProducts)
})

// Export for other files
window.allProducts = allProducts
