import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config();

if (!global.pool) {
    global.pool = mysql.createPool({
        host: 'localhost',
        user: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB_NAME,
        waitForConnections: true,
        connectionLimit: 10,
        queueLimit: 0
    });
}

const pool = global.pool;
export default pool;
