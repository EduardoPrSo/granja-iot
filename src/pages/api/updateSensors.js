import { database } from '@/services/database'

export default async function handler(req, res) {
    const conn = await database()
    const {name, status} = req.body;

    await conn.query(`UPDATE User_metrics_setup SET metric_status = '${status}' WHERE metric_name = '${name}' AND user_id = 1`)

    res.status(200).json({message: "ok"})
}
