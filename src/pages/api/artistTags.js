import { getArtistTags } from '../../server/data/artistTags'
import { updateById } from '../../server/data/updateById'


export default async function artistTags(req, res) {
    try{
        const {id} = req.body
        const result = await getArtistTags(id)
        const updatedTags = await updateById(id, {category: result})
        res.status(200).json(updatedTags)
    }
    catch{
        res.status(400).end()
    }
    
}