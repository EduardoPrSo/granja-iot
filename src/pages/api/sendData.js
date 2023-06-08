import { database } from '@/services/database'

export default async function handler(req, res) {
    const conn = await database()

    const { body } = req;

    const types = {
        'Luminosidade': 'luminosity',
        'Temperatura': 'temperature',
        'Umidade': 'humidity',
    }

    // const data = await conn.query('SELECT * FROM `User_metrics_setup` WHERE `user_id` = ?', [body.id])
    console.log(body)
    res.status(200).json(body)
}
