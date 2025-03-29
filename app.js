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

// Function to dynamically load and display images from Azure Blob Storage
function loadCatImages() {
    const imagesContainer = document.getElementById('cat-images-container');
    
    imageFiles.forEach(imageFile => {
        // Construct the full URL for each image
        const imageUrl = `${baseUrl}${imageFile}`;
        console.log(`Loading image: ${imageUrl}`); // Debugging log to check the generated URL

        // Create an image element and set its source to the image URL
        const imgElement = document.createElement('img');
        imgElement.src = imageUrl; // Setting the image source
        imgElement.alt = `Cat Image ${imageFile}`; // Alt text for the image

        // Create a div to wrap each image and apply styling (you can customize the styling further)
        const imageCard = document.createElement('div');
        imageCard.classList.add('image-card');
        imageCard.appendChild(imgElement);

        // Append the image card to the container in the DOM
        imagesContainer.appendChild(imageCard);
    });
}

// Ensure the images are loaded when the page is ready
window.onload = loadCatImages;
