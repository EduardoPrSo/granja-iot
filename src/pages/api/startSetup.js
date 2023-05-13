import { centralData } from '@/services/centralData'

export default function handler(req, res) {
    centralData.push({ id: 'John Doe'})
    console.log(centralData)
    res.status(200).json({ id: 'John Doe' })
}
