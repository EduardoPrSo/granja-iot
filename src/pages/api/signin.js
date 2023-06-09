import { database } from '@/services/database'

export default async function handler(req, res) {
    const conn = await database()
    const { body } = req;

    try {
        const data = await conn.query(`SELECT * FROM User WHERE email = '${body.email}' AND password = '${body.password}'`);

        if (data[0].length === 0) {
            res.status(401).json({data: null});
        } else {
            res.status(201).json({data: data[0][0]});
        }
    } catch (err) {
        console.error(err);
        res.status(500).send('Erro ao consultar a base de dados');
    } finally {
        await conn.end();
    }
}
