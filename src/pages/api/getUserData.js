import { database } from '../../services/database.js'

export default async function handler(req, res) {
    const conn = await database()
    const currentData = {}

    const userData = await conn.query('SELECT * FROM `User` WHERE `id` = 1')
    const sensorsData = await conn.query('SELECT * FROM `User_metrics_setup` WHERE `user_id` = 1 AND `metric_status` = 1')

    currentData.user = userData[0][0]
    currentData.sensors = sensorsData[0].length

    res.status(200).json(currentData)
}
