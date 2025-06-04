// Products management
let currentProducts = []
let currentPage = 1
const productsPerPage = 10

document.addEventListener("DOMContentLoaded", () => {
  loadProducts()
})

// Load products
function loadProducts() {
  // Load all 30 Nike products with random stock quantities
  currentProducts = [
    {
      id: 1,
      name: "Nike Air Max 270",
      price: 3200000,
      image: "../images/products/air-max-270.jpg",
      stock: Math.floor(Math.random() * 100) + 20, // 20-119
      status: "active",
      description:
        "Giày thể thao Nike Air Max 270 với công nghệ đệm khí tiên tiến, mang lại sự thoải mái tối đa cho mọi bước chân.",
    },
    {
      id: 2,
      name: "Nike Air Force 1",
      price: 2800000,
      image: "../images/products/air-force-1.jpg",
      stock: Math.floor(Math.random() * 100) + 20,
      status: "active",
      description: "Biểu tượng bất tử của Nike với thiết kế cổ điển, phù hợp cho mọi phong cách thời trang.",
    },
    {
      id: 3,
      name: "Nike React Infinity Run",
      price: 4200000,
      image: "../images/products/react-infinity-run.jpg",
      stock: Math.floor(Math.random() * 100) + 20,
      status: "active",
      description: "Giày chạy bộ với công nghệ React foam, giúp giảm chấn thương và tăng hiệu suất chạy.",
    },
    {
      id: 4,
      name: "Nike Dunk Low",
      price: 3500000,
      image: "../images/products/dunk-low.jpg",
      stock: Math.floor(Math.random() * 100) + 20,
      status: "active",
      description: "Thiết kế retro basketball với phong cách streetwear hiện đại.",
    },
    {
      id: 5,
      name: "Nike Blazer Mid '77",
      price: 3100000,
      image: "../images/products/blazer-mid-77.jpg",
      stock: Math.floor(Math.random() * 100) + 20,
      status: "active",
      description: "Phong cách vintage basketball với chất liệu da cao cấp.",
    },
    {
      id: 6,
      name: "Nike Air Jordan 1",
      price: 5500000,
      image: "../images/products/air-jordan-1.jpg",
      stock: Math.floor(Math.random() * 50) + 10, // Limited edition
      status: "active",
      description: "Huyền thoại basketball với thiết kế iconic và chất lượng premium.",
    },
    {
      id: 7,
      name: "Nike Air Max 90",
      price: 3400000,
      image: "../images/products/air-max-90.jpg",
      stock: Math.floor(Math.random() * 100) + 20,
      status: "active",
      description: "Thiết kế cổ điển với công nghệ Air-Sole unit, mang đến sự thoải mái và phong cách.",
    },
    {
      id: 8,
      name: "Nike Cortez",
      price: 2600000,
      image: "../images/products/cortez.jpg",
      stock: Math.floor(Math.random() * 100) + 20,
      status: "active",
      description: "Mẫu giày running cổ điển với thiết kế đơn giản và thanh lịch.",
    },
    {
      id: 9,
      name: "Nike Air Max 97",
      price: 4800000,
      image: "../images/products/air-max-97.jpg",
      stock: Math.floor(Math.random() * 80) + 15,
      status: "active",
      description: "Thiết kế futuristic với đường nét sóng độc đáo và công nghệ Air Max toàn chiều dài.",
    },
    {
      id: 10,
      name: "Nike Zoom Pegasus",
      price: 3800000,
      image: "../images/products/zoom-pegasus.jpg",
      stock: Math.floor(Math.random() * 100) + 20,
      status: "active",
      description: "Giày chạy bộ đa năng với công nghệ Zoom Air, phù hợp cho mọi cự ly.",
    },
    {
      id: 11,
      name: "Nike SB Dunk",
      price: 3900000,
      image: "../images/products/sb-dunk.jpg",
      stock: Math.floor(Math.random() * 60) + 10,
      status: "active",
      description: "Thiết kế skateboarding với đệm tăng cường và độ bền cao.",
    },
    {
      id: 12,
      name: "Nike Air Huarache",
      price: 3300000,
      image: "../images/products/air-huarache.jpg",
      stock: Math.floor(Math.random() * 100) + 20,
      status: "active",
      description: "Thiết kế ôm chân độc đáo với hệ thống dây đeo neoprene.",
    },
    {
      id: 13,
      name: "Nike Air Max Plus",
      price: 4500000,
      image: "../images/products/air-max-plus.jpg",
      stock: Math.floor(Math.random() * 70) + 15,
      status: "active",
      description: "Thiết kế táo bạo với công nghệ Tuned Air cho sự ổn định tối ưu.",
    },
    {
      id: 14,
      name: "Nike Vapormax",
      price: 5200000,
      image: "../images/products/vapormax.jpg",
      stock: Math.floor(Math.random() * 50) + 10,
      status: "active",
      description: "Công nghệ Air Max cách mạng với đế khí trong suốt.",
    },
    {
      id: 15,
      name: "Nike Free Run",
      price: 2900000,
      image: "../images/products/free-run.jpg",
      stock: Math.floor(Math.random() * 100) + 20,
      status: "active",
      description: "Cảm giác chạy chân trần tự nhiên với đế giày linh hoạt.",
    },
    {
      id: 16,
      name: "Nike Air Zoom Structure 24",
      price: 3600000,
      image: "../images/products/air-zoom-structure-24.jpg",
      stock: Math.floor(Math.random() * 90) + 20,
      status: "active",
      description: "Giày chạy bộ hỗ trợ vận động với công nghệ Zoom Air và Dynamic Support.",
    },
    {
      id: 17,
      name: "Nike Revolution 6",
      price: 1800000,
      image: "../images/products/revolution-6.jpg",
      stock: Math.floor(Math.random() * 150) + 50, // Popular model
      status: "active",
      description: "Giày thể thao hàng ngày với thiết kế thoải mái và giá cả phải chăng.",
    },
    {
      id: 18,
      name: "Nike Tanjun",
      price: 1600000,
      image: "../images/products/tanjun.jpg",
      stock: Math.floor(Math.random() * 150) + 50,
      status: "active",
      description: "Thiết kế tối giản với sự thoải mái tối đa, lấy cảm hứng từ phong cách sống đơn giản của Nhật Bản.",
    },
    {
      id: 19,
      name: "Nike Flex Experience RN 11",
      price: 2200000,
      image: "../images/products/flex-experience-rn-11.jpg",
      stock: Math.floor(Math.random() * 120) + 30,
      status: "active",
      description: "Giày chạy bộ linh hoạt với đế Flex grooves, mang lại chuyển động tự nhiên và thoải mái.",
    },
    {
      id: 20,
      name: "Nike Downshifter 12",
      price: 1900000,
      image: "../images/products/downshifter-12.jpg",
      stock: Math.floor(Math.random() * 130) + 40,
      status: "active",
      description: "Giày chạy bộ cơ bản với đệm mềm mại và thiết kế bền bỉ, hoàn hảo cho người mới bắt đầu.",
    },
    {
      id: 21,
      name: "Nike Air Max SC",
      price: 2400000,
      image: "../images/products/air-max-sc.jpg",
      stock: Math.floor(Math.random() * 100) + 25,
      status: "active",
      description: "Phong cách retro basketball với đế Air-Sole và thiết kế clean, dễ phối đồ hàng ngày.",
    },
    {
      id: 22,
      name: "Nike Court Vision Low",
      price: 2100000,
      image: "../images/products/court-vision-low.jpg",
      stock: Math.floor(Math.random() * 110) + 30,
      status: "active",
      description: "Lấy cảm hứng từ giày tennis cổ điển với upper da tổng hợp và logo Swoosh nổi bật.",
    },
    {
      id: 23,
      name: "Nike Venture Runner",
      price: 2000000,
      image: "../images/products/venture-runner.jpg",
      stock: Math.floor(Math.random() * 100) + 25,
      status: "active",
      description: "Giày lifestyle với thiết kế outdoor-inspired, kết hợp chất liệu da lộn và mesh thoáng khí.",
    },
    {
      id: 24,
      name: "Nike Air Zoom Winflo 9",
      price: 3300000,
      image: "../images/products/air-zoom-winflo-9.jpg",
      stock: Math.floor(Math.random() * 80) + 20,
      status: "active",
      description: "Giày chạy bộ với công nghệ Zoom Air ở forefoot, mang lại sự đẩy mạnh và phản hồi tốt.",
    },
    {
      id: 25,
      name: "Nike Air Max Excee",
      price: 2700000,
      image: "../images/products/air-max-excee.jpg",
      stock: Math.floor(Math.random() * 90) + 25,
      status: "active",
      description: "Thiết kế hiện đại lấy cảm hứng từ Air Max 90 với upper mesh và overlays da tổng hợp.",
    },
    {
      id: 26,
      name: "Nike Renew Run 3",
      price: 2300000,
      image: "../images/products/renew-run-3.jpg",
      stock: Math.floor(Math.random() * 100) + 30,
      status: "active",
      description: "Giày chạy bộ với công nghệ Nike Renew foam, tái chế và thân thiện với môi trường.",
    },
    {
      id: 27,
      name: "Nike Quest 4",
      price: 2500000,
      image: "../images/products/quest-4.jpg",
      stock: Math.floor(Math.random() * 95) + 25,
      status: "active",
      description: "Giày training đa năng với upper mesh thoáng khí và đế ngoài cao su bền bỉ.",
    },
    {
      id: 28,
      name: "Nike Air Jordan 4",
      price: 6200000,
      image: "../images/products/air-jordan-4.jpg",
      stock: Math.floor(Math.random() * 30) + 5, // Very limited
      status: "active",
      description: "Huyền thoại basketball với thiết kế mesh panels và công nghệ Air-Sole unit ở gót chân.",
    },
    {
      id: 29,
      name: "Nike Air Max 1",
      price: 3700000,
      image: "../images/products/air-max-1.jpg",
      stock: Math.floor(Math.random() * 70) + 15,
      status: "active",
      description: "Mẫu giày đầu tiên trong dòng Air Max với cửa sổ Air visible đầu tiên của Nike.",
    },
    {
      id: 30,
      name: "Nike Air Presto",
      price: 3200000,
      image: "../images/products/air-presto.jpg",
      stock: Math.floor(Math.random() * 80) + 20,
      status: "active",
      description: "Thiết kế slip-on độc đáo với upper mesh co giãn và cảm giác như T-shirt cho đôi chân.",
    },
  ]

  displayProducts()
}

