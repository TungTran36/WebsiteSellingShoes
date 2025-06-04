// Orders management
let currentOrders = []
let currentPage = 1
const ordersPerPage = 10

document.addEventListener("DOMContentLoaded", () => {
  loadOrders()
  updateOrderStats()
})

// Load orders
function loadOrders() {
  // Get orders from localStorage (in production, fetch from API)
  currentOrders = JSON.parse(localStorage.getItem("orders") || "[]")

  displayOrders()
}

// Thêm hàm refresh để reload dữ liệu
function refreshOrders() {
  loadOrders()
  updateOrderStats()
}

// Display orders
function displayOrders() {
  const tbody = document.getElementById("orders-table")
  const startIndex = (currentPage - 1) * ordersPerPage
  const endIndex = startIndex + ordersPerPage
  const pageOrders = currentOrders.slice(startIndex, endIndex)

  if (pageOrders.length === 0) {
    tbody.innerHTML = '<tr><td colspan="7" class="no-data">Chưa có đơn hàng nào</td></tr>'
    return
  }

  tbody.innerHTML = pageOrders
    .map(
      (order) => `
        <tr>
            <td>#${order.id}</td>
            <td>${order.customerName}</td>
            <td>${order.items.length} sản phẩm</td>
            <td>${formatPrice(order.total)}</td>
            <td><span class="status-badge ${order.status}">${getStatusText(order.status)}</span></td>
            <td>${formatDate(order.date)}</td>
            <td>
                <button class="btn btn-sm btn-primary" onclick="viewOrder(${order.id})">
                    <i class="fas fa-eye"></i>
                </button>
                <select onchange="updateOrderStatus(${order.id}, this.value)" class="btn btn-sm">
                    <option value="">Cập nhật trạng thái</option>
                    <option value="pending" ${order.status === "pending" ? "selected" : ""}>Chờ xử lý</option>
                    <option value="confirmed" ${order.status === "confirmed" ? "selected" : ""}>Đã xác nhận</option>
                    <option value="shipped" ${order.status === "shipped" ? "selected" : ""}>Đang giao</option>
                    <option value="delivered" ${order.status === "delivered" ? "selected" : ""}>Đã giao</option>
                </select>
            </td>
        </tr>
    `,
    )
    .join("")

  createOrdersPagination()
}

// Search orders
function searchOrders() {
  const searchTerm = document.getElementById("order-search").value.toLowerCase()
  const allOrders = JSON.parse(localStorage.getItem("orders") || "[]")

  const filtered = allOrders.filter(
    (order) =>
      order.id.toString().includes(searchTerm) ||
      order.customerName.toLowerCase().includes(searchTerm) ||
      order.customerEmail.toLowerCase().includes(searchTerm),
  )

  currentOrders = filtered
  currentPage = 1
  displayOrders()
}

// Filter orders
function filterOrders() {
  const statusFilter = document.getElementById("status-filter").value
  const dateFilter = document.getElementById("date-filter").value

  let filtered = JSON.parse(localStorage.getItem("orders") || "[]")

  if (statusFilter) {
    filtered = filtered.filter((order) => order.status === statusFilter)
  }

  if (dateFilter) {
    const filterDate = new Date(dateFilter).toDateString()
    filtered = filtered.filter((order) => new Date(order.date).toDateString() === filterDate)
  }

  currentOrders = filtered
  currentPage = 1
  displayOrders()
}

