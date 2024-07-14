document.addEventListener('DOMContentLoaded', function() {
    // FAQ section interactivity
    var faqItems = document.querySelectorAll('.faq-item h3');
    faqItems.forEach(function(item) {
        item.addEventListener('click', function() {
            var answer = this.nextElementSibling;
            answer.style.display = answer.style.display === 'none' || answer.style.display === '' ? 'block' : 'none';
        });
    });

    // Simulated news feed and events list for demonstration
    var newsFeed = document.getElementById('news-feed');
    newsFeed.innerHTML = `
        <ul>
            <li>Latest Cyber Attack Hits Major Corporation</li>
            <li>New Vulnerability Discovered in Popular Software</li>
            <li>Top 10 Cyber Security Tips for 2024</li>
        </ul>
    `;

    var eventsList = document.getElementById('events-list');
    eventsList.innerHTML = `
        <ul>
            <li>Webinar: Protecting Your Data - July 20, 2024</li>
            <li>Workshop: Hands-On Hacking - August 5, 2024</li>
            <li>Conference: Cyber Security Trends - September 15, 2024</li>
        </ul>
    `;
});
