import { database } from '@/services/database'

export default async function handler(req, res) {
    const conn = await database()
    const { automatic } = req.body

    const sensors = [
        { name: "temperature_1", index: 1, identificator: "Temperatura 1" },
        { name: "luminosity_1", index: 2, identificator: "Luminosidade 1" },
        { name: "humidity_1", index: 3, identificator: "Umidade 1" },
        { name: "temperature_2", index: 4, identificator: "Temperatura 2" },
        { name: "luminosity_2", index: 5, identificator: "Luminosidade 2" },
        { name: "humidity_2", index: 6, identificator: "Umidade 2" }
    ];
  
    const automaticStatus = automatic ? 1 : 0
  
    for (const item of sensors) {
        const data = await conn.query(`SELECT value FROM User_metrics_data WHERE user_id = 1 AND setup_id = ${item.index} LIMIT 10`);

        if (data[0].length == 0) {
            return res.status(200).json({ message: "nok" });
        } else {
            await conn.query(`UPDATE User SET automatic = '${automaticStatus}' WHERE id = 1`);
            return res.status(200).json({ message: "ok" });
        }
    }
}