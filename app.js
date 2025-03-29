// Array of image filenames (you could also fetch this list from an API if dynamic)
const imageFiles = [
    'image1.jpg', 
    'image2.jpg', 
    'image3.jpg'
];

const baseUrl = 'https://raw.githubusercontent.com/yourusername/your-repo/main/cat-images/'; // GitHub raw URL

// Function to dynamically display images
function loadCatImages() {
    const imagesContainer = document.getElementById('cat-images-container');
    
    imageFiles.forEach(imageFile => {
        const imgElement = document.createElement('img');
        imgElement.src = `${baseUrl}${imageFile}`;
        imgElement.alt = `Cat Image ${imageFile}`;
        
        // Add image to a styled card
        const imageCard = document.createElement('div');
        imageCard.classList.add('image-card');
        imageCard.appendChild(imgElement);

        imagesContainer.appendChild(imageCard);
    });
}

// Call function to load images on page load
window.onload = loadCatImages;
