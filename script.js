function toggleContent(button) {
    // Find the next sibling element that has the class 'more-content'
    const moreContent = button.previousElementSibling;

    // Toggle the 'hidden' class
    if (moreContent.classList.contains('hidden')) {
        moreContent.classList.remove('hidden');
        button.textContent = 'Read Less'; // Change button text
    } else {
        moreContent.classList.add('hidden');
        button.textContent = 'Read More'; // Change button text back
    }
}