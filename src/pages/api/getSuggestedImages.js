import { fetchByTag } from '../../server/data/fetchByTag'

export default async function getSuggestedImages(req, res) {
    try{
        const {tag} = req.body
        const result = await fetchByTag(tag)
        res.status(200).json(result)
    }
    catch{
        res.status(400).end()
    }
}