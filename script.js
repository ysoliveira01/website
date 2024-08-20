document.querySelector('.header .menu .menu-icon').addEventListener('click', function(event) {
    event.stopPropagation();
    const dropdownContent = document.querySelector('.header .menu .dropdown-content');
    dropdownContent.classList.toggle('show');
});

window.addEventListener('click', function() {
    const dropdownContent = document.querySelector('.header .menu .dropdown-content');
    if (dropdownContent.classList.contains('show')) {
        dropdownContent.classList.remove('show');
    }
});