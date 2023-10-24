import { getTags } from '../../server/data/tagCount'

export default async function getPopularTags(req, res) {
    try{
        const {collection} = req.body
        const result = await getTags(collection)
        res.status(200).json(result)
    }
    catch{
        res.status(400).end()
    }
}