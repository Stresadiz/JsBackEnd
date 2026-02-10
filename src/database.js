const sqlite3 = require('sqlite3');
const { open } = require('sqlite');
const path = require('path');

const dbPath = path.join(__dirname, 'db', 'database.db');

async function connectDB() {
    try {
        const db = await open({
            filename: dbPath,
            driver: sqlite3.Database
        });

        await db.exec(`
            CREATE TABLE IF NOT EXISTS users (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                userEmail TEXT UNIQUE,
                userName TEXT,
                userPass TEXT
            )
        `);

        return db;
    } catch (error) {
        console.error("Error detallado de SQLite:", error);
        throw error;
    }
}

module.exports = { connectDB };