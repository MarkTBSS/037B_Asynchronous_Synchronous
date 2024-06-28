const https = require('https');

// Asynchronous HTTP request
https.get('https://api.example.com/data', (res) => {
    let data = '';

    res.on('data', (chunk) => {
        data += chunk;
    });

    res.on('end', () => {
        console.log('Response data:', data);
    });
}).on('error', (err) => {
    console.error('Error making request:', err);
});

console.log('This message is logged before the HTTP request completes.');
