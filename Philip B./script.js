document.querySelectorAll('.accordion-header').forEach((button) => {
    button.addEventListener('click', () => {
        // Toggle the open class on the clicked header
        button.classList.toggle('open');

        // Close all other open accordion items
        document.querySelectorAll('.accordion-header').forEach((otherButton) => {
            if (otherButton !== button) {
                otherButton.classList.remove('open');
                otherButton.nextElementSibling.classList.remove('open');
            }
        });

        // Toggle the open class on the associated content
        const content = button.nextElementSibling;
        content.classList.toggle('open');
    });
});