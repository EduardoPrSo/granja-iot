import { database } from '@/services/database'

export default async function handler(req, res) {
    const conn = await database()
    const {automatic} = req.body
    
    const automaticStatus = automatic ? 1 : 0

    await conn.query(`UPDATE User SET automatic = '${automaticStatus}' WHERE id = 1`)

    res.status(200).json({message: "ok"})
}
