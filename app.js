// JavaScript to handle file upload
document.getElementById('uploadForm').onsubmit = async function(event) {
    event.preventDefault();
    
    // Grab the file input and get the file
    const file = document.getElementById('fileInput').files[0];
    const formData = new FormData();
    formData.append('file', file);

    // Azure Function URL with the function key to authenticate the request
    const functionUrl = 'https://technokittiesuploadfunction.azurewebsites.net/api/http_trigger1?code=AZURE_FUNCTION_KEY'; // Replace with the actual function key

    // Send the POST request with the file to the Azure function
    const response = await fetch(functionUrl, {
        method: 'POST',
        body: formData
    });

    const result = await response.json();
    alert(result.message || 'Image uploaded successfully!');
}

// Image carousel functions
let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.getElementsByClassName("carousel-item");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    slides[slideIndex-1].style.display = "block";  
    setTimeout(showSlides, 2000); // Change image every 2 seconds
}

function moveSlide(n) {
    showSlides(slideIndex += n);
}
