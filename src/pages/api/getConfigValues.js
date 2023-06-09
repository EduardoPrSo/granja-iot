import { database } from '@/services/database'

export default async function handler(req, res) {
    const conn = await database()
    const { id } = req.body;
    const currentData = {data: []}

    const data = await conn.query(`SELECT * FROM User_metrics_setup WHERE user_id = ${id}`)
    const automaticData = await conn.query(`SELECT automatic FROM User WHERE id = ${id}`)

    const automatic = automaticData[0][0].automatic == 1 ? true : false
    currentData.automatic = automatic

    for (let i = 0; i < data[0].length; i++) {
        const name = data[0][i].metric_name
        const value = data[0][i].value
        const current_value = data[0][i].current_value
        const type = data[0][i].metric_id

        if (data[0][i].metric_status == 1) {
            if (type != 3){
                currentData.data.push({name: name, value: value, current_value: current_value, type: type})
            }
        }
    }

    res.status(200).json(currentData)
}
