document.getElementById('submit-button').addEventListener('click', function (event) {
    this.disabled = true;
    this.innerHTML = 'Submitting...';
});