// Display products
function displayProducts() {
  const tbody = document.getElementById("products-table")
  const startIndex = (currentPage - 1) * productsPerPage
  const endIndex = startIndex + productsPerPage
  const pageProducts = currentProducts.slice(startIndex, endIndex)

  if (pageProducts.length === 0) {
    tbody.innerHTML = '<tr><td colspan="7" class="no-data">Không có sản phẩm nào</td></tr>'
    return
  }

  tbody.innerHTML = pageProducts
    .map(
      (product) => `
        <tr>
            <td>#${product.id}</td>
            <td><img src="${product.image}" alt="${product.name}"></td>
            <td>${product.name}</td>
            <td>${formatPrice(product.price)}</td>
            <td>${product.stock}</td>
            <td><span class="status-badge ${product.status}">${product.status === "active" ? "Hoạt động" : "Ngừng bán"}</span></td>
            <td>
                <button class="btn btn-sm btn-primary" onclick="editProduct(${product.id})">
                    <i class="fas fa-edit"></i>
                </button>
                <button class="btn btn-sm btn-danger" onclick="deleteProduct(${product.id})">
                    <i class="fas fa-trash"></i>
                </button>
            </td>
        </tr>
    `,
    )
    .join("")

  createPagination()
}

// Search products
function searchProducts() {
  const searchTerm = document.getElementById("product-search").value.toLowerCase()

  // Reset to full product list first
  loadProducts()

  if (searchTerm.trim()) {
    const filtered = currentProducts.filter(
      (product) =>
        product.name.toLowerCase().includes(searchTerm) || product.description.toLowerCase().includes(searchTerm),
    )
    currentProducts = filtered
  }

  currentPage = 1
  displayProducts()
}

