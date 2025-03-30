let next = document.getElementById('next');
let prev = document.getElementById('prev');
let carousel = document.querySelector('.carousel');
let items = document.querySelectorAll('.carousel .item');
let countItem = items.length;
let active = 1;
let other_1 = null;
let other_2 = null;
next.onclick = () => {
    carousel.classList.remove('prev');
    carousel.classList.add('next');
    active =active + 1 >= countItem ? 0 : active + 1;
    other_1 =active - 1 < 0 ? countItem -1 : active - 1;
    other_2 = active + 1 >= countItem ? 0 : active + 1;
    changeSlider();
}
prev.onclick = () => {
    carousel.classList.remove('next');
    carousel.classList.add('prev');
    active = active - 1 < 0 ? countItem - 1 : active - 1;
    other_1 = active + 1 >= countItem ? 0 : active + 1;
    other_2 = other_1 + 1 >= countItem ? 0 : other_1 + 1;
    changeSlider();
}
const changeSlider = () => {
    let itemOldActive = document.querySelector('.carousel .item.active');
    if(itemOldActive) itemOldActive.classList.remove('active');

    let itemOldOther_1 = document.querySelector('.carousel .item.other_1');
    if(itemOldOther_1) itemOldOther_1.classList.remove('other_1');

    let itemOldOther_2 = document.querySelector('.carousel .item.other_2');
    if(itemOldOther_2) itemOldOther_2.classList.remove('other_2');

    items.forEach(e => {
        e.querySelector('.image img').style.animation = 'none';
        e.querySelector('.image figcaption').style.animation = 'none';
        void e.offsetWidth;
        e.querySelector('.image img').style.animation = '';
        e.querySelector('.image figcaption').style.animation = '';
    })

    items[active].classList.add('active');
    items[other_1].classList.add('other_1');
    items[other_2].classList.add('other_2');

    clearInterval(autoPlay);
    autoPlay = setInterval(() => {
        next.click();
    }, 5000);
}
let autoPlay = setInterval(() => {
    next.click();
}, 5000);






// // Array of image filenames stored in Azure Blob Storage
// const imageFiles = [
//     'Cat1.png',
//     'Cat2.png',
//     'Cat3.png',
//     'Cat4.png',
//     'Cat5.png'
// ];

// // Base URL of your Azure Blob Storage container
// const baseUrl = 'https://storageforfinalproject.blob.core.windows.net/catimages/';

// let currentIndex = 0;

// // Function to dynamically load and display images in the carousel
// function loadCatImages() {
//     const listContainer = document.querySelector('.carousel .list');

//     // Clear the list before adding images
//     listContainer.innerHTML = '';

//     imageFiles.forEach((imageFile, index) => {
//         const item = document.createElement('article');
//         item.classList.add('item');
//         if (index === currentIndex) item.classList.add('active');

//         const imageContainer = document.createElement('div');
//         imageContainer.classList.add('image');
//         const img = document.createElement('img');
//         img.src = `${baseUrl}${imageFile}`;
//         img.alt = `Cat Image ${imageFile}`;

//         imageContainer.appendChild(img);
//         item.appendChild(imageContainer);
//         listContainer.appendChild(item);
//     });

//     updateSlider();
// }

// // Function to handle the slider transitions
// function updateSlider() {
//     const items = document.querySelectorAll('.carousel .item');
//     items.forEach(item => item.classList.remove('active'));

//     items[currentIndex].classList.add('active');
// }

// // Function for next and previous button functionality
// document.getElementById('next').addEventListener('click', () => {
//     currentIndex = (currentIndex + 1) % imageFiles.length;
//     loadCatImages();
// });

// document.getElementById('prev').addEventListener('click', () => {
//     currentIndex = (currentIndex - 1 + imageFiles.length) % imageFiles.length;
//     loadCatImages();
// });

// // Initialize the image slider with the first image
// window.onload = loadCatImages;
