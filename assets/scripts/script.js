document.addEventListener('DOMContentLoaded', function() {
    function setupMenuToggle() {
        const toggle = document.querySelector('.menu-toggle');
        const nav = document.querySelector('#sidemenu');

        if (toggle && nav) {
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
        } else {
            console.error('Menu toggle or navigation elements not found.');
        }
    }

    function checkElements() {
        const toggle = document.querySelector('.menu-toggle');
        const nav = document.querySelector('#sidemenu');

        if (toggle && nav) {
            setupMenuToggle();
        } else {
            // Retry after a short delay if elements are not found
            setTimeout(checkElements, 500); // Adjust the delay as needed
        }
    }

    // Start checking for elements
    checkElements();
});