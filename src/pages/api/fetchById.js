import { fetchById } from '../../server/data/fetchById'

export default async function getById(req, res) {
    const {collection, id} = req.body
    const result = await fetchById(id, collection)
    res.status(200).json(result)
}