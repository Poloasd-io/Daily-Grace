const slider = document.getElementById('slider');

document.getElementById('toLogin').addEventListener('click', () => {
  slider.style.transform = 'translateX(-50%)';
});

document.getElementById('toSignup').addEventListener('click', () => {
  slider.style.transform = 'translateX(0%)';
});

// Optional form handlers
document.getElementById('signupForm').addEventListener('submit', function (e) {
  e.preventDefault();
  const pass = document.getElementById("password-signup").value;
  const confirm = document.getElementById("confirm-password").value;
  if (pass !== confirm) {
  alert("Passwords do not match!");
  } else {
  alert("Signed up successfully!");
  }
});

document.getElementById('loginForm').addEventListener('submit', function (e) {
  e.preventDefault();
  alert("Logged in successfully!");
});
