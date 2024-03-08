const axios = require('axios');

const endpointUrl = 'https://api.example.com/data';

axios.get(endpointUrl)
    .then(response => {
        console.log('Response:', response.data);
    })
    .catch(error => {
        console.error('Error:', error);
    });