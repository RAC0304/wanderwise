// This file contains the JavaScript code for the website, handling interactivity and dynamic content.

document.addEventListener('DOMContentLoaded', () => {
    const tourCards = document.querySelectorAll('.tour-card');

    tourCards.forEach(card => {
        card.addEventListener('click', () => {
            const tourId = card.getAttribute('data-id');
            window.location.href = `/tours/${tourId}`;
        });
    });

    const navLinks = document.querySelectorAll('nav a');

    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const targetPage = link.getAttribute('href');
            loadPage(targetPage);
        });
    });

    function loadPage(page) {
        fetch(page)
            .then(response => response.text())
            .then(html => {
                document.querySelector('#main-content').innerHTML = html;
            })
            .catch(error => console.error('Error loading page:', error));
    }
});