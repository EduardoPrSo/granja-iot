import { database } from '@/services/database'

export default async function handler(req, res) {
    const conn = await database()
    const currentData = []

    const data = await conn.query('SELECT * FROM `User_metrics_setup` WHERE `user_id` = 1')

    for (let i = 0; i < data[0].length; i++) {
        const name = data[0][i].metric_name
        const current_value = data[0][i].current_value
        const type = data[0][i].metric_id

        if (data[0][i].metric_status == 0) {
            currentData.push({name: name, current_value: current_value, type: type})
        }
    }

    res.status(200).json(currentData)
}
