document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent the default form submission
    alert('Thank you for reaching out! I will get back to you soon.');
    this.reset(); // Reset the form
});
