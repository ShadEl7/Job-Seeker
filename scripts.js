// This file contains JavaScript for interactive elements on the website.

// Function to validate the job search form
function validateJobSearchForm() {
    const jobTitle = document.querySelector('input[name="job_title"]');
    const location = document.querySelector('input[name="location"]');
    
    if (jobTitle.value.trim() === "") {
        alert("Please enter a job title.");
        jobTitle.focus();
        return false;
    }
    
    return true;
}

// Function to validate the subscription form
function validateSubscriptionForm() {
    const email = document.querySelector('input[name="email"]');
    
    if (email.value.trim() === "") {
        alert("Please enter your email address.");
        email.focus();
        return false;
    }
    
    // Simple email format validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email.value)) {
        alert("Please enter a valid email address.");
        email.focus();
        return false;
    }
    
    return true;
}

// Event listeners for form submissions
document.addEventListener('DOMContentLoaded', () => {
    const jobSearchForm = document.querySelector('form[action="search_results.html"]');
    const subscriptionForm = document.querySelector('form[action="subscribe.php"]');

    if (jobSearchForm) {
        jobSearchForm.addEventListener('submit', (event) => {
            if (!validateJobSearchForm()) {
                event.preventDefault();
            }
        });
    }

    if (subscriptionForm) {
        subscriptionForm.addEventListener('submit', (event) => {
            if (!validateSubscriptionForm()) {
                event.preventDefault();
            }
        });
    }
});