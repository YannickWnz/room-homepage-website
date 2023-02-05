
let index = 1;

function switchSlide(n) {
    displaySlides(index += n);
}

function displaySlides(n) {

    let i;
    let images = document.querySelectorAll('.container-one-images div');
    let content = document.querySelectorAll('.text-contents');
    if(n > images.length) index = 1;

    if(n < 1) index = images.length;

    for(i = 0; i < images.length; i++){
        images[i].style.display = 'none';
        content[i].style.display = 'none';
    }

    images[index-1].style.display = 'block';
    content[index-1].style.display = 'block';

}

displaySlides(index)