// Filter products
function filterProducts() {
  const priceFilter = document.getElementById("price-filter").value

  // Reset to full product list first
  loadProducts()

  if (priceFilter) {
    const [min, max] = priceFilter.split("-").map(Number)
    const filtered = currentProducts.filter((product) => product.price >= min && product.price <= max)
    currentProducts = filtered
  }

  currentPage = 1
  displayProducts()
}

// Open add product modal
function openAddProductModal() {
  document.getElementById("modal-title").textContent = "Thêm sản phẩm mới"
  document.getElementById("product-form").reset()
  document.getElementById("product-id").value = ""
  document.getElementById("product-modal").style.display = "block"
}

// Edit product
function editProduct(id) {
  const product = currentProducts.find((p) => p.id === id)
  if (!product) return

  document.getElementById("modal-title").textContent = "Chỉnh sửa sản phẩm"
  document.getElementById("product-id").value = product.id
  document.getElementById("product-name").value = product.name
  document.getElementById("product-price").value = product.price
  document.getElementById("product-description").value = product.description || ""
  document.getElementById("product-image").value = product.image
  document.getElementById("product-stock").value = product.stock
  document.getElementById("product-modal").style.display = "block"
}

// Delete product
function deleteProduct(id) {
  if (confirm("Bạn có chắc muốn xóa sản phẩm này?")) {
    currentProducts = currentProducts.filter((p) => p.id !== id)
    displayProducts()
    alert("Đã xóa sản phẩm thành công!")
  }
}

