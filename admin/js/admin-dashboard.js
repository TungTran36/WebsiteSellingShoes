// Dashboard functionality
document.addEventListener("DOMContentLoaded", () => {
  loadDashboardStats()
  loadRecentOrders()
})

// Load dashboard statistics
function loadDashboardStats() {
  // Get data from localStorage (in production, fetch from API)
  const users = JSON.parse(localStorage.getItem("users") || "[]")
  const orders = JSON.parse(localStorage.getItem("orders") || "[]")

  // Update stats
  document.getElementById("total-products").textContent = "30"
  document.getElementById("total-users").textContent = users.length
  document.getElementById("total-orders").textContent = orders.length

  // Calculate total revenue
  const totalRevenue = orders.reduce((sum, order) => sum + (order.total || 0), 0)
  document.getElementById("total-revenue").textContent = formatPrice(totalRevenue)
}

// Load recent orders
function loadRecentOrders() {
  const orders = JSON.parse(localStorage.getItem("orders") || "[]")
  const recentOrders = orders.slice(-5).reverse() // Get last 5 orders

  const tbody = document.getElementById("recent-orders")

  if (recentOrders.length === 0) {
    tbody.innerHTML = '<tr><td colspan="5" class="no-data">Chưa có đơn hàng nào</td></tr>'
    return
  }

  tbody.innerHTML = recentOrders
    .map(
      (order) => `
        <tr>
            <td>#${order.id}</td>
            <td>${order.customerName || "Khách hàng"}</td>
            <td>${formatPrice(order.total)}</td>
            <td><span class="status-badge ${order.status}">${getStatusText(order.status)}</span></td>
            <td>${formatDate(order.date)}</td>
        </tr>
    `,
    )
    .join("")
}

// Helper functions
function formatPrice(price) {
  return new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  }).format(price)
}

function formatDate(dateString) {
  return new Date(dateString).toLocaleDateString("vi-VN")
}

function getStatusText(status) {
  const statusMap = {
    pending: "Chờ xử lý",
    confirmed: "Đã xác nhận",
    shipped: "Đang giao",
    delivered: "Đã giao",
  }
  return statusMap[status] || status
}
