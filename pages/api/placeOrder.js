import pool from '../../lib/db';

export default async function handler(req, res) {
    if (req.method !== 'POST') return res.status(405).end();

    const { userId, productName, quantity, totalPrice } = req.body;
    try {
        await pool.execute(
            'INSERT INTO orders (user_id, product_name, quantity, total_price) VALUES (?, ?, ?, ?)',
            [userId, productName, quantity, totalPrice]
        );
        res.status(201).json({ message: 'Order placed successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Database error' });
    }
}
