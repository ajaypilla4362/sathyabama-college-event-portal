document.getElementById('login-form').addEventListener('submit', function (e) {
  e.preventDefault();
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  // For now, just log to console
  console.log('Login attempted with', { email, password });

  // Future: Add API call to backend here
});
