const fs = require('fs').promises;

// Asynchronous read : promise
fs.readFile('largefile.txt', 'utf8')
    .then(data => {
        console.log('File content:', data);
    })
    .catch(err => {
        console.error('Error reading file:', err);
    });

console.log('This message is logged before the file reading completes.');