// View order details
function viewOrder(id) {
  const order = currentOrders.find((o) => o.id === id)
  if (!order) return

  document.getElementById("order-id").textContent = order.id

  const orderDetail = document.getElementById("order-detail")
  orderDetail.innerHTML = `
        <div class="order-info">
            <div class="info-item">
                <label>Mã đơn hàng:</label>
                <span>#${order.id}</span>
            </div>
            <div class="info-item">
                <label>Khách hàng:</label>
                <span>${order.customerName}</span>
            </div>
            <div class="info-item">
                <label>Email:</label>
                <span>${order.customerEmail}</span>
            </div>
            <div class="info-item">
                <label>Số điện thoại:</label>
                <span>${order.customerPhone || "Chưa có"}</span>
            </div>
            <div class="info-item">
                <label>Tổng tiền:</label>
                <span>${formatPrice(order.total)}</span>
            </div>
            <div class="info-item">
                <label>Trạng thái:</label>
                <span class="status-badge ${order.status}">${getStatusText(order.status)}</span>
            </div>
            <div class="info-item">
                <label>Ngày đặt:</label>
                <span>${formatDate(order.date)}</span>
            </div>
        </div>
        
        <div class="order-items">
            <h4>Sản phẩm đã đặt:</h4>
            ${order.items
              .map(
                (item) => `
                <div class="order-item">
                    <img src="${item.image}" alt="${item.name}">
                    <div class="item-info">
                        <h5>${item.name}</h5>
                        <p>Size: ${item.size} | Số lượng: ${item.quantity}</p>
                    </div>
                    <div class="item-price">${formatPrice(item.price * item.quantity)}</div>
                </div>
            `,
              )
              .join("")}
        </div>
        
        <div class="modal-actions">
            <button class="btn btn-secondary" onclick="closeOrderModal()">Đóng</button>
            <select onchange="updateOrderStatus(${order.id}, this.value); closeOrderModal();" class="btn btn-warning">
                <option value="">Cập nhật trạng thái</option>
                <option value="pending" ${order.status === "pending" ? "selected" : ""}>Chờ xử lý</option>
                <option value="confirmed" ${order.status === "confirmed" ? "selected" : ""}>Đã xác nhận</option>
                <option value="shipped" ${order.status === "shipped" ? "selected" : ""}>Đang giao</option>
                <option value="delivered" ${order.status === "delivered" ? "selected" : ""}>Đã giao</option>
            </select>
        </div>
    `

  document.getElementById("order-modal").style.display = "block"
}

// Update order status
function updateOrderStatus(id, newStatus) {
  if (!newStatus) return

  const orderIndex = currentOrders.findIndex((o) => o.id === id)
  if (orderIndex === -1) return

  if (confirm(`Bạn có chắc muốn cập nhật trạng thái đơn hàng thành "${getStatusText(newStatus)}"?`)) {
    currentOrders[orderIndex].status = newStatus

    // Update localStorage
    const allOrders = JSON.parse(localStorage.getItem("orders") || "[]")
    const allOrderIndex = allOrders.findIndex((o) => o.id === id)
    if (allOrderIndex !== -1) {
      allOrders[allOrderIndex].status = newStatus
      localStorage.setItem("orders", JSON.stringify(allOrders))
    }

    displayOrders()
    updateOrderStats()
    alert("Đã cập nhật trạng thái đơn hàng thành công!")
  }
}

// Update order statistics
function updateOrderStats() {
  const allOrders = JSON.parse(localStorage.getItem("orders") || "[]")

  const pendingCount = allOrders.filter((o) => o.status === "pending").length
  const confirmedCount = allOrders.filter((o) => o.status === "confirmed").length

  document.getElementById("pending-orders").textContent = pendingCount
  document.getElementById("confirmed-orders").textContent = confirmedCount
}

// Close order modal
function closeOrderModal() {
  document.getElementById("order-modal").style.display = "none"
}

// Create pagination
function createOrdersPagination() {
  const totalPages = Math.ceil(currentOrders.length / ordersPerPage)
  const pagination = document.getElementById("orders-pagination")

  if (totalPages <= 1) {
    pagination.innerHTML = ""
    return
  }

  let paginationHTML = ""

  for (let i = 1; i <= totalPages; i++) {
    paginationHTML += `
            <a href="#" class="page-btn ${i === currentPage ? "active" : ""}" 
               onclick="changeOrdersPage(${i})">${i}</a>
        `
  }

  pagination.innerHTML = paginationHTML
}

// Change page
function changeOrdersPage(page) {
  currentPage = page
  displayOrders()
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

// Close modal when clicking outside
window.onclick = (event) => {
  const modal = document.getElementById("order-modal")
  if (event.target === modal) {
    closeOrderModal()
  }
}
