// Cart functionality
function loadCart() {
  const cart = JSON.parse(localStorage.getItem("cart")) || []
  const cartItemsContainer = document.getElementById("cart-items")

  if (cart.length === 0) {
    cartItemsContainer.innerHTML = `
            <div class="empty-cart">
                <i class="fas fa-shopping-cart"></i>
                <h3>Giỏ hàng trống</h3>
                <p>Bạn chưa có sản phẩm nào trong giỏ hàng</p>
                <a href="products.html" class="cta-button">Tiếp tục mua sắm</a>
            </div>
        `
    updateCartSummary(0)
    return
  }

  cartItemsContainer.innerHTML = cart
    .map(
      (item, index) => `
      <div class="cart-item">
          <img src="${item.image}" alt="${item.name}" class="cart-item-image">
          <div class="cart-item-info">
              <h3 class="cart-item-name">${item.name}</h3>
              <p class="cart-item-price">${formatPrice(item.price)}</p>
              <p>Size: ${item.size}</p>
              <div class="cart-item-controls">
                  <button class="quantity-btn" onclick="updateQuantity(${item.id}, '${item.size}', ${item.quantity - 1})">-</button>
                  <span>${item.quantity}</span>
                  <button class="quantity-btn" onclick="updateQuantity(${item.id}, '${item.size}', ${item.quantity + 1})">+</button>
                  <button class="remove-btn" onclick="removeFromCart(${item.id}, '${item.size}')">
                      <i class="fas fa-trash"></i>
                  </button>
              </div>
          </div>
      </div>
  `,
    )
    .join("")

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)
  updateCartSummary(total)
}

// Update quantity
function updateQuantity(productId, size, newQuantity) {
  if (newQuantity <= 0) {
    removeFromCart(productId, size)
    return
  }

  const cart = JSON.parse(localStorage.getItem("cart")) || []
  const itemIndex = cart.findIndex((item) => item.id === productId && item.size === size)

  if (itemIndex !== -1) {
    cart[itemIndex].quantity = newQuantity
    localStorage.setItem("cart", JSON.stringify(cart))
    loadCart()
    updateCartCount()
  }
}

// Remove from cart
function removeFromCart(productId, size) {
  const cart = JSON.parse(localStorage.getItem("cart")) || []

  // Lọc bỏ sản phẩm có ID và size tương ứng
  const updatedCart = cart.filter((item) => {
    return !(item.id === productId && item.size === size)
  })

  localStorage.setItem("cart", JSON.stringify(updatedCart))
  loadCart()
  updateCartCount()
  showNotification("Đã xóa sản phẩm khỏi giỏ hàng!")
}

// Update cart summary
function updateCartSummary(total) {
  document.getElementById("subtotal").textContent = formatPrice(total)
  document.getElementById("total").textContent = formatPrice(total)
}

// Checkout - Updated to create order record
function checkout() {
  const cart = JSON.parse(localStorage.getItem("cart")) || []

  if (cart.length === 0) {
    alert("Giỏ hàng trống!")
    return
  }

  // Check if user is logged in
  const currentUser = JSON.parse(localStorage.getItem("currentUser"))
  if (!currentUser) {
    alert("Vui lòng đăng nhập để đặt hàng!")
    window.location.href = "login.html"
    return
  }

  // Calculate total
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)

  // Confirm checkout
  const confirmed = confirm(`Xác nhận đặt hàng với tổng tiền ${formatPrice(total)}?`)
  if (confirmed) {
    // Create order record
    const orders = JSON.parse(localStorage.getItem("orders") || "[]")

    // Generate order ID
    const orderId = orders.length > 0 ? Math.max(...orders.map((o) => o.id)) + 1 : 1

    const newOrder = {
      id: orderId,
      customerName: currentUser.fullname,
      customerEmail: currentUser.email,
      customerPhone: currentUser.phone,
      items: cart.map((item) => ({
        id: item.id,
        name: item.name,
        price: item.price,
        quantity: item.quantity,
        size: item.size,
        image: item.image,
      })),
      total: total,
      status: "pending",
      date: new Date().toISOString(),
    }

    // Add to orders list
    orders.push(newOrder)
    localStorage.setItem("orders", JSON.stringify(orders))

    // Clear cart
    localStorage.removeItem("cart")

    alert("Đặt hàng thành công! Cảm ơn bạn đã mua hàng. Mã đơn hàng: #" + orderId)
    window.location.href = "index.html"
  }
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
        background: #ff6b35;
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
  loadCart()
})
