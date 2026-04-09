const galleryItems = document.querySelectorAll('.gallery-item img');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const lightboxClose = document.querySelector('.lightbox-close');

galleryItems.forEach(function(img) {
    img.addEventListener('click', function() {
        lightboxImg.src = img.src;
        lightbox.classList.add('active');
    });
});

lightboxClose.addEventListener('click', function() {
    lightbox.classList.remove('active');
});

lightbox.addEventListener('click', function(e) {
    if (e.target === lightbox) {
        lightbox.classList.remove('active');
    }
});