const images = document.querySelectorAll('img');
let rotatedImage = null;

images.forEach((img, index, arr) => {
    img.addEventListener('click', () => rotateImage(img, index, arr));
});

function rotateImage(img, index, arr) {
    if (rotatedImage !== img) {
        if (rotatedImage) {
            resetRotation(rotatedImage);
        }
        
        const circle = img.parentElement;
        const currentRotation = circle.dataset.rotation ? parseInt(circle.dataset.rotation) : 0;
        const newRotation = currentRotation === 0 ? 70 : 0;

        circle.style.transform = `rotate(${newRotation}deg)`;
        img.style.transform = `rotate(${-newRotation}deg)`;

        circle.dataset.rotation = newRotation;

        rotatedImage = img;

        let message = '';
        if (index == 0) {
            message = "You clicked on outer image";
        } else if (index == 1) {
            message = "You clicked on middle image";
        } else {
            message = "You clicked on inner image";
        }
        document.getElementById("image-text").innerHTML = message;
    }
}

function resetRotation(img) {
    const circle = img.parentElement;
    circle.style.transform = 'rotate(0deg)';
    img.style.transform = 'rotate(0deg)';
    circle.dataset.rotation = 0;
}
