document.getElementById('uploadForm').onsubmit = async function (event) {
    event.preventDefault();
    const formData = new FormData();
    formData.append("file", document.getElementById('fileInput').files[0]);

    const response = await fetch('<your-azure-function-url>', {
        method: 'POST',
        body: formData,
    });

    const result = await response.json();
    alert(result.message || "Image uploaded successfully!");
}
