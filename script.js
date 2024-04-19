document.addEventListener("DOMContentLoaded", function () {
    // Select all links within the navbar
    const navbarLinks = document.querySelectorAll('nav#navbar a');

    // Add click event listener to each link
    navbarLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            // Check if the link is internal (starts with '#')
            if (this.getAttribute('href').startsWith('#')) {
                e.preventDefault(); // Prevent default anchor behavior
                const sectionId = this.getAttribute('href'); // Get the section ID
                const section = document.querySelector(sectionId); // Select the section

                // Scroll to the section smoothly
                section.scrollIntoView({ behavior: 'smooth' });
            }
            // External links will work normally without preventing default behavior
        });
    });
});

const form = document.getElementById('contact-form');
form.addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Thank you for your message!');
    form.reset();
});

