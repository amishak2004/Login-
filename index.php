<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login & Signup</title>
    <link rel="stylesheet" href="styles.css">  <!-- Link to your CSS -->
</head>
<body>
    <div class="navbar">
        <button id="loginBtn" class="button" onclick="showLogin()">Login</button>
        <button id="signupBtn" class="button" onclick="showSignup()">Signup</button>
        <!-- Logout button is now always visible -->
        <button id="logoutBtn" class="button" onclick="logout()">Logout</button>
    </div>

    <div class="form-container" id="loginForm" style="display:block;">
        <h2>Login</h2>
        <form action="login.php" method="POST">
            <label for="email">Email:</label>
            <input type="email" name="email" id="loginEmail" required>
            
            <label for="password">Password:</label>
            <input type="password" name="password" id="loginPassword" required>
            
            <button type="submit">Login</button>
        </form>
    </div>

    <div class="form-container" id="signupForm" style="display:none;">
        <h2>Signup</h2>
        <form action="signup.php" method="POST">
            <label for="name">Name:</label>
            <input type="text" name="name" id="signupName" required>
            
            <label for="email">Email:</label>
            <input type="email" name="email" id="signupEmail" required>
            
            <label for="password">Create Password:</label>
            <input type="password" name="password" id="signupPassword" required>
            
            <label for="confirmPassword">Confirm Password:</label>
            <input type="password" name="confirmPassword" id="signupConfirmPassword" required>
            
            <button type="submit">Signup</button>
        </form>
    </div>

    <script src="script.js"></script>  <!-- Link to your JavaScript file -->
</body>
</html>
