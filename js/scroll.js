window.addEventListener('scroll', function() {
    var topBarWhite = document.querySelector('.top-bar-white');
    var topBarGray = document.querySelector('.top-bar-gray');

    if (window.scrollY > 0) {
        topBarWhite.style.display = 'none';
        topBarGray.style.display = 'inline-flex';
    } else {
        topBarWhite.style.display = 'inline-flex';
        topBarGray.style.display = 'none';
    }
});