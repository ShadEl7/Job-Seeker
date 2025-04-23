document.querySelector('form').addEventListener('submit', function (e) {
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const message = document.getElementById('message');
    let valid = true;

    // Clear previous error messages
    document.getElementById('name-error').textContent = '';
    document.getElementById('email-error').textContent = '';
    document.getElementById('message-error').textContent = '';

    // Validate Name
    if (!name.value.trim()) {
        document.getElementById('name-error').textContent = 'Name is required.';
        valid = false;
    }

    // Validate Email
    if (!email.value.trim() || !email.validity.valid) {
        document.getElementById('email-error').textContent = 'Valid email is required.';
        valid = false;
    }

    // Validate Message
    if (!message.value.trim()) {
        document.getElementById('message-error').textContent = 'Message is required.';
        valid = false;
    }

    // Prevent form submission if invalid
    if (!valid) e.preventDefault();
});