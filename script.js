document.addEventListener('DOMContentLoaded', function () {
    // ADV. CAROUSEL
    const carouselImages = document.querySelector('.carousel-images');
    let index = 0;
    setInterval(function () {
        if (index >= carouselImages.children.length - 1) index = 0;
        else index++;
        carouselImages.style.transform = `translateX(${-index * 100}%)`;
    }, 3000);

    // FORM DISPLAY TOGGLE
    const labTestLink = document.getElementById('lab-test-link');
    const formContainer = document.querySelector('.form-container');
    labTestLink.addEventListener('click', function (e) {
        e.preventDefault();
        formContainer.style.display = 'flex';
        window.scrollTo({
            top: formContainer.offsetTop,
            behavior: 'smooth'
        });
    });

    // FORM CLOSE BUTTON
    const toggleFormVisibilityButton = document.querySelector('.button-close-form');
    toggleFormVisibilityButton.addEventListener('click', function () {
        formContainer.style.display = (formContainer.style.display === 'none' || formContainer.style.display === '') ? 'block' : 'none';
    });
});