// Close product modal
function closeProductModal() {
  document.getElementById("product-modal").style.display = "none"
}

// Handle product form submission
document.getElementById("product-form").addEventListener("submit", (e) => {
  e.preventDefault()

  const formData = new FormData(e.target)
  const productData = {
    id: document.getElementById("product-id").value || Date.now(),
    name: document.getElementById("product-name").value,
    price: Number.parseInt(document.getElementById("product-price").value),
    description: document.getElementById("product-description").value,
    image: document.getElementById("product-image").value,
    stock: Number.parseInt(document.getElementById("product-stock").value),
    status: "active",
  }

  const existingIndex = currentProducts.findIndex((p) => p.id == productData.id)

  if (existingIndex >= 0) {
    currentProducts[existingIndex] = productData
    alert("Cập nhật sản phẩm thành công!")
  } else {
    currentProducts.push(productData)
    alert("Thêm sản phẩm thành công!")
  }

  displayProducts()
  closeProductModal()
})

// Create pagination
function createPagination() {
  const totalPages = Math.ceil(currentProducts.length / productsPerPage)
  const pagination = document.getElementById("products-pagination")

  if (totalPages <= 1) {
    pagination.innerHTML = ""
    return
  }

  let paginationHTML = ""

  for (let i = 1; i <= totalPages; i++) {
    paginationHTML += `
            <a href="#" class="page-btn ${i === currentPage ? "active" : ""}" 
               onclick="changePage(${i})">${i}</a>
        `
  }

  pagination.innerHTML = paginationHTML
}

// Change page
function changePage(page) {
  currentPage = page
  displayProducts()
}

// Helper function
function formatPrice(price) {
  return new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  }).format(price)
}

// Close modal when clicking outside
window.onclick = (event) => {
  const modal = document.getElementById("product-modal")
  if (event.target === modal) {
    closeProductModal()
  }
}
