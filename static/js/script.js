// tambahkan class .img-fluid ke tag img
const images = document.querySelectorAll('img');
images.forEach(function(img) {
    img.classList.add('img-fluid');
});
