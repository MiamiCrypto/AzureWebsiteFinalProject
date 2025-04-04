// Ensure the secret key is retrieved properly (do not expose it in the frontend, use environment variables for production)

document.getElementById('uploadForm').onsubmit = async function (event) {
  event.preventDefault();
  
  // Create a FormData object to send the file
  const formData = new FormData();
  formData.append("file", document.getElementById('fileInput').files[0]);

  // Replace with your Azure Function URL
  const functionKey = process.env.AZURE_FUNCTION_KEY; // Assuming the secret is set up in the environment
  const url = 'https://technokittiesuploadfunction.azurewebsites.net/api/http_trigger1?code=' + functionKey;

  try {
    const response = await fetch(url, {
      method: 'POST',
      body: formData,
    });

    const result = await response.json();
    alert(result.message || "Image uploaded successfully!");
  } catch (error) {
    console.error('Error:', error);
    alert("There was an error uploading the image.");
  }
};

