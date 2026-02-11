// Login functionality
document.addEventListener('DOMContentLoaded', () => {
  const loginForm = document.getElementById('login-form');
  if (!loginForm) return;

  loginForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');
    const submitBtn = loginForm.querySelector('button[type="submit"]');
    const btnText = submitBtn.querySelector('.btn-text');
    const spinner = submitBtn.querySelector('.spinner');

    // Clear previous error
    errorMessage.textContent = '';

    // Show loading state
    submitBtn.disabled = true;
    btnText.textContent = 'Signing in...';
    spinner.style.display = 'inline-block';

    try {
      const result = await api.login(email, password);

      // Store token
      localStorage.setItem('adminToken', result.data.token);

      // Redirect to dashboard
      window.location.href = 'dashboard.html';

    } catch (error) {
      console.error('Login error:', error);
      errorMessage.textContent = error.message || 'Invalid credentials. Please try again.';
      errorMessage.style.display = 'block';
    } finally {
      submitBtn.disabled = false;
      btnText.textContent = 'Sign In';
      spinner.style.display = 'none';
    }
  });
});
