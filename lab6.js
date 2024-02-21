const form = document.getElementById('passwordForm');
const message = document.getElementById('message');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  const password = form.password.value;
  const confirmPassword = form.confirmPassword.value;

  if (password !== confirmPassword) {
    showMessage('error', 'Las contraseñas no coinciden.');
  } else {
    showMessage('success', 'Las contraseñas coinciden.');
  }
});

function showMessage(type, text) {
  message.className = 'message ' + type;
  message.textContent = text;
}
