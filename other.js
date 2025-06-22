
4) Create an HTML page. Add a JavaScript function to convert local time and 
date to UTC and display the result. Add a button to your page that calls this 
function. Add JavaScript to create a timer that displays the current date and 
time after a specified amount of time delay. Use a button (or other event) to 
call the timer function.


<!DOCTYPE html>
<html>
<head>
  <title>UTC Converter and Timer</title>
</head>
<body>
  <h1>UTC Converter and Timer</h1>
  <p id="utc-time"></p>
  <button onclick="convertToUTC()">Convert to UTC</button>
  <p id="timer"></p>
  <button onclick="startTimer()">Start Timer</button>

  <script>
    // Function to convert local time and date to UTC
    function convertToUTC() {
      const date = new Date();
      const utcTime = date.toUTCString();
      document.getElementById("utc-time").innerHTML = `UTC Time: ${utcTime}`;
    }

    // Function to create a timer that displays the current date and time
    function startTimer() {
      const delay = 1000; // 5 seconds
      setInterval(() => {
        const date = new Date();
        document.getElementById("timer").innerHTML = `Current Time: ${date.toLocaleTimeString()}`;
      }, delay);
    }
  </script>
</body>
</html>

1) Create an HTML page. Add JavaScript that includes 2 prompts for integer 
values from the user. Add JavaScript to add these 2 values together and 
display the result in an alert box.


<!DOCTYPE html>
<html>
<head>
  <title>Add Two Numbers</title>
</head>
<body>
  <h1>Add Two Numbers</h1>
  <button onclick="addNumbers()">Add Numbers</button>

  <script>
    function addNumbers() {
      // Get two integer values from the user
      const num1 = parseInt(prompt("Enter the first number: "));
      const num2 = parseInt(prompt("Enter the second number: "));

      // Add the two values together
      const sum = num1 + num2;

      // Display the result in an alert box
      alert(`The sum is: ${sum}`);
    }
  </script>
</body>
</html>

13. Create a signup form with validation before submit

 <!DOCTYPE html>
<html>
<head>
  <title>Signup Form</title>
  <style>
    .error {
      color: red;
    }
  </style>
</head>
<body>
  <h1>Signup Form</h1>
  <form id="signup-form">
    <label for="username">Username:</label>
    <input type="text" id="username" name="username"><span class="error" id="username-error"></span><br><br>
    <label for="email">Email:</label>
    <input type="email" id="email" name="email"><span class="error" id="email-error"></span><br><br>
    <label for="password">Password:</label>
    <input type="password" id="password" name="password"><span class="error" id="password-error"></span><br><br>
    <label for="confirm-password">Confirm Password:</label>
    <input type="password" id="confirm-password" name="confirm-password"><span class="error" id="confirm-password-error"></span><br><br>
    <input type="submit" value="Signup">
  </form>

  <script>
    const form = document.getElementById("signup-form");
    form.addEventListener("submit", validateForm);

    function validateForm(event) {
      event.preventDefault();
      const username = document.getElementById("username").value;
      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;
      const confirmPassword = document.getElementById("confirm-password").value;

      let isValid = true;

      // Validate username
      if (username.length < 3) {
        document.getElementById("username-error").innerHTML = "Username must be at least 3 characters";
        isValid = false;
      } else {
        document.getElementById("username-error").innerHTML = "";
      }

      // Validate email
      if (!email.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)) {
        document.getElementById("email-error").innerHTML = "Invalid email address";
        isValid = false;
      } else {
        document.getElementById("email-error").innerHTML = "";
      }

      // Validate password
      if (password.length < 8) {
        document.getElementById("password-error").innerHTML = "Password must be at least 8 characters";
        isValid = false;
      } else {
        document.getElementById("password-error").innerHTML = "";
      }

      // Validate confirm password
      if (password !== confirmPassword) {
        document.getElementById("confirm-password-error").innerHTML = "Passwords do not match";
        isValid = false;
      } else {
        document.getElementById("confirm-password-error").innerHTML = "";
      }

      if (isValid) {
        // Form is valid, submit it
        form.submit();
      }
    }
  </script>
</body>
</html> 