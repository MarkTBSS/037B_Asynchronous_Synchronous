const fs = require('fs').promises;

async function readFiles() {
    try {
        const [file1, file2] = await Promise.all([
            fs.readFile('largefile.txt', 'utf8'),
            fs.readFile('largefile.txt', 'utf8')
        ]);
        console.log('largefile.txt:', file1);
        console.log('largefile.txt:', file2);
    } catch (err) {
        console.error('Error reading files:', err);
    }
}

readFiles();

console.log('This message is logged before the file reading completes.');
