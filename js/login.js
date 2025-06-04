// Login functionality với PHP backend
document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("login-form")

  loginForm.addEventListener("submit", async (e) => {
    e.preventDefault()

    const email = document.getElementById("email").value
    const password = document.getElementById("password").value

    // Basic validation
    if (!email || !password) {
      alert("Vui lòng điền đầy đủ thông tin!")
      return
    }

    // Disable submit button
    const submitBtn = e.target.querySelector('button[type="submit"]')
    submitBtn.disabled = true
    submitBtn.textContent = "Đang đăng nhập..."

    try {
      // Gọi API PHP
      const response = await fetch("php/login.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      })

      const data = await response.json()

      if (data.success) {
        // Lưu thông tin user vào localStorage (để dễ sử dụng ở frontend)
        localStorage.setItem("currentUser", JSON.stringify(data.user))

        // Cập nhật danh sách users trong localStorage nếu chưa có
        const users = JSON.parse(localStorage.getItem("users") || "[]")
        const existingUser = users.find((u) => u.email === data.user.email)

        if (!existingUser) {
          const userForList = {
            id: data.user.id,
            fullname: data.user.fullname,
            email: data.user.email,
            phone: data.user.phone,
            created_at: new Date().toISOString(),
            status: "active",
          }
          users.push(userForList)
          localStorage.setItem("users", JSON.stringify(users))
        }

        alert("Đăng nhập thành công! Chào mừng " + data.user.fullname)
        window.location.href = "index.html"
      } else {
        alert("Lỗi: " + data.error)
      }
    } catch (error) {
      console.error("Error:", error)
      alert("Có lỗi xảy ra. Vui lòng thử lại!")
    } finally {
      // Re-enable submit button
      submitBtn.disabled = false
      submitBtn.textContent = "Đăng Nhập"
    }
  })
})
