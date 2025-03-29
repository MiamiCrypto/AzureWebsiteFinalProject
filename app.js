// Array of image filenames stored in Azure Blob Storage
const imageFiles = [
    'Cat1.png',
    'Cat2.png',
    'Cat3.png',
    'Cat4.png',
    'Cat5.png'
];

// Base URL of your Azure Blob Storage container
const baseUrl = 'https://storageforfinalproject.blob.core.windows.net/catimages/';

let currentIndex = 0;

// Function to dynamically load and display images in the carousel
function loadCatImages() {
    const listContainer = document.querySelector('.carousel .list');

    // Clear the list before adding images
    listContainer.innerHTML = '';

    imageFiles.forEach((imageFile, index) => {
        const item = document.createElement('article');
        item.classList.add('item');
        if (index === currentIndex) item.classList.add('active');

        const imageContainer = document.createElement('div');
        imageContainer.classList.add('image');
        const img = document.createElement('img');
        img.src = `${baseUrl}${imageFile}`;
        img.alt = `Cat Image ${imageFile}`;

        imageContainer.appendChild(img);
        item.appendChild(imageContainer);
        listContainer.appendChild(item);
    });

    updateSlider();
}

// Function to handle the slider transitions
function updateSlider() {
    const items = document.querySelectorAll('.carousel .item');
    items.forEach(item => item.classList.remove('active'));

    items[currentIndex].classList.add('active');
}

// Function for next and previous button functionality
document.getElementById('next').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % imageFiles.length;
    loadCatImages();
});

document.getElementById('prev').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + imageFiles.length) % imageFiles.length;
    loadCatImages();
});

// Initialize the slider with the first image
window.onload = loadCatImages;
