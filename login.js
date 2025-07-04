 document.getElementById('loginForm').addEventListener('submit', function(e) {
      e.preventDefault();
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;

      // Placeholder login logic
      console.log("Email:", email);
      console.log("Password:", password);
      alert("Login submitted! Check the console.");
    });