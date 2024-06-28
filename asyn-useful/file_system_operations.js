const fs = require('fs');

// Asynchronous read
fs.readFile('largefile.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading file:', err);
        return;
    }
    console.log('File content:', data);
});

console.log('This message is logged before the file reading completes.');
