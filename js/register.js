// Register functionality với PHP backend - Updated
document.addEventListener("DOMContentLoaded", () => {
  const registerForm = document.getElementById("register-form")

  registerForm.addEventListener("submit", async (e) => {
    e.preventDefault()

    const fullname = document.getElementById("fullname").value
    const email = document.getElementById("email").value
    const phone = document.getElementById("phone").value
    const password = document.getElementById("password").value
    const confirmPassword = document.getElementById("confirm-password").value

    // Basic validation
    if (!fullname || !email || !phone || !password || !confirmPassword) {
      alert("Vui lòng điền đầy đủ thông tin!")
      return
    }

    if (password !== confirmPassword) {
      alert("Mật khẩu xác nhận không khớp!")
      return
    }

    if (password.length < 6) {
      alert("Mật khẩu phải có ít nhất 6 ký tự!")
      return
    }

    // Disable submit button
    const submitBtn = e.target.querySelector('button[type="submit"]')
    submitBtn.disabled = true
    submitBtn.textContent = "Đang xử lý..."

    try {
      // Gọi API PHP
      const response = await fetch("php/register.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullname: fullname,
          email: email,
          phone: phone,
          password: password,
        }),
      })

      const data = await response.json()

      if (data.success) {
        alert("Đăng ký thành công! Vui lòng đăng nhập.")
        window.location.href = "login.html"
      } else {
        alert("Lỗi: " + data.error)
      }
    } catch (error) {
      console.error("Error:", error)
      alert("Có lỗi xảy ra. Vui lòng thử lại!")
    } finally {
      // Re-enable submit button
      submitBtn.disabled = false
      submitBtn.textContent = "Đăng Ký"
    }
  })
})
