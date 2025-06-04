// Admin login functionality
document.addEventListener("DOMContentLoaded", () => {
  // Check if already logged in
  if (localStorage.getItem("adminToken")) {
    window.location.href = "index.html"
  }

  const loginForm = document.getElementById("admin-login-form")

  loginForm.addEventListener("submit", async (e) => {
    e.preventDefault()

    const username = document.getElementById("username").value
    const password = document.getElementById("password").value

    // Simple admin authentication (in production, use proper backend)
    if (username === "admin" && password === "admin123") {
      // Set admin token
      localStorage.setItem("adminToken", "admin_logged_in")
      localStorage.setItem(
        "adminUser",
        JSON.stringify({
          username: "admin",
          name: "Administrator",
          role: "admin",
        }),
      )

      alert("Đăng nhập thành công!")
      window.location.href = "index.html"
    } else {
      alert("Tên đăng nhập hoặc mật khẩu không đúng!")
    }
  })
})
