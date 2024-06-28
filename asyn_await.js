const fs = require('fs').promises;

// Asynchronous read : asyn/await
async function readFile() {
    try {
        const data = await fs.readFile('largefile.txt', 'utf8');
        console.log('File content:', data);
    } catch (err) {
        console.error('Error reading file:', err);
    }
}

readFile();

console.log('This message is logged before the file reading completes.');
