// Users management - Updated to use PHP API
let currentUsers = []
let currentPage = 1
const usersPerPage = 10

document.addEventListener("DOMContentLoaded", () => {
  loadUsers()
})

// Load users from PHP API
async function loadUsers() {
  try {
    const adminToken = localStorage.getItem("adminToken")
    const response = await fetch(`../php/admin-users.php?admin_token=${adminToken}&limit=100&offset=0`)
    const data = await response.json()

    if (data.success) {
      currentUsers = data.users
      document.getElementById("total-users-count").textContent = data.total
      displayUsers()
    } else {
      console.error("Error loading users:", data.error)
      // Fallback to localStorage if API fails
      loadUsersFromLocalStorage()
    }
  } catch (error) {
    console.error("Error:", error)
    // Fallback to localStorage if API fails
    loadUsersFromLocalStorage()
  }
}

// Fallback function to load from localStorage
function loadUsersFromLocalStorage() {
  currentUsers = JSON.parse(localStorage.getItem("users") || "[]")

  // Add demo user if no users exist
  if (currentUsers.length === 0) {
    currentUsers = [
      {
        id: 1,
        fullname: "Tùng",
        email: "humg@gmail.com",
        phone: "0123456789",
        created_at: new Date().toISOString(),
        status: "active",
      },
    ]
    localStorage.setItem("users", JSON.stringify(currentUsers))
  }

  document.getElementById("total-users-count").textContent = currentUsers.length
  displayUsers()
}

// Refresh users - reload from API
async function refreshUsers() {
  await loadUsers()
  showNotification("Đã làm mới danh sách người dùng!")
}

// Display users
function displayUsers() {
  const tbody = document.getElementById("users-table")
  const startIndex = (currentPage - 1) * usersPerPage
  const endIndex = startIndex + usersPerPage
  const pageUsers = currentUsers.slice(startIndex, endIndex)

  if (pageUsers.length === 0) {
    tbody.innerHTML = '<tr><td colspan="7" class="no-data">Không có người dùng nào</td></tr>'
    return
  }

  tbody.innerHTML = pageUsers
    .map(
      (user) => `
        <tr>
            <td>#${user.id}</td>
            <td>${user.fullname}</td>
            <td>${user.email}</td>
            <td>${user.phone}</td>
            <td>${formatDate(user.created_at)}</td>
            <td><span class="status-badge ${user.status || "active"}">${(user.status || "active") === "active" ? "Hoạt động" : "Bị khóa"}</span></td>
            <td>
                <button class="btn btn-sm btn-primary" onclick="viewUser(${user.id})">
                    <i class="fas fa-eye"></i>
                </button>
                <button class="btn btn-sm btn-warning" onclick="toggleUserStatus(${user.id})">
                    <i class="fas fa-${(user.status || "active") === "active" ? "lock" : "unlock"}"></i>
                </button>
            </td>
        </tr>
    `,
    )
    .join("")

  createUsersPagination()
}

// Search users
async function searchUsers() {
  const searchTerm = document.getElementById("user-search").value.toLowerCase()

  if (searchTerm.trim()) {
    try {
      const adminToken = localStorage.getItem("adminToken")
      const response = await fetch(
        `../php/admin-users.php?admin_token=${adminToken}&search=${encodeURIComponent(searchTerm)}&limit=100&offset=0`,
      )
      const data = await response.json()

      if (data.success) {
        currentUsers = data.users
        currentPage = 1
        displayUsers()
        return
      }
    } catch (error) {
      console.error("Search error:", error)
    }
  }

  // Fallback to client-side search
  const allUsers = JSON.parse(localStorage.getItem("users") || "[]")
  const filtered = allUsers.filter(
    (user) => user.fullname.toLowerCase().includes(searchTerm) || user.email.toLowerCase().includes(searchTerm),
  )

  currentUsers = filtered
  currentPage = 1
  displayUsers()
}

