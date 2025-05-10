const slider = document.getElementById('slider');

// Transition between signup and login
document.getElementById('toSignup').addEventListener('click', () => {
  slider.style.transform = 'translateX(-50%)';
});

document.getElementById('toLogin').addEventListener('click', () => {
  slider.style.transform = 'translateX(0%)';
});

// Demo Sign Up
document.getElementById('signupForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const pass = document.getElementById("password-signup").value;
  const confirm = document.getElementById("confirm-password").value;

  if (pass !== confirm) {
    alert("Passwords do not match!");
  } else {
    alert(`Thanks for signing up, ${name || 'Guest'}!\n(Demo mode: account not saved)`);
    this.reset();
    slider.style.transform = 'translateX(-50%)'; // switch to login after sign up
  }
});

// Demo Log In
document.getElementById('loginForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const email = document.getElementById('email-login').value;
  const password = document.getElementById('password-login').value;

  // Demo credentials
  if (email === "demo@dailygrace.com" && password === "password123") {
    alert("Welcome back! (Demo login successful)");
    this.reset();
  } else {
    alert("Invalid demo credentials.\nUse:\nEmail: demo@dailygrace.com\nPassword: password123");
  }
});
