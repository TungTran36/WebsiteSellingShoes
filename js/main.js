// Sample Nike products data
const products = [
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
]

// Load featured products on homepage
function loadFeaturedProducts() {
  const container = document.getElementById("featured-products")
  if (!container) return

  const featuredProducts = products.slice(0, 6)

  container.innerHTML = featuredProducts
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
}

// Format price to Vietnamese currency
function formatPrice(price) {
  return new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  }).format(price)
}

// Search products
function searchProducts() {
  const searchTerm = document.getElementById("search-input").value.toLowerCase()
  if (searchTerm.trim()) {
    localStorage.setItem("searchTerm", searchTerm)
    window.location.href = "products.html"
  }
}

// View product detail
function viewProduct(productId) {
  localStorage.setItem("selectedProduct", productId)
  window.location.href = "product-detail.html"
}

// Add to cart
function addToCart(productId, quantity = 1, size = "M") {
  const cart = JSON.parse(localStorage.getItem("cart")) || []
  const product = products.find((p) => p.id === productId)

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

  // Show success message
  showNotification("Đã thêm sản phẩm vào giỏ hàng!")
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

// Update cart count
function updateCartCount() {
  const cart = JSON.parse(localStorage.getItem("cart")) || []
  const cartCount = document.getElementById("cart-count")
  if (cartCount) {
    cartCount.textContent = cart.reduce((total, item) => total + item.quantity, 0)
  }
}

// Initialize page
document.addEventListener("DOMContentLoaded", () => {
  loadFeaturedProducts()

  // Add search functionality on Enter key
  const searchInput = document.getElementById("search-input")
  if (searchInput) {
    searchInput.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        searchProducts()
      }
    })
  }
})

// Export products for other files
window.products = products