// Filter users
function filterUsers() {
  const statusFilter = document.getElementById("status-filter").value

  if (!statusFilter) {
    loadUsers()
    return
  }

  const filtered = currentUsers.filter((user) => (user.status || "active") === statusFilter)

  currentUsers = filtered
  currentPage = 1
  displayUsers()
}

// View user details
function viewUser(id) {
  const user = currentUsers.find((u) => u.id === id)
  if (!user) return

  const userDetail = document.getElementById("user-detail")
  userDetail.innerHTML = `
        <div class="user-info">
            <div class="info-item">
                <label>ID:</label>
                <span>#${user.id}</span>
            </div>
            <div class="info-item">
                <label>Họ tên:</label>
                <span>${user.fullname}</span>
            </div>
            <div class="info-item">
                <label>Email:</label>
                <span>${user.email}</span>
            </div>
            <div class="info-item">
                <label>Số điện thoại:</label>
                <span>${user.phone}</span>
            </div>
            <div class="info-item">
                <label>Ngày đăng ký:</label>
                <span>${formatDate(user.created_at)}</span>
            </div>
            <div class="info-item">
                <label>Trạng thái:</label>
                <span class="status-badge ${user.status || "active"}">${(user.status || "active") === "active" ? "Hoạt động" : "Bị khóa"}</span>
            </div>
        </div>
        
        <div class="modal-actions">
            <button class="btn btn-secondary" onclick="closeUserModal()">Đóng</button>
            <button class="btn btn-warning" onclick="toggleUserStatus(${user.id}); closeUserModal();">
                ${(user.status || "active") === "active" ? "Khóa tài khoản" : "Mở khóa tài khoản"}
            </button>
        </div>
    `

  document.getElementById("user-modal").style.display = "block"
}

// Toggle user status
function toggleUserStatus(id) {
  const userIndex = currentUsers.findIndex((u) => u.id === id)
  if (userIndex === -1) return

  const currentStatus = currentUsers[userIndex].status || "active"
  const newStatus = currentStatus === "active" ? "blocked" : "active"

  if (confirm(`Bạn có chắc muốn ${newStatus === "blocked" ? "khóa" : "mở khóa"} tài khoản này?`)) {
    currentUsers[userIndex].status = newStatus

    // Update localStorage for compatibility
    const localUsers = JSON.parse(localStorage.getItem("users") || "[]")
    const localUserIndex = localUsers.findIndex((u) => u.id === id)
    if (localUserIndex !== -1) {
      localUsers[localUserIndex].status = newStatus
      localStorage.setItem("users", JSON.stringify(localUsers))
    }

    displayUsers()
    alert(`Đã ${newStatus === "blocked" ? "khóa" : "mở khóa"} tài khoản thành công!`)
  }
}

// Close user modal
function closeUserModal() {
  document.getElementById("user-modal").style.display = "none"
}

// Create pagination
function createUsersPagination() {
  const totalPages = Math.ceil(currentUsers.length / usersPerPage)
  const pagination = document.getElementById("users-pagination")

  if (totalPages <= 1) {
    pagination.innerHTML = ""
    return
  }

  let paginationHTML = ""

  for (let i = 1; i <= totalPages; i++) {
    paginationHTML += `
            <a href="#" class="page-btn ${i === currentPage ? "active" : ""}" 
               onclick="changeUsersPage(${i})">${i}</a>
        `
  }

  pagination.innerHTML = paginationHTML
}

// Change page
function changeUsersPage(page) {
  currentPage = page
  displayUsers()
}

// Show notification
function showNotification(message) {
  const notification = document.createElement("div")
  notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: #28a745;
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

// Helper function
function formatDate(dateString) {
  return new Date(dateString).toLocaleDateString("vi-VN")
}

// Close modal when clicking outside
window.onclick = (event) => {
  const modal = document.getElementById("user-modal")
  if (event.target === modal) {
    closeUserModal()
  }
}
