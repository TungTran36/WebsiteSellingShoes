// Admin authentication check
function checkAdminAuth() {
  const adminToken = localStorage.getItem("adminToken")

  if (!adminToken) {
    window.location.href = "login.html"
    return false
  }

  return true
}

// Admin logout
function adminLogout() {
  if (confirm("Bạn có chắc muốn đăng xuất?")) {
    localStorage.removeItem("adminToken")
    localStorage.removeItem("adminUser")
    window.location.href = "login.html"
  }
}

// Update admin user display
function updateAdminUser() {
  const adminUser = JSON.parse(localStorage.getItem("adminUser") || "{}")
  const adminNameElement = document.getElementById("admin-name")

  if (adminNameElement && adminUser.name) {
    adminNameElement.textContent = adminUser.name
  }
}

// Initialize admin auth on page load
document.addEventListener("DOMContentLoaded", () => {
  // Skip auth check for login page
  if (window.location.pathname.includes("login.html")) {
    return
  }

  if (checkAdminAuth()) {
    updateAdminUser()
  }
})
