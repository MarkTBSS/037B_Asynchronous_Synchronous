const fs = require('fs');

// Synchronous read
try {
    const data = fs.readFileSync('largefile.txt', 'utf8');
    console.log('File content:', data);
} catch (err) {
    console.error('Error reading file:', err);
}

console.log('This message is logged after the file reading completes.');
