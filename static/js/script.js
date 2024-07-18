document.addEventListener('DOMContentLoaded', function() {
    const toggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav ul');

    toggle.addEventListener('click', function() {
        this.classList.toggle('open');
        nav.classList.toggle('open');
    });

    // Close the menu when clicking outside of it
    document.addEventListener('click', function(event) {
        if (!nav.contains(event.target) && !toggle.contains(event.target)) {
            nav.classList.remove('open');
            toggle.classList.remove('open');
        }
    });
});
