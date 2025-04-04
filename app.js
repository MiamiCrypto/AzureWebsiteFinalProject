// For JavaScript (Node.js), you can access the secret using process.env
const functionKey = process.env.AZURE_FUNCTION_KEY;

fetch('https://technokittiesuploadfunction.azurewebsites.net/api/http_trigger1?code=' + functionKey, {
  method: 'POST',
  body: JSON.stringify({
    name: 'John Doe',
    image: 'your-image'
  }),
  headers: {
    'Content-Type': 'application/json',
  },
})
  .then(response => response.json())
  .then(data => console.log(data))
  .catch((error) => console.error('Error:', error));
