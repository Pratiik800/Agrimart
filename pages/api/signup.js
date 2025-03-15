import pool from '../../lib/db';
import bcrypt from 'bcryptjs';

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: "Method Not Allowed" });
    }

    console.log("📥 Received Data:", req.body); // ✅ Debugging Log

    const {
        first_name, last_name, email, phone_number, password, id_type, id_number, role,
        farm_name, farm_size, state, district, farm_address, pin_code, crops_grown,
        bank_name, account_holder_name, account_number, ifsc_code
    } = req.body;

    const name = `${first_name} ${last_name}`;

    if (!first_name || !last_name || !email || !phone_number || !password || !id_type || !id_number || !role) {
        return res.status(400).json({ error: "Missing required fields" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    try {
        console.log("🔄 Trying to Insert User..."); // ✅ Debugging Log

        const [result] = await pool.execute(
            `INSERT INTO users
            (first_name, last_name, name, email, phone_number, password, id_type, id_number, role,
            farm_name, farm_size, state, district, farm_address, pin_code, crops_grown,
            bank_name, account_holder_name, account_number, ifsc_code)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
            [first_name, last_name, name, email, phone_number, hashedPassword, id_type, id_number, role,
            farm_name, farm_size, state, district, farm_address, pin_code, crops_grown,
            bank_name, account_holder_name, account_number, ifsc_code]
        );

        console.log("✅ User Inserted:", result); // ✅ Debugging Log
        res.status(201).json({ message: 'User registered successfully!' });

    } catch (error) {
        console.error("❌ Database Error:", error); // ✅ Debugging Log
        res.status(500).json({ error: 'Database error', details: error.message });
    }
}
