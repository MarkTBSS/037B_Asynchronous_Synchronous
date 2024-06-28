const { Client } = require('pg');
const client = new Client({ connectionString: 'your_connection_string' });

async function queryDatabase() {
    await client.connect();
    try {
        const res = await client.query('SELECT * FROM your_table');
        console.log('Database rows:', res.rows);
    } catch (err) {
        console.error('Database query error:', err);
    } finally {
        await client.end();
    }
}

queryDatabase();

console.log('This message is logged before the database query completes.');
