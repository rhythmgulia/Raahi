document.getElementById('registration-form').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent form from submitting immediately

    // Clear previous error messages
    const errorMessages = document.getElementById('error-messages');
    errorMessages.innerHTML = "";

    // Get form values
    const name = document.getElementById('name').value;
    const contact = document.getElementById('contact').value;
    const email = document.getElementById('email').value;
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    let errors = [];

    // Name validation
    if (name.trim() === "") {
        errors.push("Name is required.");
    }

    // Contact number validation
    if (!/^\d{10}$/.test(contact)) {
        errors.push("Contact number must be exactly 10 digits.");
    }

    // Email validation
    if (!/\S+@\S+\.\S+/.test(email)) {
        errors.push("Please enter a valid email address.");
    }

    // Password validation
    if (password.length < 6) {
        errors.push("Password must be at least 6 characters long.");
    }

    // If there are errors, display them
    if (errors.length > 0) {
        errorMessages.innerHTML = errors.join("<br>");
    } else {
        // If no errors, show a success message (or process further)
        alert("Registration successful!");
        document.getElementById('registration-form').reset();
    }
});