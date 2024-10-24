// Show Login Form
function showLogin() {
    document.getElementById("loginForm").style.display = "block";
    document.getElementById("signupForm").style.display = "none";
}

// Show Signup Form
function showSignup() {
    document.getElementById("loginForm").style.display = "none";
    document.getElementById("signupForm").style.display = "block";
}

// AJAX request for Login
document.querySelector("#loginForm form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form from submitting normally
    
    // Get form data
    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;

    // Create an AJAX request
    const xhr = new XMLHttpRequest();
    xhr.open("POST", "login.php", true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

    xhr.onload = function() {
        if (xhr.status === 200) {
            alert(xhr.responseText); // Display the response from PHP (either success or error message)
            if (xhr.responseText === "Login successful!") {
                window.location.href = "dashboard.php"; // Redirect to a new page if login is successful
            }
        } else {
            console.error("Error during login.");
        }
    };

    // Send form data to PHP
    xhr.send("email=" + encodeURIComponent(email) + "&password=" + encodeURIComponent(password));
});

// AJAX request for Signup
document.querySelector("#signupForm form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form from submitting normally

    // Get form data
    const name = document.getElementById("signupName").value;
    const email = document.getElementById("signupEmail").value;
    const password = document.getElementById("signupPassword").value;
    const confirmPassword = document.getElementById("signupConfirmPassword").value;

    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return;
    }

    // Create an AJAX request
    const xhr = new XMLHttpRequest();
    xhr.open("POST", "signup.php", true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

    xhr.onload = function() {
        if (xhr.status === 200) {
            alert(xhr.responseText); // Display the response from PHP (either success or error message)
            if (xhr.responseText === "Signup successful!") {
                window.location.href = "login.php"; // Redirect to login page after successful signup
            }
        } else {
            console.error("Error during signup.");
        }
    };

    // Send form data to PHP
    xhr.send("name=" + encodeURIComponent(name) + "&email=" + encodeURIComponent(email) + "&password=" + encodeURIComponent(password));
});

// Logout function
function logout() {
    // Clear session on the server via PHP (this would be an AJAX call to a PHP file that destroys the session)
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "logout.php", true);
    xhr.onload = function() {
        if (xhr.status === 200) {
            alert("Logged out successfully!");
            window.location.href = "index.php"; // Redirect to home page after logging out
        }
    };
    xhr.send();
}
