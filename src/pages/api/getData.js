import { database } from '@/services/database'

export default async function handler(req, res) {
    const conn = await database()

    const { body } = req;

    const currentData = {}

    const types = {
        'Luminosidade': 'luminosity',
        'Temperatura': 'temperature',
        'Umidade': 'humidity',
    }

    const data = await conn.query('SELECT * FROM `User_metrics_setup` WHERE `user_id` = ?', [body.id])

    currentData['id'] = body.id

    for (let i = 0; i < data[0].length; i++) {
        const name = data[0][i].metric_name
        const value = data[0][i].value

        if (data[0][i].metric_status == 1) {
            const nName = name.split(' ')
            currentData[`${types[nName[0]]}_${nName[1]}`] = value
        }
    }

    res.status(200).json(currentData)
}
