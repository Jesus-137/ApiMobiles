const axios = require('axios');
const FormData = require('form-data');
const fs = require('fs');
const path = require('path');

// Ruta al archivo que quieres subir
const filePath = path.join(__dirname, 'testFile.txt'); // Asegúrate de tener un archivo de prueba llamado 'testFile.txt'

// Crea un nuevo FormData
const form = new FormData();
form.append('file', fs.createReadStream(filePath));

// Configura la solicitud
const url = 'http://localhost:3000/cliente/upload'; // Cambia esto si tu API está en otra dirección
const headers = form.getHeaders();

// Envía la solicitud
axios.post(url, form, { headers })
  .then(response => {
    console.log('File uploaded successfully:', response.data);
  })
  .catch(error => {
    console.error('Error uploading file:', error.response ? error.response.data : error.message);
  });
