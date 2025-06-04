// File riêng để quản lý authentication cho tất cả các trang

// Check if user is logged in and update UI
function updateAuthUI() {
  const currentUser = JSON.parse(localStorage.getItem("currentUser"))
  const authContainer = document.querySelector(".nav-auth")

  if (currentUser && authContainer) {
    authContainer.innerHTML = `
      <span style="color: white; margin-right: 1rem;">Xin chào, ${currentUser.fullname}!</span>
      <a href="#" onclick="logout()" class="login-btn">Đăng Xuất</a>
    `
  }
}

// Logout function
async function logout() {
  try {
    // Gọi API logout
    await fetch("php/logout.php", {
      method: "POST",
    })

    // Xóa thông tin user khỏi localStorage
    localStorage.removeItem("currentUser")

    alert("Đăng xuất thành công!")
    window.location.href = "index.html"
  } catch (error) {
    console.error("Error:", error)
    // Vẫn logout ở frontend nếu có lỗi
    localStorage.removeItem("currentUser")
    window.location.href = "index.html"
  }
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

// Initialize auth UI on all pages
document.addEventListener("DOMContentLoaded", () => {
  updateAuthUI()
  updateCartCount()
})
