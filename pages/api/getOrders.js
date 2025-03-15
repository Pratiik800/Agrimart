import pool from '../../lib/db';

export default async function handler(req, res) {
    if (req.method !== 'GET') return res.status(405).end();

    const { userId } = req.query;
    try {
        const [orders] = await pool.execute('SELECT * FROM orders WHERE user_id = ?', [userId]);
        res.json(orders);
    } catch (error) {
        res.status(500).json({ error: 'Database error' });
    }
}
