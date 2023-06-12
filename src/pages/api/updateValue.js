import { database } from '@/services/database'

export default async function handler(req, res) {
    const conn = await database()
    const {body} = req;

    await conn.query(`UPDATE User_metrics_setup SET value = '${body.value}' WHERE user_id = '1' AND metric_name = '${body.name}'`)

    res.status(200).json({id: body})
}
