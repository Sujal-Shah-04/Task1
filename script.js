document.addEventListener("DOMContentLoaded", function () {
    const passwordInput = document.getElementById("password");
    const toggleBtn = document.getElementById("toggleBtn");
    const formTitle = document.getElementById("formTitle");
    const submitBtn = document.getElementById("submitBtn");
    const toggleLink = document.getElementById("toggleLink");
    let isLogin = true; // Tracks login/signup state

    // Toggle password visibility
    toggleBtn.addEventListener("click", function () {
        if (passwordInput.type === "password") {
            passwordInput.type = "text";
            toggleBtn.textContent = "🙈"; // Hide password
        } else {
            passwordInput.type = "password";
            toggleBtn.textContent = "👁️"; // Show password
        }
    });

    // Toggle between login and signup
    toggleLink.addEventListener("click", function (e) {
        e.preventDefault();
        isLogin = !isLogin;

        if (isLogin) {
            formTitle.textContent = "Login";
            submitBtn.textContent = "Login";
            toggleLink.textContent = "Sign up";
        } else {
            formTitle.textContent = "Sign Up";
            submitBtn.textContent = "Sign Up";
            toggleLink.textContent = "Login";
        }
    });
});
