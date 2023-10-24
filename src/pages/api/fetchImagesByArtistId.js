import { fetchImagesByArtistId } from '../../server/data/fetchImagesByArtistId'

export default async function getById(req, res) {
    try {
        const {id} = req.body
        const result = await fetchImagesByArtistId(id)
        res.status(200).json(result)
    }
    catch {
        res.status(400).end()
    }
    
}