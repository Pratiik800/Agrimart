import pool from '../../lib/db';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export default async function handler(req, res) {
    if (req.method !== 'POST') return res.status(405).end();

    const { email, password } = req.body;
    try {
        const [users] = await pool.execute('SELECT * FROM users WHERE email = ?', [email]);
        if (users.length === 0) return res.status(401).json({ error: 'User not found' });

        const user = users[0];
        const isValid = await bcrypt.compare(password, user.password);
        if (!isValid) return res.status(401).json({ error: 'Invalid password' });

        const token = jwt.sign({ userId: user.id, name: user.first_name, role: user.role, profile_image: user.profile_image }, process.env.JWT_SECRET, { expiresIn: '1h' });

        res.json({ token, name: user.first_name, role: user.role, profile_image: user.profile_image, message: `Mr. ${user.first_name}, Welcome!` });
    } catch (error) {
        res.status(500).json({ error: 'Database error' });
    }
}
