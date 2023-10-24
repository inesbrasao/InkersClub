import { fetchById } from '../../server/data/fetchById'

export default async function getById(req, res) {
    try{
        const {collection, id} = req.body
        const result = await fetchById(id, collection)
        res.status(200).json(result)
    }
    catch {
        res.status(400).end()
    }
    
}