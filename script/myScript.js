// <!-- JavaScript to toggle password visibility -->
const togglePassword = document.getElementById("togglePassword");
const passwordInput = document.getElementById("passwordInput");
const toggleIcon = document.getElementById("toggleIcon");

togglePassword.addEventListener("click", () => {
  const isPassword = passwordInput.type === "password";
  passwordInput.type = isPassword ? "text" : "password";
  toggleIcon.classList.toggle("bi-eye-fill");
  toggleIcon.classList.toggle("bi-eye-slash-fill");
});
